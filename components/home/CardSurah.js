"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
function CardSurah(_a) {
    var href = _a.href, noSurah = _a.noSurah, namaSurah = _a.namaSurah, artiSurah = _a.artiSurah, tempatTurun = _a.tempatTurun, jumlahAyat = _a.jumlahAyat;
    return (<link_1.default href={href} className="bg-gradient-to-bl from-sky-400 to-sky-500 text-gray-50 p-3 rounded-md">
            <div className="flex gap-2">
                <div className="bg-sky-600 p-3 h-8 w-8 flex items-center justify-center rounded-xl">
                    <span className="font-semibold text-base">{noSurah}</span>
                </div>
                <div className="flex justify-between w-full">
                    <div className="">
                        <h1 className="font-semibold text-xl">{namaSurah}</h1>
                        <h2 className="font-light text-xs">{artiSurah}</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="font-normal text-sm">{tempatTurun}</p>
                        <p className="font-normal text-sm">{"".concat(jumlahAyat, " Ayat")}</p>
                    </div>
                </div>
            </div>
        </link_1.default>);
}
exports.default = CardSurah;
