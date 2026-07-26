"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeritFlawType = exports.PowerType = exports.GameStyle = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["MESTRE"] = "MESTRE";
    Role["JOGADOR"] = "JOGADOR";
})(Role || (exports.Role = Role = {}));
var GameStyle;
(function (GameStyle) {
    GameStyle["VAMPIRE"] = "VAMPIRE";
    GameStyle["WEREWOLF"] = "WEREWOLF";
    GameStyle["MAGE"] = "MAGE";
    GameStyle["HUNTER"] = "HUNTER";
})(GameStyle || (exports.GameStyle = GameStyle = {}));
var PowerType;
(function (PowerType) {
    PowerType["DISCIPLINE"] = "DISCIPLINE";
    PowerType["GIFT"] = "GIFT";
    PowerType["SPHERE"] = "SPHERE";
    PowerType["EDGE"] = "EDGE";
})(PowerType || (exports.PowerType = PowerType = {}));
var MeritFlawType;
(function (MeritFlawType) {
    MeritFlawType["MERIT"] = "MERIT";
    MeritFlawType["FLAW"] = "FLAW";
})(MeritFlawType || (exports.MeritFlawType = MeritFlawType = {}));
