// priority: 8
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A Multistep Crafting Process.
 */
let MultistepProcess = /*#__PURE__*/function () {
  "use strict";

  function MultistepProcess() {
    _classCallCheck(this, MultistepProcess);
    this.recipes = [];
  }
  /**
   * Sets the intermediate item for the process
   * @param item A valid identifier or object with getIdentifier method
   * @returns {this}
   */
  _createClass(MultistepProcess, [{
    key: "usingItem",
    value: function usingItem(item) {
      if (typeof item == "string") {
        this.intermediateItem = item;
      } else if (Object.keys(item).includes("getIdentifier")) {
        this.intermediateItem = item.getIdentifier();
      }
      return this;
    }
    /**
     * Add a step to the process
     * @param {MultistepProcessStep} step 
     * @returns {this}
     */
  }, {
    key: "addStep",
    value: function addStep(step) {
      this.recipes.push(step);
      return this;
    }
    /**
     * Register the multistep process and all its sub recipes
     * @param {ServerRecipeEvent} event 
     * @returns {this}
     */
  }, {
    key: "register",
    value: function register(event) {
      if (!this.intermediateItem) {
        throw new Error("Missing Intermediate Item. Did you forget to call .usingItem()?");
      }
      let lastLore;
      for (let index = this.recipes.length - 1; index >= 0; index--) {
        let recipe = this.recipes[index];
        recipe.register(event, this.intermediateItem, index == 0 ? null : index + 1, index == this.recipes.length - 1 ? null : index + 2, lastLore);
        lastLore = recipe.getLore(index + 1);
      }
    }
  }], [{
    key: "formatDisplay",
    value: function formatDisplay(step, lore) {
      return {
        Lore: [`"Step ${step}: ${lore}"`]
      };
    }
  }]);
  return MultistepProcess;
}();
/**
 * A constant representing any intermediate item.
 */
_defineProperty(MultistepProcess, "INTERMEDIATE_ITEM", Symbol.for("Intermediate Item Representation"));
let MultistepProcessStep = /*#__PURE__*/function () {
  "use strict";

  function MultistepProcessStep(title) {
    _classCallCheck(this, MultistepProcessStep);
    this.title = title;
  }
  _createClass(MultistepProcessStep, [{
    key: "getLore",
    value: function getLore(step) {
      return MultistepProcess.formatDisplay(step, this.title);
    }
    // stepin and stepin lore are null if the process is the first in the chain
  }, {
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) { }
  }]);
  return MultistepProcessStep;
}();
let MekanismInjectingStep = /*#__PURE__*/function (_MultistepProcessStep) {
  "use strict";

  _inherits(MekanismInjectingStep, _MultistepProcessStep);
  var _super = _createSuper(MekanismInjectingStep);
  function MekanismInjectingStep(title, inputChemical) {
    var _this;
    let inputItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MultistepProcess.INTERMEDIATE_ITEM;
    let outputItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : MultistepProcess.INTERMEDIATE_ITEM;
    _classCallCheck(this, MekanismInjectingStep);
    _this = _super.call(this, title);
    _this.inputChemical = inputChemical;
    _this.inputItem = inputItem;
    _this.outputItem = outputItem;
    return _this;
  }
  _createClass(MekanismInjectingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input;
      let output;
      if (this.inputItem == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepIn) {
          throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
        }
        input = {
          "ingredient": {
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          }
        };
      } else {
        input = parseMekanismIngredient(this.inputItem);
      }
      if (this.outputItem == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepOut) {
          throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
        }
        output = {
          type: "forge:nbt",
          item: intermediate,
          nbt: JSON.stringify({
            display: stepOutLore,
            step: stepOut
          })
        };
      } else {
        output = parseMekanismIngredient(this.outputItem).ingredient;
      }
      event.custom({
        type: "mekanism:injecting",
        chemicalInput: this.inputChemical,
        itemInput: input,
        output: output
      });
    }
  }]);
  return MekanismInjectingStep;
}(MultistepProcessStep);
let MekanismCombiningStep = /*#__PURE__*/function (_MultistepProcessStep2) {
  "use strict";

  _inherits(MekanismCombiningStep, _MultistepProcessStep2);
  var _super2 = _createSuper(MekanismCombiningStep);
  function MekanismCombiningStep(title, _ref) {
    var _this2;
    let _ref$inputItem = _ref.inputItem,
      inputItem = _ref$inputItem === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref$inputItem,
      _ref$extraItem = _ref.extraItem,
      extraItem = _ref$extraItem === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref$extraItem,
      _ref$outputItem = _ref.outputItem,
      outputItem = _ref$outputItem === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref$outputItem;
    _classCallCheck(this, MekanismCombiningStep);
    _this2 = _super2.call(this, title);
    _this2.inputItem = inputItem;
    _this2.specialItem = extraItem;
    _this2.outputItem = outputItem;
    return _this2;
  }
  _createClass(MekanismCombiningStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input;
      let special;
      let output;
      if (this.inputItem == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepIn) {
          throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
        }
        input = {
          "ingredient": {
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          }
        };
      } else {
        input = parseMekanismIngredient(this.inputItem);
      }
      if (this.specialItem == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepIn) {
          throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
        }
        special = {
          "ingredient": {
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          }
        };
      } else {
        special = parseMekanismIngredient(this.specialItem);
      }
      if (this.outputItem == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepOut) {
          throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
        }
        output = {
          type: "forge:nbt",
          item: intermediate,
          nbt: JSON.stringify({
            display: stepOutLore,
            step: stepOut
          })
        };
      } else {
        output = parseMekanismIngredient(this.outputItem).ingredient;
      }
      event.custom({
        type: "mekanism:combining",
        extraInput: special,
        mainInput: input,
        output: output
      });
    }
  }]);
  return MekanismCombiningStep;
}(MultistepProcessStep);
let MinecraftSmokingStep = /*#__PURE__*/function (_MultistepProcessStep3) {
  "use strict";

  _inherits(MinecraftSmokingStep, _MultistepProcessStep3);
  var _super3 = _createSuper(MinecraftSmokingStep);
  function MinecraftSmokingStep(title, _ref2) {
    var _this3;
    let _ref2$input = _ref2.input,
      input = _ref2$input === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref2$input,
      _ref2$output = _ref2.output,
      output = _ref2$output === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref2$output,
      _ref2$cookingTime = _ref2.cookingTime,
      cookingTime = _ref2$cookingTime === void 0 ? 100 : _ref2$cookingTime,
      _ref2$experience = _ref2.experience,
      experience = _ref2$experience === void 0 ? 0.5 : _ref2$experience;
    _classCallCheck(this, MinecraftSmokingStep);
    _this3 = _super3.call(this, title);
    _this3.input = input;
    _this3.output = output;
    _this3.cookingTime = cookingTime;
    _this3.experience = experience;
    return _this3;
  }
  _createClass(MinecraftSmokingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input;
      let output;
      if (this.input == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepIn) {
          throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
        }
        input = {
          type: "forge:nbt",
          item: intermediate,
          nbt: JSON.stringify({
            display: this.getLore(stepIn),
            step: stepIn
          })
        };
      } else {
        input = parseStack(this.input);
      }
      if (this.output == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepOut) {
          throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
        }
        output = {
          item: intermediate,
          nbt: JSON.stringify({
            display: stepOutLore,
            step: stepOut
          })
        };
      } else {
        output = parseStack(this.output);
      }
      let recipe = {
        type: "minecraft:smoking",
        category: "food",
        cookingtime: this.cookingTime,
        experience: this.experience,
        ingredient: input,
        result: output
      };
      event.custom(recipe);
    }
  }]);
  return MinecraftSmokingStep;
}(MultistepProcessStep);
let CreateDeployingStep = /*#__PURE__*/function (_MultistepProcessStep4) {
  "use strict";

  _inherits(CreateDeployingStep, _MultistepProcessStep4);
  var _super4 = _createSuper(CreateDeployingStep);
  function CreateDeployingStep(title, _ref3) {
    var _this4;
    let _ref3$input = _ref3.input,
      input = _ref3$input === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref3$input,
      _ref3$output = _ref3.output,
      output = _ref3$output === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref3$output;
    _classCallCheck(this, CreateDeployingStep);
    _this4 = _super4.call(this, title);
    _this4.input = input;
    _this4.output = output;
    return _this4;
  }
  _createClass(CreateDeployingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input = [];
      let output = [];
      for (let item of this.input) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          input.push({
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          });
        } else {
          input.push(parseStack(item));
        }
      }
      for (let item of this.output) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepOut) {
            throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
          }
          output.push({
            item: intermediate,
            nbt: JSON.stringify({
              display: stepOutLore,
              step: stepOut
            })
          });
        } else {
          output.push(parseStack(item));
        }
      }
      let recipe = {
        type: "create:deploying",
        ingredients: input,
        results: output
      };
      event.custom(recipe);
    }
  }]);
  return CreateDeployingStep;
}(MultistepProcessStep);
let CreateMixingStep = /*#__PURE__*/function (_MultistepProcessStep5) {
  "use strict";

  _inherits(CreateMixingStep, _MultistepProcessStep5);
  var _super5 = _createSuper(CreateMixingStep);
  function CreateMixingStep(title, _ref4) {
    var _this5;
    let _ref4$input = _ref4.input,
      input = _ref4$input === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref4$input,
      _ref4$output = _ref4.output,
      output = _ref4$output === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref4$output;
    _classCallCheck(this, CreateMixingStep);
    _this5 = _super5.call(this, title);
    _this5.input = input;
    _this5.output = output;
    _this5.heatRequirement = 0;
    return _this5;
  }
  _createClass(CreateMixingStep, [{
    key: "heated",
    value: function heated() {
      this.heated = 1;
      return this;
    }
  }, {
    key: "superheated",
    value: function superheated() {
      this.heated = 2;
      return this;
    }
  }, {
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input = [];
      let output = [];
      for (let item of this.input) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          input.push({
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          });
        } else {
          input.push(parseStack(item));
        }
      }
      for (let item of this.output) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepOut) {
            throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
          }
          output.push({
            item: intermediate,
            nbt: JSON.stringify({
              display: stepOutLore,
              step: stepOut
            })
          });
        } else {
          output.push(parseStack(item));
        }
      }
      let recipe = {
        type: "create:mixing",
        ingredients: input,
        results: output
      };
      switch (this.heatRequirement) {
        case 1:
          recipe.heatRequirement = "heated";
          break;
        case 2:
          recipe.heatRequirement = "superheated";
          break;
        default:
          break;
      }
      event.custom(recipe);
    }
  }]);
  return CreateMixingStep;
}(MultistepProcessStep);
let CreateFillingStep = /*#__PURE__*/function (_MultistepProcessStep6) {
  "use strict";

  _inherits(CreateFillingStep, _MultistepProcessStep6);
  var _super6 = _createSuper(CreateFillingStep);
  function CreateFillingStep(title, _ref5) {
    var _this6;
    let _ref5$input = _ref5.input,
      input = _ref5$input === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref5$input,
      _ref5$output = _ref5.output,
      output = _ref5$output === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref5$output;
    _classCallCheck(this, CreateFillingStep);
    _this6 = _super6.call(this, title);
    _this6.input = input;
    _this6.output = output;
    return _this6;
  }
  _createClass(CreateFillingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input = [];
      let output = [];
      for (let item of this.input) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          input.push({
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          });
        } else {
          input.push(parseStack(item));
        }
      }
      for (let item of this.output) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepOut) {
            throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
          }
          output.push({
            item: intermediate,
            nbt: JSON.stringify({
              display: stepOutLore,
              step: stepOut
            })
          });
        } else {
          output.push(parseStack(item));
        }
      }
      let recipe = {
        type: "create:filling",
        ingredients: input,
        results: output
      };
      event.custom(recipe);
    }
  }]);
  return CreateFillingStep;
}(MultistepProcessStep);
let CreateSplashingStep = /*#__PURE__*/function (_MultistepProcessStep7) {
  "use strict";

  _inherits(CreateSplashingStep, _MultistepProcessStep7);
  var _super7 = _createSuper(CreateSplashingStep);
  function CreateSplashingStep(title, _ref6) {
    var _this7;
    let _ref6$input = _ref6.input,
      input = _ref6$input === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref6$input,
      _ref6$output = _ref6.output,
      output = _ref6$output === void 0 ? [MultistepProcess.INTERMEDIATE_ITEM] : _ref6$output;
    _classCallCheck(this, CreateSplashingStep);
    _this7 = _super7.call(this, title);
    _this7.input = input;
    _this7.output = output;
    return _this7;
  }
  _createClass(CreateSplashingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let input = [];
      let output = [];
      for (let item of this.input) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          input.push({
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          });
        } else {
          input.push(parseStack(item));
        }
      }
      for (let item of this.output) {
        if (item == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepOut) {
            throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
          }
          output.push({
            item: intermediate,
            nbt: JSON.stringify({
              display: stepOutLore,
              step: stepOut
            })
          });
        } else {
          output.push(parseStack(item));
        }
      }
      let recipe = {
        type: "create:splashing",
        ingredients: input,
        results: output
      };
      event.custom(recipe);
    }
  }]);
  return CreateSplashingStep;
}(MultistepProcessStep);
let Ae2InscribingStep = /*#__PURE__*/function (_MultistepProcessStep8) {
  "use strict";

  _inherits(Ae2InscribingStep, _MultistepProcessStep8);
  var _super8 = _createSuper(Ae2InscribingStep);
  function Ae2InscribingStep(title, _ref7) {
    var _this8;
    let _ref7$middle = _ref7.middle,
      middle = _ref7$middle === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref7$middle,
      top = _ref7.top,
      bottom = _ref7.bottom,
      _ref7$output = _ref7.output,
      output = _ref7$output === void 0 ? MultistepProcess.INTERMEDIATE_ITEM : _ref7$output;
    _classCallCheck(this, Ae2InscribingStep);
    _this8 = _super8.call(this, title);
    _this8.middle = middle;
    _this8.top = top;
    _this8.bottom = bottom;
    _this8.output = output;
    return _this8;
  }
  _createClass(Ae2InscribingStep, [{
    key: "register",
    value: function register(event, intermediate, stepIn, stepOut, stepOutLore) {
      let output;
      let ingredients = {};
      if (this.middle == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepIn) {
          throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
        }
        ingredients.middle = {
          type: "forge:nbt",
          item: intermediate,
          nbt: JSON.stringify({
            display: this.getLore(stepIn),
            step: stepIn
          })
        };
      } else {
        ingredients.middle = parseMekanismIngredient(this.middle).ingredient;
      }
      if (this.top) {
        if (this.top == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          ingredients.top = {
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          };
        } else {
          ingredients.top = parseMekanismIngredient(this.top).ingredient;
        }
      }
      if (this.bottom) {
        if (this.bottom == MultistepProcess.INTERMEDIATE_ITEM) {
          if (!stepIn) {
            throw new Error("The first step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an input");
          }
          ingredients.bottom = {
            type: "forge:nbt",
            item: intermediate,
            nbt: JSON.stringify({
              display: this.getLore(stepIn),
              step: stepIn
            })
          };
        } else {
          ingredients.bottom = parseMekanismIngredient(this.bottom).ingredient;
        }
      }
      if (this.output == MultistepProcess.INTERMEDIATE_ITEM) {
        if (!stepOut) {
          throw new Error("The last step in a MultistepProcess cannot use INTERMEDIATE_ITEM as an output");
        }
        output = {
          type: "forge:nbt",
          item: intermediate,
          nbt: JSON.stringify({
            display: stepOutLore,
            step: stepOut
          })
        };
      } else {
        output = parseMekanismIngredient(this.outputItem).ingredient;
      }
      event.custom({
        type: "ae2:inscriber",
        ingredients: ingredients,
        mode: "inscribe",
        result: output
      });
    }
  }]);
  return Ae2InscribingStep;
}(MultistepProcessStep); // }
// new MultistepProcess()
//     .addRecipe(new ShapedCraftingStep([
//         "aaa",
//         "d%d",
//         "aaa"
//     ],{
//         a: "minecraft:dirt",
//         d: "minecraft:grass",
//         "%": MultistepProcess.INTERMEDIATE_ITEM
//     }))
//     .usingItem("minecraft:snowball")
//     .withOutput(Item.CONTROL_UNIT)
// step names are what happens next
///Add removal of resist steps here? i think its best if development gets left out
/**
*0: oxide deposition
*1: oxide photoresist for pMOS
*2: oxide photolithography for pMOS
*3: oxide etching for pMOS
*4: n-well photoresist
*4: n-well photolithography
*4: diffuse n-well
*5: oxide photoresist for nMOS
*6: oxide photolithography for nMOS
*7: oxide etching for nMOS
*8: grow oxide
*9: polysilicon deposition
*10: polysilicon photoresist
*11: polysilicon photolithography
*12: polysilicon etching (not certain how this works tbh, but I don't care to find out rn)
*13: p type photoresist
*13: p type photolithography
*14: p type implantation
*15: n type photoresist
*13: n type photolithography
*16: n type implantation
*/
// function makeWaferNBT(step) {
//     let lore = "Error: Unknown fab step"
//     switch (step) {
//         case 0: {
//             lore = "Next Step: Oxide Deposition"
//             break;
//         }
//         case 1: {
//             lore = "Next Step: Apply Photoresist"
//             break;
//         }
//         case 2: {
//             lore = "Next Step: Photolithography"
//             break;
//         }
//         case 3: {
//             lore = "Next Step: Etching"
//             break;
//         }
//         case 4: {
//             lore = "Next Step: Apply Photoresist"
//             break;
//         }
//         default:
//             break;
//     }
//     return(JSON.stringify({"Step":step}))
// }
