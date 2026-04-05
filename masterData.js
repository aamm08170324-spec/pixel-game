// ゲームの全ジョブ・スキル・初期ステータスの定義（マスターデータ）
const MASTER_DATA = {
    jobs: {
        "剣聖": {
            icon: "⚔️",
            hp: 120, mp: 30, str: 15, def: 10, agi: 12,
            dualWield: true,
            skills: {
                atk: ["通常攻撃", "迅雷・一閃突き", "不動の虚空斬"],
                buff: ["神速の構え"]
            }
        },
        "重騎士": {
            icon: "🛡️",
            hp: 200, mp: 10, str: 10, def: 20, agi: 5,
            dualWield: false,
            skills: {
                atk: ["通常攻撃", "渾身の盾打"],
                buff: ["鉄壁の構え", "献身の守護"]
            }
        },
        "聖導師": {
            icon: "⚕️",
            hp: 80, mp: 100, str: 5, def: 8, agi: 10,
            dualWield: false,
            skills: {
                atk: ["通常攻撃"],
                buff: ["ヒールオーラ", "浄化の風", "再起の福音"]
            }
        },
        "魔導師": {
            icon: "🔮",
            hp: 70, mp: 120, str: 4, def: 5, agi: 8,
            dualWield: false,
            skills: {
                atk: ["通常攻撃", "紅蓮の劫火", "凍結の波動"],
                buff: ["魔力の集中"]
            }
        },
        "潜伏者": {
            icon: "👤",
            hp: 90, mp: 40, str: 12, def: 7, agi: 18,
            dualWield: true,
            skills: {
                atk: ["通常攻撃", "毒蛇の牙", "影縫いの矢"],
                buff: ["幻影の身代わり"]
            }
        },
        "呪術師": {
            icon: "💀",
            hp: 85, mp: 90, str: 6, def: 6, agi: 11,
            dualWield: false,
            skills: {
                atk: ["通常攻撃", "衰弱の呪い", "防壁崩し"],
                buff: ["闇のバリア"]
            }
        }
    },
    items: {
        weapons: ["戦士の剣", "魔導の杖", "影縫いの短刀", "聖なる槌"],
        shields: ["鉄の盾", "聖騎士の盾", "魔力の籠手"]

        // images/icons/all_icons.png 内の配置定義
MASTER_DATA.spriteConfig = {
    file: "images/icons/all_icons.png",
    gridSize: 32, // 1キャラのサイズ
    columns: 7,   // 生成された画像の横に並んでいる人数（画像を見て調整）
    // 性別ごとの開始インデックス（0から数えて何番目か）
    maleIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    femaleIndices: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23] 
};
    }
};
