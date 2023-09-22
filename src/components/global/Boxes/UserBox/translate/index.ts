import type Translate from "../../../../../assets/interfaces/translate";
import type UserBox from "../interface";
export const userBoxTranslate: Translate<UserBox> = {
    ar: {
        level: "المستوي",
        counters: ["عدد المصادر", "عدد الماتبعين", "عدد التحميلات"],
    },
    en: {
        level: "level",
        counters: [
            "sources",
            "followers",
            "downloads",
        ],
    },
};
