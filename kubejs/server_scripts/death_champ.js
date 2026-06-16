const DEATH_TITLE_TEAM = 'kjs_most_deaths'
const DEATH_TITLE_PREFIX = '{"text":"[Death Champion] ","color":"dark_red","bold":true}'
const DEATH_DATA_FILE = 'kubejs/data/death_title_data.json'
function getDefaultDeathData() {
    return {
        players: {},
        currentLeader: ''
    }
}
function loadDeathData(server) {
    let data = JsonIO.read(DEATH_DATA_FILE)
    if (!data || typeof data !== 'object') {
        data = getDefaultDeathData()
    }
    if (!data.players || typeof data.players !== 'object') {
        data.players = {}
    }
    if (typeof data.currentLeader !== 'string') {
        data.currentLeader = ''
    }
    return data
}
function saveDeathData(data) {
    JsonIO.write(DEATH_DATA_FILE, data)
}
function getSafeDeathCount(value) {
    const numberValue = Number(value)
    if (isNaN(numberValue)) {
        return 0
    }
    return Math.floor(numberValue)
}
function setupDeathTitleTeam(server) {
    server.runCommandSilent(`team add ${DEATH_TITLE_TEAM}`)
    server.runCommandSilent(`team modify ${DEATH_TITLE_TEAM} prefix ${DEATH_TITLE_PREFIX}`)
}
function updateDeathLeader(server, announce) {
    const data = loadDeathData(server)
    const players = data.players
    let bestUuid = ''
    let bestName = ''
    let bestDeaths = 0
    for (const uuid in players) {
        const entry = players[uuid]
        const deaths = getSafeDeathCount(entry.deaths)
        entry.deaths = deaths
        if (deaths > bestDeaths) {
            bestUuid = uuid
            bestName = String(entry.name)
            bestDeaths = deaths
        }
    }
    if (bestName === '' || bestDeaths <= 0) {
        saveDeathData(data)
        return
    }
    const leaderChanged = data.currentLeader !== bestUuid
    setupDeathTitleTeam(server)
    server.runCommandSilent(`team empty ${DEATH_TITLE_TEAM}`)
    server.runCommandSilent(`team join ${DEATH_TITLE_TEAM} ${bestName}`)
    data.currentLeader = bestUuid
    saveDeathData(data)
    if (announce && leaderChanged) {
        server.tell([
            { text: '[Death Title] ', color: 'dark_red' },
            { text: bestName, color: 'red' },
            { text: ` now has the most deaths: ${bestDeaths}`, color: 'gray' }
        ])
    }
}
ServerEvents.loaded(event => {
    const server = event.server
    setupDeathTitleTeam(server)
    server.scheduleInTicks(20, () => {
        updateDeathLeader(server, false)
    })
})
PlayerEvents.loggedIn(event => {
    const player = event.player
    const server = event.server
    const data = loadDeathData(server)
    const uuid = String(player.uuid)
    const name = String(player.username)
    if (!data.players[uuid]) {
        data.players[uuid] = {
            name: name,
            deaths: 0
        }
    } else {
        data.players[uuid].name = name
        data.players[uuid].deaths = getSafeDeathCount(data.players[uuid].deaths)
    }
    saveDeathData(data)
    setupDeathTitleTeam(server)
    server.scheduleInTicks(20, () => {
        updateDeathLeader(server, false)
    })
})
EntityEvents.death('minecraft:player', event => {
    const player = event.entity
    const server = event.server
    const data = loadDeathData(server)
    const uuid = String(player.uuid)
    const name = String(player.username)
    if (!data.players[uuid]) {
        data.players[uuid] = {
            name: name,
            deaths: 0
        }
    }
    data.players[uuid].name = name
    data.players[uuid].deaths = getSafeDeathCount(data.players[uuid].deaths) + 1
    const newDeaths = data.players[uuid].deaths
    saveDeathData(data)
    server.tell([
        { text: '[Death Title Debug] ', color: 'yellow' },
        { text: `${name} deaths: ${newDeaths}`, color: 'gray' }
    ])
    server.scheduleInTicks(20, () => {
        updateDeathLeader(server, true)
    })
})