import os
import json

# Define materials and their corresponding item and block names
materials = {
    "Copper": {
        "block": "#forge:ingots/copper",
        "item": "sgjourney:copper_iris"
    },
    "Iron": {
        "block": "#forge:ingots/iron",
        "item": "sgjourney:iron_iris"
    },
    "Gold": {
        "block": "#forge:ingots/gold",
        "item": "sgjourney:gold_iris"
    },
    "Diamond": {
        "block": "minecraft:diamond",
        "item": "sgjourney:diamond_iris"
    },
    "Netherite": {
        "block": "#forge:ingots/netherite",
        "item": "sgjourney:netherite_iris"
    },
    "Naquadah Alloy": {
        "block": "#forge:nuggets/naquadah_alloy",
        "item": "sgjourney:naquadah_alloy_iris"
    },
    "Bronze": {
        "block": "#forge:ingots/bronze",
        "item": "sgjourney:bronze_iris"
    },
    "Steel": {
        "block": "#forge:ingots/steel",
        "item": "sgjourney:steel_iris"
    }
}

# Function to generate the texture file path based on the material name
def generate_texture(material_name):
    # Convert the material name to lowercase and replace spaces with underscores
    return f"sgjourney:textures/entity/stargate/iris/{material_name.lower().replace(' ', '_')}_iris.png"

# Create directory to store the recipe files
output_dir = "generated_recipes"
os.makedirs(output_dir, exist_ok=True)

# Generate all combinations of recipes (except same material -> same material)
for base_material, base_data in materials.items():
    for addition_material, addition_data in materials.items():
        if base_material == addition_material:
            continue  # Skip same material to same material transformations

        # Generate the texture file name automatically
        texture_file = generate_texture(addition_material)

        # Check whether "block" uses a tag or an item
        if addition_data["block"].startswith("#"):
            addition_field = {"tag": addition_data["block"][1:]}  # Remove the # and use "tag"
        else:
            addition_field = {"item": addition_data["block"]}

        # Create the recipe structure
        recipe = {
            "type": "minecraft:smithing_transform",
            "template": {
                "item": "minecraft:paper"
            },
            "addition": addition_field,
            "base": {
                "item": base_data["item"]
            },
            "result": {
                "item": base_data["item"],
                "nbt": {
                    "texture": texture_file,
                    "display": {
                        "Name": f'{{"text":"{addition_material} Clad {base_material} Iris","italic":false}}'
                    }
                }
            }
        }

        # Define the filename for the recipe
        filename = f"{addition_material.lower().replace(' ', '_')}_clad_{base_material.lower().replace(' ', '_')}_iris.json"

        # Write the recipe to a file
        with open(os.path.join(output_dir, filename), 'w') as file:
            json.dump(recipe, file, indent=4)

print(f"Recipe files have been generated in the {output_dir} directory.")
