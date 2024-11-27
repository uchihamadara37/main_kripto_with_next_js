module.exports = {

"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = {
    0x00: 'DECIMAL',
    0x01: 'TINY',
    0x02: 'SHORT',
    0x03: 'LONG',
    0x04: 'FLOAT',
    0x05: 'DOUBLE',
    0x06: 'NULL',
    0x07: 'TIMESTAMP',
    0x08: 'LONGLONG',
    0x09: 'INT24',
    0x0a: 'DATE',
    0x0b: 'TIME',
    0x0c: 'DATETIME',
    0x0d: 'YEAR',
    0x0e: 'NEWDATE',
    0x0f: 'VARCHAR',
    0x10: 'BIT',
    0xf5: 'JSON',
    0xf6: 'NEWDECIMAL',
    0xf7: 'ENUM',
    0xf8: 'SET',
    0xf9: 'TINY_BLOB',
    0xfa: 'MEDIUM_BLOB',
    0xfb: 'LONG_BLOB',
    0xfc: 'BLOB',
    0xfd: 'VAR_STRING',
    0xfe: 'STRING',
    0xff: 'GEOMETRY' // aka GEOMETRY
};
// Manually extracted from mysql-5.5.23/include/mysql_com.h
// some more info here: http://dev.mysql.com/doc/refman/5.5/en/c-api-prepared-statement-type-codes.html
module.exports.DECIMAL = 0x00; // aka DECIMAL (http://dev.mysql.com/doc/refman/5.0/en/precision-math-decimal-changes.html)
module.exports.TINY = 0x01; // aka TINYINT, 1 byte
module.exports.SHORT = 0x02; // aka SMALLINT, 2 bytes
module.exports.LONG = 0x03; // aka INT, 4 bytes
module.exports.FLOAT = 0x04; // aka FLOAT, 4-8 bytes
module.exports.DOUBLE = 0x05; // aka DOUBLE, 8 bytes
module.exports.NULL = 0x06; // NULL (used for prepared statements, I think)
module.exports.TIMESTAMP = 0x07; // aka TIMESTAMP
module.exports.LONGLONG = 0x08; // aka BIGINT, 8 bytes
module.exports.INT24 = 0x09; // aka MEDIUMINT, 3 bytes
module.exports.DATE = 0x0a; // aka DATE
module.exports.TIME = 0x0b; // aka TIME
module.exports.DATETIME = 0x0c; // aka DATETIME
module.exports.YEAR = 0x0d; // aka YEAR, 1 byte (don't ask)
module.exports.NEWDATE = 0x0e; // aka ?
module.exports.VARCHAR = 0x0f; // aka VARCHAR (?)
module.exports.BIT = 0x10; // aka BIT, 1-8 byte
module.exports.VECTOR = 0xf2;
module.exports.JSON = 0xf5;
module.exports.NEWDECIMAL = 0xf6; // aka DECIMAL
module.exports.ENUM = 0xf7; // aka ENUM
module.exports.SET = 0xf8; // aka SET
module.exports.TINY_BLOB = 0xf9; // aka TINYBLOB, TINYTEXT
module.exports.MEDIUM_BLOB = 0xfa; // aka MEDIUMBLOB, MEDIUMTEXT
module.exports.LONG_BLOB = 0xfb; // aka LONGBLOG, LONGTEXT
module.exports.BLOB = 0xfc; // aka BLOB, TEXT
module.exports.VAR_STRING = 0xfd; // aka VARCHAR, VARBINARY
module.exports.STRING = 0xfe; // aka CHAR, BINARY
module.exports.GEOMETRY = 0xff; // aka GEOMETRY
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
exports.BIG5_CHINESE_CI = 1;
exports.LATIN2_CZECH_CS = 2;
exports.DEC8_SWEDISH_CI = 3;
exports.CP850_GENERAL_CI = 4;
exports.LATIN1_GERMAN1_CI = 5;
exports.HP8_ENGLISH_CI = 6;
exports.KOI8R_GENERAL_CI = 7;
exports.LATIN1_SWEDISH_CI = 8;
exports.LATIN2_GENERAL_CI = 9;
exports.SWE7_SWEDISH_CI = 10;
exports.ASCII_GENERAL_CI = 11;
exports.UJIS_JAPANESE_CI = 12;
exports.SJIS_JAPANESE_CI = 13;
exports.CP1251_BULGARIAN_CI = 14;
exports.LATIN1_DANISH_CI = 15;
exports.HEBREW_GENERAL_CI = 16;
exports.TIS620_THAI_CI = 18;
exports.EUCKR_KOREAN_CI = 19;
exports.LATIN7_ESTONIAN_CS = 20;
exports.LATIN2_HUNGARIAN_CI = 21;
exports.KOI8U_GENERAL_CI = 22;
exports.CP1251_UKRAINIAN_CI = 23;
exports.GB2312_CHINESE_CI = 24;
exports.GREEK_GENERAL_CI = 25;
exports.CP1250_GENERAL_CI = 26;
exports.LATIN2_CROATIAN_CI = 27;
exports.GBK_CHINESE_CI = 28;
exports.CP1257_LITHUANIAN_CI = 29;
exports.LATIN5_TURKISH_CI = 30;
exports.LATIN1_GERMAN2_CI = 31;
exports.ARMSCII8_GENERAL_CI = 32;
exports.UTF8_GENERAL_CI = 33;
exports.CP1250_CZECH_CS = 34;
exports.UCS2_GENERAL_CI = 35;
exports.CP866_GENERAL_CI = 36;
exports.KEYBCS2_GENERAL_CI = 37;
exports.MACCE_GENERAL_CI = 38;
exports.MACROMAN_GENERAL_CI = 39;
exports.CP852_GENERAL_CI = 40;
exports.LATIN7_GENERAL_CI = 41;
exports.LATIN7_GENERAL_CS = 42;
exports.MACCE_BIN = 43;
exports.CP1250_CROATIAN_CI = 44;
exports.UTF8MB4_GENERAL_CI = 45;
exports.UTF8MB4_BIN = 46;
exports.LATIN1_BIN = 47;
exports.LATIN1_GENERAL_CI = 48;
exports.LATIN1_GENERAL_CS = 49;
exports.CP1251_BIN = 50;
exports.CP1251_GENERAL_CI = 51;
exports.CP1251_GENERAL_CS = 52;
exports.MACROMAN_BIN = 53;
exports.UTF16_GENERAL_CI = 54;
exports.UTF16_BIN = 55;
exports.UTF16LE_GENERAL_CI = 56;
exports.CP1256_GENERAL_CI = 57;
exports.CP1257_BIN = 58;
exports.CP1257_GENERAL_CI = 59;
exports.UTF32_GENERAL_CI = 60;
exports.UTF32_BIN = 61;
exports.UTF16LE_BIN = 62;
exports.BINARY = 63;
exports.ARMSCII8_BIN = 64;
exports.ASCII_BIN = 65;
exports.CP1250_BIN = 66;
exports.CP1256_BIN = 67;
exports.CP866_BIN = 68;
exports.DEC8_BIN = 69;
exports.GREEK_BIN = 70;
exports.HEBREW_BIN = 71;
exports.HP8_BIN = 72;
exports.KEYBCS2_BIN = 73;
exports.KOI8R_BIN = 74;
exports.KOI8U_BIN = 75;
exports.UTF8_TOLOWER_CI = 76;
exports.LATIN2_BIN = 77;
exports.LATIN5_BIN = 78;
exports.LATIN7_BIN = 79;
exports.CP850_BIN = 80;
exports.CP852_BIN = 81;
exports.SWE7_BIN = 82;
exports.UTF8_BIN = 83;
exports.BIG5_BIN = 84;
exports.EUCKR_BIN = 85;
exports.GB2312_BIN = 86;
exports.GBK_BIN = 87;
exports.SJIS_BIN = 88;
exports.TIS620_BIN = 89;
exports.UCS2_BIN = 90;
exports.UJIS_BIN = 91;
exports.GEOSTD8_GENERAL_CI = 92;
exports.GEOSTD8_BIN = 93;
exports.LATIN1_SPANISH_CI = 94;
exports.CP932_JAPANESE_CI = 95;
exports.CP932_BIN = 96;
exports.EUCJPMS_JAPANESE_CI = 97;
exports.EUCJPMS_BIN = 98;
exports.CP1250_POLISH_CI = 99;
exports.UTF16_UNICODE_CI = 101;
exports.UTF16_ICELANDIC_CI = 102;
exports.UTF16_LATVIAN_CI = 103;
exports.UTF16_ROMANIAN_CI = 104;
exports.UTF16_SLOVENIAN_CI = 105;
exports.UTF16_POLISH_CI = 106;
exports.UTF16_ESTONIAN_CI = 107;
exports.UTF16_SPANISH_CI = 108;
exports.UTF16_SWEDISH_CI = 109;
exports.UTF16_TURKISH_CI = 110;
exports.UTF16_CZECH_CI = 111;
exports.UTF16_DANISH_CI = 112;
exports.UTF16_LITHUANIAN_CI = 113;
exports.UTF16_SLOVAK_CI = 114;
exports.UTF16_SPANISH2_CI = 115;
exports.UTF16_ROMAN_CI = 116;
exports.UTF16_PERSIAN_CI = 117;
exports.UTF16_ESPERANTO_CI = 118;
exports.UTF16_HUNGARIAN_CI = 119;
exports.UTF16_SINHALA_CI = 120;
exports.UTF16_GERMAN2_CI = 121;
exports.UTF16_CROATIAN_CI = 122;
exports.UTF16_UNICODE_520_CI = 123;
exports.UTF16_VIETNAMESE_CI = 124;
exports.UCS2_UNICODE_CI = 128;
exports.UCS2_ICELANDIC_CI = 129;
exports.UCS2_LATVIAN_CI = 130;
exports.UCS2_ROMANIAN_CI = 131;
exports.UCS2_SLOVENIAN_CI = 132;
exports.UCS2_POLISH_CI = 133;
exports.UCS2_ESTONIAN_CI = 134;
exports.UCS2_SPANISH_CI = 135;
exports.UCS2_SWEDISH_CI = 136;
exports.UCS2_TURKISH_CI = 137;
exports.UCS2_CZECH_CI = 138;
exports.UCS2_DANISH_CI = 139;
exports.UCS2_LITHUANIAN_CI = 140;
exports.UCS2_SLOVAK_CI = 141;
exports.UCS2_SPANISH2_CI = 142;
exports.UCS2_ROMAN_CI = 143;
exports.UCS2_PERSIAN_CI = 144;
exports.UCS2_ESPERANTO_CI = 145;
exports.UCS2_HUNGARIAN_CI = 146;
exports.UCS2_SINHALA_CI = 147;
exports.UCS2_GERMAN2_CI = 148;
exports.UCS2_CROATIAN_CI = 149;
exports.UCS2_UNICODE_520_CI = 150;
exports.UCS2_VIETNAMESE_CI = 151;
exports.UCS2_GENERAL_MYSQL500_CI = 159;
exports.UTF32_UNICODE_CI = 160;
exports.UTF32_ICELANDIC_CI = 161;
exports.UTF32_LATVIAN_CI = 162;
exports.UTF32_ROMANIAN_CI = 163;
exports.UTF32_SLOVENIAN_CI = 164;
exports.UTF32_POLISH_CI = 165;
exports.UTF32_ESTONIAN_CI = 166;
exports.UTF32_SPANISH_CI = 167;
exports.UTF32_SWEDISH_CI = 168;
exports.UTF32_TURKISH_CI = 169;
exports.UTF32_CZECH_CI = 170;
exports.UTF32_DANISH_CI = 171;
exports.UTF32_LITHUANIAN_CI = 172;
exports.UTF32_SLOVAK_CI = 173;
exports.UTF32_SPANISH2_CI = 174;
exports.UTF32_ROMAN_CI = 175;
exports.UTF32_PERSIAN_CI = 176;
exports.UTF32_ESPERANTO_CI = 177;
exports.UTF32_HUNGARIAN_CI = 178;
exports.UTF32_SINHALA_CI = 179;
exports.UTF32_GERMAN2_CI = 180;
exports.UTF32_CROATIAN_CI = 181;
exports.UTF32_UNICODE_520_CI = 182;
exports.UTF32_VIETNAMESE_CI = 183;
exports.UTF8_UNICODE_CI = 192;
exports.UTF8_ICELANDIC_CI = 193;
exports.UTF8_LATVIAN_CI = 194;
exports.UTF8_ROMANIAN_CI = 195;
exports.UTF8_SLOVENIAN_CI = 196;
exports.UTF8_POLISH_CI = 197;
exports.UTF8_ESTONIAN_CI = 198;
exports.UTF8_SPANISH_CI = 199;
exports.UTF8_SWEDISH_CI = 200;
exports.UTF8_TURKISH_CI = 201;
exports.UTF8_CZECH_CI = 202;
exports.UTF8_DANISH_CI = 203;
exports.UTF8_LITHUANIAN_CI = 204;
exports.UTF8_SLOVAK_CI = 205;
exports.UTF8_SPANISH2_CI = 206;
exports.UTF8_ROMAN_CI = 207;
exports.UTF8_PERSIAN_CI = 208;
exports.UTF8_ESPERANTO_CI = 209;
exports.UTF8_HUNGARIAN_CI = 210;
exports.UTF8_SINHALA_CI = 211;
exports.UTF8_GERMAN2_CI = 212;
exports.UTF8_CROATIAN_CI = 213;
exports.UTF8_UNICODE_520_CI = 214;
exports.UTF8_VIETNAMESE_CI = 215;
exports.UTF8_GENERAL_MYSQL500_CI = 223;
exports.UTF8MB4_UNICODE_CI = 224;
exports.UTF8MB4_ICELANDIC_CI = 225;
exports.UTF8MB4_LATVIAN_CI = 226;
exports.UTF8MB4_ROMANIAN_CI = 227;
exports.UTF8MB4_SLOVENIAN_CI = 228;
exports.UTF8MB4_POLISH_CI = 229;
exports.UTF8MB4_ESTONIAN_CI = 230;
exports.UTF8MB4_SPANISH_CI = 231;
exports.UTF8MB4_SWEDISH_CI = 232;
exports.UTF8MB4_TURKISH_CI = 233;
exports.UTF8MB4_CZECH_CI = 234;
exports.UTF8MB4_DANISH_CI = 235;
exports.UTF8MB4_LITHUANIAN_CI = 236;
exports.UTF8MB4_SLOVAK_CI = 237;
exports.UTF8MB4_SPANISH2_CI = 238;
exports.UTF8MB4_ROMAN_CI = 239;
exports.UTF8MB4_PERSIAN_CI = 240;
exports.UTF8MB4_ESPERANTO_CI = 241;
exports.UTF8MB4_HUNGARIAN_CI = 242;
exports.UTF8MB4_SINHALA_CI = 243;
exports.UTF8MB4_GERMAN2_CI = 244;
exports.UTF8MB4_CROATIAN_CI = 245;
exports.UTF8MB4_UNICODE_520_CI = 246;
exports.UTF8MB4_VIETNAMESE_CI = 247;
exports.GB18030_CHINESE_CI = 248;
exports.GB18030_BIN = 249;
exports.GB18030_UNICODE_520_CI = 250;
exports.UTF8_GENERAL50_CI = 253; // deprecated
exports.UTF8MB4_0900_AI_CI = 255;
exports.UTF8MB4_DE_PB_0900_AI_CI = 256;
exports.UTF8MB4_IS_0900_AI_CI = 257;
exports.UTF8MB4_LV_0900_AI_CI = 258;
exports.UTF8MB4_RO_0900_AI_CI = 259;
exports.UTF8MB4_SL_0900_AI_CI = 260;
exports.UTF8MB4_PL_0900_AI_CI = 261;
exports.UTF8MB4_ET_0900_AI_CI = 262;
exports.UTF8MB4_ES_0900_AI_CI = 263;
exports.UTF8MB4_SV_0900_AI_CI = 264;
exports.UTF8MB4_TR_0900_AI_CI = 265;
exports.UTF8MB4_CS_0900_AI_CI = 266;
exports.UTF8MB4_DA_0900_AI_CI = 267;
exports.UTF8MB4_LT_0900_AI_CI = 268;
exports.UTF8MB4_SK_0900_AI_CI = 269;
exports.UTF8MB4_ES_TRAD_0900_AI_CI = 270;
exports.UTF8MB4_LA_0900_AI_CI = 271;
exports.UTF8MB4_EO_0900_AI_CI = 273;
exports.UTF8MB4_HU_0900_AI_CI = 274;
exports.UTF8MB4_HR_0900_AI_CI = 275;
exports.UTF8MB4_VI_0900_AI_CI = 277;
exports.UTF8MB4_0900_AS_CS = 278;
exports.UTF8MB4_DE_PB_0900_AS_CS = 279;
exports.UTF8MB4_IS_0900_AS_CS = 280;
exports.UTF8MB4_LV_0900_AS_CS = 281;
exports.UTF8MB4_RO_0900_AS_CS = 282;
exports.UTF8MB4_SL_0900_AS_CS = 283;
exports.UTF8MB4_PL_0900_AS_CS = 284;
exports.UTF8MB4_ET_0900_AS_CS = 285;
exports.UTF8MB4_ES_0900_AS_CS = 286;
exports.UTF8MB4_SV_0900_AS_CS = 287;
exports.UTF8MB4_TR_0900_AS_CS = 288;
exports.UTF8MB4_CS_0900_AS_CS = 289;
exports.UTF8MB4_DA_0900_AS_CS = 290;
exports.UTF8MB4_LT_0900_AS_CS = 291;
exports.UTF8MB4_SK_0900_AS_CS = 292;
exports.UTF8MB4_ES_TRAD_0900_AS_CS = 293;
exports.UTF8MB4_LA_0900_AS_CS = 294;
exports.UTF8MB4_EO_0900_AS_CS = 296;
exports.UTF8MB4_HU_0900_AS_CS = 297;
exports.UTF8MB4_HR_0900_AS_CS = 298;
exports.UTF8MB4_VI_0900_AS_CS = 300;
exports.UTF8MB4_JA_0900_AS_CS = 303;
exports.UTF8MB4_JA_0900_AS_CS_KS = 304;
exports.UTF8MB4_0900_AS_CI = 305;
exports.UTF8MB4_RU_0900_AI_CI = 306;
exports.UTF8MB4_RU_0900_AS_CS = 307;
exports.UTF8MB4_ZH_0900_AS_CS = 308;
exports.UTF8MB4_0900_BIN = 309;
// short aliases
exports.BIG5 = exports.BIG5_CHINESE_CI;
exports.DEC8 = exports.DEC8_SWEDISH_CI;
exports.CP850 = exports.CP850_GENERAL_CI;
exports.HP8 = exports.HP8_ENGLISH_CI;
exports.KOI8R = exports.KOI8R_GENERAL_CI;
exports.LATIN1 = exports.LATIN1_SWEDISH_CI;
exports.LATIN2 = exports.LATIN2_GENERAL_CI;
exports.SWE7 = exports.SWE7_SWEDISH_CI;
exports.ASCII = exports.ASCII_GENERAL_CI;
exports.UJIS = exports.UJIS_JAPANESE_CI;
exports.SJIS = exports.SJIS_JAPANESE_CI;
exports.HEBREW = exports.HEBREW_GENERAL_CI;
exports.TIS620 = exports.TIS620_THAI_CI;
exports.EUCKR = exports.EUCKR_KOREAN_CI;
exports.KOI8U = exports.KOI8U_GENERAL_CI;
exports.GB2312 = exports.GB2312_CHINESE_CI;
exports.GREEK = exports.GREEK_GENERAL_CI;
exports.CP1250 = exports.CP1250_GENERAL_CI;
exports.GBK = exports.GBK_CHINESE_CI;
exports.LATIN5 = exports.LATIN5_TURKISH_CI;
exports.ARMSCII8 = exports.ARMSCII8_GENERAL_CI;
exports.UTF8 = exports.UTF8_GENERAL_CI;
exports.UCS2 = exports.UCS2_GENERAL_CI;
exports.CP866 = exports.CP866_GENERAL_CI;
exports.KEYBCS2 = exports.KEYBCS2_GENERAL_CI;
exports.MACCE = exports.MACCE_GENERAL_CI;
exports.MACROMAN = exports.MACROMAN_GENERAL_CI;
exports.CP852 = exports.CP852_GENERAL_CI;
exports.LATIN7 = exports.LATIN7_GENERAL_CI;
exports.UTF8MB4 = exports.UTF8MB4_GENERAL_CI;
exports.CP1251 = exports.CP1251_GENERAL_CI;
exports.UTF16 = exports.UTF16_GENERAL_CI;
exports.UTF16LE = exports.UTF16LE_GENERAL_CI;
exports.CP1256 = exports.CP1256_GENERAL_CI;
exports.CP1257 = exports.CP1257_GENERAL_CI;
exports.UTF32 = exports.UTF32_GENERAL_CI;
exports.CP932 = exports.CP932_JAPANESE_CI;
exports.EUCJPMS = exports.EUCJPMS_JAPANESE_CI;
exports.GB18030 = exports.GB18030_CHINESE_CI;
exports.GEOSTD8 = exports.GEOSTD8_GENERAL_CI;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// see tools/generate-charset-mapping.js
// basicalliy result of "SHOW COLLATION" query
module.exports = [
    'utf8',
    'big5',
    'latin2',
    'dec8',
    'cp850',
    'latin1',
    'hp8',
    'koi8r',
    'latin1',
    'latin2',
    'swe7',
    'ascii',
    'eucjp',
    'sjis',
    'cp1251',
    'latin1',
    'hebrew',
    'utf8',
    'tis620',
    'euckr',
    'latin7',
    'latin2',
    'koi8u',
    'cp1251',
    'gb2312',
    'greek',
    'cp1250',
    'latin2',
    'gbk',
    'cp1257',
    'latin5',
    'latin1',
    'armscii8',
    'cesu8',
    'cp1250',
    'ucs2',
    'cp866',
    'keybcs2',
    'macintosh',
    'macroman',
    'cp852',
    'latin7',
    'latin7',
    'macintosh',
    'cp1250',
    'utf8',
    'utf8',
    'latin1',
    'latin1',
    'latin1',
    'cp1251',
    'cp1251',
    'cp1251',
    'macroman',
    'utf16',
    'utf16',
    'utf16-le',
    'cp1256',
    'cp1257',
    'cp1257',
    'utf32',
    'utf32',
    'utf16-le',
    'binary',
    'armscii8',
    'ascii',
    'cp1250',
    'cp1256',
    'cp866',
    'dec8',
    'greek',
    'hebrew',
    'hp8',
    'keybcs2',
    'koi8r',
    'koi8u',
    'cesu8',
    'latin2',
    'latin5',
    'latin7',
    'cp850',
    'cp852',
    'swe7',
    'cesu8',
    'big5',
    'euckr',
    'gb2312',
    'gbk',
    'sjis',
    'tis620',
    'ucs2',
    'eucjp',
    'geostd8',
    'geostd8',
    'latin1',
    'cp932',
    'cp932',
    'eucjpms',
    'eucjpms',
    'cp1250',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf16',
    'utf8',
    'utf8',
    'utf8',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'ucs2',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'ucs2',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf32',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'cesu8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'cesu8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'gb18030',
    'gb18030',
    'gb18030',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8',
    'utf8'
];
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/errors.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on June 1, 2021.
// An entry was created for a new error reported by the MySQL server due to
// client inactivity.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
// originally copied from https://raw.githubusercontent.com/mysqljs/mysql/7770ee5bb13260c56a160b91fe480d9165dbeeba/lib/protocol/constants/errors.js
// (c) node-mysql authors
// updated to contain error codes as is contained in MySQL 8.0
// by adapting node-mysql: /.../generate-error-constants.js
/**
 * MySQL error constants
 * 
 * Extracted from version 8.0.33
 * 
 * !! Generated by generate-error-constants.js, do not modify by hand !!
 */ exports.EE_CANTCREATEFILE = 1;
exports.EE_READ = 2;
exports.EE_WRITE = 3;
exports.EE_BADCLOSE = 4;
exports.EE_OUTOFMEMORY = 5;
exports.EE_DELETE = 6;
exports.EE_LINK = 7;
exports.EE_EOFERR = 9;
exports.EE_CANTLOCK = 10;
exports.EE_CANTUNLOCK = 11;
exports.EE_DIR = 12;
exports.EE_STAT = 13;
exports.EE_CANT_CHSIZE = 14;
exports.EE_CANT_OPEN_STREAM = 15;
exports.EE_GETWD = 16;
exports.EE_SETWD = 17;
exports.EE_LINK_WARNING = 18;
exports.EE_OPEN_WARNING = 19;
exports.EE_DISK_FULL = 20;
exports.EE_CANT_MKDIR = 21;
exports.EE_UNKNOWN_CHARSET = 22;
exports.EE_OUT_OF_FILERESOURCES = 23;
exports.EE_CANT_READLINK = 24;
exports.EE_CANT_SYMLINK = 25;
exports.EE_REALPATH = 26;
exports.EE_SYNC = 27;
exports.EE_UNKNOWN_COLLATION = 28;
exports.EE_FILENOTFOUND = 29;
exports.EE_FILE_NOT_CLOSED = 30;
exports.EE_CHANGE_OWNERSHIP = 31;
exports.EE_CHANGE_PERMISSIONS = 32;
exports.EE_CANT_SEEK = 33;
exports.EE_CAPACITY_EXCEEDED = 34;
exports.EE_DISK_FULL_WITH_RETRY_MSG = 35;
exports.EE_FAILED_TO_CREATE_TIMER = 36;
exports.EE_FAILED_TO_DELETE_TIMER = 37;
exports.EE_FAILED_TO_CREATE_TIMER_QUEUE = 38;
exports.EE_FAILED_TO_START_TIMER_NOTIFY_THREAD = 39;
exports.EE_FAILED_TO_CREATE_TIMER_NOTIFY_THREAD_INTERRUPT_EVENT = 40;
exports.EE_EXITING_TIMER_NOTIFY_THREAD = 41;
exports.EE_WIN_LIBRARY_LOAD_FAILED = 42;
exports.EE_WIN_RUN_TIME_ERROR_CHECK = 43;
exports.EE_FAILED_TO_DETERMINE_LARGE_PAGE_SIZE = 44;
exports.EE_FAILED_TO_KILL_ALL_THREADS = 45;
exports.EE_FAILED_TO_CREATE_IO_COMPLETION_PORT = 46;
exports.EE_FAILED_TO_OPEN_DEFAULTS_FILE = 47;
exports.EE_FAILED_TO_HANDLE_DEFAULTS_FILE = 48;
exports.EE_WRONG_DIRECTIVE_IN_CONFIG_FILE = 49;
exports.EE_SKIPPING_DIRECTIVE_DUE_TO_MAX_INCLUDE_RECURSION = 50;
exports.EE_INCORRECT_GRP_DEFINITION_IN_CONFIG_FILE = 51;
exports.EE_OPTION_WITHOUT_GRP_IN_CONFIG_FILE = 52;
exports.EE_CONFIG_FILE_PERMISSION_ERROR = 53;
exports.EE_IGNORE_WORLD_WRITABLE_CONFIG_FILE = 54;
exports.EE_USING_DISABLED_OPTION = 55;
exports.EE_USING_DISABLED_SHORT_OPTION = 56;
exports.EE_USING_PASSWORD_ON_CLI_IS_INSECURE = 57;
exports.EE_UNKNOWN_SUFFIX_FOR_VARIABLE = 58;
exports.EE_SSL_ERROR_FROM_FILE = 59;
exports.EE_SSL_ERROR = 60;
exports.EE_NET_SEND_ERROR_IN_BOOTSTRAP = 61;
exports.EE_PACKETS_OUT_OF_ORDER = 62;
exports.EE_UNKNOWN_PROTOCOL_OPTION = 63;
exports.EE_FAILED_TO_LOCATE_SERVER_PUBLIC_KEY = 64;
exports.EE_PUBLIC_KEY_NOT_IN_PEM_FORMAT = 65;
exports.EE_DEBUG_INFO = 66;
exports.EE_UNKNOWN_VARIABLE = 67;
exports.EE_UNKNOWN_OPTION = 68;
exports.EE_UNKNOWN_SHORT_OPTION = 69;
exports.EE_OPTION_WITHOUT_ARGUMENT = 70;
exports.EE_OPTION_REQUIRES_ARGUMENT = 71;
exports.EE_SHORT_OPTION_REQUIRES_ARGUMENT = 72;
exports.EE_OPTION_IGNORED_DUE_TO_INVALID_VALUE = 73;
exports.EE_OPTION_WITH_EMPTY_VALUE = 74;
exports.EE_FAILED_TO_ASSIGN_MAX_VALUE_TO_OPTION = 75;
exports.EE_INCORRECT_BOOLEAN_VALUE_FOR_OPTION = 76;
exports.EE_FAILED_TO_SET_OPTION_VALUE = 77;
exports.EE_INCORRECT_INT_VALUE_FOR_OPTION = 78;
exports.EE_INCORRECT_UINT_VALUE_FOR_OPTION = 79;
exports.EE_ADJUSTED_SIGNED_VALUE_FOR_OPTION = 80;
exports.EE_ADJUSTED_UNSIGNED_VALUE_FOR_OPTION = 81;
exports.EE_ADJUSTED_ULONGLONG_VALUE_FOR_OPTION = 82;
exports.EE_ADJUSTED_DOUBLE_VALUE_FOR_OPTION = 83;
exports.EE_INVALID_DECIMAL_VALUE_FOR_OPTION = 84;
exports.EE_COLLATION_PARSER_ERROR = 85;
exports.EE_FAILED_TO_RESET_BEFORE_PRIMARY_IGNORABLE_CHAR = 86;
exports.EE_FAILED_TO_RESET_BEFORE_TERTIARY_IGNORABLE_CHAR = 87;
exports.EE_SHIFT_CHAR_OUT_OF_RANGE = 88;
exports.EE_RESET_CHAR_OUT_OF_RANGE = 89;
exports.EE_UNKNOWN_LDML_TAG = 90;
exports.EE_FAILED_TO_RESET_BEFORE_SECONDARY_IGNORABLE_CHAR = 91;
exports.EE_FAILED_PROCESSING_DIRECTIVE = 92;
exports.EE_PTHREAD_KILL_FAILED = 93;
exports.HA_ERR_KEY_NOT_FOUND = 120;
exports.HA_ERR_FOUND_DUPP_KEY = 121;
exports.HA_ERR_INTERNAL_ERROR = 122;
exports.HA_ERR_RECORD_CHANGED = 123;
exports.HA_ERR_WRONG_INDEX = 124;
exports.HA_ERR_ROLLED_BACK = 125;
exports.HA_ERR_CRASHED = 126;
exports.HA_ERR_WRONG_IN_RECORD = 127;
exports.HA_ERR_OUT_OF_MEM = 128;
exports.HA_ERR_NOT_A_TABLE = 130;
exports.HA_ERR_WRONG_COMMAND = 131;
exports.HA_ERR_OLD_FILE = 132;
exports.HA_ERR_NO_ACTIVE_RECORD = 133;
exports.HA_ERR_RECORD_DELETED = 134;
exports.HA_ERR_RECORD_FILE_FULL = 135;
exports.HA_ERR_INDEX_FILE_FULL = 136;
exports.HA_ERR_END_OF_FILE = 137;
exports.HA_ERR_UNSUPPORTED = 138;
exports.HA_ERR_TOO_BIG_ROW = 139;
exports.HA_WRONG_CREATE_OPTION = 140;
exports.HA_ERR_FOUND_DUPP_UNIQUE = 141;
exports.HA_ERR_UNKNOWN_CHARSET = 142;
exports.HA_ERR_WRONG_MRG_TABLE_DEF = 143;
exports.HA_ERR_CRASHED_ON_REPAIR = 144;
exports.HA_ERR_CRASHED_ON_USAGE = 145;
exports.HA_ERR_LOCK_WAIT_TIMEOUT = 146;
exports.HA_ERR_LOCK_TABLE_FULL = 147;
exports.HA_ERR_READ_ONLY_TRANSACTION = 148;
exports.HA_ERR_LOCK_DEADLOCK = 149;
exports.HA_ERR_CANNOT_ADD_FOREIGN = 150;
exports.HA_ERR_NO_REFERENCED_ROW = 151;
exports.HA_ERR_ROW_IS_REFERENCED = 152;
exports.HA_ERR_NO_SAVEPOINT = 153;
exports.HA_ERR_NON_UNIQUE_BLOCK_SIZE = 154;
exports.HA_ERR_NO_SUCH_TABLE = 155;
exports.HA_ERR_TABLE_EXIST = 156;
exports.HA_ERR_NO_CONNECTION = 157;
exports.HA_ERR_NULL_IN_SPATIAL = 158;
exports.HA_ERR_TABLE_DEF_CHANGED = 159;
exports.HA_ERR_NO_PARTITION_FOUND = 160;
exports.HA_ERR_RBR_LOGGING_FAILED = 161;
exports.HA_ERR_DROP_INDEX_FK = 162;
exports.HA_ERR_FOREIGN_DUPLICATE_KEY = 163;
exports.HA_ERR_TABLE_NEEDS_UPGRADE = 164;
exports.HA_ERR_TABLE_READONLY = 165;
exports.HA_ERR_AUTOINC_READ_FAILED = 166;
exports.HA_ERR_AUTOINC_ERANGE = 167;
exports.HA_ERR_GENERIC = 168;
exports.HA_ERR_RECORD_IS_THE_SAME = 169;
exports.HA_ERR_LOGGING_IMPOSSIBLE = 170;
exports.HA_ERR_CORRUPT_EVENT = 171;
exports.HA_ERR_NEW_FILE = 172;
exports.HA_ERR_ROWS_EVENT_APPLY = 173;
exports.HA_ERR_INITIALIZATION = 174;
exports.HA_ERR_FILE_TOO_SHORT = 175;
exports.HA_ERR_WRONG_CRC = 176;
exports.HA_ERR_TOO_MANY_CONCURRENT_TRXS = 177;
exports.HA_ERR_NOT_IN_LOCK_PARTITIONS = 178;
exports.HA_ERR_INDEX_COL_TOO_LONG = 179;
exports.HA_ERR_INDEX_CORRUPT = 180;
exports.HA_ERR_UNDO_REC_TOO_BIG = 181;
exports.HA_FTS_INVALID_DOCID = 182;
exports.HA_ERR_TABLE_IN_FK_CHECK = 183;
exports.HA_ERR_TABLESPACE_EXISTS = 184;
exports.HA_ERR_TOO_MANY_FIELDS = 185;
exports.HA_ERR_ROW_IN_WRONG_PARTITION = 186;
exports.HA_ERR_INNODB_READ_ONLY = 187;
exports.HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT = 188;
exports.HA_ERR_TEMP_FILE_WRITE_FAILURE = 189;
exports.HA_ERR_INNODB_FORCED_RECOVERY = 190;
exports.HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE = 191;
exports.HA_ERR_FK_DEPTH_EXCEEDED = 192;
exports.HA_MISSING_CREATE_OPTION = 193;
exports.HA_ERR_SE_OUT_OF_MEMORY = 194;
exports.HA_ERR_TABLE_CORRUPT = 195;
exports.HA_ERR_QUERY_INTERRUPTED = 196;
exports.HA_ERR_TABLESPACE_MISSING = 197;
exports.HA_ERR_TABLESPACE_IS_NOT_EMPTY = 198;
exports.HA_ERR_WRONG_FILE_NAME = 199;
exports.HA_ERR_NOT_ALLOWED_COMMAND = 200;
exports.HA_ERR_COMPUTE_FAILED = 201;
exports.HA_ERR_ROW_FORMAT_CHANGED = 202;
exports.HA_ERR_NO_WAIT_LOCK = 203;
exports.HA_ERR_DISK_FULL_NOWAIT = 204;
exports.HA_ERR_NO_SESSION_TEMP = 205;
exports.HA_ERR_WRONG_TABLE_NAME = 206;
exports.HA_ERR_TOO_LONG_PATH = 207;
exports.HA_ERR_SAMPLING_INIT_FAILED = 208;
exports.HA_ERR_FTS_TOO_MANY_NESTED_EXP = 209;
exports.ER_HASHCHK = 1000;
exports.ER_NISAMCHK = 1001;
exports.ER_NO = 1002;
exports.ER_YES = 1003;
exports.ER_CANT_CREATE_FILE = 1004;
exports.ER_CANT_CREATE_TABLE = 1005;
exports.ER_CANT_CREATE_DB = 1006;
exports.ER_DB_CREATE_EXISTS = 1007;
exports.ER_DB_DROP_EXISTS = 1008;
exports.ER_DB_DROP_DELETE = 1009;
exports.ER_DB_DROP_RMDIR = 1010;
exports.ER_CANT_DELETE_FILE = 1011;
exports.ER_CANT_FIND_SYSTEM_REC = 1012;
exports.ER_CANT_GET_STAT = 1013;
exports.ER_CANT_GET_WD = 1014;
exports.ER_CANT_LOCK = 1015;
exports.ER_CANT_OPEN_FILE = 1016;
exports.ER_FILE_NOT_FOUND = 1017;
exports.ER_CANT_READ_DIR = 1018;
exports.ER_CANT_SET_WD = 1019;
exports.ER_CHECKREAD = 1020;
exports.ER_DISK_FULL = 1021;
exports.ER_DUP_KEY = 1022;
exports.ER_ERROR_ON_CLOSE = 1023;
exports.ER_ERROR_ON_READ = 1024;
exports.ER_ERROR_ON_RENAME = 1025;
exports.ER_ERROR_ON_WRITE = 1026;
exports.ER_FILE_USED = 1027;
exports.ER_FILSORT_ABORT = 1028;
exports.ER_FORM_NOT_FOUND = 1029;
exports.ER_GET_ERRNO = 1030;
exports.ER_ILLEGAL_HA = 1031;
exports.ER_KEY_NOT_FOUND = 1032;
exports.ER_NOT_FORM_FILE = 1033;
exports.ER_NOT_KEYFILE = 1034;
exports.ER_OLD_KEYFILE = 1035;
exports.ER_OPEN_AS_READONLY = 1036;
exports.ER_OUTOFMEMORY = 1037;
exports.ER_OUT_OF_SORTMEMORY = 1038;
exports.ER_UNEXPECTED_EOF = 1039;
exports.ER_CON_COUNT_ERROR = 1040;
exports.ER_OUT_OF_RESOURCES = 1041;
exports.ER_BAD_HOST_ERROR = 1042;
exports.ER_HANDSHAKE_ERROR = 1043;
exports.ER_DBACCESS_DENIED_ERROR = 1044;
exports.ER_ACCESS_DENIED_ERROR = 1045;
exports.ER_NO_DB_ERROR = 1046;
exports.ER_UNKNOWN_COM_ERROR = 1047;
exports.ER_BAD_NULL_ERROR = 1048;
exports.ER_BAD_DB_ERROR = 1049;
exports.ER_TABLE_EXISTS_ERROR = 1050;
exports.ER_BAD_TABLE_ERROR = 1051;
exports.ER_NON_UNIQ_ERROR = 1052;
exports.ER_SERVER_SHUTDOWN = 1053;
exports.ER_BAD_FIELD_ERROR = 1054;
exports.ER_WRONG_FIELD_WITH_GROUP = 1055;
exports.ER_WRONG_GROUP_FIELD = 1056;
exports.ER_WRONG_SUM_SELECT = 1057;
exports.ER_WRONG_VALUE_COUNT = 1058;
exports.ER_TOO_LONG_IDENT = 1059;
exports.ER_DUP_FIELDNAME = 1060;
exports.ER_DUP_KEYNAME = 1061;
exports.ER_DUP_ENTRY = 1062;
exports.ER_WRONG_FIELD_SPEC = 1063;
exports.ER_PARSE_ERROR = 1064;
exports.ER_EMPTY_QUERY = 1065;
exports.ER_NONUNIQ_TABLE = 1066;
exports.ER_INVALID_DEFAULT = 1067;
exports.ER_MULTIPLE_PRI_KEY = 1068;
exports.ER_TOO_MANY_KEYS = 1069;
exports.ER_TOO_MANY_KEY_PARTS = 1070;
exports.ER_TOO_LONG_KEY = 1071;
exports.ER_KEY_COLUMN_DOES_NOT_EXITS = 1072;
exports.ER_BLOB_USED_AS_KEY = 1073;
exports.ER_TOO_BIG_FIELDLENGTH = 1074;
exports.ER_WRONG_AUTO_KEY = 1075;
exports.ER_READY = 1076;
exports.ER_NORMAL_SHUTDOWN = 1077;
exports.ER_GOT_SIGNAL = 1078;
exports.ER_SHUTDOWN_COMPLETE = 1079;
exports.ER_FORCING_CLOSE = 1080;
exports.ER_IPSOCK_ERROR = 1081;
exports.ER_NO_SUCH_INDEX = 1082;
exports.ER_WRONG_FIELD_TERMINATORS = 1083;
exports.ER_BLOBS_AND_NO_TERMINATED = 1084;
exports.ER_TEXTFILE_NOT_READABLE = 1085;
exports.ER_FILE_EXISTS_ERROR = 1086;
exports.ER_LOAD_INFO = 1087;
exports.ER_ALTER_INFO = 1088;
exports.ER_WRONG_SUB_KEY = 1089;
exports.ER_CANT_REMOVE_ALL_FIELDS = 1090;
exports.ER_CANT_DROP_FIELD_OR_KEY = 1091;
exports.ER_INSERT_INFO = 1092;
exports.ER_UPDATE_TABLE_USED = 1093;
exports.ER_NO_SUCH_THREAD = 1094;
exports.ER_KILL_DENIED_ERROR = 1095;
exports.ER_NO_TABLES_USED = 1096;
exports.ER_TOO_BIG_SET = 1097;
exports.ER_NO_UNIQUE_LOGFILE = 1098;
exports.ER_TABLE_NOT_LOCKED_FOR_WRITE = 1099;
exports.ER_TABLE_NOT_LOCKED = 1100;
exports.ER_BLOB_CANT_HAVE_DEFAULT = 1101;
exports.ER_WRONG_DB_NAME = 1102;
exports.ER_WRONG_TABLE_NAME = 1103;
exports.ER_TOO_BIG_SELECT = 1104;
exports.ER_UNKNOWN_ERROR = 1105;
exports.ER_UNKNOWN_PROCEDURE = 1106;
exports.ER_WRONG_PARAMCOUNT_TO_PROCEDURE = 1107;
exports.ER_WRONG_PARAMETERS_TO_PROCEDURE = 1108;
exports.ER_UNKNOWN_TABLE = 1109;
exports.ER_FIELD_SPECIFIED_TWICE = 1110;
exports.ER_INVALID_GROUP_FUNC_USE = 1111;
exports.ER_UNSUPPORTED_EXTENSION = 1112;
exports.ER_TABLE_MUST_HAVE_COLUMNS = 1113;
exports.ER_RECORD_FILE_FULL = 1114;
exports.ER_UNKNOWN_CHARACTER_SET = 1115;
exports.ER_TOO_MANY_TABLES = 1116;
exports.ER_TOO_MANY_FIELDS = 1117;
exports.ER_TOO_BIG_ROWSIZE = 1118;
exports.ER_STACK_OVERRUN = 1119;
exports.ER_WRONG_OUTER_JOIN = 1120;
exports.ER_NULL_COLUMN_IN_INDEX = 1121;
exports.ER_CANT_FIND_UDF = 1122;
exports.ER_CANT_INITIALIZE_UDF = 1123;
exports.ER_UDF_NO_PATHS = 1124;
exports.ER_UDF_EXISTS = 1125;
exports.ER_CANT_OPEN_LIBRARY = 1126;
exports.ER_CANT_FIND_DL_ENTRY = 1127;
exports.ER_FUNCTION_NOT_DEFINED = 1128;
exports.ER_HOST_IS_BLOCKED = 1129;
exports.ER_HOST_NOT_PRIVILEGED = 1130;
exports.ER_PASSWORD_ANONYMOUS_USER = 1131;
exports.ER_PASSWORD_NOT_ALLOWED = 1132;
exports.ER_PASSWORD_NO_MATCH = 1133;
exports.ER_UPDATE_INFO = 1134;
exports.ER_CANT_CREATE_THREAD = 1135;
exports.ER_WRONG_VALUE_COUNT_ON_ROW = 1136;
exports.ER_CANT_REOPEN_TABLE = 1137;
exports.ER_INVALID_USE_OF_NULL = 1138;
exports.ER_REGEXP_ERROR = 1139;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS = 1140;
exports.ER_NONEXISTING_GRANT = 1141;
exports.ER_TABLEACCESS_DENIED_ERROR = 1142;
exports.ER_COLUMNACCESS_DENIED_ERROR = 1143;
exports.ER_ILLEGAL_GRANT_FOR_TABLE = 1144;
exports.ER_GRANT_WRONG_HOST_OR_USER = 1145;
exports.ER_NO_SUCH_TABLE = 1146;
exports.ER_NONEXISTING_TABLE_GRANT = 1147;
exports.ER_NOT_ALLOWED_COMMAND = 1148;
exports.ER_SYNTAX_ERROR = 1149;
exports.ER_UNUSED1 = 1150;
exports.ER_UNUSED2 = 1151;
exports.ER_ABORTING_CONNECTION = 1152;
exports.ER_NET_PACKET_TOO_LARGE = 1153;
exports.ER_NET_READ_ERROR_FROM_PIPE = 1154;
exports.ER_NET_FCNTL_ERROR = 1155;
exports.ER_NET_PACKETS_OUT_OF_ORDER = 1156;
exports.ER_NET_UNCOMPRESS_ERROR = 1157;
exports.ER_NET_READ_ERROR = 1158;
exports.ER_NET_READ_INTERRUPTED = 1159;
exports.ER_NET_ERROR_ON_WRITE = 1160;
exports.ER_NET_WRITE_INTERRUPTED = 1161;
exports.ER_TOO_LONG_STRING = 1162;
exports.ER_TABLE_CANT_HANDLE_BLOB = 1163;
exports.ER_TABLE_CANT_HANDLE_AUTO_INCREMENT = 1164;
exports.ER_UNUSED3 = 1165;
exports.ER_WRONG_COLUMN_NAME = 1166;
exports.ER_WRONG_KEY_COLUMN = 1167;
exports.ER_WRONG_MRG_TABLE = 1168;
exports.ER_DUP_UNIQUE = 1169;
exports.ER_BLOB_KEY_WITHOUT_LENGTH = 1170;
exports.ER_PRIMARY_CANT_HAVE_NULL = 1171;
exports.ER_TOO_MANY_ROWS = 1172;
exports.ER_REQUIRES_PRIMARY_KEY = 1173;
exports.ER_NO_RAID_COMPILED = 1174;
exports.ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE = 1175;
exports.ER_KEY_DOES_NOT_EXITS = 1176;
exports.ER_CHECK_NO_SUCH_TABLE = 1177;
exports.ER_CHECK_NOT_IMPLEMENTED = 1178;
exports.ER_CANT_DO_THIS_DURING_AN_TRANSACTION = 1179;
exports.ER_ERROR_DURING_COMMIT = 1180;
exports.ER_ERROR_DURING_ROLLBACK = 1181;
exports.ER_ERROR_DURING_FLUSH_LOGS = 1182;
exports.ER_ERROR_DURING_CHECKPOINT = 1183;
exports.ER_NEW_ABORTING_CONNECTION = 1184;
exports.ER_DUMP_NOT_IMPLEMENTED = 1185;
exports.ER_FLUSH_MASTER_BINLOG_CLOSED = 1186;
exports.ER_INDEX_REBUILD = 1187;
exports.ER_SOURCE = 1188;
exports.ER_SOURCE_NET_READ = 1189;
exports.ER_SOURCE_NET_WRITE = 1190;
exports.ER_FT_MATCHING_KEY_NOT_FOUND = 1191;
exports.ER_LOCK_OR_ACTIVE_TRANSACTION = 1192;
exports.ER_UNKNOWN_SYSTEM_VARIABLE = 1193;
exports.ER_CRASHED_ON_USAGE = 1194;
exports.ER_CRASHED_ON_REPAIR = 1195;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK = 1196;
exports.ER_TRANS_CACHE_FULL = 1197;
exports.ER_SLAVE_MUST_STOP = 1198;
exports.ER_REPLICA_NOT_RUNNING = 1199;
exports.ER_BAD_REPLICA = 1200;
exports.ER_CONNECTION_METADATA = 1201;
exports.ER_REPLICA_THREAD = 1202;
exports.ER_TOO_MANY_USER_CONNECTIONS = 1203;
exports.ER_SET_CONSTANTS_ONLY = 1204;
exports.ER_LOCK_WAIT_TIMEOUT = 1205;
exports.ER_LOCK_TABLE_FULL = 1206;
exports.ER_READ_ONLY_TRANSACTION = 1207;
exports.ER_DROP_DB_WITH_READ_LOCK = 1208;
exports.ER_CREATE_DB_WITH_READ_LOCK = 1209;
exports.ER_WRONG_ARGUMENTS = 1210;
exports.ER_NO_PERMISSION_TO_CREATE_USER = 1211;
exports.ER_UNION_TABLES_IN_DIFFERENT_DIR = 1212;
exports.ER_LOCK_DEADLOCK = 1213;
exports.ER_TABLE_CANT_HANDLE_FT = 1214;
exports.ER_CANNOT_ADD_FOREIGN = 1215;
exports.ER_NO_REFERENCED_ROW = 1216;
exports.ER_ROW_IS_REFERENCED = 1217;
exports.ER_CONNECT_TO_SOURCE = 1218;
exports.ER_QUERY_ON_MASTER = 1219;
exports.ER_ERROR_WHEN_EXECUTING_COMMAND = 1220;
exports.ER_WRONG_USAGE = 1221;
exports.ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT = 1222;
exports.ER_CANT_UPDATE_WITH_READLOCK = 1223;
exports.ER_MIXING_NOT_ALLOWED = 1224;
exports.ER_DUP_ARGUMENT = 1225;
exports.ER_USER_LIMIT_REACHED = 1226;
exports.ER_SPECIFIC_ACCESS_DENIED_ERROR = 1227;
exports.ER_LOCAL_VARIABLE = 1228;
exports.ER_GLOBAL_VARIABLE = 1229;
exports.ER_NO_DEFAULT = 1230;
exports.ER_WRONG_VALUE_FOR_VAR = 1231;
exports.ER_WRONG_TYPE_FOR_VAR = 1232;
exports.ER_VAR_CANT_BE_READ = 1233;
exports.ER_CANT_USE_OPTION_HERE = 1234;
exports.ER_NOT_SUPPORTED_YET = 1235;
exports.ER_SOURCE_FATAL_ERROR_READING_BINLOG = 1236;
exports.ER_REPLICA_IGNORED_TABLE = 1237;
exports.ER_INCORRECT_GLOBAL_LOCAL_VAR = 1238;
exports.ER_WRONG_FK_DEF = 1239;
exports.ER_KEY_REF_DO_NOT_MATCH_TABLE_REF = 1240;
exports.ER_OPERAND_COLUMNS = 1241;
exports.ER_SUBQUERY_NO_1_ROW = 1242;
exports.ER_UNKNOWN_STMT_HANDLER = 1243;
exports.ER_CORRUPT_HELP_DB = 1244;
exports.ER_CYCLIC_REFERENCE = 1245;
exports.ER_AUTO_CONVERT = 1246;
exports.ER_ILLEGAL_REFERENCE = 1247;
exports.ER_DERIVED_MUST_HAVE_ALIAS = 1248;
exports.ER_SELECT_REDUCED = 1249;
exports.ER_TABLENAME_NOT_ALLOWED_HERE = 1250;
exports.ER_NOT_SUPPORTED_AUTH_MODE = 1251;
exports.ER_SPATIAL_CANT_HAVE_NULL = 1252;
exports.ER_COLLATION_CHARSET_MISMATCH = 1253;
exports.ER_SLAVE_WAS_RUNNING = 1254;
exports.ER_SLAVE_WAS_NOT_RUNNING = 1255;
exports.ER_TOO_BIG_FOR_UNCOMPRESS = 1256;
exports.ER_ZLIB_Z_MEM_ERROR = 1257;
exports.ER_ZLIB_Z_BUF_ERROR = 1258;
exports.ER_ZLIB_Z_DATA_ERROR = 1259;
exports.ER_CUT_VALUE_GROUP_CONCAT = 1260;
exports.ER_WARN_TOO_FEW_RECORDS = 1261;
exports.ER_WARN_TOO_MANY_RECORDS = 1262;
exports.ER_WARN_NULL_TO_NOTNULL = 1263;
exports.ER_WARN_DATA_OUT_OF_RANGE = 1264;
exports.WARN_DATA_TRUNCATED = 1265;
exports.ER_WARN_USING_OTHER_HANDLER = 1266;
exports.ER_CANT_AGGREGATE_2COLLATIONS = 1267;
exports.ER_DROP_USER = 1268;
exports.ER_REVOKE_GRANTS = 1269;
exports.ER_CANT_AGGREGATE_3COLLATIONS = 1270;
exports.ER_CANT_AGGREGATE_NCOLLATIONS = 1271;
exports.ER_VARIABLE_IS_NOT_STRUCT = 1272;
exports.ER_UNKNOWN_COLLATION = 1273;
exports.ER_REPLICA_IGNORED_SSL_PARAMS = 1274;
exports.ER_SERVER_IS_IN_SECURE_AUTH_MODE = 1275;
exports.ER_WARN_FIELD_RESOLVED = 1276;
exports.ER_BAD_REPLICA_UNTIL_COND = 1277;
exports.ER_MISSING_SKIP_REPLICA = 1278;
exports.ER_UNTIL_COND_IGNORED = 1279;
exports.ER_WRONG_NAME_FOR_INDEX = 1280;
exports.ER_WRONG_NAME_FOR_CATALOG = 1281;
exports.ER_WARN_QC_RESIZE = 1282;
exports.ER_BAD_FT_COLUMN = 1283;
exports.ER_UNKNOWN_KEY_CACHE = 1284;
exports.ER_WARN_HOSTNAME_WONT_WORK = 1285;
exports.ER_UNKNOWN_STORAGE_ENGINE = 1286;
exports.ER_WARN_DEPRECATED_SYNTAX = 1287;
exports.ER_NON_UPDATABLE_TABLE = 1288;
exports.ER_FEATURE_DISABLED = 1289;
exports.ER_OPTION_PREVENTS_STATEMENT = 1290;
exports.ER_DUPLICATED_VALUE_IN_TYPE = 1291;
exports.ER_TRUNCATED_WRONG_VALUE = 1292;
exports.ER_TOO_MUCH_AUTO_TIMESTAMP_COLS = 1293;
exports.ER_INVALID_ON_UPDATE = 1294;
exports.ER_UNSUPPORTED_PS = 1295;
exports.ER_GET_ERRMSG = 1296;
exports.ER_GET_TEMPORARY_ERRMSG = 1297;
exports.ER_UNKNOWN_TIME_ZONE = 1298;
exports.ER_WARN_INVALID_TIMESTAMP = 1299;
exports.ER_INVALID_CHARACTER_STRING = 1300;
exports.ER_WARN_ALLOWED_PACKET_OVERFLOWED = 1301;
exports.ER_CONFLICTING_DECLARATIONS = 1302;
exports.ER_SP_NO_RECURSIVE_CREATE = 1303;
exports.ER_SP_ALREADY_EXISTS = 1304;
exports.ER_SP_DOES_NOT_EXIST = 1305;
exports.ER_SP_DROP_FAILED = 1306;
exports.ER_SP_STORE_FAILED = 1307;
exports.ER_SP_LILABEL_MISMATCH = 1308;
exports.ER_SP_LABEL_REDEFINE = 1309;
exports.ER_SP_LABEL_MISMATCH = 1310;
exports.ER_SP_UNINIT_VAR = 1311;
exports.ER_SP_BADSELECT = 1312;
exports.ER_SP_BADRETURN = 1313;
exports.ER_SP_BADSTATEMENT = 1314;
exports.ER_UPDATE_LOG_DEPRECATED_IGNORED = 1315;
exports.ER_UPDATE_LOG_DEPRECATED_TRANSLATED = 1316;
exports.ER_QUERY_INTERRUPTED = 1317;
exports.ER_SP_WRONG_NO_OF_ARGS = 1318;
exports.ER_SP_COND_MISMATCH = 1319;
exports.ER_SP_NORETURN = 1320;
exports.ER_SP_NORETURNEND = 1321;
exports.ER_SP_BAD_CURSOR_QUERY = 1322;
exports.ER_SP_BAD_CURSOR_SELECT = 1323;
exports.ER_SP_CURSOR_MISMATCH = 1324;
exports.ER_SP_CURSOR_ALREADY_OPEN = 1325;
exports.ER_SP_CURSOR_NOT_OPEN = 1326;
exports.ER_SP_UNDECLARED_VAR = 1327;
exports.ER_SP_WRONG_NO_OF_FETCH_ARGS = 1328;
exports.ER_SP_FETCH_NO_DATA = 1329;
exports.ER_SP_DUP_PARAM = 1330;
exports.ER_SP_DUP_VAR = 1331;
exports.ER_SP_DUP_COND = 1332;
exports.ER_SP_DUP_CURS = 1333;
exports.ER_SP_CANT_ALTER = 1334;
exports.ER_SP_SUBSELECT_NYI = 1335;
exports.ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG = 1336;
exports.ER_SP_VARCOND_AFTER_CURSHNDLR = 1337;
exports.ER_SP_CURSOR_AFTER_HANDLER = 1338;
exports.ER_SP_CASE_NOT_FOUND = 1339;
exports.ER_FPARSER_TOO_BIG_FILE = 1340;
exports.ER_FPARSER_BAD_HEADER = 1341;
exports.ER_FPARSER_EOF_IN_COMMENT = 1342;
exports.ER_FPARSER_ERROR_IN_PARAMETER = 1343;
exports.ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER = 1344;
exports.ER_VIEW_NO_EXPLAIN = 1345;
exports.ER_FRM_UNKNOWN_TYPE = 1346;
exports.ER_WRONG_OBJECT = 1347;
exports.ER_NONUPDATEABLE_COLUMN = 1348;
exports.ER_VIEW_SELECT_DERIVED = 1349;
exports.ER_VIEW_SELECT_CLAUSE = 1350;
exports.ER_VIEW_SELECT_VARIABLE = 1351;
exports.ER_VIEW_SELECT_TMPTABLE = 1352;
exports.ER_VIEW_WRONG_LIST = 1353;
exports.ER_WARN_VIEW_MERGE = 1354;
exports.ER_WARN_VIEW_WITHOUT_KEY = 1355;
exports.ER_VIEW_INVALID = 1356;
exports.ER_SP_NO_DROP_SP = 1357;
exports.ER_SP_GOTO_IN_HNDLR = 1358;
exports.ER_TRG_ALREADY_EXISTS = 1359;
exports.ER_TRG_DOES_NOT_EXIST = 1360;
exports.ER_TRG_ON_VIEW_OR_TEMP_TABLE = 1361;
exports.ER_TRG_CANT_CHANGE_ROW = 1362;
exports.ER_TRG_NO_SUCH_ROW_IN_TRG = 1363;
exports.ER_NO_DEFAULT_FOR_FIELD = 1364;
exports.ER_DIVISION_BY_ZERO = 1365;
exports.ER_TRUNCATED_WRONG_VALUE_FOR_FIELD = 1366;
exports.ER_ILLEGAL_VALUE_FOR_TYPE = 1367;
exports.ER_VIEW_NONUPD_CHECK = 1368;
exports.ER_VIEW_CHECK_FAILED = 1369;
exports.ER_PROCACCESS_DENIED_ERROR = 1370;
exports.ER_RELAY_LOG_FAIL = 1371;
exports.ER_PASSWD_LENGTH = 1372;
exports.ER_UNKNOWN_TARGET_BINLOG = 1373;
exports.ER_IO_ERR_LOG_INDEX_READ = 1374;
exports.ER_BINLOG_PURGE_PROHIBITED = 1375;
exports.ER_FSEEK_FAIL = 1376;
exports.ER_BINLOG_PURGE_FATAL_ERR = 1377;
exports.ER_LOG_IN_USE = 1378;
exports.ER_LOG_PURGE_UNKNOWN_ERR = 1379;
exports.ER_RELAY_LOG_INIT = 1380;
exports.ER_NO_BINARY_LOGGING = 1381;
exports.ER_RESERVED_SYNTAX = 1382;
exports.ER_WSAS_FAILED = 1383;
exports.ER_DIFF_GROUPS_PROC = 1384;
exports.ER_NO_GROUP_FOR_PROC = 1385;
exports.ER_ORDER_WITH_PROC = 1386;
exports.ER_LOGGING_PROHIBIT_CHANGING_OF = 1387;
exports.ER_NO_FILE_MAPPING = 1388;
exports.ER_WRONG_MAGIC = 1389;
exports.ER_PS_MANY_PARAM = 1390;
exports.ER_KEY_PART_0 = 1391;
exports.ER_VIEW_CHECKSUM = 1392;
exports.ER_VIEW_MULTIUPDATE = 1393;
exports.ER_VIEW_NO_INSERT_FIELD_LIST = 1394;
exports.ER_VIEW_DELETE_MERGE_VIEW = 1395;
exports.ER_CANNOT_USER = 1396;
exports.ER_XAER_NOTA = 1397;
exports.ER_XAER_INVAL = 1398;
exports.ER_XAER_RMFAIL = 1399;
exports.ER_XAER_OUTSIDE = 1400;
exports.ER_XAER_RMERR = 1401;
exports.ER_XA_RBROLLBACK = 1402;
exports.ER_NONEXISTING_PROC_GRANT = 1403;
exports.ER_PROC_AUTO_GRANT_FAIL = 1404;
exports.ER_PROC_AUTO_REVOKE_FAIL = 1405;
exports.ER_DATA_TOO_LONG = 1406;
exports.ER_SP_BAD_SQLSTATE = 1407;
exports.ER_STARTUP = 1408;
exports.ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR = 1409;
exports.ER_CANT_CREATE_USER_WITH_GRANT = 1410;
exports.ER_WRONG_VALUE_FOR_TYPE = 1411;
exports.ER_TABLE_DEF_CHANGED = 1412;
exports.ER_SP_DUP_HANDLER = 1413;
exports.ER_SP_NOT_VAR_ARG = 1414;
exports.ER_SP_NO_RETSET = 1415;
exports.ER_CANT_CREATE_GEOMETRY_OBJECT = 1416;
exports.ER_FAILED_ROUTINE_BREAK_BINLOG = 1417;
exports.ER_BINLOG_UNSAFE_ROUTINE = 1418;
exports.ER_BINLOG_CREATE_ROUTINE_NEED_SUPER = 1419;
exports.ER_EXEC_STMT_WITH_OPEN_CURSOR = 1420;
exports.ER_STMT_HAS_NO_OPEN_CURSOR = 1421;
exports.ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG = 1422;
exports.ER_NO_DEFAULT_FOR_VIEW_FIELD = 1423;
exports.ER_SP_NO_RECURSION = 1424;
exports.ER_TOO_BIG_SCALE = 1425;
exports.ER_TOO_BIG_PRECISION = 1426;
exports.ER_M_BIGGER_THAN_D = 1427;
exports.ER_WRONG_LOCK_OF_SYSTEM_TABLE = 1428;
exports.ER_CONNECT_TO_FOREIGN_DATA_SOURCE = 1429;
exports.ER_QUERY_ON_FOREIGN_DATA_SOURCE = 1430;
exports.ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST = 1431;
exports.ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE = 1432;
exports.ER_FOREIGN_DATA_STRING_INVALID = 1433;
exports.ER_CANT_CREATE_FEDERATED_TABLE = 1434;
exports.ER_TRG_IN_WRONG_SCHEMA = 1435;
exports.ER_STACK_OVERRUN_NEED_MORE = 1436;
exports.ER_TOO_LONG_BODY = 1437;
exports.ER_WARN_CANT_DROP_DEFAULT_KEYCACHE = 1438;
exports.ER_TOO_BIG_DISPLAYWIDTH = 1439;
exports.ER_XAER_DUPID = 1440;
exports.ER_DATETIME_FUNCTION_OVERFLOW = 1441;
exports.ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG = 1442;
exports.ER_VIEW_PREVENT_UPDATE = 1443;
exports.ER_PS_NO_RECURSION = 1444;
exports.ER_SP_CANT_SET_AUTOCOMMIT = 1445;
exports.ER_MALFORMED_DEFINER = 1446;
exports.ER_VIEW_FRM_NO_USER = 1447;
exports.ER_VIEW_OTHER_USER = 1448;
exports.ER_NO_SUCH_USER = 1449;
exports.ER_FORBID_SCHEMA_CHANGE = 1450;
exports.ER_ROW_IS_REFERENCED_2 = 1451;
exports.ER_NO_REFERENCED_ROW_2 = 1452;
exports.ER_SP_BAD_VAR_SHADOW = 1453;
exports.ER_TRG_NO_DEFINER = 1454;
exports.ER_OLD_FILE_FORMAT = 1455;
exports.ER_SP_RECURSION_LIMIT = 1456;
exports.ER_SP_PROC_TABLE_CORRUPT = 1457;
exports.ER_SP_WRONG_NAME = 1458;
exports.ER_TABLE_NEEDS_UPGRADE = 1459;
exports.ER_SP_NO_AGGREGATE = 1460;
exports.ER_MAX_PREPARED_STMT_COUNT_REACHED = 1461;
exports.ER_VIEW_RECURSIVE = 1462;
exports.ER_NON_GROUPING_FIELD_USED = 1463;
exports.ER_TABLE_CANT_HANDLE_SPKEYS = 1464;
exports.ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA = 1465;
exports.ER_REMOVED_SPACES = 1466;
exports.ER_AUTOINC_READ_FAILED = 1467;
exports.ER_USERNAME = 1468;
exports.ER_HOSTNAME = 1469;
exports.ER_WRONG_STRING_LENGTH = 1470;
exports.ER_NON_INSERTABLE_TABLE = 1471;
exports.ER_ADMIN_WRONG_MRG_TABLE = 1472;
exports.ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT = 1473;
exports.ER_NAME_BECOMES_EMPTY = 1474;
exports.ER_AMBIGUOUS_FIELD_TERM = 1475;
exports.ER_FOREIGN_SERVER_EXISTS = 1476;
exports.ER_FOREIGN_SERVER_DOESNT_EXIST = 1477;
exports.ER_ILLEGAL_HA_CREATE_OPTION = 1478;
exports.ER_PARTITION_REQUIRES_VALUES_ERROR = 1479;
exports.ER_PARTITION_WRONG_VALUES_ERROR = 1480;
exports.ER_PARTITION_MAXVALUE_ERROR = 1481;
exports.ER_PARTITION_SUBPARTITION_ERROR = 1482;
exports.ER_PARTITION_SUBPART_MIX_ERROR = 1483;
exports.ER_PARTITION_WRONG_NO_PART_ERROR = 1484;
exports.ER_PARTITION_WRONG_NO_SUBPART_ERROR = 1485;
exports.ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR = 1486;
exports.ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR = 1487;
exports.ER_FIELD_NOT_FOUND_PART_ERROR = 1488;
exports.ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR = 1489;
exports.ER_INCONSISTENT_PARTITION_INFO_ERROR = 1490;
exports.ER_PARTITION_FUNC_NOT_ALLOWED_ERROR = 1491;
exports.ER_PARTITIONS_MUST_BE_DEFINED_ERROR = 1492;
exports.ER_RANGE_NOT_INCREASING_ERROR = 1493;
exports.ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR = 1494;
exports.ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR = 1495;
exports.ER_PARTITION_ENTRY_ERROR = 1496;
exports.ER_MIX_HANDLER_ERROR = 1497;
exports.ER_PARTITION_NOT_DEFINED_ERROR = 1498;
exports.ER_TOO_MANY_PARTITIONS_ERROR = 1499;
exports.ER_SUBPARTITION_ERROR = 1500;
exports.ER_CANT_CREATE_HANDLER_FILE = 1501;
exports.ER_BLOB_FIELD_IN_PART_FUNC_ERROR = 1502;
exports.ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF = 1503;
exports.ER_NO_PARTS_ERROR = 1504;
exports.ER_PARTITION_MGMT_ON_NONPARTITIONED = 1505;
exports.ER_FOREIGN_KEY_ON_PARTITIONED = 1506;
exports.ER_DROP_PARTITION_NON_EXISTENT = 1507;
exports.ER_DROP_LAST_PARTITION = 1508;
exports.ER_COALESCE_ONLY_ON_HASH_PARTITION = 1509;
exports.ER_REORG_HASH_ONLY_ON_SAME_NO = 1510;
exports.ER_REORG_NO_PARAM_ERROR = 1511;
exports.ER_ONLY_ON_RANGE_LIST_PARTITION = 1512;
exports.ER_ADD_PARTITION_SUBPART_ERROR = 1513;
exports.ER_ADD_PARTITION_NO_NEW_PARTITION = 1514;
exports.ER_COALESCE_PARTITION_NO_PARTITION = 1515;
exports.ER_REORG_PARTITION_NOT_EXIST = 1516;
exports.ER_SAME_NAME_PARTITION = 1517;
exports.ER_NO_BINLOG_ERROR = 1518;
exports.ER_CONSECUTIVE_REORG_PARTITIONS = 1519;
exports.ER_REORG_OUTSIDE_RANGE = 1520;
exports.ER_PARTITION_FUNCTION_FAILURE = 1521;
exports.ER_PART_STATE_ERROR = 1522;
exports.ER_LIMITED_PART_RANGE = 1523;
exports.ER_PLUGIN_IS_NOT_LOADED = 1524;
exports.ER_WRONG_VALUE = 1525;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE = 1526;
exports.ER_FILEGROUP_OPTION_ONLY_ONCE = 1527;
exports.ER_CREATE_FILEGROUP_FAILED = 1528;
exports.ER_DROP_FILEGROUP_FAILED = 1529;
exports.ER_TABLESPACE_AUTO_EXTEND_ERROR = 1530;
exports.ER_WRONG_SIZE_NUMBER = 1531;
exports.ER_SIZE_OVERFLOW_ERROR = 1532;
exports.ER_ALTER_FILEGROUP_FAILED = 1533;
exports.ER_BINLOG_ROW_LOGGING_FAILED = 1534;
exports.ER_BINLOG_ROW_WRONG_TABLE_DEF = 1535;
exports.ER_BINLOG_ROW_RBR_TO_SBR = 1536;
exports.ER_EVENT_ALREADY_EXISTS = 1537;
exports.ER_EVENT_STORE_FAILED = 1538;
exports.ER_EVENT_DOES_NOT_EXIST = 1539;
exports.ER_EVENT_CANT_ALTER = 1540;
exports.ER_EVENT_DROP_FAILED = 1541;
exports.ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG = 1542;
exports.ER_EVENT_ENDS_BEFORE_STARTS = 1543;
exports.ER_EVENT_EXEC_TIME_IN_THE_PAST = 1544;
exports.ER_EVENT_OPEN_TABLE_FAILED = 1545;
exports.ER_EVENT_NEITHER_M_EXPR_NOR_M_AT = 1546;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED = 1547;
exports.ER_CANNOT_LOAD_FROM_TABLE = 1548;
exports.ER_EVENT_CANNOT_DELETE = 1549;
exports.ER_EVENT_COMPILE_ERROR = 1550;
exports.ER_EVENT_SAME_NAME = 1551;
exports.ER_EVENT_DATA_TOO_LONG = 1552;
exports.ER_DROP_INDEX_FK = 1553;
exports.ER_WARN_DEPRECATED_SYNTAX_WITH_VER = 1554;
exports.ER_CANT_WRITE_LOCK_LOG_TABLE = 1555;
exports.ER_CANT_LOCK_LOG_TABLE = 1556;
exports.ER_FOREIGN_DUPLICATE_KEY = 1557;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE = 1558;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR = 1559;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1560;
exports.ER_NDB_CANT_SWITCH_BINLOG_FORMAT = 1561;
exports.ER_PARTITION_NO_TEMPORARY = 1562;
exports.ER_PARTITION_CONST_DOMAIN_ERROR = 1563;
exports.ER_PARTITION_FUNCTION_IS_NOT_ALLOWED = 1564;
exports.ER_DDL_LOG_ERROR = 1565;
exports.ER_NULL_IN_VALUES_LESS_THAN = 1566;
exports.ER_WRONG_PARTITION_NAME = 1567;
exports.ER_CANT_CHANGE_TX_CHARACTERISTICS = 1568;
exports.ER_DUP_ENTRY_AUTOINCREMENT_CASE = 1569;
exports.ER_EVENT_MODIFY_QUEUE_ERROR = 1570;
exports.ER_EVENT_SET_VAR_ERROR = 1571;
exports.ER_PARTITION_MERGE_ERROR = 1572;
exports.ER_CANT_ACTIVATE_LOG = 1573;
exports.ER_RBR_NOT_AVAILABLE = 1574;
exports.ER_BASE64_DECODE_ERROR = 1575;
exports.ER_EVENT_RECURSION_FORBIDDEN = 1576;
exports.ER_EVENTS_DB_ERROR = 1577;
exports.ER_ONLY_INTEGERS_ALLOWED = 1578;
exports.ER_UNSUPORTED_LOG_ENGINE = 1579;
exports.ER_BAD_LOG_STATEMENT = 1580;
exports.ER_CANT_RENAME_LOG_TABLE = 1581;
exports.ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT = 1582;
exports.ER_WRONG_PARAMETERS_TO_NATIVE_FCT = 1583;
exports.ER_WRONG_PARAMETERS_TO_STORED_FCT = 1584;
exports.ER_NATIVE_FCT_NAME_COLLISION = 1585;
exports.ER_DUP_ENTRY_WITH_KEY_NAME = 1586;
exports.ER_BINLOG_PURGE_EMFILE = 1587;
exports.ER_EVENT_CANNOT_CREATE_IN_THE_PAST = 1588;
exports.ER_EVENT_CANNOT_ALTER_IN_THE_PAST = 1589;
exports.ER_SLAVE_INCIDENT = 1590;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT = 1591;
exports.ER_BINLOG_UNSAFE_STATEMENT = 1592;
exports.ER_BINLOG_FATAL_ERROR = 1593;
exports.ER_SLAVE_RELAY_LOG_READ_FAILURE = 1594;
exports.ER_SLAVE_RELAY_LOG_WRITE_FAILURE = 1595;
exports.ER_SLAVE_CREATE_EVENT_FAILURE = 1596;
exports.ER_SLAVE_MASTER_COM_FAILURE = 1597;
exports.ER_BINLOG_LOGGING_IMPOSSIBLE = 1598;
exports.ER_VIEW_NO_CREATION_CTX = 1599;
exports.ER_VIEW_INVALID_CREATION_CTX = 1600;
exports.ER_SR_INVALID_CREATION_CTX = 1601;
exports.ER_TRG_CORRUPTED_FILE = 1602;
exports.ER_TRG_NO_CREATION_CTX = 1603;
exports.ER_TRG_INVALID_CREATION_CTX = 1604;
exports.ER_EVENT_INVALID_CREATION_CTX = 1605;
exports.ER_TRG_CANT_OPEN_TABLE = 1606;
exports.ER_CANT_CREATE_SROUTINE = 1607;
exports.ER_NEVER_USED = 1608;
exports.ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT = 1609;
exports.ER_REPLICA_CORRUPT_EVENT = 1610;
exports.ER_LOAD_DATA_INVALID_COLUMN = 1611;
exports.ER_LOG_PURGE_NO_FILE = 1612;
exports.ER_XA_RBTIMEOUT = 1613;
exports.ER_XA_RBDEADLOCK = 1614;
exports.ER_NEED_REPREPARE = 1615;
exports.ER_DELAYED_NOT_SUPPORTED = 1616;
exports.WARN_NO_CONNECTION_METADATA = 1617;
exports.WARN_OPTION_IGNORED = 1618;
exports.ER_PLUGIN_DELETE_BUILTIN = 1619;
exports.WARN_PLUGIN_BUSY = 1620;
exports.ER_VARIABLE_IS_READONLY = 1621;
exports.ER_WARN_ENGINE_TRANSACTION_ROLLBACK = 1622;
exports.ER_SLAVE_HEARTBEAT_FAILURE = 1623;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE = 1624;
exports.ER_NDB_REPLICATION_SCHEMA_ERROR = 1625;
exports.ER_CONFLICT_FN_PARSE_ERROR = 1626;
exports.ER_EXCEPTIONS_WRITE_ERROR = 1627;
exports.ER_TOO_LONG_TABLE_COMMENT = 1628;
exports.ER_TOO_LONG_FIELD_COMMENT = 1629;
exports.ER_FUNC_INEXISTENT_NAME_COLLISION = 1630;
exports.ER_DATABASE_NAME = 1631;
exports.ER_TABLE_NAME = 1632;
exports.ER_PARTITION_NAME = 1633;
exports.ER_SUBPARTITION_NAME = 1634;
exports.ER_TEMPORARY_NAME = 1635;
exports.ER_RENAMED_NAME = 1636;
exports.ER_TOO_MANY_CONCURRENT_TRXS = 1637;
exports.WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED = 1638;
exports.ER_DEBUG_SYNC_TIMEOUT = 1639;
exports.ER_DEBUG_SYNC_HIT_LIMIT = 1640;
exports.ER_DUP_SIGNAL_SET = 1641;
exports.ER_SIGNAL_WARN = 1642;
exports.ER_SIGNAL_NOT_FOUND = 1643;
exports.ER_SIGNAL_EXCEPTION = 1644;
exports.ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER = 1645;
exports.ER_SIGNAL_BAD_CONDITION_TYPE = 1646;
exports.WARN_COND_ITEM_TRUNCATED = 1647;
exports.ER_COND_ITEM_TOO_LONG = 1648;
exports.ER_UNKNOWN_LOCALE = 1649;
exports.ER_REPLICA_IGNORE_SERVER_IDS = 1650;
exports.ER_QUERY_CACHE_DISABLED = 1651;
exports.ER_SAME_NAME_PARTITION_FIELD = 1652;
exports.ER_PARTITION_COLUMN_LIST_ERROR = 1653;
exports.ER_WRONG_TYPE_COLUMN_VALUE_ERROR = 1654;
exports.ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR = 1655;
exports.ER_MAXVALUE_IN_VALUES_IN = 1656;
exports.ER_TOO_MANY_VALUES_ERROR = 1657;
exports.ER_ROW_SINGLE_PARTITION_FIELD_ERROR = 1658;
exports.ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD = 1659;
exports.ER_PARTITION_FIELDS_TOO_LONG = 1660;
exports.ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE = 1661;
exports.ER_BINLOG_ROW_MODE_AND_STMT_ENGINE = 1662;
exports.ER_BINLOG_UNSAFE_AND_STMT_ENGINE = 1663;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE = 1664;
exports.ER_BINLOG_STMT_MODE_AND_ROW_ENGINE = 1665;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_MODE = 1666;
exports.ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1667;
exports.ER_BINLOG_UNSAFE_LIMIT = 1668;
exports.ER_UNUSED4 = 1669;
exports.ER_BINLOG_UNSAFE_SYSTEM_TABLE = 1670;
exports.ER_BINLOG_UNSAFE_AUTOINC_COLUMNS = 1671;
exports.ER_BINLOG_UNSAFE_UDF = 1672;
exports.ER_BINLOG_UNSAFE_SYSTEM_VARIABLE = 1673;
exports.ER_BINLOG_UNSAFE_SYSTEM_FUNCTION = 1674;
exports.ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS = 1675;
exports.ER_MESSAGE_AND_STATEMENT = 1676;
exports.ER_SLAVE_CONVERSION_FAILED = 1677;
exports.ER_REPLICA_CANT_CREATE_CONVERSION = 1678;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1679;
exports.ER_PATH_LENGTH = 1680;
exports.ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT = 1681;
exports.ER_WRONG_NATIVE_TABLE_STRUCTURE = 1682;
exports.ER_WRONG_PERFSCHEMA_USAGE = 1683;
exports.ER_WARN_I_S_SKIPPED_TABLE = 1684;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1685;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1686;
exports.ER_SPATIAL_MUST_HAVE_GEOM_COL = 1687;
exports.ER_TOO_LONG_INDEX_COMMENT = 1688;
exports.ER_LOCK_ABORTED = 1689;
exports.ER_DATA_OUT_OF_RANGE = 1690;
exports.ER_WRONG_SPVAR_TYPE_IN_LIMIT = 1691;
exports.ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1692;
exports.ER_BINLOG_UNSAFE_MIXED_STATEMENT = 1693;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1694;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1695;
exports.ER_FAILED_READ_FROM_PAR_FILE = 1696;
exports.ER_VALUES_IS_NOT_INT_TYPE_ERROR = 1697;
exports.ER_ACCESS_DENIED_NO_PASSWORD_ERROR = 1698;
exports.ER_SET_PASSWORD_AUTH_PLUGIN = 1699;
exports.ER_GRANT_PLUGIN_USER_EXISTS = 1700;
exports.ER_TRUNCATE_ILLEGAL_FK = 1701;
exports.ER_PLUGIN_IS_PERMANENT = 1702;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN = 1703;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX = 1704;
exports.ER_STMT_CACHE_FULL = 1705;
exports.ER_MULTI_UPDATE_KEY_CONFLICT = 1706;
exports.ER_TABLE_NEEDS_REBUILD = 1707;
exports.WARN_OPTION_BELOW_LIMIT = 1708;
exports.ER_INDEX_COLUMN_TOO_LONG = 1709;
exports.ER_ERROR_IN_TRIGGER_BODY = 1710;
exports.ER_ERROR_IN_UNKNOWN_TRIGGER_BODY = 1711;
exports.ER_INDEX_CORRUPT = 1712;
exports.ER_UNDO_RECORD_TOO_BIG = 1713;
exports.ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT = 1714;
exports.ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE = 1715;
exports.ER_BINLOG_UNSAFE_REPLACE_SELECT = 1716;
exports.ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT = 1717;
exports.ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT = 1718;
exports.ER_BINLOG_UNSAFE_UPDATE_IGNORE = 1719;
exports.ER_PLUGIN_NO_UNINSTALL = 1720;
exports.ER_PLUGIN_NO_INSTALL = 1721;
exports.ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT = 1722;
exports.ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC = 1723;
exports.ER_BINLOG_UNSAFE_INSERT_TWO_KEYS = 1724;
exports.ER_TABLE_IN_FK_CHECK = 1725;
exports.ER_UNSUPPORTED_ENGINE = 1726;
exports.ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST = 1727;
exports.ER_CANNOT_LOAD_FROM_TABLE_V2 = 1728;
exports.ER_SOURCE_DELAY_VALUE_OUT_OF_RANGE = 1729;
exports.ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT = 1730;
exports.ER_PARTITION_EXCHANGE_DIFFERENT_OPTION = 1731;
exports.ER_PARTITION_EXCHANGE_PART_TABLE = 1732;
exports.ER_PARTITION_EXCHANGE_TEMP_TABLE = 1733;
exports.ER_PARTITION_INSTEAD_OF_SUBPARTITION = 1734;
exports.ER_UNKNOWN_PARTITION = 1735;
exports.ER_TABLES_DIFFERENT_METADATA = 1736;
exports.ER_ROW_DOES_NOT_MATCH_PARTITION = 1737;
exports.ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX = 1738;
exports.ER_WARN_INDEX_NOT_APPLICABLE = 1739;
exports.ER_PARTITION_EXCHANGE_FOREIGN_KEY = 1740;
exports.ER_NO_SUCH_KEY_VALUE = 1741;
exports.ER_RPL_INFO_DATA_TOO_LONG = 1742;
exports.ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE = 1743;
exports.ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE = 1744;
exports.ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX = 1745;
exports.ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT = 1746;
exports.ER_PARTITION_CLAUSE_ON_NONPARTITIONED = 1747;
exports.ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET = 1748;
exports.ER_NO_SUCH_PARTITION = 1749;
exports.ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE = 1750;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE = 1751;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE = 1752;
exports.ER_MTA_FEATURE_IS_NOT_SUPPORTED = 1753;
exports.ER_MTA_UPDATED_DBS_GREATER_MAX = 1754;
exports.ER_MTA_CANT_PARALLEL = 1755;
exports.ER_MTA_INCONSISTENT_DATA = 1756;
exports.ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING = 1757;
exports.ER_DA_INVALID_CONDITION_NUMBER = 1758;
exports.ER_INSECURE_PLAIN_TEXT = 1759;
exports.ER_INSECURE_CHANGE_SOURCE = 1760;
exports.ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO = 1761;
exports.ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO = 1762;
exports.ER_SQLTHREAD_WITH_SECURE_REPLICA = 1763;
exports.ER_TABLE_HAS_NO_FT = 1764;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER = 1765;
exports.ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION = 1766;
exports.ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST = 1767;
exports.ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION = 1768;
exports.ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION = 1769;
exports.ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL = 1770;
exports.ER_SKIPPING_LOGGED_TRANSACTION = 1771;
exports.ER_MALFORMED_GTID_SET_SPECIFICATION = 1772;
exports.ER_MALFORMED_GTID_SET_ENCODING = 1773;
exports.ER_MALFORMED_GTID_SPECIFICATION = 1774;
exports.ER_GNO_EXHAUSTED = 1775;
exports.ER_BAD_REPLICA_AUTO_POSITION = 1776;
exports.ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF = 1777;
exports.ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET = 1778;
exports.ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON = 1779;
exports.ER_GTID_MODE_REQUIRES_BINLOG = 1780;
exports.ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF = 1781;
exports.ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON = 1782;
exports.ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF = 1783;
exports.ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF = 1784;
exports.ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE = 1785;
exports.ER_GTID_UNSAFE_CREATE_SELECT = 1786;
exports.ER_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRANSACTION = 1787;
exports.ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME = 1788;
exports.ER_SOURCE_HAS_PURGED_REQUIRED_GTIDS = 1789;
exports.ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID = 1790;
exports.ER_UNKNOWN_EXPLAIN_FORMAT = 1791;
exports.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION = 1792;
exports.ER_TOO_LONG_TABLE_PARTITION_COMMENT = 1793;
exports.ER_REPLICA_CONFIGURATION = 1794;
exports.ER_INNODB_FT_LIMIT = 1795;
exports.ER_INNODB_NO_FT_TEMP_TABLE = 1796;
exports.ER_INNODB_FT_WRONG_DOCID_COLUMN = 1797;
exports.ER_INNODB_FT_WRONG_DOCID_INDEX = 1798;
exports.ER_INNODB_ONLINE_LOG_TOO_BIG = 1799;
exports.ER_UNKNOWN_ALTER_ALGORITHM = 1800;
exports.ER_UNKNOWN_ALTER_LOCK = 1801;
exports.ER_MTA_CHANGE_SOURCE_CANT_RUN_WITH_GAPS = 1802;
exports.ER_MTA_RECOVERY_FAILURE = 1803;
exports.ER_MTA_RESET_WORKERS = 1804;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2 = 1805;
exports.ER_REPLICA_SILENT_RETRY_TRANSACTION = 1806;
exports.ER_DISCARD_FK_CHECKS_RUNNING = 1807;
exports.ER_TABLE_SCHEMA_MISMATCH = 1808;
exports.ER_TABLE_IN_SYSTEM_TABLESPACE = 1809;
exports.ER_IO_READ_ERROR = 1810;
exports.ER_IO_WRITE_ERROR = 1811;
exports.ER_TABLESPACE_MISSING = 1812;
exports.ER_TABLESPACE_EXISTS = 1813;
exports.ER_TABLESPACE_DISCARDED = 1814;
exports.ER_INTERNAL_ERROR = 1815;
exports.ER_INNODB_IMPORT_ERROR = 1816;
exports.ER_INNODB_INDEX_CORRUPT = 1817;
exports.ER_INVALID_YEAR_COLUMN_LENGTH = 1818;
exports.ER_NOT_VALID_PASSWORD = 1819;
exports.ER_MUST_CHANGE_PASSWORD = 1820;
exports.ER_FK_NO_INDEX_CHILD = 1821;
exports.ER_FK_NO_INDEX_PARENT = 1822;
exports.ER_FK_FAIL_ADD_SYSTEM = 1823;
exports.ER_FK_CANNOT_OPEN_PARENT = 1824;
exports.ER_FK_INCORRECT_OPTION = 1825;
exports.ER_FK_DUP_NAME = 1826;
exports.ER_PASSWORD_FORMAT = 1827;
exports.ER_FK_COLUMN_CANNOT_DROP = 1828;
exports.ER_FK_COLUMN_CANNOT_DROP_CHILD = 1829;
exports.ER_FK_COLUMN_NOT_NULL = 1830;
exports.ER_DUP_INDEX = 1831;
exports.ER_FK_COLUMN_CANNOT_CHANGE = 1832;
exports.ER_FK_COLUMN_CANNOT_CHANGE_CHILD = 1833;
exports.ER_UNUSED5 = 1834;
exports.ER_MALFORMED_PACKET = 1835;
exports.ER_READ_ONLY_MODE = 1836;
exports.ER_GTID_NEXT_TYPE_UNDEFINED_GTID = 1837;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SP = 1838;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF = 1839;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY = 1840;
exports.ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY = 1841;
exports.ER_GTID_PURGED_WAS_CHANGED = 1842;
exports.ER_GTID_EXECUTED_WAS_CHANGED = 1843;
exports.ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES = 1844;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED = 1845;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON = 1846;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY = 1847;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION = 1848;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME = 1849;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE = 1850;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK = 1851;
exports.ER_UNUSED6 = 1852;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK = 1853;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC = 1854;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS = 1855;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS = 1856;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS = 1857;
exports.ER_SQL_REPLICA_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE = 1858;
exports.ER_DUP_UNKNOWN_IN_INDEX = 1859;
exports.ER_IDENT_CAUSES_TOO_LONG_PATH = 1860;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL = 1861;
exports.ER_MUST_CHANGE_PASSWORD_LOGIN = 1862;
exports.ER_ROW_IN_WRONG_PARTITION = 1863;
exports.ER_MTA_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX = 1864;
exports.ER_INNODB_NO_FT_USES_PARSER = 1865;
exports.ER_BINLOG_LOGICAL_CORRUPTION = 1866;
exports.ER_WARN_PURGE_LOG_IN_USE = 1867;
exports.ER_WARN_PURGE_LOG_IS_ACTIVE = 1868;
exports.ER_AUTO_INCREMENT_CONFLICT = 1869;
exports.WARN_ON_BLOCKHOLE_IN_RBR = 1870;
exports.ER_REPLICA_CM_INIT_REPOSITORY = 1871;
exports.ER_REPLICA_AM_INIT_REPOSITORY = 1872;
exports.ER_ACCESS_DENIED_CHANGE_USER_ERROR = 1873;
exports.ER_INNODB_READ_ONLY = 1874;
exports.ER_STOP_REPLICA_SQL_THREAD_TIMEOUT = 1875;
exports.ER_STOP_REPLICA_IO_THREAD_TIMEOUT = 1876;
exports.ER_TABLE_CORRUPT = 1877;
exports.ER_TEMP_FILE_WRITE_FAILURE = 1878;
exports.ER_INNODB_FT_AUX_NOT_HEX_ID = 1879;
exports.ER_OLD_TEMPORALS_UPGRADED = 1880;
exports.ER_INNODB_FORCED_RECOVERY = 1881;
exports.ER_AES_INVALID_IV = 1882;
exports.ER_PLUGIN_CANNOT_BE_UNINSTALLED = 1883;
exports.ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_ASSIGNED_GTID = 1884;
exports.ER_REPLICA_HAS_MORE_GTIDS_THAN_SOURCE = 1885;
exports.ER_MISSING_KEY = 1886;
exports.WARN_NAMED_PIPE_ACCESS_EVERYONE = 1887;
exports.ER_FILE_CORRUPT = 3000;
exports.ER_ERROR_ON_SOURCE = 3001;
exports.ER_INCONSISTENT_ERROR = 3002;
exports.ER_STORAGE_ENGINE_NOT_LOADED = 3003;
exports.ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER = 3004;
exports.ER_WARN_LEGACY_SYNTAX_CONVERTED = 3005;
exports.ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN = 3006;
exports.ER_CANNOT_DISCARD_TEMPORARY_TABLE = 3007;
exports.ER_FK_DEPTH_EXCEEDED = 3008;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2 = 3009;
exports.ER_WARN_TRIGGER_DOESNT_HAVE_CREATED = 3010;
exports.ER_REFERENCED_TRG_DOES_NOT_EXIST = 3011;
exports.ER_EXPLAIN_NOT_SUPPORTED = 3012;
exports.ER_INVALID_FIELD_SIZE = 3013;
exports.ER_MISSING_HA_CREATE_OPTION = 3014;
exports.ER_ENGINE_OUT_OF_MEMORY = 3015;
exports.ER_PASSWORD_EXPIRE_ANONYMOUS_USER = 3016;
exports.ER_REPLICA_SQL_THREAD_MUST_STOP = 3017;
exports.ER_NO_FT_MATERIALIZED_SUBQUERY = 3018;
exports.ER_INNODB_UNDO_LOG_FULL = 3019;
exports.ER_INVALID_ARGUMENT_FOR_LOGARITHM = 3020;
exports.ER_REPLICA_CHANNEL_IO_THREAD_MUST_STOP = 3021;
exports.ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO = 3022;
exports.ER_WARN_ONLY_SOURCE_LOG_FILE_NO_POS = 3023;
exports.ER_QUERY_TIMEOUT = 3024;
exports.ER_NON_RO_SELECT_DISABLE_TIMER = 3025;
exports.ER_DUP_LIST_ENTRY = 3026;
exports.ER_SQL_MODE_NO_EFFECT = 3027;
exports.ER_AGGREGATE_ORDER_FOR_UNION = 3028;
exports.ER_AGGREGATE_ORDER_NON_AGG_QUERY = 3029;
exports.ER_REPLICA_WORKER_STOPPED_PREVIOUS_THD_ERROR = 3030;
exports.ER_DONT_SUPPORT_REPLICA_PRESERVE_COMMIT_ORDER = 3031;
exports.ER_SERVER_OFFLINE_MODE = 3032;
exports.ER_GIS_DIFFERENT_SRIDS = 3033;
exports.ER_GIS_UNSUPPORTED_ARGUMENT = 3034;
exports.ER_GIS_UNKNOWN_ERROR = 3035;
exports.ER_GIS_UNKNOWN_EXCEPTION = 3036;
exports.ER_GIS_INVALID_DATA = 3037;
exports.ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION = 3038;
exports.ER_BOOST_GEOMETRY_CENTROID_EXCEPTION = 3039;
exports.ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION = 3040;
exports.ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION = 3041;
exports.ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION = 3042;
exports.ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION = 3043;
exports.ER_STD_BAD_ALLOC_ERROR = 3044;
exports.ER_STD_DOMAIN_ERROR = 3045;
exports.ER_STD_LENGTH_ERROR = 3046;
exports.ER_STD_INVALID_ARGUMENT = 3047;
exports.ER_STD_OUT_OF_RANGE_ERROR = 3048;
exports.ER_STD_OVERFLOW_ERROR = 3049;
exports.ER_STD_RANGE_ERROR = 3050;
exports.ER_STD_UNDERFLOW_ERROR = 3051;
exports.ER_STD_LOGIC_ERROR = 3052;
exports.ER_STD_RUNTIME_ERROR = 3053;
exports.ER_STD_UNKNOWN_EXCEPTION = 3054;
exports.ER_GIS_DATA_WRONG_ENDIANESS = 3055;
exports.ER_CHANGE_SOURCE_PASSWORD_LENGTH = 3056;
exports.ER_USER_LOCK_WRONG_NAME = 3057;
exports.ER_USER_LOCK_DEADLOCK = 3058;
exports.ER_REPLACE_INACCESSIBLE_ROWS = 3059;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS = 3060;
exports.ER_ILLEGAL_USER_VAR = 3061;
exports.ER_GTID_MODE_OFF = 3062;
exports.ER_UNSUPPORTED_BY_REPLICATION_THREAD = 3063;
exports.ER_INCORRECT_TYPE = 3064;
exports.ER_FIELD_IN_ORDER_NOT_SELECT = 3065;
exports.ER_AGGREGATE_IN_ORDER_NOT_SELECT = 3066;
exports.ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN = 3067;
exports.ER_NET_OK_PACKET_TOO_LARGE = 3068;
exports.ER_INVALID_JSON_DATA = 3069;
exports.ER_INVALID_GEOJSON_MISSING_MEMBER = 3070;
exports.ER_INVALID_GEOJSON_WRONG_TYPE = 3071;
exports.ER_INVALID_GEOJSON_UNSPECIFIED = 3072;
exports.ER_DIMENSION_UNSUPPORTED = 3073;
exports.ER_REPLICA_CHANNEL_DOES_NOT_EXIST = 3074;
exports.ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT = 3075;
exports.ER_REPLICA_CHANNEL_NAME_INVALID_OR_TOO_LONG = 3076;
exports.ER_REPLICA_NEW_CHANNEL_WRONG_REPOSITORY = 3077;
exports.ER_SLAVE_CHANNEL_DELETE = 3078;
exports.ER_REPLICA_MULTIPLE_CHANNELS_CMD = 3079;
exports.ER_REPLICA_MAX_CHANNELS_EXCEEDED = 3080;
exports.ER_REPLICA_CHANNEL_MUST_STOP = 3081;
exports.ER_REPLICA_CHANNEL_NOT_RUNNING = 3082;
exports.ER_REPLICA_CHANNEL_WAS_RUNNING = 3083;
exports.ER_REPLICA_CHANNEL_WAS_NOT_RUNNING = 3084;
exports.ER_REPLICA_CHANNEL_SQL_THREAD_MUST_STOP = 3085;
exports.ER_REPLICA_CHANNEL_SQL_SKIP_COUNTER = 3086;
exports.ER_WRONG_FIELD_WITH_GROUP_V2 = 3087;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2 = 3088;
exports.ER_WARN_DEPRECATED_SYSVAR_UPDATE = 3089;
exports.ER_WARN_DEPRECATED_SQLMODE = 3090;
exports.ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID = 3091;
exports.ER_GROUP_REPLICATION_CONFIGURATION = 3092;
exports.ER_GROUP_REPLICATION_RUNNING = 3093;
exports.ER_GROUP_REPLICATION_APPLIER_INIT_ERROR = 3094;
exports.ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT = 3095;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR = 3096;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR = 3097;
exports.ER_BEFORE_DML_VALIDATION_ERROR = 3098;
exports.ER_PREVENTS_VARIABLE_WITHOUT_RBR = 3099;
exports.ER_RUN_HOOK_ERROR = 3100;
exports.ER_TRANSACTION_ROLLBACK_DURING_COMMIT = 3101;
exports.ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED = 3102;
exports.ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN = 3103;
exports.ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN = 3104;
exports.ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN = 3105;
exports.ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN = 3106;
exports.ER_GENERATED_COLUMN_NON_PRIOR = 3107;
exports.ER_DEPENDENT_BY_GENERATED_COLUMN = 3108;
exports.ER_GENERATED_COLUMN_REF_AUTO_INC = 3109;
exports.ER_FEATURE_NOT_AVAILABLE = 3110;
exports.ER_CANT_SET_GTID_MODE = 3111;
exports.ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF = 3112;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION = 3113;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON = 3114;
exports.ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF = 3115;
exports.ER_CANT_ENFORCE_GTID_CONSISTENCY_WITH_ONGOING_GTID_VIOLATING_TX = 3116;
exports.ER_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TX = 3117;
exports.ER_ACCOUNT_HAS_BEEN_LOCKED = 3118;
exports.ER_WRONG_TABLESPACE_NAME = 3119;
exports.ER_TABLESPACE_IS_NOT_EMPTY = 3120;
exports.ER_WRONG_FILE_NAME = 3121;
exports.ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION = 3122;
exports.ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR = 3123;
exports.ER_WARN_BAD_MAX_EXECUTION_TIME = 3124;
exports.ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME = 3125;
exports.ER_WARN_CONFLICTING_HINT = 3126;
exports.ER_WARN_UNKNOWN_QB_NAME = 3127;
exports.ER_UNRESOLVED_HINT_NAME = 3128;
exports.ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE = 3129;
exports.ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED = 3130;
exports.ER_LOCKING_SERVICE_WRONG_NAME = 3131;
exports.ER_LOCKING_SERVICE_DEADLOCK = 3132;
exports.ER_LOCKING_SERVICE_TIMEOUT = 3133;
exports.ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED = 3134;
exports.ER_SQL_MODE_MERGED = 3135;
exports.ER_VTOKEN_PLUGIN_TOKEN_MISMATCH = 3136;
exports.ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND = 3137;
exports.ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID = 3138;
exports.ER_REPLICA_CHANNEL_OPERATION_NOT_ALLOWED = 3139;
exports.ER_INVALID_JSON_TEXT = 3140;
exports.ER_INVALID_JSON_TEXT_IN_PARAM = 3141;
exports.ER_INVALID_JSON_BINARY_DATA = 3142;
exports.ER_INVALID_JSON_PATH = 3143;
exports.ER_INVALID_JSON_CHARSET = 3144;
exports.ER_INVALID_JSON_CHARSET_IN_FUNCTION = 3145;
exports.ER_INVALID_TYPE_FOR_JSON = 3146;
exports.ER_INVALID_CAST_TO_JSON = 3147;
exports.ER_INVALID_JSON_PATH_CHARSET = 3148;
exports.ER_INVALID_JSON_PATH_WILDCARD = 3149;
exports.ER_JSON_VALUE_TOO_BIG = 3150;
exports.ER_JSON_KEY_TOO_BIG = 3151;
exports.ER_JSON_USED_AS_KEY = 3152;
exports.ER_JSON_VACUOUS_PATH = 3153;
exports.ER_JSON_BAD_ONE_OR_ALL_ARG = 3154;
exports.ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE = 3155;
exports.ER_INVALID_JSON_VALUE_FOR_CAST = 3156;
exports.ER_JSON_DOCUMENT_TOO_DEEP = 3157;
exports.ER_JSON_DOCUMENT_NULL_KEY = 3158;
exports.ER_SECURE_TRANSPORT_REQUIRED = 3159;
exports.ER_NO_SECURE_TRANSPORTS_CONFIGURED = 3160;
exports.ER_DISABLED_STORAGE_ENGINE = 3161;
exports.ER_USER_DOES_NOT_EXIST = 3162;
exports.ER_USER_ALREADY_EXISTS = 3163;
exports.ER_AUDIT_API_ABORT = 3164;
exports.ER_INVALID_JSON_PATH_ARRAY_CELL = 3165;
exports.ER_BUFPOOL_RESIZE_INPROGRESS = 3166;
exports.ER_FEATURE_DISABLED_SEE_DOC = 3167;
exports.ER_SERVER_ISNT_AVAILABLE = 3168;
exports.ER_SESSION_WAS_KILLED = 3169;
exports.ER_CAPACITY_EXCEEDED = 3170;
exports.ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER = 3171;
exports.ER_TABLE_NEEDS_UPG_PART = 3172;
exports.ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID = 3173;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL = 3174;
exports.ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT = 3175;
exports.ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE = 3176;
exports.ER_LOCK_REFUSED_BY_ENGINE = 3177;
exports.ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN = 3178;
exports.ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE = 3179;
exports.ER_MASTER_KEY_ROTATION_ERROR_BY_SE = 3180;
exports.ER_MASTER_KEY_ROTATION_BINLOG_FAILED = 3181;
exports.ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE = 3182;
exports.ER_TABLESPACE_CANNOT_ENCRYPT = 3183;
exports.ER_INVALID_ENCRYPTION_OPTION = 3184;
exports.ER_CANNOT_FIND_KEY_IN_KEYRING = 3185;
exports.ER_CAPACITY_EXCEEDED_IN_PARSER = 3186;
exports.ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE = 3187;
exports.ER_KEYRING_UDF_KEYRING_SERVICE_ERROR = 3188;
exports.ER_USER_COLUMN_OLD_LENGTH = 3189;
exports.ER_CANT_RESET_SOURCE = 3190;
exports.ER_GROUP_REPLICATION_MAX_GROUP_SIZE = 3191;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED = 3192;
exports.ER_TABLE_REFERENCED = 3193;
exports.ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE = 3194;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO = 3195;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID = 3196;
exports.ER_XA_RETRY = 3197;
exports.ER_KEYRING_AWS_UDF_AWS_KMS_ERROR = 3198;
exports.ER_BINLOG_UNSAFE_XA = 3199;
exports.ER_UDF_ERROR = 3200;
exports.ER_KEYRING_MIGRATION_FAILURE = 3201;
exports.ER_KEYRING_ACCESS_DENIED_ERROR = 3202;
exports.ER_KEYRING_MIGRATION_STATUS = 3203;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLES = 3204;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLE = 3205;
exports.ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED = 3206;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET = 3207;
exports.ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY = 3208;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED = 3209;
exports.ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED = 3210;
exports.ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE = 3211;
exports.ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED = 3212;
exports.ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS = 3213;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE = 3214;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT = 3215;
exports.ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED = 3216;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE = 3217;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE = 3218;
exports.ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR = 3219;
exports.ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY = 3220;
exports.ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY = 3221;
exports.ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS = 3222;
exports.ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC = 3223;
exports.ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER = 3224;
exports.ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER = 3225;
exports.WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP = 3226;
exports.ER_XA_REPLICATION_FILTERS = 3227;
exports.ER_CANT_OPEN_ERROR_LOG = 3228;
exports.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3229;
exports.ER_CANT_START_SERVER_NAMED_PIPE = 3230;
exports.ER_WRITE_SET_EXCEEDS_LIMIT = 3231;
exports.ER_DEPRECATED_TLS_VERSION_SESSION_57 = 3232;
exports.ER_WARN_DEPRECATED_TLS_VERSION_57 = 3233;
exports.ER_WARN_WRONG_NATIVE_TABLE_STRUCTURE = 3234;
exports.ER_AES_INVALID_KDF_NAME = 3235;
exports.ER_AES_INVALID_KDF_ITERATIONS = 3236;
exports.WARN_AES_KEY_SIZE = 3237;
exports.ER_AES_INVALID_KDF_OPTION_SIZE = 3238;
exports.ER_UNSUPPORT_COMPRESSED_TEMPORARY_TABLE = 3500;
exports.ER_ACL_OPERATION_FAILED = 3501;
exports.ER_UNSUPPORTED_INDEX_ALGORITHM = 3502;
exports.ER_NO_SUCH_DB = 3503;
exports.ER_TOO_BIG_ENUM = 3504;
exports.ER_TOO_LONG_SET_ENUM_VALUE = 3505;
exports.ER_INVALID_DD_OBJECT = 3506;
exports.ER_UPDATING_DD_TABLE = 3507;
exports.ER_INVALID_DD_OBJECT_ID = 3508;
exports.ER_INVALID_DD_OBJECT_NAME = 3509;
exports.ER_TABLESPACE_MISSING_WITH_NAME = 3510;
exports.ER_TOO_LONG_ROUTINE_COMMENT = 3511;
exports.ER_SP_LOAD_FAILED = 3512;
exports.ER_INVALID_BITWISE_OPERANDS_SIZE = 3513;
exports.ER_INVALID_BITWISE_AGGREGATE_OPERANDS_SIZE = 3514;
exports.ER_WARN_UNSUPPORTED_HINT = 3515;
exports.ER_UNEXPECTED_GEOMETRY_TYPE = 3516;
exports.ER_SRS_PARSE_ERROR = 3517;
exports.ER_SRS_PROJ_PARAMETER_MISSING = 3518;
exports.ER_WARN_SRS_NOT_FOUND = 3519;
exports.ER_SRS_NOT_CARTESIAN = 3520;
exports.ER_SRS_NOT_CARTESIAN_UNDEFINED = 3521;
exports.ER_PK_INDEX_CANT_BE_INVISIBLE = 3522;
exports.ER_UNKNOWN_AUTHID = 3523;
exports.ER_FAILED_ROLE_GRANT = 3524;
exports.ER_OPEN_ROLE_TABLES = 3525;
exports.ER_FAILED_DEFAULT_ROLES = 3526;
exports.ER_COMPONENTS_NO_SCHEME = 3527;
exports.ER_COMPONENTS_NO_SCHEME_SERVICE = 3528;
exports.ER_COMPONENTS_CANT_LOAD = 3529;
exports.ER_ROLE_NOT_GRANTED = 3530;
exports.ER_FAILED_REVOKE_ROLE = 3531;
exports.ER_RENAME_ROLE = 3532;
exports.ER_COMPONENTS_CANT_ACQUIRE_SERVICE_IMPLEMENTATION = 3533;
exports.ER_COMPONENTS_CANT_SATISFY_DEPENDENCY = 3534;
exports.ER_COMPONENTS_LOAD_CANT_REGISTER_SERVICE_IMPLEMENTATION = 3535;
exports.ER_COMPONENTS_LOAD_CANT_INITIALIZE = 3536;
exports.ER_COMPONENTS_UNLOAD_NOT_LOADED = 3537;
exports.ER_COMPONENTS_UNLOAD_CANT_DEINITIALIZE = 3538;
exports.ER_COMPONENTS_CANT_RELEASE_SERVICE = 3539;
exports.ER_COMPONENTS_UNLOAD_CANT_UNREGISTER_SERVICE = 3540;
exports.ER_COMPONENTS_CANT_UNLOAD = 3541;
exports.ER_WARN_UNLOAD_THE_NOT_PERSISTED = 3542;
exports.ER_COMPONENT_TABLE_INCORRECT = 3543;
exports.ER_COMPONENT_MANIPULATE_ROW_FAILED = 3544;
exports.ER_COMPONENTS_UNLOAD_DUPLICATE_IN_GROUP = 3545;
exports.ER_CANT_SET_GTID_PURGED_DUE_SETS_CONSTRAINTS = 3546;
exports.ER_CANNOT_LOCK_USER_MANAGEMENT_CACHES = 3547;
exports.ER_SRS_NOT_FOUND = 3548;
exports.ER_VARIABLE_NOT_PERSISTED = 3549;
exports.ER_IS_QUERY_INVALID_CLAUSE = 3550;
exports.ER_UNABLE_TO_STORE_STATISTICS = 3551;
exports.ER_NO_SYSTEM_SCHEMA_ACCESS = 3552;
exports.ER_NO_SYSTEM_TABLESPACE_ACCESS = 3553;
exports.ER_NO_SYSTEM_TABLE_ACCESS = 3554;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_DICTIONARY_TABLE = 3555;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_SYSTEM_TABLE = 3556;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_TABLE = 3557;
exports.ER_INVALID_OPTION_KEY = 3558;
exports.ER_INVALID_OPTION_VALUE = 3559;
exports.ER_INVALID_OPTION_KEY_VALUE_PAIR = 3560;
exports.ER_INVALID_OPTION_START_CHARACTER = 3561;
exports.ER_INVALID_OPTION_END_CHARACTER = 3562;
exports.ER_INVALID_OPTION_CHARACTERS = 3563;
exports.ER_DUPLICATE_OPTION_KEY = 3564;
exports.ER_WARN_SRS_NOT_FOUND_AXIS_ORDER = 3565;
exports.ER_NO_ACCESS_TO_NATIVE_FCT = 3566;
exports.ER_RESET_SOURCE_TO_VALUE_OUT_OF_RANGE = 3567;
exports.ER_UNRESOLVED_TABLE_LOCK = 3568;
exports.ER_DUPLICATE_TABLE_LOCK = 3569;
exports.ER_BINLOG_UNSAFE_SKIP_LOCKED = 3570;
exports.ER_BINLOG_UNSAFE_NOWAIT = 3571;
exports.ER_LOCK_NOWAIT = 3572;
exports.ER_CTE_RECURSIVE_REQUIRES_UNION = 3573;
exports.ER_CTE_RECURSIVE_REQUIRES_NONRECURSIVE_FIRST = 3574;
exports.ER_CTE_RECURSIVE_FORBIDS_AGGREGATION = 3575;
exports.ER_CTE_RECURSIVE_FORBIDDEN_JOIN_ORDER = 3576;
exports.ER_CTE_RECURSIVE_REQUIRES_SINGLE_REFERENCE = 3577;
exports.ER_SWITCH_TMP_ENGINE = 3578;
exports.ER_WINDOW_NO_SUCH_WINDOW = 3579;
exports.ER_WINDOW_CIRCULARITY_IN_WINDOW_GRAPH = 3580;
exports.ER_WINDOW_NO_CHILD_PARTITIONING = 3581;
exports.ER_WINDOW_NO_INHERIT_FRAME = 3582;
exports.ER_WINDOW_NO_REDEFINE_ORDER_BY = 3583;
exports.ER_WINDOW_FRAME_START_ILLEGAL = 3584;
exports.ER_WINDOW_FRAME_END_ILLEGAL = 3585;
exports.ER_WINDOW_FRAME_ILLEGAL = 3586;
exports.ER_WINDOW_RANGE_FRAME_ORDER_TYPE = 3587;
exports.ER_WINDOW_RANGE_FRAME_TEMPORAL_TYPE = 3588;
exports.ER_WINDOW_RANGE_FRAME_NUMERIC_TYPE = 3589;
exports.ER_WINDOW_RANGE_BOUND_NOT_CONSTANT = 3590;
exports.ER_WINDOW_DUPLICATE_NAME = 3591;
exports.ER_WINDOW_ILLEGAL_ORDER_BY = 3592;
exports.ER_WINDOW_INVALID_WINDOW_FUNC_USE = 3593;
exports.ER_WINDOW_INVALID_WINDOW_FUNC_ALIAS_USE = 3594;
exports.ER_WINDOW_NESTED_WINDOW_FUNC_USE_IN_WINDOW_SPEC = 3595;
exports.ER_WINDOW_ROWS_INTERVAL_USE = 3596;
exports.ER_WINDOW_NO_GROUP_ORDER = 3597;
exports.ER_WINDOW_EXPLAIN_JSON = 3598;
exports.ER_WINDOW_FUNCTION_IGNORES_FRAME = 3599;
exports.ER_WL9236_NOW = 3600;
exports.ER_INVALID_NO_OF_ARGS = 3601;
exports.ER_FIELD_IN_GROUPING_NOT_GROUP_BY = 3602;
exports.ER_TOO_LONG_TABLESPACE_COMMENT = 3603;
exports.ER_ENGINE_CANT_DROP_TABLE = 3604;
exports.ER_ENGINE_CANT_DROP_MISSING_TABLE = 3605;
exports.ER_TABLESPACE_DUP_FILENAME = 3606;
exports.ER_DB_DROP_RMDIR2 = 3607;
exports.ER_IMP_NO_FILES_MATCHED = 3608;
exports.ER_IMP_SCHEMA_DOES_NOT_EXIST = 3609;
exports.ER_IMP_TABLE_ALREADY_EXISTS = 3610;
exports.ER_IMP_INCOMPATIBLE_MYSQLD_VERSION = 3611;
exports.ER_IMP_INCOMPATIBLE_DD_VERSION = 3612;
exports.ER_IMP_INCOMPATIBLE_SDI_VERSION = 3613;
exports.ER_WARN_INVALID_HINT = 3614;
exports.ER_VAR_DOES_NOT_EXIST = 3615;
exports.ER_LONGITUDE_OUT_OF_RANGE = 3616;
exports.ER_LATITUDE_OUT_OF_RANGE = 3617;
exports.ER_NOT_IMPLEMENTED_FOR_GEOGRAPHIC_SRS = 3618;
exports.ER_ILLEGAL_PRIVILEGE_LEVEL = 3619;
exports.ER_NO_SYSTEM_VIEW_ACCESS = 3620;
exports.ER_COMPONENT_FILTER_FLABBERGASTED = 3621;
exports.ER_PART_EXPR_TOO_LONG = 3622;
exports.ER_UDF_DROP_DYNAMICALLY_REGISTERED = 3623;
exports.ER_UNABLE_TO_STORE_COLUMN_STATISTICS = 3624;
exports.ER_UNABLE_TO_UPDATE_COLUMN_STATISTICS = 3625;
exports.ER_UNABLE_TO_DROP_COLUMN_STATISTICS = 3626;
exports.ER_UNABLE_TO_BUILD_HISTOGRAM = 3627;
exports.ER_MANDATORY_ROLE = 3628;
exports.ER_MISSING_TABLESPACE_FILE = 3629;
exports.ER_PERSIST_ONLY_ACCESS_DENIED_ERROR = 3630;
exports.ER_CMD_NEED_SUPER = 3631;
exports.ER_PATH_IN_DATADIR = 3632;
exports.ER_CLONE_DDL_IN_PROGRESS = 3633;
exports.ER_CLONE_TOO_MANY_CONCURRENT_CLONES = 3634;
exports.ER_APPLIER_LOG_EVENT_VALIDATION_ERROR = 3635;
exports.ER_CTE_MAX_RECURSION_DEPTH = 3636;
exports.ER_NOT_HINT_UPDATABLE_VARIABLE = 3637;
exports.ER_CREDENTIALS_CONTRADICT_TO_HISTORY = 3638;
exports.ER_WARNING_PASSWORD_HISTORY_CLAUSES_VOID = 3639;
exports.ER_CLIENT_DOES_NOT_SUPPORT = 3640;
exports.ER_I_S_SKIPPED_TABLESPACE = 3641;
exports.ER_TABLESPACE_ENGINE_MISMATCH = 3642;
exports.ER_WRONG_SRID_FOR_COLUMN = 3643;
exports.ER_CANNOT_ALTER_SRID_DUE_TO_INDEX = 3644;
exports.ER_WARN_BINLOG_PARTIAL_UPDATES_DISABLED = 3645;
exports.ER_WARN_BINLOG_V1_ROW_EVENTS_DISABLED = 3646;
exports.ER_WARN_BINLOG_PARTIAL_UPDATES_SUGGESTS_PARTIAL_IMAGES = 3647;
exports.ER_COULD_NOT_APPLY_JSON_DIFF = 3648;
exports.ER_CORRUPTED_JSON_DIFF = 3649;
exports.ER_RESOURCE_GROUP_EXISTS = 3650;
exports.ER_RESOURCE_GROUP_NOT_EXISTS = 3651;
exports.ER_INVALID_VCPU_ID = 3652;
exports.ER_INVALID_VCPU_RANGE = 3653;
exports.ER_INVALID_THREAD_PRIORITY = 3654;
exports.ER_DISALLOWED_OPERATION = 3655;
exports.ER_RESOURCE_GROUP_BUSY = 3656;
exports.ER_RESOURCE_GROUP_DISABLED = 3657;
exports.ER_FEATURE_UNSUPPORTED = 3658;
exports.ER_ATTRIBUTE_IGNORED = 3659;
exports.ER_INVALID_THREAD_ID = 3660;
exports.ER_RESOURCE_GROUP_BIND_FAILED = 3661;
exports.ER_INVALID_USE_OF_FORCE_OPTION = 3662;
exports.ER_GROUP_REPLICATION_COMMAND_FAILURE = 3663;
exports.ER_SDI_OPERATION_FAILED = 3664;
exports.ER_MISSING_JSON_TABLE_VALUE = 3665;
exports.ER_WRONG_JSON_TABLE_VALUE = 3666;
exports.ER_TF_MUST_HAVE_ALIAS = 3667;
exports.ER_TF_FORBIDDEN_JOIN_TYPE = 3668;
exports.ER_JT_VALUE_OUT_OF_RANGE = 3669;
exports.ER_JT_MAX_NESTED_PATH = 3670;
exports.ER_PASSWORD_EXPIRATION_NOT_SUPPORTED_BY_AUTH_METHOD = 3671;
exports.ER_INVALID_GEOJSON_CRS_NOT_TOP_LEVEL = 3672;
exports.ER_BAD_NULL_ERROR_NOT_IGNORED = 3673;
exports.WARN_USELESS_SPATIAL_INDEX = 3674;
exports.ER_DISK_FULL_NOWAIT = 3675;
exports.ER_PARSE_ERROR_IN_DIGEST_FN = 3676;
exports.ER_UNDISCLOSED_PARSE_ERROR_IN_DIGEST_FN = 3677;
exports.ER_SCHEMA_DIR_EXISTS = 3678;
exports.ER_SCHEMA_DIR_MISSING = 3679;
exports.ER_SCHEMA_DIR_CREATE_FAILED = 3680;
exports.ER_SCHEMA_DIR_UNKNOWN = 3681;
exports.ER_ONLY_IMPLEMENTED_FOR_SRID_0_AND_4326 = 3682;
exports.ER_BINLOG_EXPIRE_LOG_DAYS_AND_SECS_USED_TOGETHER = 3683;
exports.ER_REGEXP_BUFFER_OVERFLOW = 3684;
exports.ER_REGEXP_ILLEGAL_ARGUMENT = 3685;
exports.ER_REGEXP_INDEX_OUTOFBOUNDS_ERROR = 3686;
exports.ER_REGEXP_INTERNAL_ERROR = 3687;
exports.ER_REGEXP_RULE_SYNTAX = 3688;
exports.ER_REGEXP_BAD_ESCAPE_SEQUENCE = 3689;
exports.ER_REGEXP_UNIMPLEMENTED = 3690;
exports.ER_REGEXP_MISMATCHED_PAREN = 3691;
exports.ER_REGEXP_BAD_INTERVAL = 3692;
exports.ER_REGEXP_MAX_LT_MIN = 3693;
exports.ER_REGEXP_INVALID_BACK_REF = 3694;
exports.ER_REGEXP_LOOK_BEHIND_LIMIT = 3695;
exports.ER_REGEXP_MISSING_CLOSE_BRACKET = 3696;
exports.ER_REGEXP_INVALID_RANGE = 3697;
exports.ER_REGEXP_STACK_OVERFLOW = 3698;
exports.ER_REGEXP_TIME_OUT = 3699;
exports.ER_REGEXP_PATTERN_TOO_BIG = 3700;
exports.ER_CANT_SET_ERROR_LOG_SERVICE = 3701;
exports.ER_EMPTY_PIPELINE_FOR_ERROR_LOG_SERVICE = 3702;
exports.ER_COMPONENT_FILTER_DIAGNOSTICS = 3703;
exports.ER_NOT_IMPLEMENTED_FOR_CARTESIAN_SRS = 3704;
exports.ER_NOT_IMPLEMENTED_FOR_PROJECTED_SRS = 3705;
exports.ER_NONPOSITIVE_RADIUS = 3706;
exports.ER_RESTART_SERVER_FAILED = 3707;
exports.ER_SRS_MISSING_MANDATORY_ATTRIBUTE = 3708;
exports.ER_SRS_MULTIPLE_ATTRIBUTE_DEFINITIONS = 3709;
exports.ER_SRS_NAME_CANT_BE_EMPTY_OR_WHITESPACE = 3710;
exports.ER_SRS_ORGANIZATION_CANT_BE_EMPTY_OR_WHITESPACE = 3711;
exports.ER_SRS_ID_ALREADY_EXISTS = 3712;
exports.ER_WARN_SRS_ID_ALREADY_EXISTS = 3713;
exports.ER_CANT_MODIFY_SRID_0 = 3714;
exports.ER_WARN_RESERVED_SRID_RANGE = 3715;
exports.ER_CANT_MODIFY_SRS_USED_BY_COLUMN = 3716;
exports.ER_SRS_INVALID_CHARACTER_IN_ATTRIBUTE = 3717;
exports.ER_SRS_ATTRIBUTE_STRING_TOO_LONG = 3718;
exports.ER_DEPRECATED_UTF8_ALIAS = 3719;
exports.ER_DEPRECATED_NATIONAL = 3720;
exports.ER_INVALID_DEFAULT_UTF8MB4_COLLATION = 3721;
exports.ER_UNABLE_TO_COLLECT_LOG_STATUS = 3722;
exports.ER_RESERVED_TABLESPACE_NAME = 3723;
exports.ER_UNABLE_TO_SET_OPTION = 3724;
exports.ER_REPLICA_POSSIBLY_DIVERGED_AFTER_DDL = 3725;
exports.ER_SRS_NOT_GEOGRAPHIC = 3726;
exports.ER_POLYGON_TOO_LARGE = 3727;
exports.ER_SPATIAL_UNIQUE_INDEX = 3728;
exports.ER_INDEX_TYPE_NOT_SUPPORTED_FOR_SPATIAL_INDEX = 3729;
exports.ER_FK_CANNOT_DROP_PARENT = 3730;
exports.ER_GEOMETRY_PARAM_LONGITUDE_OUT_OF_RANGE = 3731;
exports.ER_GEOMETRY_PARAM_LATITUDE_OUT_OF_RANGE = 3732;
exports.ER_FK_CANNOT_USE_VIRTUAL_COLUMN = 3733;
exports.ER_FK_NO_COLUMN_PARENT = 3734;
exports.ER_CANT_SET_ERROR_SUPPRESSION_LIST = 3735;
exports.ER_SRS_GEOGCS_INVALID_AXES = 3736;
exports.ER_SRS_INVALID_SEMI_MAJOR_AXIS = 3737;
exports.ER_SRS_INVALID_INVERSE_FLATTENING = 3738;
exports.ER_SRS_INVALID_ANGULAR_UNIT = 3739;
exports.ER_SRS_INVALID_PRIME_MERIDIAN = 3740;
exports.ER_TRANSFORM_SOURCE_SRS_NOT_SUPPORTED = 3741;
exports.ER_TRANSFORM_TARGET_SRS_NOT_SUPPORTED = 3742;
exports.ER_TRANSFORM_SOURCE_SRS_MISSING_TOWGS84 = 3743;
exports.ER_TRANSFORM_TARGET_SRS_MISSING_TOWGS84 = 3744;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_SESSION_BINLOG_FORMAT = 3745;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT = 3746;
exports.ER_RUNNING_APPLIER_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT = 3747;
exports.ER_CLIENT_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRX_IN_SBR = 3748;
exports.ER_XA_CANT_CREATE_MDL_BACKUP = 3749;
exports.ER_TABLE_WITHOUT_PK = 3750;
exports.ER_WARN_DATA_TRUNCATED_FUNCTIONAL_INDEX = 3751;
exports.ER_WARN_DATA_OUT_OF_RANGE_FUNCTIONAL_INDEX = 3752;
exports.ER_FUNCTIONAL_INDEX_ON_JSON_OR_GEOMETRY_FUNCTION = 3753;
exports.ER_FUNCTIONAL_INDEX_REF_AUTO_INCREMENT = 3754;
exports.ER_CANNOT_DROP_COLUMN_FUNCTIONAL_INDEX = 3755;
exports.ER_FUNCTIONAL_INDEX_PRIMARY_KEY = 3756;
exports.ER_FUNCTIONAL_INDEX_ON_LOB = 3757;
exports.ER_FUNCTIONAL_INDEX_FUNCTION_IS_NOT_ALLOWED = 3758;
exports.ER_FULLTEXT_FUNCTIONAL_INDEX = 3759;
exports.ER_SPATIAL_FUNCTIONAL_INDEX = 3760;
exports.ER_WRONG_KEY_COLUMN_FUNCTIONAL_INDEX = 3761;
exports.ER_FUNCTIONAL_INDEX_ON_FIELD = 3762;
exports.ER_GENERATED_COLUMN_NAMED_FUNCTION_IS_NOT_ALLOWED = 3763;
exports.ER_GENERATED_COLUMN_ROW_VALUE = 3764;
exports.ER_GENERATED_COLUMN_VARIABLES = 3765;
exports.ER_DEPENDENT_BY_DEFAULT_GENERATED_VALUE = 3766;
exports.ER_DEFAULT_VAL_GENERATED_NON_PRIOR = 3767;
exports.ER_DEFAULT_VAL_GENERATED_REF_AUTO_INC = 3768;
exports.ER_DEFAULT_VAL_GENERATED_FUNCTION_IS_NOT_ALLOWED = 3769;
exports.ER_DEFAULT_VAL_GENERATED_NAMED_FUNCTION_IS_NOT_ALLOWED = 3770;
exports.ER_DEFAULT_VAL_GENERATED_ROW_VALUE = 3771;
exports.ER_DEFAULT_VAL_GENERATED_VARIABLES = 3772;
exports.ER_DEFAULT_AS_VAL_GENERATED = 3773;
exports.ER_UNSUPPORTED_ACTION_ON_DEFAULT_VAL_GENERATED = 3774;
exports.ER_GTID_UNSAFE_ALTER_ADD_COL_WITH_DEFAULT_EXPRESSION = 3775;
exports.ER_FK_CANNOT_CHANGE_ENGINE = 3776;
exports.ER_WARN_DEPRECATED_USER_SET_EXPR = 3777;
exports.ER_WARN_DEPRECATED_UTF8MB3_COLLATION = 3778;
exports.ER_WARN_DEPRECATED_NESTED_COMMENT_SYNTAX = 3779;
exports.ER_FK_INCOMPATIBLE_COLUMNS = 3780;
exports.ER_GR_HOLD_WAIT_TIMEOUT = 3781;
exports.ER_GR_HOLD_KILLED = 3782;
exports.ER_GR_HOLD_MEMBER_STATUS_ERROR = 3783;
exports.ER_RPL_ENCRYPTION_FAILED_TO_FETCH_KEY = 3784;
exports.ER_RPL_ENCRYPTION_KEY_NOT_FOUND = 3785;
exports.ER_RPL_ENCRYPTION_KEYRING_INVALID_KEY = 3786;
exports.ER_RPL_ENCRYPTION_HEADER_ERROR = 3787;
exports.ER_RPL_ENCRYPTION_FAILED_TO_ROTATE_LOGS = 3788;
exports.ER_RPL_ENCRYPTION_KEY_EXISTS_UNEXPECTED = 3789;
exports.ER_RPL_ENCRYPTION_FAILED_TO_GENERATE_KEY = 3790;
exports.ER_RPL_ENCRYPTION_FAILED_TO_STORE_KEY = 3791;
exports.ER_RPL_ENCRYPTION_FAILED_TO_REMOVE_KEY = 3792;
exports.ER_RPL_ENCRYPTION_UNABLE_TO_CHANGE_OPTION = 3793;
exports.ER_RPL_ENCRYPTION_MASTER_KEY_RECOVERY_FAILED = 3794;
exports.ER_SLOW_LOG_MODE_IGNORED_WHEN_NOT_LOGGING_TO_FILE = 3795;
exports.ER_GRP_TRX_CONSISTENCY_NOT_ALLOWED = 3796;
exports.ER_GRP_TRX_CONSISTENCY_BEFORE = 3797;
exports.ER_GRP_TRX_CONSISTENCY_AFTER_ON_TRX_BEGIN = 3798;
exports.ER_GRP_TRX_CONSISTENCY_BEGIN_NOT_ALLOWED = 3799;
exports.ER_FUNCTIONAL_INDEX_ROW_VALUE_IS_NOT_ALLOWED = 3800;
exports.ER_RPL_ENCRYPTION_FAILED_TO_ENCRYPT = 3801;
exports.ER_PAGE_TRACKING_NOT_STARTED = 3802;
exports.ER_PAGE_TRACKING_RANGE_NOT_TRACKED = 3803;
exports.ER_PAGE_TRACKING_CANNOT_PURGE = 3804;
exports.ER_RPL_ENCRYPTION_CANNOT_ROTATE_BINLOG_MASTER_KEY = 3805;
exports.ER_BINLOG_MASTER_KEY_RECOVERY_OUT_OF_COMBINATION = 3806;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_OPERATE_KEY = 3807;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_ROTATE_LOGS = 3808;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_REENCRYPT_LOG = 3809;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_UNUSED_KEYS = 3810;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_AUX_KEY = 3811;
exports.ER_NON_BOOLEAN_EXPR_FOR_CHECK_CONSTRAINT = 3812;
exports.ER_COLUMN_CHECK_CONSTRAINT_REFERENCES_OTHER_COLUMN = 3813;
exports.ER_CHECK_CONSTRAINT_NAMED_FUNCTION_IS_NOT_ALLOWED = 3814;
exports.ER_CHECK_CONSTRAINT_FUNCTION_IS_NOT_ALLOWED = 3815;
exports.ER_CHECK_CONSTRAINT_VARIABLES = 3816;
exports.ER_CHECK_CONSTRAINT_ROW_VALUE = 3817;
exports.ER_CHECK_CONSTRAINT_REFERS_AUTO_INCREMENT_COLUMN = 3818;
exports.ER_CHECK_CONSTRAINT_VIOLATED = 3819;
exports.ER_CHECK_CONSTRAINT_REFERS_UNKNOWN_COLUMN = 3820;
exports.ER_CHECK_CONSTRAINT_NOT_FOUND = 3821;
exports.ER_CHECK_CONSTRAINT_DUP_NAME = 3822;
exports.ER_CHECK_CONSTRAINT_CLAUSE_USING_FK_REFER_ACTION_COLUMN = 3823;
exports.WARN_UNENCRYPTED_TABLE_IN_ENCRYPTED_DB = 3824;
exports.ER_INVALID_ENCRYPTION_REQUEST = 3825;
exports.ER_CANNOT_SET_TABLE_ENCRYPTION = 3826;
exports.ER_CANNOT_SET_DATABASE_ENCRYPTION = 3827;
exports.ER_CANNOT_SET_TABLESPACE_ENCRYPTION = 3828;
exports.ER_TABLESPACE_CANNOT_BE_ENCRYPTED = 3829;
exports.ER_TABLESPACE_CANNOT_BE_DECRYPTED = 3830;
exports.ER_TABLESPACE_TYPE_UNKNOWN = 3831;
exports.ER_TARGET_TABLESPACE_UNENCRYPTED = 3832;
exports.ER_CANNOT_USE_ENCRYPTION_CLAUSE = 3833;
exports.ER_INVALID_MULTIPLE_CLAUSES = 3834;
exports.ER_UNSUPPORTED_USE_OF_GRANT_AS = 3835;
exports.ER_UKNOWN_AUTH_ID_OR_ACCESS_DENIED_FOR_GRANT_AS = 3836;
exports.ER_DEPENDENT_BY_FUNCTIONAL_INDEX = 3837;
exports.ER_PLUGIN_NOT_EARLY = 3838;
exports.ER_INNODB_REDO_LOG_ARCHIVE_START_SUBDIR_PATH = 3839;
exports.ER_INNODB_REDO_LOG_ARCHIVE_START_TIMEOUT = 3840;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIRS_INVALID = 3841;
exports.ER_INNODB_REDO_LOG_ARCHIVE_LABEL_NOT_FOUND = 3842;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_EMPTY = 3843;
exports.ER_INNODB_REDO_LOG_ARCHIVE_NO_SUCH_DIR = 3844;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_CLASH = 3845;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_PERMISSIONS = 3846;
exports.ER_INNODB_REDO_LOG_ARCHIVE_FILE_CREATE = 3847;
exports.ER_INNODB_REDO_LOG_ARCHIVE_ACTIVE = 3848;
exports.ER_INNODB_REDO_LOG_ARCHIVE_INACTIVE = 3849;
exports.ER_INNODB_REDO_LOG_ARCHIVE_FAILED = 3850;
exports.ER_INNODB_REDO_LOG_ARCHIVE_SESSION = 3851;
exports.ER_STD_REGEX_ERROR = 3852;
exports.ER_INVALID_JSON_TYPE = 3853;
exports.ER_CANNOT_CONVERT_STRING = 3854;
exports.ER_DEPENDENT_BY_PARTITION_FUNC = 3855;
exports.ER_WARN_DEPRECATED_FLOAT_AUTO_INCREMENT = 3856;
exports.ER_RPL_CANT_STOP_REPLICA_WHILE_LOCKED_BACKUP = 3857;
exports.ER_WARN_DEPRECATED_FLOAT_DIGITS = 3858;
exports.ER_WARN_DEPRECATED_FLOAT_UNSIGNED = 3859;
exports.ER_WARN_DEPRECATED_INTEGER_DISPLAY_WIDTH = 3860;
exports.ER_WARN_DEPRECATED_ZEROFILL = 3861;
exports.ER_CLONE_DONOR = 3862;
exports.ER_CLONE_PROTOCOL = 3863;
exports.ER_CLONE_DONOR_VERSION = 3864;
exports.ER_CLONE_OS = 3865;
exports.ER_CLONE_PLATFORM = 3866;
exports.ER_CLONE_CHARSET = 3867;
exports.ER_CLONE_CONFIG = 3868;
exports.ER_CLONE_SYS_CONFIG = 3869;
exports.ER_CLONE_PLUGIN_MATCH = 3870;
exports.ER_CLONE_LOOPBACK = 3871;
exports.ER_CLONE_ENCRYPTION = 3872;
exports.ER_CLONE_DISK_SPACE = 3873;
exports.ER_CLONE_IN_PROGRESS = 3874;
exports.ER_CLONE_DISALLOWED = 3875;
exports.ER_CANNOT_GRANT_ROLES_TO_ANONYMOUS_USER = 3876;
exports.ER_SECONDARY_ENGINE_PLUGIN = 3877;
exports.ER_SECOND_PASSWORD_CANNOT_BE_EMPTY = 3878;
exports.ER_DB_ACCESS_DENIED = 3879;
exports.ER_DA_AUTH_ID_WITH_SYSTEM_USER_PRIV_IN_MANDATORY_ROLES = 3880;
exports.ER_DA_RPL_GTID_TABLE_CANNOT_OPEN = 3881;
exports.ER_GEOMETRY_IN_UNKNOWN_LENGTH_UNIT = 3882;
exports.ER_DA_PLUGIN_INSTALL_ERROR = 3883;
exports.ER_NO_SESSION_TEMP = 3884;
exports.ER_DA_UNKNOWN_ERROR_NUMBER = 3885;
exports.ER_COLUMN_CHANGE_SIZE = 3886;
exports.ER_REGEXP_INVALID_CAPTURE_GROUP_NAME = 3887;
exports.ER_DA_SSL_LIBRARY_ERROR = 3888;
exports.ER_SECONDARY_ENGINE = 3889;
exports.ER_SECONDARY_ENGINE_DDL = 3890;
exports.ER_INCORRECT_CURRENT_PASSWORD = 3891;
exports.ER_MISSING_CURRENT_PASSWORD = 3892;
exports.ER_CURRENT_PASSWORD_NOT_REQUIRED = 3893;
exports.ER_PASSWORD_CANNOT_BE_RETAINED_ON_PLUGIN_CHANGE = 3894;
exports.ER_CURRENT_PASSWORD_CANNOT_BE_RETAINED = 3895;
exports.ER_PARTIAL_REVOKES_EXIST = 3896;
exports.ER_CANNOT_GRANT_SYSTEM_PRIV_TO_MANDATORY_ROLE = 3897;
exports.ER_XA_REPLICATION_FILTERS = 3898;
exports.ER_UNSUPPORTED_SQL_MODE = 3899;
exports.ER_REGEXP_INVALID_FLAG = 3900;
exports.ER_PARTIAL_REVOKE_AND_DB_GRANT_BOTH_EXISTS = 3901;
exports.ER_UNIT_NOT_FOUND = 3902;
exports.ER_INVALID_JSON_VALUE_FOR_FUNC_INDEX = 3903;
exports.ER_JSON_VALUE_OUT_OF_RANGE_FOR_FUNC_INDEX = 3904;
exports.ER_EXCEEDED_MV_KEYS_NUM = 3905;
exports.ER_EXCEEDED_MV_KEYS_SPACE = 3906;
exports.ER_FUNCTIONAL_INDEX_DATA_IS_TOO_LONG = 3907;
exports.ER_WRONG_MVI_VALUE = 3908;
exports.ER_WARN_FUNC_INDEX_NOT_APPLICABLE = 3909;
exports.ER_GRP_RPL_UDF_ERROR = 3910;
exports.ER_UPDATE_GTID_PURGED_WITH_GR = 3911;
exports.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3912;
exports.ER_TABLE_NAME_CAUSES_TOO_LONG_PATH = 3913;
exports.ER_AUDIT_LOG_INSUFFICIENT_PRIVILEGE = 3914;
exports.ER_AUDIT_LOG_PASSWORD_HAS_BEEN_COPIED = 3915;
exports.ER_DA_GRP_RPL_STARTED_AUTO_REJOIN = 3916;
exports.ER_SYSVAR_CHANGE_DURING_QUERY = 3917;
exports.ER_GLOBSTAT_CHANGE_DURING_QUERY = 3918;
exports.ER_GRP_RPL_MESSAGE_SERVICE_INIT_FAILURE = 3919;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_CLIENT = 3920;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_LEVEL_CLIENT = 3921;
exports.ER_WRONG_COMPRESSION_ALGORITHM_CLIENT = 3922;
exports.ER_WRONG_COMPRESSION_LEVEL_CLIENT = 3923;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_LIST_CLIENT = 3924;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_CANNOT_BE_ANONYMOUS = 3925;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_DOES_NOT_EXIST = 3926;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_CORRUPT = 3927;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_NEEDS_RPL_APPLIER_PRIV = 3928;
exports.ER_WARN_DA_PRIVILEGE_NOT_REGISTERED = 3929;
exports.ER_CLIENT_KEYRING_UDF_KEY_INVALID = 3930;
exports.ER_CLIENT_KEYRING_UDF_KEY_TYPE_INVALID = 3931;
exports.ER_CLIENT_KEYRING_UDF_KEY_TOO_LONG = 3932;
exports.ER_CLIENT_KEYRING_UDF_KEY_TYPE_TOO_LONG = 3933;
exports.ER_JSON_SCHEMA_VALIDATION_ERROR_WITH_DETAILED_REPORT = 3934;
exports.ER_DA_UDF_INVALID_CHARSET_SPECIFIED = 3935;
exports.ER_DA_UDF_INVALID_CHARSET = 3936;
exports.ER_DA_UDF_INVALID_COLLATION = 3937;
exports.ER_DA_UDF_INVALID_EXTENSION_ARGUMENT_TYPE = 3938;
exports.ER_MULTIPLE_CONSTRAINTS_WITH_SAME_NAME = 3939;
exports.ER_CONSTRAINT_NOT_FOUND = 3940;
exports.ER_ALTER_CONSTRAINT_ENFORCEMENT_NOT_SUPPORTED = 3941;
exports.ER_TABLE_VALUE_CONSTRUCTOR_MUST_HAVE_COLUMNS = 3942;
exports.ER_TABLE_VALUE_CONSTRUCTOR_CANNOT_HAVE_DEFAULT = 3943;
exports.ER_CLIENT_QUERY_FAILURE_INVALID_NON_ROW_FORMAT = 3944;
exports.ER_REQUIRE_ROW_FORMAT_INVALID_VALUE = 3945;
exports.ER_FAILED_TO_DETERMINE_IF_ROLE_IS_MANDATORY = 3946;
exports.ER_FAILED_TO_FETCH_MANDATORY_ROLE_LIST = 3947;
exports.ER_CLIENT_LOCAL_FILES_DISABLED = 3948;
exports.ER_IMP_INCOMPATIBLE_CFG_VERSION = 3949;
exports.ER_DA_OOM = 3950;
exports.ER_DA_UDF_INVALID_ARGUMENT_TO_SET_CHARSET = 3951;
exports.ER_DA_UDF_INVALID_RETURN_TYPE_TO_SET_CHARSET = 3952;
exports.ER_MULTIPLE_INTO_CLAUSES = 3953;
exports.ER_MISPLACED_INTO = 3954;
exports.ER_USER_ACCESS_DENIED_FOR_USER_ACCOUNT_BLOCKED_BY_PASSWORD_LOCK = 3955;
exports.ER_WARN_DEPRECATED_YEAR_UNSIGNED = 3956;
exports.ER_CLONE_NETWORK_PACKET = 3957;
exports.ER_SDI_OPERATION_FAILED_MISSING_RECORD = 3958;
exports.ER_DEPENDENT_BY_CHECK_CONSTRAINT = 3959;
exports.ER_GRP_OPERATION_NOT_ALLOWED_GR_MUST_STOP = 3960;
exports.ER_WARN_DEPRECATED_JSON_TABLE_ON_ERROR_ON_EMPTY = 3961;
exports.ER_WARN_DEPRECATED_INNER_INTO = 3962;
exports.ER_WARN_DEPRECATED_VALUES_FUNCTION_ALWAYS_NULL = 3963;
exports.ER_WARN_DEPRECATED_SQL_CALC_FOUND_ROWS = 3964;
exports.ER_WARN_DEPRECATED_FOUND_ROWS = 3965;
exports.ER_MISSING_JSON_VALUE = 3966;
exports.ER_MULTIPLE_JSON_VALUES = 3967;
exports.ER_HOSTNAME_TOO_LONG = 3968;
exports.ER_WARN_CLIENT_DEPRECATED_PARTITION_PREFIX_KEY = 3969;
exports.ER_GROUP_REPLICATION_USER_EMPTY_MSG = 3970;
exports.ER_GROUP_REPLICATION_USER_MANDATORY_MSG = 3971;
exports.ER_GROUP_REPLICATION_PASSWORD_LENGTH = 3972;
exports.ER_SUBQUERY_TRANSFORM_REJECTED = 3973;
exports.ER_DA_GRP_RPL_RECOVERY_ENDPOINT_FORMAT = 3974;
exports.ER_DA_GRP_RPL_RECOVERY_ENDPOINT_INVALID = 3975;
exports.ER_WRONG_VALUE_FOR_VAR_PLUS_ACTIONABLE_PART = 3976;
exports.ER_STATEMENT_NOT_ALLOWED_AFTER_START_TRANSACTION = 3977;
exports.ER_FOREIGN_KEY_WITH_ATOMIC_CREATE_SELECT = 3978;
exports.ER_NOT_ALLOWED_WITH_START_TRANSACTION = 3979;
exports.ER_INVALID_JSON_ATTRIBUTE = 3980;
exports.ER_ENGINE_ATTRIBUTE_NOT_SUPPORTED = 3981;
exports.ER_INVALID_USER_ATTRIBUTE_JSON = 3982;
exports.ER_INNODB_REDO_DISABLED = 3983;
exports.ER_INNODB_REDO_ARCHIVING_ENABLED = 3984;
exports.ER_MDL_OUT_OF_RESOURCES = 3985;
exports.ER_IMPLICIT_COMPARISON_FOR_JSON = 3986;
exports.ER_FUNCTION_DOES_NOT_SUPPORT_CHARACTER_SET = 3987;
exports.ER_IMPOSSIBLE_STRING_CONVERSION = 3988;
exports.ER_SCHEMA_READ_ONLY = 3989;
exports.ER_RPL_ASYNC_RECONNECT_GTID_MODE_OFF = 3990;
exports.ER_RPL_ASYNC_RECONNECT_AUTO_POSITION_OFF = 3991;
exports.ER_DISABLE_GTID_MODE_REQUIRES_ASYNC_RECONNECT_OFF = 3992;
exports.ER_DISABLE_AUTO_POSITION_REQUIRES_ASYNC_RECONNECT_OFF = 3993;
exports.ER_INVALID_PARAMETER_USE = 3994;
exports.ER_CHARACTER_SET_MISMATCH = 3995;
exports.ER_WARN_VAR_VALUE_CHANGE_NOT_SUPPORTED = 3996;
exports.ER_INVALID_TIME_ZONE_INTERVAL = 3997;
exports.ER_INVALID_CAST = 3998;
exports.ER_HYPERGRAPH_NOT_SUPPORTED_YET = 3999;
exports.ER_WARN_HYPERGRAPH_EXPERIMENTAL = 4000;
exports.ER_DA_NO_ERROR_LOG_PARSER_CONFIGURED = 4001;
exports.ER_DA_ERROR_LOG_TABLE_DISABLED = 4002;
exports.ER_DA_ERROR_LOG_MULTIPLE_FILTERS = 4003;
exports.ER_DA_CANT_OPEN_ERROR_LOG = 4004;
exports.ER_USER_REFERENCED_AS_DEFINER = 4005;
exports.ER_CANNOT_USER_REFERENCED_AS_DEFINER = 4006;
exports.ER_REGEX_NUMBER_TOO_BIG = 4007;
exports.ER_SPVAR_NONINTEGER_TYPE = 4008;
exports.WARN_UNSUPPORTED_ACL_TABLES_READ = 4009;
exports.ER_BINLOG_UNSAFE_ACL_TABLE_READ_IN_DML_DDL = 4010;
exports.ER_STOP_REPLICA_MONITOR_IO_THREAD_TIMEOUT = 4011;
exports.ER_STARTING_REPLICA_MONITOR_IO_THREAD = 4012;
exports.ER_CANT_USE_ANONYMOUS_TO_GTID_WITH_GTID_MODE_NOT_ON = 4013;
exports.ER_CANT_COMBINE_ANONYMOUS_TO_GTID_AND_AUTOPOSITION = 4014;
exports.ER_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_REQUIRES_GTID_MODE_ON = 4015;
exports.ER_SQL_REPLICA_SKIP_COUNTER_USED_WITH_GTID_MODE_ON = 4016;
exports.ER_USING_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_AS_LOCAL_OR_UUID = 4017;
exports.ER_CANT_SET_ANONYMOUS_TO_GTID_AND_WAIT_UNTIL_SQL_THD_AFTER_GTIDS = 4018;
exports.ER_CANT_SET_SQL_AFTER_OR_BEFORE_GTIDS_WITH_ANONYMOUS_TO_GTID = 4019;
exports.ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_GROUP_NAME = 4020;
exports.ER_CANT_USE_SAME_UUID_AS_GROUP_NAME = 4021;
exports.ER_GRP_RPL_RECOVERY_CHANNEL_STILL_RUNNING = 4022;
exports.ER_INNODB_INVALID_AUTOEXTEND_SIZE_VALUE = 4023;
exports.ER_INNODB_INCOMPATIBLE_WITH_TABLESPACE = 4024;
exports.ER_INNODB_AUTOEXTEND_SIZE_OUT_OF_RANGE = 4025;
exports.ER_CANNOT_USE_AUTOEXTEND_SIZE_CLAUSE = 4026;
exports.ER_ROLE_GRANTED_TO_ITSELF = 4027;
exports.ER_TABLE_MUST_HAVE_A_VISIBLE_COLUMN = 4028;
exports.ER_INNODB_COMPRESSION_FAILURE = 4029;
exports.ER_WARN_ASYNC_CONN_FAILOVER_NETWORK_NAMESPACE = 4030;
exports.ER_CLIENT_INTERACTION_TIMEOUT = 4031;
exports.ER_INVALID_CAST_TO_GEOMETRY = 4032;
exports.ER_INVALID_CAST_POLYGON_RING_DIRECTION = 4033;
exports.ER_GIS_DIFFERENT_SRIDS_AGGREGATION = 4034;
exports.ER_RELOAD_KEYRING_FAILURE = 4035;
exports.ER_SDI_GET_KEYS_INVALID_TABLESPACE = 4036;
exports.ER_CHANGE_RPL_SRC_WRONG_COMPRESSION_ALGORITHM_SIZE = 4037;
exports.ER_WARN_DEPRECATED_TLS_VERSION_FOR_CHANNEL_CLI = 4038;
exports.ER_CANT_USE_SAME_UUID_AS_VIEW_CHANGE_UUID = 4039;
exports.ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_VIEW_CHANGE_UUID = 4040;
exports.ER_GRP_RPL_VIEW_CHANGE_UUID_FAIL_GET_VARIABLE = 4041;
exports.ER_WARN_ADUIT_LOG_MAX_SIZE_AND_PRUNE_SECONDS = 4042;
exports.ER_WARN_ADUIT_LOG_MAX_SIZE_CLOSE_TO_ROTATE_ON_SIZE = 4043;
exports.ER_KERBEROS_CREATE_USER = 4044;
exports.ER_INSTALL_PLUGIN_CONFLICT_CLIENT = 4045;
exports.ER_DA_ERROR_LOG_COMPONENT_FLUSH_FAILED = 4046;
exports.ER_WARN_SQL_AFTER_MTS_GAPS_GAP_NOT_CALCULATED = 4047;
exports.ER_INVALID_ASSIGNMENT_TARGET = 4048;
exports.ER_OPERATION_NOT_ALLOWED_ON_GR_SECONDARY = 4049;
exports.ER_GRP_RPL_FAILOVER_CHANNEL_STATUS_PROPAGATION = 4050;
exports.ER_WARN_AUDIT_LOG_FORMAT_UNIX_TIMESTAMP_ONLY_WHEN_JSON = 4051;
exports.ER_INVALID_MFA_PLUGIN_SPECIFIED = 4052;
exports.ER_IDENTIFIED_BY_UNSUPPORTED = 4053;
exports.ER_INVALID_PLUGIN_FOR_REGISTRATION = 4054;
exports.ER_PLUGIN_REQUIRES_REGISTRATION = 4055;
exports.ER_MFA_METHOD_EXISTS = 4056;
exports.ER_MFA_METHOD_NOT_EXISTS = 4057;
exports.ER_AUTHENTICATION_POLICY_MISMATCH = 4058;
exports.ER_PLUGIN_REGISTRATION_DONE = 4059;
exports.ER_INVALID_USER_FOR_REGISTRATION = 4060;
exports.ER_USER_REGISTRATION_FAILED = 4061;
exports.ER_MFA_METHODS_INVALID_ORDER = 4062;
exports.ER_MFA_METHODS_IDENTICAL = 4063;
exports.ER_INVALID_MFA_OPERATIONS_FOR_PASSWORDLESS_USER = 4064;
exports.ER_CHANGE_REPLICATION_SOURCE_NO_OPTIONS_FOR_GTID_ONLY = 4065;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_REQ_ROW_FORMAT_WITH_GTID_ONLY = 4066;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POSITION_WITH_GTID_ONLY = 4067;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_GTID_ONLY_WITHOUT_POSITIONS = 4068;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POS_WITHOUT_POSITIONS = 4069;
exports.ER_CHANGE_REP_SOURCE_GR_CHANNEL_WITH_GTID_MODE_NOT_ON = 4070;
exports.ER_CANT_USE_GTID_ONLY_WITH_GTID_MODE_NOT_ON = 4071;
exports.ER_WARN_C_DISABLE_GTID_ONLY_WITH_SOURCE_AUTO_POS_INVALID_POS = 4072;
exports.ER_DA_SSL_FIPS_MODE_ERROR = 4073;
exports.ER_VALUE_OUT_OF_RANGE = 4074;
exports.ER_FULLTEXT_WITH_ROLLUP = 4075;
exports.ER_REGEXP_MISSING_RESOURCE = 4076;
exports.ER_WARN_REGEXP_USING_DEFAULT = 4077;
exports.ER_REGEXP_MISSING_FILE = 4078;
exports.ER_WARN_DEPRECATED_COLLATION = 4079;
exports.ER_CONCURRENT_PROCEDURE_USAGE = 4080;
exports.ER_DA_GLOBAL_CONN_LIMIT = 4081;
exports.ER_DA_CONN_LIMIT = 4082;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE_INSTANT = 4083;
exports.ER_WARN_SF_UDF_NAME_COLLISION = 4084;
exports.ER_CANNOT_PURGE_BINLOG_WITH_BACKUP_LOCK = 4085;
exports.ER_TOO_MANY_WINDOWS = 4086;
exports.ER_MYSQLBACKUP_CLIENT_MSG = 4087;
exports.ER_COMMENT_CONTAINS_INVALID_STRING = 4088;
exports.ER_DEFINITION_CONTAINS_INVALID_STRING = 4089;
exports.ER_CANT_EXECUTE_COMMAND_WITH_ASSIGNED_GTID_NEXT = 4090;
exports.ER_XA_TEMP_TABLE = 4091;
exports.ER_INNODB_MAX_ROW_VERSION = 4092;
exports.ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_SIZE = 4093;
exports.ER_OPERATION_NOT_ALLOWED_WHILE_PRIMARY_CHANGE_IS_RUNNING = 4094;
exports.ER_WARN_DEPRECATED_DATETIME_DELIMITER = 4095;
exports.ER_WARN_DEPRECATED_SUPERFLUOUS_DELIMITER = 4096;
exports.ER_CANNOT_PERSIST_SENSITIVE_VARIABLES = 4097;
exports.ER_WARN_CANNOT_SECURELY_PERSIST_SENSITIVE_VARIABLES = 4098;
exports.ER_WARN_TRG_ALREADY_EXISTS = 4099;
exports.ER_IF_NOT_EXISTS_UNSUPPORTED_TRG_EXISTS_ON_DIFFERENT_TABLE = 4100;
exports.ER_IF_NOT_EXISTS_UNSUPPORTED_UDF_NATIVE_FCT_NAME_COLLISION = 4101;
exports.ER_SET_PASSWORD_AUTH_PLUGIN_ERROR = 4102;
exports.ER_REDUCED_DBLWR_FILE_CORRUPTED = 4103;
exports.ER_REDUCED_DBLWR_PAGE_FOUND = 4104;
exports.ER_SRS_INVALID_LATITUDE_OF_ORIGIN = 4105;
exports.ER_SRS_INVALID_LONGITUDE_OF_ORIGIN = 4106;
exports.ER_SRS_UNUSED_PROJ_PARAMETER_PRESENT = 4107;
exports.ER_GIPK_COLUMN_EXISTS = 4108;
exports.ER_GIPK_FAILED_AUTOINC_COLUMN_EXISTS = 4109;
exports.ER_GIPK_COLUMN_ALTER_NOT_ALLOWED = 4110;
exports.ER_DROP_PK_COLUMN_TO_DROP_GIPK = 4111;
exports.ER_CREATE_SELECT_WITH_GIPK_DISALLOWED_IN_SBR = 4112;
exports.ER_DA_EXPIRE_LOGS_DAYS_IGNORED = 4113;
exports.ER_CTE_RECURSIVE_NOT_UNION = 4114;
exports.ER_COMMAND_BACKEND_FAILED_TO_FETCH_SECURITY_CTX = 4115;
exports.ER_COMMAND_SERVICE_BACKEND_FAILED = 4116;
exports.ER_CLIENT_FILE_PRIVILEGE_FOR_REPLICATION_CHECKS = 4117;
exports.ER_GROUP_REPLICATION_FORCE_MEMBERS_COMMAND_FAILURE = 4118;
exports.ER_WARN_DEPRECATED_IDENT = 4119;
exports.ER_INTERSECT_ALL_MAX_DUPLICATES_EXCEEDED = 4120;
exports.ER_TP_QUERY_THRS_PER_GRP_EXCEEDS_TXN_THR_LIMIT = 4121;
exports.ER_BAD_TIMESTAMP_FORMAT = 4122;
exports.ER_SHAPE_PRIDICTION_UDF = 4123;
exports.ER_SRS_INVALID_HEIGHT = 4124;
exports.ER_SRS_INVALID_SCALING = 4125;
exports.ER_SRS_INVALID_ZONE_WIDTH = 4126;
exports.ER_SRS_INVALID_LATITUDE_POLAR_STERE_VAR_A = 4127;
exports.ER_WARN_DEPRECATED_CLIENT_NO_SCHEMA_OPTION = 4128;
exports.ER_TABLE_NOT_EMPTY = 4129;
exports.ER_TABLE_NO_PRIMARY_KEY = 4130;
exports.ER_TABLE_IN_SHARED_TABLESPACE = 4131;
exports.ER_INDEX_OTHER_THAN_PK = 4132;
exports.ER_LOAD_BULK_DATA_UNSORTED = 4133;
exports.ER_BULK_EXECUTOR_ERROR = 4134;
exports.ER_BULK_READER_LIBCURL_INIT_FAILED = 4135;
exports.ER_BULK_READER_LIBCURL_ERROR = 4136;
exports.ER_BULK_READER_SERVER_ERROR = 4137;
exports.ER_BULK_READER_COMMUNICATION_ERROR = 4138;
exports.ER_BULK_LOAD_DATA_FAILED = 4139;
exports.ER_BULK_LOADER_COLUMN_TOO_BIG_FOR_LEFTOVER_BUFFER = 4140;
exports.ER_BULK_LOADER_COMPONENT_ERROR = 4141;
exports.ER_BULK_LOADER_FILE_CONTAINS_LESS_LINES_THAN_IGNORE_CLAUSE = 4142;
exports.ER_BULK_PARSER_MISSING_ENCLOSED_BY = 4143;
exports.ER_BULK_PARSER_ROW_BUFFER_MAX_TOTAL_COLS_EXCEEDED = 4144;
exports.ER_BULK_PARSER_COPY_BUFFER_SIZE_EXCEEDED = 4145;
exports.ER_BULK_PARSER_UNEXPECTED_END_OF_INPUT = 4146;
exports.ER_BULK_PARSER_UNEXPECTED_ROW_TERMINATOR = 4147;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_ENDING_ENCLOSED_BY = 4148;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_NULL_ESCAPE = 4149;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_COLUMN_TERMINATOR = 4150;
exports.ER_BULK_PARSER_INCOMPLETE_ESCAPE_SEQUENCE = 4151;
exports.ER_LOAD_BULK_DATA_FAILED = 4152;
exports.ER_LOAD_BULK_DATA_WRONG_VALUE_FOR_FIELD = 4153;
exports.ER_LOAD_BULK_DATA_WARN_NULL_TO_NOTNULL = 4154;
exports.ER_REQUIRE_TABLE_PRIMARY_KEY_CHECK_GENERATE_WITH_GR = 4155;
exports.ER_CANT_CHANGE_SYS_VAR_IN_READ_ONLY_MODE = 4156;
exports.ER_INNODB_INSTANT_ADD_DROP_NOT_SUPPORTED_MAX_SIZE = 4157;
exports.ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_FIELDS = 4158;
exports.ER_CANT_SET_PERSISTED = 4159;
exports.ER_INSTALL_COMPONENT_SET_NULL_VALUE = 4160;
exports.ER_INSTALL_COMPONENT_SET_UNUSED_VALUE = 4161;
exports.ER_WARN_DEPRECATED_USER_DEFINED_COLLATIONS = 4162;
// Lookup-by-number table
exports[1] = 'EE_CANTCREATEFILE';
exports[2] = 'EE_READ';
exports[3] = 'EE_WRITE';
exports[4] = 'EE_BADCLOSE';
exports[5] = 'EE_OUTOFMEMORY';
exports[6] = 'EE_DELETE';
exports[7] = 'EE_LINK';
exports[9] = 'EE_EOFERR';
exports[10] = 'EE_CANTLOCK';
exports[11] = 'EE_CANTUNLOCK';
exports[12] = 'EE_DIR';
exports[13] = 'EE_STAT';
exports[14] = 'EE_CANT_CHSIZE';
exports[15] = 'EE_CANT_OPEN_STREAM';
exports[16] = 'EE_GETWD';
exports[17] = 'EE_SETWD';
exports[18] = 'EE_LINK_WARNING';
exports[19] = 'EE_OPEN_WARNING';
exports[20] = 'EE_DISK_FULL';
exports[21] = 'EE_CANT_MKDIR';
exports[22] = 'EE_UNKNOWN_CHARSET';
exports[23] = 'EE_OUT_OF_FILERESOURCES';
exports[24] = 'EE_CANT_READLINK';
exports[25] = 'EE_CANT_SYMLINK';
exports[26] = 'EE_REALPATH';
exports[27] = 'EE_SYNC';
exports[28] = 'EE_UNKNOWN_COLLATION';
exports[29] = 'EE_FILENOTFOUND';
exports[30] = 'EE_FILE_NOT_CLOSED';
exports[31] = 'EE_CHANGE_OWNERSHIP';
exports[32] = 'EE_CHANGE_PERMISSIONS';
exports[33] = 'EE_CANT_SEEK';
exports[34] = 'EE_CAPACITY_EXCEEDED';
exports[35] = 'EE_DISK_FULL_WITH_RETRY_MSG';
exports[36] = 'EE_FAILED_TO_CREATE_TIMER';
exports[37] = 'EE_FAILED_TO_DELETE_TIMER';
exports[38] = 'EE_FAILED_TO_CREATE_TIMER_QUEUE';
exports[39] = 'EE_FAILED_TO_START_TIMER_NOTIFY_THREAD';
exports[40] = 'EE_FAILED_TO_CREATE_TIMER_NOTIFY_THREAD_INTERRUPT_EVENT';
exports[41] = 'EE_EXITING_TIMER_NOTIFY_THREAD';
exports[42] = 'EE_WIN_LIBRARY_LOAD_FAILED';
exports[43] = 'EE_WIN_RUN_TIME_ERROR_CHECK';
exports[44] = 'EE_FAILED_TO_DETERMINE_LARGE_PAGE_SIZE';
exports[45] = 'EE_FAILED_TO_KILL_ALL_THREADS';
exports[46] = 'EE_FAILED_TO_CREATE_IO_COMPLETION_PORT';
exports[47] = 'EE_FAILED_TO_OPEN_DEFAULTS_FILE';
exports[48] = 'EE_FAILED_TO_HANDLE_DEFAULTS_FILE';
exports[49] = 'EE_WRONG_DIRECTIVE_IN_CONFIG_FILE';
exports[50] = 'EE_SKIPPING_DIRECTIVE_DUE_TO_MAX_INCLUDE_RECURSION';
exports[51] = 'EE_INCORRECT_GRP_DEFINITION_IN_CONFIG_FILE';
exports[52] = 'EE_OPTION_WITHOUT_GRP_IN_CONFIG_FILE';
exports[53] = 'EE_CONFIG_FILE_PERMISSION_ERROR';
exports[54] = 'EE_IGNORE_WORLD_WRITABLE_CONFIG_FILE';
exports[55] = 'EE_USING_DISABLED_OPTION';
exports[56] = 'EE_USING_DISABLED_SHORT_OPTION';
exports[57] = 'EE_USING_PASSWORD_ON_CLI_IS_INSECURE';
exports[58] = 'EE_UNKNOWN_SUFFIX_FOR_VARIABLE';
exports[59] = 'EE_SSL_ERROR_FROM_FILE';
exports[60] = 'EE_SSL_ERROR';
exports[61] = 'EE_NET_SEND_ERROR_IN_BOOTSTRAP';
exports[62] = 'EE_PACKETS_OUT_OF_ORDER';
exports[63] = 'EE_UNKNOWN_PROTOCOL_OPTION';
exports[64] = 'EE_FAILED_TO_LOCATE_SERVER_PUBLIC_KEY';
exports[65] = 'EE_PUBLIC_KEY_NOT_IN_PEM_FORMAT';
exports[66] = 'EE_DEBUG_INFO';
exports[67] = 'EE_UNKNOWN_VARIABLE';
exports[68] = 'EE_UNKNOWN_OPTION';
exports[69] = 'EE_UNKNOWN_SHORT_OPTION';
exports[70] = 'EE_OPTION_WITHOUT_ARGUMENT';
exports[71] = 'EE_OPTION_REQUIRES_ARGUMENT';
exports[72] = 'EE_SHORT_OPTION_REQUIRES_ARGUMENT';
exports[73] = 'EE_OPTION_IGNORED_DUE_TO_INVALID_VALUE';
exports[74] = 'EE_OPTION_WITH_EMPTY_VALUE';
exports[75] = 'EE_FAILED_TO_ASSIGN_MAX_VALUE_TO_OPTION';
exports[76] = 'EE_INCORRECT_BOOLEAN_VALUE_FOR_OPTION';
exports[77] = 'EE_FAILED_TO_SET_OPTION_VALUE';
exports[78] = 'EE_INCORRECT_INT_VALUE_FOR_OPTION';
exports[79] = 'EE_INCORRECT_UINT_VALUE_FOR_OPTION';
exports[80] = 'EE_ADJUSTED_SIGNED_VALUE_FOR_OPTION';
exports[81] = 'EE_ADJUSTED_UNSIGNED_VALUE_FOR_OPTION';
exports[82] = 'EE_ADJUSTED_ULONGLONG_VALUE_FOR_OPTION';
exports[83] = 'EE_ADJUSTED_DOUBLE_VALUE_FOR_OPTION';
exports[84] = 'EE_INVALID_DECIMAL_VALUE_FOR_OPTION';
exports[85] = 'EE_COLLATION_PARSER_ERROR';
exports[86] = 'EE_FAILED_TO_RESET_BEFORE_PRIMARY_IGNORABLE_CHAR';
exports[87] = 'EE_FAILED_TO_RESET_BEFORE_TERTIARY_IGNORABLE_CHAR';
exports[88] = 'EE_SHIFT_CHAR_OUT_OF_RANGE';
exports[89] = 'EE_RESET_CHAR_OUT_OF_RANGE';
exports[90] = 'EE_UNKNOWN_LDML_TAG';
exports[91] = 'EE_FAILED_TO_RESET_BEFORE_SECONDARY_IGNORABLE_CHAR';
exports[92] = 'EE_FAILED_PROCESSING_DIRECTIVE';
exports[93] = 'EE_PTHREAD_KILL_FAILED';
exports[120] = 'HA_ERR_KEY_NOT_FOUND';
exports[121] = 'HA_ERR_FOUND_DUPP_KEY';
exports[122] = 'HA_ERR_INTERNAL_ERROR';
exports[123] = 'HA_ERR_RECORD_CHANGED';
exports[124] = 'HA_ERR_WRONG_INDEX';
exports[125] = 'HA_ERR_ROLLED_BACK';
exports[126] = 'HA_ERR_CRASHED';
exports[127] = 'HA_ERR_WRONG_IN_RECORD';
exports[128] = 'HA_ERR_OUT_OF_MEM';
exports[130] = 'HA_ERR_NOT_A_TABLE';
exports[131] = 'HA_ERR_WRONG_COMMAND';
exports[132] = 'HA_ERR_OLD_FILE';
exports[133] = 'HA_ERR_NO_ACTIVE_RECORD';
exports[134] = 'HA_ERR_RECORD_DELETED';
exports[135] = 'HA_ERR_RECORD_FILE_FULL';
exports[136] = 'HA_ERR_INDEX_FILE_FULL';
exports[137] = 'HA_ERR_END_OF_FILE';
exports[138] = 'HA_ERR_UNSUPPORTED';
exports[139] = 'HA_ERR_TOO_BIG_ROW';
exports[140] = 'HA_WRONG_CREATE_OPTION';
exports[141] = 'HA_ERR_FOUND_DUPP_UNIQUE';
exports[142] = 'HA_ERR_UNKNOWN_CHARSET';
exports[143] = 'HA_ERR_WRONG_MRG_TABLE_DEF';
exports[144] = 'HA_ERR_CRASHED_ON_REPAIR';
exports[145] = 'HA_ERR_CRASHED_ON_USAGE';
exports[146] = 'HA_ERR_LOCK_WAIT_TIMEOUT';
exports[147] = 'HA_ERR_LOCK_TABLE_FULL';
exports[148] = 'HA_ERR_READ_ONLY_TRANSACTION';
exports[149] = 'HA_ERR_LOCK_DEADLOCK';
exports[150] = 'HA_ERR_CANNOT_ADD_FOREIGN';
exports[151] = 'HA_ERR_NO_REFERENCED_ROW';
exports[152] = 'HA_ERR_ROW_IS_REFERENCED';
exports[153] = 'HA_ERR_NO_SAVEPOINT';
exports[154] = 'HA_ERR_NON_UNIQUE_BLOCK_SIZE';
exports[155] = 'HA_ERR_NO_SUCH_TABLE';
exports[156] = 'HA_ERR_TABLE_EXIST';
exports[157] = 'HA_ERR_NO_CONNECTION';
exports[158] = 'HA_ERR_NULL_IN_SPATIAL';
exports[159] = 'HA_ERR_TABLE_DEF_CHANGED';
exports[160] = 'HA_ERR_NO_PARTITION_FOUND';
exports[161] = 'HA_ERR_RBR_LOGGING_FAILED';
exports[162] = 'HA_ERR_DROP_INDEX_FK';
exports[163] = 'HA_ERR_FOREIGN_DUPLICATE_KEY';
exports[164] = 'HA_ERR_TABLE_NEEDS_UPGRADE';
exports[165] = 'HA_ERR_TABLE_READONLY';
exports[166] = 'HA_ERR_AUTOINC_READ_FAILED';
exports[167] = 'HA_ERR_AUTOINC_ERANGE';
exports[168] = 'HA_ERR_GENERIC';
exports[169] = 'HA_ERR_RECORD_IS_THE_SAME';
exports[170] = 'HA_ERR_LOGGING_IMPOSSIBLE';
exports[171] = 'HA_ERR_CORRUPT_EVENT';
exports[172] = 'HA_ERR_NEW_FILE';
exports[173] = 'HA_ERR_ROWS_EVENT_APPLY';
exports[174] = 'HA_ERR_INITIALIZATION';
exports[175] = 'HA_ERR_FILE_TOO_SHORT';
exports[176] = 'HA_ERR_WRONG_CRC';
exports[177] = 'HA_ERR_TOO_MANY_CONCURRENT_TRXS';
exports[178] = 'HA_ERR_NOT_IN_LOCK_PARTITIONS';
exports[179] = 'HA_ERR_INDEX_COL_TOO_LONG';
exports[180] = 'HA_ERR_INDEX_CORRUPT';
exports[181] = 'HA_ERR_UNDO_REC_TOO_BIG';
exports[182] = 'HA_FTS_INVALID_DOCID';
exports[183] = 'HA_ERR_TABLE_IN_FK_CHECK';
exports[184] = 'HA_ERR_TABLESPACE_EXISTS';
exports[185] = 'HA_ERR_TOO_MANY_FIELDS';
exports[186] = 'HA_ERR_ROW_IN_WRONG_PARTITION';
exports[187] = 'HA_ERR_INNODB_READ_ONLY';
exports[188] = 'HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT';
exports[189] = 'HA_ERR_TEMP_FILE_WRITE_FAILURE';
exports[190] = 'HA_ERR_INNODB_FORCED_RECOVERY';
exports[191] = 'HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE';
exports[192] = 'HA_ERR_FK_DEPTH_EXCEEDED';
exports[193] = 'HA_MISSING_CREATE_OPTION';
exports[194] = 'HA_ERR_SE_OUT_OF_MEMORY';
exports[195] = 'HA_ERR_TABLE_CORRUPT';
exports[196] = 'HA_ERR_QUERY_INTERRUPTED';
exports[197] = 'HA_ERR_TABLESPACE_MISSING';
exports[198] = 'HA_ERR_TABLESPACE_IS_NOT_EMPTY';
exports[199] = 'HA_ERR_WRONG_FILE_NAME';
exports[200] = 'HA_ERR_NOT_ALLOWED_COMMAND';
exports[201] = 'HA_ERR_COMPUTE_FAILED';
exports[202] = 'HA_ERR_ROW_FORMAT_CHANGED';
exports[203] = 'HA_ERR_NO_WAIT_LOCK';
exports[204] = 'HA_ERR_DISK_FULL_NOWAIT';
exports[205] = 'HA_ERR_NO_SESSION_TEMP';
exports[206] = 'HA_ERR_WRONG_TABLE_NAME';
exports[207] = 'HA_ERR_TOO_LONG_PATH';
exports[208] = 'HA_ERR_SAMPLING_INIT_FAILED';
exports[209] = 'HA_ERR_FTS_TOO_MANY_NESTED_EXP';
exports[1000] = 'ER_HASHCHK';
exports[1001] = 'ER_NISAMCHK';
exports[1002] = 'ER_NO';
exports[1003] = 'ER_YES';
exports[1004] = 'ER_CANT_CREATE_FILE';
exports[1005] = 'ER_CANT_CREATE_TABLE';
exports[1006] = 'ER_CANT_CREATE_DB';
exports[1007] = 'ER_DB_CREATE_EXISTS';
exports[1008] = 'ER_DB_DROP_EXISTS';
exports[1009] = 'ER_DB_DROP_DELETE';
exports[1010] = 'ER_DB_DROP_RMDIR';
exports[1011] = 'ER_CANT_DELETE_FILE';
exports[1012] = 'ER_CANT_FIND_SYSTEM_REC';
exports[1013] = 'ER_CANT_GET_STAT';
exports[1014] = 'ER_CANT_GET_WD';
exports[1015] = 'ER_CANT_LOCK';
exports[1016] = 'ER_CANT_OPEN_FILE';
exports[1017] = 'ER_FILE_NOT_FOUND';
exports[1018] = 'ER_CANT_READ_DIR';
exports[1019] = 'ER_CANT_SET_WD';
exports[1020] = 'ER_CHECKREAD';
exports[1021] = 'ER_DISK_FULL';
exports[1022] = 'ER_DUP_KEY';
exports[1023] = 'ER_ERROR_ON_CLOSE';
exports[1024] = 'ER_ERROR_ON_READ';
exports[1025] = 'ER_ERROR_ON_RENAME';
exports[1026] = 'ER_ERROR_ON_WRITE';
exports[1027] = 'ER_FILE_USED';
exports[1028] = 'ER_FILSORT_ABORT';
exports[1029] = 'ER_FORM_NOT_FOUND';
exports[1030] = 'ER_GET_ERRNO';
exports[1031] = 'ER_ILLEGAL_HA';
exports[1032] = 'ER_KEY_NOT_FOUND';
exports[1033] = 'ER_NOT_FORM_FILE';
exports[1034] = 'ER_NOT_KEYFILE';
exports[1035] = 'ER_OLD_KEYFILE';
exports[1036] = 'ER_OPEN_AS_READONLY';
exports[1037] = 'ER_OUTOFMEMORY';
exports[1038] = 'ER_OUT_OF_SORTMEMORY';
exports[1039] = 'ER_UNEXPECTED_EOF';
exports[1040] = 'ER_CON_COUNT_ERROR';
exports[1041] = 'ER_OUT_OF_RESOURCES';
exports[1042] = 'ER_BAD_HOST_ERROR';
exports[1043] = 'ER_HANDSHAKE_ERROR';
exports[1044] = 'ER_DBACCESS_DENIED_ERROR';
exports[1045] = 'ER_ACCESS_DENIED_ERROR';
exports[1046] = 'ER_NO_DB_ERROR';
exports[1047] = 'ER_UNKNOWN_COM_ERROR';
exports[1048] = 'ER_BAD_NULL_ERROR';
exports[1049] = 'ER_BAD_DB_ERROR';
exports[1050] = 'ER_TABLE_EXISTS_ERROR';
exports[1051] = 'ER_BAD_TABLE_ERROR';
exports[1052] = 'ER_NON_UNIQ_ERROR';
exports[1053] = 'ER_SERVER_SHUTDOWN';
exports[1054] = 'ER_BAD_FIELD_ERROR';
exports[1055] = 'ER_WRONG_FIELD_WITH_GROUP';
exports[1056] = 'ER_WRONG_GROUP_FIELD';
exports[1057] = 'ER_WRONG_SUM_SELECT';
exports[1058] = 'ER_WRONG_VALUE_COUNT';
exports[1059] = 'ER_TOO_LONG_IDENT';
exports[1060] = 'ER_DUP_FIELDNAME';
exports[1061] = 'ER_DUP_KEYNAME';
exports[1062] = 'ER_DUP_ENTRY';
exports[1063] = 'ER_WRONG_FIELD_SPEC';
exports[1064] = 'ER_PARSE_ERROR';
exports[1065] = 'ER_EMPTY_QUERY';
exports[1066] = 'ER_NONUNIQ_TABLE';
exports[1067] = 'ER_INVALID_DEFAULT';
exports[1068] = 'ER_MULTIPLE_PRI_KEY';
exports[1069] = 'ER_TOO_MANY_KEYS';
exports[1070] = 'ER_TOO_MANY_KEY_PARTS';
exports[1071] = 'ER_TOO_LONG_KEY';
exports[1072] = 'ER_KEY_COLUMN_DOES_NOT_EXITS';
exports[1073] = 'ER_BLOB_USED_AS_KEY';
exports[1074] = 'ER_TOO_BIG_FIELDLENGTH';
exports[1075] = 'ER_WRONG_AUTO_KEY';
exports[1076] = 'ER_READY';
exports[1077] = 'ER_NORMAL_SHUTDOWN';
exports[1078] = 'ER_GOT_SIGNAL';
exports[1079] = 'ER_SHUTDOWN_COMPLETE';
exports[1080] = 'ER_FORCING_CLOSE';
exports[1081] = 'ER_IPSOCK_ERROR';
exports[1082] = 'ER_NO_SUCH_INDEX';
exports[1083] = 'ER_WRONG_FIELD_TERMINATORS';
exports[1084] = 'ER_BLOBS_AND_NO_TERMINATED';
exports[1085] = 'ER_TEXTFILE_NOT_READABLE';
exports[1086] = 'ER_FILE_EXISTS_ERROR';
exports[1087] = 'ER_LOAD_INFO';
exports[1088] = 'ER_ALTER_INFO';
exports[1089] = 'ER_WRONG_SUB_KEY';
exports[1090] = 'ER_CANT_REMOVE_ALL_FIELDS';
exports[1091] = 'ER_CANT_DROP_FIELD_OR_KEY';
exports[1092] = 'ER_INSERT_INFO';
exports[1093] = 'ER_UPDATE_TABLE_USED';
exports[1094] = 'ER_NO_SUCH_THREAD';
exports[1095] = 'ER_KILL_DENIED_ERROR';
exports[1096] = 'ER_NO_TABLES_USED';
exports[1097] = 'ER_TOO_BIG_SET';
exports[1098] = 'ER_NO_UNIQUE_LOGFILE';
exports[1099] = 'ER_TABLE_NOT_LOCKED_FOR_WRITE';
exports[1100] = 'ER_TABLE_NOT_LOCKED';
exports[1101] = 'ER_BLOB_CANT_HAVE_DEFAULT';
exports[1102] = 'ER_WRONG_DB_NAME';
exports[1103] = 'ER_WRONG_TABLE_NAME';
exports[1104] = 'ER_TOO_BIG_SELECT';
exports[1105] = 'ER_UNKNOWN_ERROR';
exports[1106] = 'ER_UNKNOWN_PROCEDURE';
exports[1107] = 'ER_WRONG_PARAMCOUNT_TO_PROCEDURE';
exports[1108] = 'ER_WRONG_PARAMETERS_TO_PROCEDURE';
exports[1109] = 'ER_UNKNOWN_TABLE';
exports[1110] = 'ER_FIELD_SPECIFIED_TWICE';
exports[1111] = 'ER_INVALID_GROUP_FUNC_USE';
exports[1112] = 'ER_UNSUPPORTED_EXTENSION';
exports[1113] = 'ER_TABLE_MUST_HAVE_COLUMNS';
exports[1114] = 'ER_RECORD_FILE_FULL';
exports[1115] = 'ER_UNKNOWN_CHARACTER_SET';
exports[1116] = 'ER_TOO_MANY_TABLES';
exports[1117] = 'ER_TOO_MANY_FIELDS';
exports[1118] = 'ER_TOO_BIG_ROWSIZE';
exports[1119] = 'ER_STACK_OVERRUN';
exports[1120] = 'ER_WRONG_OUTER_JOIN';
exports[1121] = 'ER_NULL_COLUMN_IN_INDEX';
exports[1122] = 'ER_CANT_FIND_UDF';
exports[1123] = 'ER_CANT_INITIALIZE_UDF';
exports[1124] = 'ER_UDF_NO_PATHS';
exports[1125] = 'ER_UDF_EXISTS';
exports[1126] = 'ER_CANT_OPEN_LIBRARY';
exports[1127] = 'ER_CANT_FIND_DL_ENTRY';
exports[1128] = 'ER_FUNCTION_NOT_DEFINED';
exports[1129] = 'ER_HOST_IS_BLOCKED';
exports[1130] = 'ER_HOST_NOT_PRIVILEGED';
exports[1131] = 'ER_PASSWORD_ANONYMOUS_USER';
exports[1132] = 'ER_PASSWORD_NOT_ALLOWED';
exports[1133] = 'ER_PASSWORD_NO_MATCH';
exports[1134] = 'ER_UPDATE_INFO';
exports[1135] = 'ER_CANT_CREATE_THREAD';
exports[1136] = 'ER_WRONG_VALUE_COUNT_ON_ROW';
exports[1137] = 'ER_CANT_REOPEN_TABLE';
exports[1138] = 'ER_INVALID_USE_OF_NULL';
exports[1139] = 'ER_REGEXP_ERROR';
exports[1140] = 'ER_MIX_OF_GROUP_FUNC_AND_FIELDS';
exports[1141] = 'ER_NONEXISTING_GRANT';
exports[1142] = 'ER_TABLEACCESS_DENIED_ERROR';
exports[1143] = 'ER_COLUMNACCESS_DENIED_ERROR';
exports[1144] = 'ER_ILLEGAL_GRANT_FOR_TABLE';
exports[1145] = 'ER_GRANT_WRONG_HOST_OR_USER';
exports[1146] = 'ER_NO_SUCH_TABLE';
exports[1147] = 'ER_NONEXISTING_TABLE_GRANT';
exports[1148] = 'ER_NOT_ALLOWED_COMMAND';
exports[1149] = 'ER_SYNTAX_ERROR';
exports[1150] = 'ER_UNUSED1';
exports[1151] = 'ER_UNUSED2';
exports[1152] = 'ER_ABORTING_CONNECTION';
exports[1153] = 'ER_NET_PACKET_TOO_LARGE';
exports[1154] = 'ER_NET_READ_ERROR_FROM_PIPE';
exports[1155] = 'ER_NET_FCNTL_ERROR';
exports[1156] = 'ER_NET_PACKETS_OUT_OF_ORDER';
exports[1157] = 'ER_NET_UNCOMPRESS_ERROR';
exports[1158] = 'ER_NET_READ_ERROR';
exports[1159] = 'ER_NET_READ_INTERRUPTED';
exports[1160] = 'ER_NET_ERROR_ON_WRITE';
exports[1161] = 'ER_NET_WRITE_INTERRUPTED';
exports[1162] = 'ER_TOO_LONG_STRING';
exports[1163] = 'ER_TABLE_CANT_HANDLE_BLOB';
exports[1164] = 'ER_TABLE_CANT_HANDLE_AUTO_INCREMENT';
exports[1165] = 'ER_UNUSED3';
exports[1166] = 'ER_WRONG_COLUMN_NAME';
exports[1167] = 'ER_WRONG_KEY_COLUMN';
exports[1168] = 'ER_WRONG_MRG_TABLE';
exports[1169] = 'ER_DUP_UNIQUE';
exports[1170] = 'ER_BLOB_KEY_WITHOUT_LENGTH';
exports[1171] = 'ER_PRIMARY_CANT_HAVE_NULL';
exports[1172] = 'ER_TOO_MANY_ROWS';
exports[1173] = 'ER_REQUIRES_PRIMARY_KEY';
exports[1174] = 'ER_NO_RAID_COMPILED';
exports[1175] = 'ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE';
exports[1176] = 'ER_KEY_DOES_NOT_EXITS';
exports[1177] = 'ER_CHECK_NO_SUCH_TABLE';
exports[1178] = 'ER_CHECK_NOT_IMPLEMENTED';
exports[1179] = 'ER_CANT_DO_THIS_DURING_AN_TRANSACTION';
exports[1180] = 'ER_ERROR_DURING_COMMIT';
exports[1181] = 'ER_ERROR_DURING_ROLLBACK';
exports[1182] = 'ER_ERROR_DURING_FLUSH_LOGS';
exports[1183] = 'ER_ERROR_DURING_CHECKPOINT';
exports[1184] = 'ER_NEW_ABORTING_CONNECTION';
exports[1185] = 'ER_DUMP_NOT_IMPLEMENTED';
exports[1186] = 'ER_FLUSH_MASTER_BINLOG_CLOSED';
exports[1187] = 'ER_INDEX_REBUILD';
exports[1188] = 'ER_SOURCE';
exports[1189] = 'ER_SOURCE_NET_READ';
exports[1190] = 'ER_SOURCE_NET_WRITE';
exports[1191] = 'ER_FT_MATCHING_KEY_NOT_FOUND';
exports[1192] = 'ER_LOCK_OR_ACTIVE_TRANSACTION';
exports[1193] = 'ER_UNKNOWN_SYSTEM_VARIABLE';
exports[1194] = 'ER_CRASHED_ON_USAGE';
exports[1195] = 'ER_CRASHED_ON_REPAIR';
exports[1196] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK';
exports[1197] = 'ER_TRANS_CACHE_FULL';
exports[1198] = 'ER_SLAVE_MUST_STOP';
exports[1199] = 'ER_REPLICA_NOT_RUNNING';
exports[1200] = 'ER_BAD_REPLICA';
exports[1201] = 'ER_CONNECTION_METADATA';
exports[1202] = 'ER_REPLICA_THREAD';
exports[1203] = 'ER_TOO_MANY_USER_CONNECTIONS';
exports[1204] = 'ER_SET_CONSTANTS_ONLY';
exports[1205] = 'ER_LOCK_WAIT_TIMEOUT';
exports[1206] = 'ER_LOCK_TABLE_FULL';
exports[1207] = 'ER_READ_ONLY_TRANSACTION';
exports[1208] = 'ER_DROP_DB_WITH_READ_LOCK';
exports[1209] = 'ER_CREATE_DB_WITH_READ_LOCK';
exports[1210] = 'ER_WRONG_ARGUMENTS';
exports[1211] = 'ER_NO_PERMISSION_TO_CREATE_USER';
exports[1212] = 'ER_UNION_TABLES_IN_DIFFERENT_DIR';
exports[1213] = 'ER_LOCK_DEADLOCK';
exports[1214] = 'ER_TABLE_CANT_HANDLE_FT';
exports[1215] = 'ER_CANNOT_ADD_FOREIGN';
exports[1216] = 'ER_NO_REFERENCED_ROW';
exports[1217] = 'ER_ROW_IS_REFERENCED';
exports[1218] = 'ER_CONNECT_TO_SOURCE';
exports[1219] = 'ER_QUERY_ON_MASTER';
exports[1220] = 'ER_ERROR_WHEN_EXECUTING_COMMAND';
exports[1221] = 'ER_WRONG_USAGE';
exports[1222] = 'ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT';
exports[1223] = 'ER_CANT_UPDATE_WITH_READLOCK';
exports[1224] = 'ER_MIXING_NOT_ALLOWED';
exports[1225] = 'ER_DUP_ARGUMENT';
exports[1226] = 'ER_USER_LIMIT_REACHED';
exports[1227] = 'ER_SPECIFIC_ACCESS_DENIED_ERROR';
exports[1228] = 'ER_LOCAL_VARIABLE';
exports[1229] = 'ER_GLOBAL_VARIABLE';
exports[1230] = 'ER_NO_DEFAULT';
exports[1231] = 'ER_WRONG_VALUE_FOR_VAR';
exports[1232] = 'ER_WRONG_TYPE_FOR_VAR';
exports[1233] = 'ER_VAR_CANT_BE_READ';
exports[1234] = 'ER_CANT_USE_OPTION_HERE';
exports[1235] = 'ER_NOT_SUPPORTED_YET';
exports[1236] = 'ER_SOURCE_FATAL_ERROR_READING_BINLOG';
exports[1237] = 'ER_REPLICA_IGNORED_TABLE';
exports[1238] = 'ER_INCORRECT_GLOBAL_LOCAL_VAR';
exports[1239] = 'ER_WRONG_FK_DEF';
exports[1240] = 'ER_KEY_REF_DO_NOT_MATCH_TABLE_REF';
exports[1241] = 'ER_OPERAND_COLUMNS';
exports[1242] = 'ER_SUBQUERY_NO_1_ROW';
exports[1243] = 'ER_UNKNOWN_STMT_HANDLER';
exports[1244] = 'ER_CORRUPT_HELP_DB';
exports[1245] = 'ER_CYCLIC_REFERENCE';
exports[1246] = 'ER_AUTO_CONVERT';
exports[1247] = 'ER_ILLEGAL_REFERENCE';
exports[1248] = 'ER_DERIVED_MUST_HAVE_ALIAS';
exports[1249] = 'ER_SELECT_REDUCED';
exports[1250] = 'ER_TABLENAME_NOT_ALLOWED_HERE';
exports[1251] = 'ER_NOT_SUPPORTED_AUTH_MODE';
exports[1252] = 'ER_SPATIAL_CANT_HAVE_NULL';
exports[1253] = 'ER_COLLATION_CHARSET_MISMATCH';
exports[1254] = 'ER_SLAVE_WAS_RUNNING';
exports[1255] = 'ER_SLAVE_WAS_NOT_RUNNING';
exports[1256] = 'ER_TOO_BIG_FOR_UNCOMPRESS';
exports[1257] = 'ER_ZLIB_Z_MEM_ERROR';
exports[1258] = 'ER_ZLIB_Z_BUF_ERROR';
exports[1259] = 'ER_ZLIB_Z_DATA_ERROR';
exports[1260] = 'ER_CUT_VALUE_GROUP_CONCAT';
exports[1261] = 'ER_WARN_TOO_FEW_RECORDS';
exports[1262] = 'ER_WARN_TOO_MANY_RECORDS';
exports[1263] = 'ER_WARN_NULL_TO_NOTNULL';
exports[1264] = 'ER_WARN_DATA_OUT_OF_RANGE';
exports[1265] = 'WARN_DATA_TRUNCATED';
exports[1266] = 'ER_WARN_USING_OTHER_HANDLER';
exports[1267] = 'ER_CANT_AGGREGATE_2COLLATIONS';
exports[1268] = 'ER_DROP_USER';
exports[1269] = 'ER_REVOKE_GRANTS';
exports[1270] = 'ER_CANT_AGGREGATE_3COLLATIONS';
exports[1271] = 'ER_CANT_AGGREGATE_NCOLLATIONS';
exports[1272] = 'ER_VARIABLE_IS_NOT_STRUCT';
exports[1273] = 'ER_UNKNOWN_COLLATION';
exports[1274] = 'ER_REPLICA_IGNORED_SSL_PARAMS';
exports[1275] = 'ER_SERVER_IS_IN_SECURE_AUTH_MODE';
exports[1276] = 'ER_WARN_FIELD_RESOLVED';
exports[1277] = 'ER_BAD_REPLICA_UNTIL_COND';
exports[1278] = 'ER_MISSING_SKIP_REPLICA';
exports[1279] = 'ER_UNTIL_COND_IGNORED';
exports[1280] = 'ER_WRONG_NAME_FOR_INDEX';
exports[1281] = 'ER_WRONG_NAME_FOR_CATALOG';
exports[1282] = 'ER_WARN_QC_RESIZE';
exports[1283] = 'ER_BAD_FT_COLUMN';
exports[1284] = 'ER_UNKNOWN_KEY_CACHE';
exports[1285] = 'ER_WARN_HOSTNAME_WONT_WORK';
exports[1286] = 'ER_UNKNOWN_STORAGE_ENGINE';
exports[1287] = 'ER_WARN_DEPRECATED_SYNTAX';
exports[1288] = 'ER_NON_UPDATABLE_TABLE';
exports[1289] = 'ER_FEATURE_DISABLED';
exports[1290] = 'ER_OPTION_PREVENTS_STATEMENT';
exports[1291] = 'ER_DUPLICATED_VALUE_IN_TYPE';
exports[1292] = 'ER_TRUNCATED_WRONG_VALUE';
exports[1293] = 'ER_TOO_MUCH_AUTO_TIMESTAMP_COLS';
exports[1294] = 'ER_INVALID_ON_UPDATE';
exports[1295] = 'ER_UNSUPPORTED_PS';
exports[1296] = 'ER_GET_ERRMSG';
exports[1297] = 'ER_GET_TEMPORARY_ERRMSG';
exports[1298] = 'ER_UNKNOWN_TIME_ZONE';
exports[1299] = 'ER_WARN_INVALID_TIMESTAMP';
exports[1300] = 'ER_INVALID_CHARACTER_STRING';
exports[1301] = 'ER_WARN_ALLOWED_PACKET_OVERFLOWED';
exports[1302] = 'ER_CONFLICTING_DECLARATIONS';
exports[1303] = 'ER_SP_NO_RECURSIVE_CREATE';
exports[1304] = 'ER_SP_ALREADY_EXISTS';
exports[1305] = 'ER_SP_DOES_NOT_EXIST';
exports[1306] = 'ER_SP_DROP_FAILED';
exports[1307] = 'ER_SP_STORE_FAILED';
exports[1308] = 'ER_SP_LILABEL_MISMATCH';
exports[1309] = 'ER_SP_LABEL_REDEFINE';
exports[1310] = 'ER_SP_LABEL_MISMATCH';
exports[1311] = 'ER_SP_UNINIT_VAR';
exports[1312] = 'ER_SP_BADSELECT';
exports[1313] = 'ER_SP_BADRETURN';
exports[1314] = 'ER_SP_BADSTATEMENT';
exports[1315] = 'ER_UPDATE_LOG_DEPRECATED_IGNORED';
exports[1316] = 'ER_UPDATE_LOG_DEPRECATED_TRANSLATED';
exports[1317] = 'ER_QUERY_INTERRUPTED';
exports[1318] = 'ER_SP_WRONG_NO_OF_ARGS';
exports[1319] = 'ER_SP_COND_MISMATCH';
exports[1320] = 'ER_SP_NORETURN';
exports[1321] = 'ER_SP_NORETURNEND';
exports[1322] = 'ER_SP_BAD_CURSOR_QUERY';
exports[1323] = 'ER_SP_BAD_CURSOR_SELECT';
exports[1324] = 'ER_SP_CURSOR_MISMATCH';
exports[1325] = 'ER_SP_CURSOR_ALREADY_OPEN';
exports[1326] = 'ER_SP_CURSOR_NOT_OPEN';
exports[1327] = 'ER_SP_UNDECLARED_VAR';
exports[1328] = 'ER_SP_WRONG_NO_OF_FETCH_ARGS';
exports[1329] = 'ER_SP_FETCH_NO_DATA';
exports[1330] = 'ER_SP_DUP_PARAM';
exports[1331] = 'ER_SP_DUP_VAR';
exports[1332] = 'ER_SP_DUP_COND';
exports[1333] = 'ER_SP_DUP_CURS';
exports[1334] = 'ER_SP_CANT_ALTER';
exports[1335] = 'ER_SP_SUBSELECT_NYI';
exports[1336] = 'ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG';
exports[1337] = 'ER_SP_VARCOND_AFTER_CURSHNDLR';
exports[1338] = 'ER_SP_CURSOR_AFTER_HANDLER';
exports[1339] = 'ER_SP_CASE_NOT_FOUND';
exports[1340] = 'ER_FPARSER_TOO_BIG_FILE';
exports[1341] = 'ER_FPARSER_BAD_HEADER';
exports[1342] = 'ER_FPARSER_EOF_IN_COMMENT';
exports[1343] = 'ER_FPARSER_ERROR_IN_PARAMETER';
exports[1344] = 'ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER';
exports[1345] = 'ER_VIEW_NO_EXPLAIN';
exports[1346] = 'ER_FRM_UNKNOWN_TYPE';
exports[1347] = 'ER_WRONG_OBJECT';
exports[1348] = 'ER_NONUPDATEABLE_COLUMN';
exports[1349] = 'ER_VIEW_SELECT_DERIVED';
exports[1350] = 'ER_VIEW_SELECT_CLAUSE';
exports[1351] = 'ER_VIEW_SELECT_VARIABLE';
exports[1352] = 'ER_VIEW_SELECT_TMPTABLE';
exports[1353] = 'ER_VIEW_WRONG_LIST';
exports[1354] = 'ER_WARN_VIEW_MERGE';
exports[1355] = 'ER_WARN_VIEW_WITHOUT_KEY';
exports[1356] = 'ER_VIEW_INVALID';
exports[1357] = 'ER_SP_NO_DROP_SP';
exports[1358] = 'ER_SP_GOTO_IN_HNDLR';
exports[1359] = 'ER_TRG_ALREADY_EXISTS';
exports[1360] = 'ER_TRG_DOES_NOT_EXIST';
exports[1361] = 'ER_TRG_ON_VIEW_OR_TEMP_TABLE';
exports[1362] = 'ER_TRG_CANT_CHANGE_ROW';
exports[1363] = 'ER_TRG_NO_SUCH_ROW_IN_TRG';
exports[1364] = 'ER_NO_DEFAULT_FOR_FIELD';
exports[1365] = 'ER_DIVISION_BY_ZERO';
exports[1366] = 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD';
exports[1367] = 'ER_ILLEGAL_VALUE_FOR_TYPE';
exports[1368] = 'ER_VIEW_NONUPD_CHECK';
exports[1369] = 'ER_VIEW_CHECK_FAILED';
exports[1370] = 'ER_PROCACCESS_DENIED_ERROR';
exports[1371] = 'ER_RELAY_LOG_FAIL';
exports[1372] = 'ER_PASSWD_LENGTH';
exports[1373] = 'ER_UNKNOWN_TARGET_BINLOG';
exports[1374] = 'ER_IO_ERR_LOG_INDEX_READ';
exports[1375] = 'ER_BINLOG_PURGE_PROHIBITED';
exports[1376] = 'ER_FSEEK_FAIL';
exports[1377] = 'ER_BINLOG_PURGE_FATAL_ERR';
exports[1378] = 'ER_LOG_IN_USE';
exports[1379] = 'ER_LOG_PURGE_UNKNOWN_ERR';
exports[1380] = 'ER_RELAY_LOG_INIT';
exports[1381] = 'ER_NO_BINARY_LOGGING';
exports[1382] = 'ER_RESERVED_SYNTAX';
exports[1383] = 'ER_WSAS_FAILED';
exports[1384] = 'ER_DIFF_GROUPS_PROC';
exports[1385] = 'ER_NO_GROUP_FOR_PROC';
exports[1386] = 'ER_ORDER_WITH_PROC';
exports[1387] = 'ER_LOGGING_PROHIBIT_CHANGING_OF';
exports[1388] = 'ER_NO_FILE_MAPPING';
exports[1389] = 'ER_WRONG_MAGIC';
exports[1390] = 'ER_PS_MANY_PARAM';
exports[1391] = 'ER_KEY_PART_0';
exports[1392] = 'ER_VIEW_CHECKSUM';
exports[1393] = 'ER_VIEW_MULTIUPDATE';
exports[1394] = 'ER_VIEW_NO_INSERT_FIELD_LIST';
exports[1395] = 'ER_VIEW_DELETE_MERGE_VIEW';
exports[1396] = 'ER_CANNOT_USER';
exports[1397] = 'ER_XAER_NOTA';
exports[1398] = 'ER_XAER_INVAL';
exports[1399] = 'ER_XAER_RMFAIL';
exports[1400] = 'ER_XAER_OUTSIDE';
exports[1401] = 'ER_XAER_RMERR';
exports[1402] = 'ER_XA_RBROLLBACK';
exports[1403] = 'ER_NONEXISTING_PROC_GRANT';
exports[1404] = 'ER_PROC_AUTO_GRANT_FAIL';
exports[1405] = 'ER_PROC_AUTO_REVOKE_FAIL';
exports[1406] = 'ER_DATA_TOO_LONG';
exports[1407] = 'ER_SP_BAD_SQLSTATE';
exports[1408] = 'ER_STARTUP';
exports[1409] = 'ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR';
exports[1410] = 'ER_CANT_CREATE_USER_WITH_GRANT';
exports[1411] = 'ER_WRONG_VALUE_FOR_TYPE';
exports[1412] = 'ER_TABLE_DEF_CHANGED';
exports[1413] = 'ER_SP_DUP_HANDLER';
exports[1414] = 'ER_SP_NOT_VAR_ARG';
exports[1415] = 'ER_SP_NO_RETSET';
exports[1416] = 'ER_CANT_CREATE_GEOMETRY_OBJECT';
exports[1417] = 'ER_FAILED_ROUTINE_BREAK_BINLOG';
exports[1418] = 'ER_BINLOG_UNSAFE_ROUTINE';
exports[1419] = 'ER_BINLOG_CREATE_ROUTINE_NEED_SUPER';
exports[1420] = 'ER_EXEC_STMT_WITH_OPEN_CURSOR';
exports[1421] = 'ER_STMT_HAS_NO_OPEN_CURSOR';
exports[1422] = 'ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG';
exports[1423] = 'ER_NO_DEFAULT_FOR_VIEW_FIELD';
exports[1424] = 'ER_SP_NO_RECURSION';
exports[1425] = 'ER_TOO_BIG_SCALE';
exports[1426] = 'ER_TOO_BIG_PRECISION';
exports[1427] = 'ER_M_BIGGER_THAN_D';
exports[1428] = 'ER_WRONG_LOCK_OF_SYSTEM_TABLE';
exports[1429] = 'ER_CONNECT_TO_FOREIGN_DATA_SOURCE';
exports[1430] = 'ER_QUERY_ON_FOREIGN_DATA_SOURCE';
exports[1431] = 'ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST';
exports[1432] = 'ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE';
exports[1433] = 'ER_FOREIGN_DATA_STRING_INVALID';
exports[1434] = 'ER_CANT_CREATE_FEDERATED_TABLE';
exports[1435] = 'ER_TRG_IN_WRONG_SCHEMA';
exports[1436] = 'ER_STACK_OVERRUN_NEED_MORE';
exports[1437] = 'ER_TOO_LONG_BODY';
exports[1438] = 'ER_WARN_CANT_DROP_DEFAULT_KEYCACHE';
exports[1439] = 'ER_TOO_BIG_DISPLAYWIDTH';
exports[1440] = 'ER_XAER_DUPID';
exports[1441] = 'ER_DATETIME_FUNCTION_OVERFLOW';
exports[1442] = 'ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG';
exports[1443] = 'ER_VIEW_PREVENT_UPDATE';
exports[1444] = 'ER_PS_NO_RECURSION';
exports[1445] = 'ER_SP_CANT_SET_AUTOCOMMIT';
exports[1446] = 'ER_MALFORMED_DEFINER';
exports[1447] = 'ER_VIEW_FRM_NO_USER';
exports[1448] = 'ER_VIEW_OTHER_USER';
exports[1449] = 'ER_NO_SUCH_USER';
exports[1450] = 'ER_FORBID_SCHEMA_CHANGE';
exports[1451] = 'ER_ROW_IS_REFERENCED_2';
exports[1452] = 'ER_NO_REFERENCED_ROW_2';
exports[1453] = 'ER_SP_BAD_VAR_SHADOW';
exports[1454] = 'ER_TRG_NO_DEFINER';
exports[1455] = 'ER_OLD_FILE_FORMAT';
exports[1456] = 'ER_SP_RECURSION_LIMIT';
exports[1457] = 'ER_SP_PROC_TABLE_CORRUPT';
exports[1458] = 'ER_SP_WRONG_NAME';
exports[1459] = 'ER_TABLE_NEEDS_UPGRADE';
exports[1460] = 'ER_SP_NO_AGGREGATE';
exports[1461] = 'ER_MAX_PREPARED_STMT_COUNT_REACHED';
exports[1462] = 'ER_VIEW_RECURSIVE';
exports[1463] = 'ER_NON_GROUPING_FIELD_USED';
exports[1464] = 'ER_TABLE_CANT_HANDLE_SPKEYS';
exports[1465] = 'ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA';
exports[1466] = 'ER_REMOVED_SPACES';
exports[1467] = 'ER_AUTOINC_READ_FAILED';
exports[1468] = 'ER_USERNAME';
exports[1469] = 'ER_HOSTNAME';
exports[1470] = 'ER_WRONG_STRING_LENGTH';
exports[1471] = 'ER_NON_INSERTABLE_TABLE';
exports[1472] = 'ER_ADMIN_WRONG_MRG_TABLE';
exports[1473] = 'ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT';
exports[1474] = 'ER_NAME_BECOMES_EMPTY';
exports[1475] = 'ER_AMBIGUOUS_FIELD_TERM';
exports[1476] = 'ER_FOREIGN_SERVER_EXISTS';
exports[1477] = 'ER_FOREIGN_SERVER_DOESNT_EXIST';
exports[1478] = 'ER_ILLEGAL_HA_CREATE_OPTION';
exports[1479] = 'ER_PARTITION_REQUIRES_VALUES_ERROR';
exports[1480] = 'ER_PARTITION_WRONG_VALUES_ERROR';
exports[1481] = 'ER_PARTITION_MAXVALUE_ERROR';
exports[1482] = 'ER_PARTITION_SUBPARTITION_ERROR';
exports[1483] = 'ER_PARTITION_SUBPART_MIX_ERROR';
exports[1484] = 'ER_PARTITION_WRONG_NO_PART_ERROR';
exports[1485] = 'ER_PARTITION_WRONG_NO_SUBPART_ERROR';
exports[1486] = 'ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR';
exports[1487] = 'ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR';
exports[1488] = 'ER_FIELD_NOT_FOUND_PART_ERROR';
exports[1489] = 'ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR';
exports[1490] = 'ER_INCONSISTENT_PARTITION_INFO_ERROR';
exports[1491] = 'ER_PARTITION_FUNC_NOT_ALLOWED_ERROR';
exports[1492] = 'ER_PARTITIONS_MUST_BE_DEFINED_ERROR';
exports[1493] = 'ER_RANGE_NOT_INCREASING_ERROR';
exports[1494] = 'ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR';
exports[1495] = 'ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR';
exports[1496] = 'ER_PARTITION_ENTRY_ERROR';
exports[1497] = 'ER_MIX_HANDLER_ERROR';
exports[1498] = 'ER_PARTITION_NOT_DEFINED_ERROR';
exports[1499] = 'ER_TOO_MANY_PARTITIONS_ERROR';
exports[1500] = 'ER_SUBPARTITION_ERROR';
exports[1501] = 'ER_CANT_CREATE_HANDLER_FILE';
exports[1502] = 'ER_BLOB_FIELD_IN_PART_FUNC_ERROR';
exports[1503] = 'ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF';
exports[1504] = 'ER_NO_PARTS_ERROR';
exports[1505] = 'ER_PARTITION_MGMT_ON_NONPARTITIONED';
exports[1506] = 'ER_FOREIGN_KEY_ON_PARTITIONED';
exports[1507] = 'ER_DROP_PARTITION_NON_EXISTENT';
exports[1508] = 'ER_DROP_LAST_PARTITION';
exports[1509] = 'ER_COALESCE_ONLY_ON_HASH_PARTITION';
exports[1510] = 'ER_REORG_HASH_ONLY_ON_SAME_NO';
exports[1511] = 'ER_REORG_NO_PARAM_ERROR';
exports[1512] = 'ER_ONLY_ON_RANGE_LIST_PARTITION';
exports[1513] = 'ER_ADD_PARTITION_SUBPART_ERROR';
exports[1514] = 'ER_ADD_PARTITION_NO_NEW_PARTITION';
exports[1515] = 'ER_COALESCE_PARTITION_NO_PARTITION';
exports[1516] = 'ER_REORG_PARTITION_NOT_EXIST';
exports[1517] = 'ER_SAME_NAME_PARTITION';
exports[1518] = 'ER_NO_BINLOG_ERROR';
exports[1519] = 'ER_CONSECUTIVE_REORG_PARTITIONS';
exports[1520] = 'ER_REORG_OUTSIDE_RANGE';
exports[1521] = 'ER_PARTITION_FUNCTION_FAILURE';
exports[1522] = 'ER_PART_STATE_ERROR';
exports[1523] = 'ER_LIMITED_PART_RANGE';
exports[1524] = 'ER_PLUGIN_IS_NOT_LOADED';
exports[1525] = 'ER_WRONG_VALUE';
exports[1526] = 'ER_NO_PARTITION_FOR_GIVEN_VALUE';
exports[1527] = 'ER_FILEGROUP_OPTION_ONLY_ONCE';
exports[1528] = 'ER_CREATE_FILEGROUP_FAILED';
exports[1529] = 'ER_DROP_FILEGROUP_FAILED';
exports[1530] = 'ER_TABLESPACE_AUTO_EXTEND_ERROR';
exports[1531] = 'ER_WRONG_SIZE_NUMBER';
exports[1532] = 'ER_SIZE_OVERFLOW_ERROR';
exports[1533] = 'ER_ALTER_FILEGROUP_FAILED';
exports[1534] = 'ER_BINLOG_ROW_LOGGING_FAILED';
exports[1535] = 'ER_BINLOG_ROW_WRONG_TABLE_DEF';
exports[1536] = 'ER_BINLOG_ROW_RBR_TO_SBR';
exports[1537] = 'ER_EVENT_ALREADY_EXISTS';
exports[1538] = 'ER_EVENT_STORE_FAILED';
exports[1539] = 'ER_EVENT_DOES_NOT_EXIST';
exports[1540] = 'ER_EVENT_CANT_ALTER';
exports[1541] = 'ER_EVENT_DROP_FAILED';
exports[1542] = 'ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG';
exports[1543] = 'ER_EVENT_ENDS_BEFORE_STARTS';
exports[1544] = 'ER_EVENT_EXEC_TIME_IN_THE_PAST';
exports[1545] = 'ER_EVENT_OPEN_TABLE_FAILED';
exports[1546] = 'ER_EVENT_NEITHER_M_EXPR_NOR_M_AT';
exports[1547] = 'ER_COL_COUNT_DOESNT_MATCH_CORRUPTED';
exports[1548] = 'ER_CANNOT_LOAD_FROM_TABLE';
exports[1549] = 'ER_EVENT_CANNOT_DELETE';
exports[1550] = 'ER_EVENT_COMPILE_ERROR';
exports[1551] = 'ER_EVENT_SAME_NAME';
exports[1552] = 'ER_EVENT_DATA_TOO_LONG';
exports[1553] = 'ER_DROP_INDEX_FK';
exports[1554] = 'ER_WARN_DEPRECATED_SYNTAX_WITH_VER';
exports[1555] = 'ER_CANT_WRITE_LOCK_LOG_TABLE';
exports[1556] = 'ER_CANT_LOCK_LOG_TABLE';
exports[1557] = 'ER_FOREIGN_DUPLICATE_KEY';
exports[1558] = 'ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE';
exports[1559] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR';
exports[1560] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT';
exports[1561] = 'ER_NDB_CANT_SWITCH_BINLOG_FORMAT';
exports[1562] = 'ER_PARTITION_NO_TEMPORARY';
exports[1563] = 'ER_PARTITION_CONST_DOMAIN_ERROR';
exports[1564] = 'ER_PARTITION_FUNCTION_IS_NOT_ALLOWED';
exports[1565] = 'ER_DDL_LOG_ERROR';
exports[1566] = 'ER_NULL_IN_VALUES_LESS_THAN';
exports[1567] = 'ER_WRONG_PARTITION_NAME';
exports[1568] = 'ER_CANT_CHANGE_TX_CHARACTERISTICS';
exports[1569] = 'ER_DUP_ENTRY_AUTOINCREMENT_CASE';
exports[1570] = 'ER_EVENT_MODIFY_QUEUE_ERROR';
exports[1571] = 'ER_EVENT_SET_VAR_ERROR';
exports[1572] = 'ER_PARTITION_MERGE_ERROR';
exports[1573] = 'ER_CANT_ACTIVATE_LOG';
exports[1574] = 'ER_RBR_NOT_AVAILABLE';
exports[1575] = 'ER_BASE64_DECODE_ERROR';
exports[1576] = 'ER_EVENT_RECURSION_FORBIDDEN';
exports[1577] = 'ER_EVENTS_DB_ERROR';
exports[1578] = 'ER_ONLY_INTEGERS_ALLOWED';
exports[1579] = 'ER_UNSUPORTED_LOG_ENGINE';
exports[1580] = 'ER_BAD_LOG_STATEMENT';
exports[1581] = 'ER_CANT_RENAME_LOG_TABLE';
exports[1582] = 'ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT';
exports[1583] = 'ER_WRONG_PARAMETERS_TO_NATIVE_FCT';
exports[1584] = 'ER_WRONG_PARAMETERS_TO_STORED_FCT';
exports[1585] = 'ER_NATIVE_FCT_NAME_COLLISION';
exports[1586] = 'ER_DUP_ENTRY_WITH_KEY_NAME';
exports[1587] = 'ER_BINLOG_PURGE_EMFILE';
exports[1588] = 'ER_EVENT_CANNOT_CREATE_IN_THE_PAST';
exports[1589] = 'ER_EVENT_CANNOT_ALTER_IN_THE_PAST';
exports[1590] = 'ER_SLAVE_INCIDENT';
exports[1591] = 'ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT';
exports[1592] = 'ER_BINLOG_UNSAFE_STATEMENT';
exports[1593] = 'ER_BINLOG_FATAL_ERROR';
exports[1594] = 'ER_SLAVE_RELAY_LOG_READ_FAILURE';
exports[1595] = 'ER_SLAVE_RELAY_LOG_WRITE_FAILURE';
exports[1596] = 'ER_SLAVE_CREATE_EVENT_FAILURE';
exports[1597] = 'ER_SLAVE_MASTER_COM_FAILURE';
exports[1598] = 'ER_BINLOG_LOGGING_IMPOSSIBLE';
exports[1599] = 'ER_VIEW_NO_CREATION_CTX';
exports[1600] = 'ER_VIEW_INVALID_CREATION_CTX';
exports[1601] = 'ER_SR_INVALID_CREATION_CTX';
exports[1602] = 'ER_TRG_CORRUPTED_FILE';
exports[1603] = 'ER_TRG_NO_CREATION_CTX';
exports[1604] = 'ER_TRG_INVALID_CREATION_CTX';
exports[1605] = 'ER_EVENT_INVALID_CREATION_CTX';
exports[1606] = 'ER_TRG_CANT_OPEN_TABLE';
exports[1607] = 'ER_CANT_CREATE_SROUTINE';
exports[1608] = 'ER_NEVER_USED';
exports[1609] = 'ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT';
exports[1610] = 'ER_REPLICA_CORRUPT_EVENT';
exports[1611] = 'ER_LOAD_DATA_INVALID_COLUMN';
exports[1612] = 'ER_LOG_PURGE_NO_FILE';
exports[1613] = 'ER_XA_RBTIMEOUT';
exports[1614] = 'ER_XA_RBDEADLOCK';
exports[1615] = 'ER_NEED_REPREPARE';
exports[1616] = 'ER_DELAYED_NOT_SUPPORTED';
exports[1617] = 'WARN_NO_CONNECTION_METADATA';
exports[1618] = 'WARN_OPTION_IGNORED';
exports[1619] = 'ER_PLUGIN_DELETE_BUILTIN';
exports[1620] = 'WARN_PLUGIN_BUSY';
exports[1621] = 'ER_VARIABLE_IS_READONLY';
exports[1622] = 'ER_WARN_ENGINE_TRANSACTION_ROLLBACK';
exports[1623] = 'ER_SLAVE_HEARTBEAT_FAILURE';
exports[1624] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE';
exports[1625] = 'ER_NDB_REPLICATION_SCHEMA_ERROR';
exports[1626] = 'ER_CONFLICT_FN_PARSE_ERROR';
exports[1627] = 'ER_EXCEPTIONS_WRITE_ERROR';
exports[1628] = 'ER_TOO_LONG_TABLE_COMMENT';
exports[1629] = 'ER_TOO_LONG_FIELD_COMMENT';
exports[1630] = 'ER_FUNC_INEXISTENT_NAME_COLLISION';
exports[1631] = 'ER_DATABASE_NAME';
exports[1632] = 'ER_TABLE_NAME';
exports[1633] = 'ER_PARTITION_NAME';
exports[1634] = 'ER_SUBPARTITION_NAME';
exports[1635] = 'ER_TEMPORARY_NAME';
exports[1636] = 'ER_RENAMED_NAME';
exports[1637] = 'ER_TOO_MANY_CONCURRENT_TRXS';
exports[1638] = 'WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED';
exports[1639] = 'ER_DEBUG_SYNC_TIMEOUT';
exports[1640] = 'ER_DEBUG_SYNC_HIT_LIMIT';
exports[1641] = 'ER_DUP_SIGNAL_SET';
exports[1642] = 'ER_SIGNAL_WARN';
exports[1643] = 'ER_SIGNAL_NOT_FOUND';
exports[1644] = 'ER_SIGNAL_EXCEPTION';
exports[1645] = 'ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER';
exports[1646] = 'ER_SIGNAL_BAD_CONDITION_TYPE';
exports[1647] = 'WARN_COND_ITEM_TRUNCATED';
exports[1648] = 'ER_COND_ITEM_TOO_LONG';
exports[1649] = 'ER_UNKNOWN_LOCALE';
exports[1650] = 'ER_REPLICA_IGNORE_SERVER_IDS';
exports[1651] = 'ER_QUERY_CACHE_DISABLED';
exports[1652] = 'ER_SAME_NAME_PARTITION_FIELD';
exports[1653] = 'ER_PARTITION_COLUMN_LIST_ERROR';
exports[1654] = 'ER_WRONG_TYPE_COLUMN_VALUE_ERROR';
exports[1655] = 'ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR';
exports[1656] = 'ER_MAXVALUE_IN_VALUES_IN';
exports[1657] = 'ER_TOO_MANY_VALUES_ERROR';
exports[1658] = 'ER_ROW_SINGLE_PARTITION_FIELD_ERROR';
exports[1659] = 'ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD';
exports[1660] = 'ER_PARTITION_FIELDS_TOO_LONG';
exports[1661] = 'ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE';
exports[1662] = 'ER_BINLOG_ROW_MODE_AND_STMT_ENGINE';
exports[1663] = 'ER_BINLOG_UNSAFE_AND_STMT_ENGINE';
exports[1664] = 'ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE';
exports[1665] = 'ER_BINLOG_STMT_MODE_AND_ROW_ENGINE';
exports[1666] = 'ER_BINLOG_ROW_INJECTION_AND_STMT_MODE';
exports[1667] = 'ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE';
exports[1668] = 'ER_BINLOG_UNSAFE_LIMIT';
exports[1669] = 'ER_UNUSED4';
exports[1670] = 'ER_BINLOG_UNSAFE_SYSTEM_TABLE';
exports[1671] = 'ER_BINLOG_UNSAFE_AUTOINC_COLUMNS';
exports[1672] = 'ER_BINLOG_UNSAFE_UDF';
exports[1673] = 'ER_BINLOG_UNSAFE_SYSTEM_VARIABLE';
exports[1674] = 'ER_BINLOG_UNSAFE_SYSTEM_FUNCTION';
exports[1675] = 'ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS';
exports[1676] = 'ER_MESSAGE_AND_STATEMENT';
exports[1677] = 'ER_SLAVE_CONVERSION_FAILED';
exports[1678] = 'ER_REPLICA_CANT_CREATE_CONVERSION';
exports[1679] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT';
exports[1680] = 'ER_PATH_LENGTH';
exports[1681] = 'ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT';
exports[1682] = 'ER_WRONG_NATIVE_TABLE_STRUCTURE';
exports[1683] = 'ER_WRONG_PERFSCHEMA_USAGE';
exports[1684] = 'ER_WARN_I_S_SKIPPED_TABLE';
exports[1685] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT';
exports[1686] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT';
exports[1687] = 'ER_SPATIAL_MUST_HAVE_GEOM_COL';
exports[1688] = 'ER_TOO_LONG_INDEX_COMMENT';
exports[1689] = 'ER_LOCK_ABORTED';
exports[1690] = 'ER_DATA_OUT_OF_RANGE';
exports[1691] = 'ER_WRONG_SPVAR_TYPE_IN_LIMIT';
exports[1692] = 'ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE';
exports[1693] = 'ER_BINLOG_UNSAFE_MIXED_STATEMENT';
exports[1694] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN';
exports[1695] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN';
exports[1696] = 'ER_FAILED_READ_FROM_PAR_FILE';
exports[1697] = 'ER_VALUES_IS_NOT_INT_TYPE_ERROR';
exports[1698] = 'ER_ACCESS_DENIED_NO_PASSWORD_ERROR';
exports[1699] = 'ER_SET_PASSWORD_AUTH_PLUGIN';
exports[1700] = 'ER_GRANT_PLUGIN_USER_EXISTS';
exports[1701] = 'ER_TRUNCATE_ILLEGAL_FK';
exports[1702] = 'ER_PLUGIN_IS_PERMANENT';
exports[1703] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN';
exports[1704] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX';
exports[1705] = 'ER_STMT_CACHE_FULL';
exports[1706] = 'ER_MULTI_UPDATE_KEY_CONFLICT';
exports[1707] = 'ER_TABLE_NEEDS_REBUILD';
exports[1708] = 'WARN_OPTION_BELOW_LIMIT';
exports[1709] = 'ER_INDEX_COLUMN_TOO_LONG';
exports[1710] = 'ER_ERROR_IN_TRIGGER_BODY';
exports[1711] = 'ER_ERROR_IN_UNKNOWN_TRIGGER_BODY';
exports[1712] = 'ER_INDEX_CORRUPT';
exports[1713] = 'ER_UNDO_RECORD_TOO_BIG';
exports[1714] = 'ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT';
exports[1715] = 'ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE';
exports[1716] = 'ER_BINLOG_UNSAFE_REPLACE_SELECT';
exports[1717] = 'ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT';
exports[1718] = 'ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT';
exports[1719] = 'ER_BINLOG_UNSAFE_UPDATE_IGNORE';
exports[1720] = 'ER_PLUGIN_NO_UNINSTALL';
exports[1721] = 'ER_PLUGIN_NO_INSTALL';
exports[1722] = 'ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT';
exports[1723] = 'ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC';
exports[1724] = 'ER_BINLOG_UNSAFE_INSERT_TWO_KEYS';
exports[1725] = 'ER_TABLE_IN_FK_CHECK';
exports[1726] = 'ER_UNSUPPORTED_ENGINE';
exports[1727] = 'ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST';
exports[1728] = 'ER_CANNOT_LOAD_FROM_TABLE_V2';
exports[1729] = 'ER_SOURCE_DELAY_VALUE_OUT_OF_RANGE';
exports[1730] = 'ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT';
exports[1731] = 'ER_PARTITION_EXCHANGE_DIFFERENT_OPTION';
exports[1732] = 'ER_PARTITION_EXCHANGE_PART_TABLE';
exports[1733] = 'ER_PARTITION_EXCHANGE_TEMP_TABLE';
exports[1734] = 'ER_PARTITION_INSTEAD_OF_SUBPARTITION';
exports[1735] = 'ER_UNKNOWN_PARTITION';
exports[1736] = 'ER_TABLES_DIFFERENT_METADATA';
exports[1737] = 'ER_ROW_DOES_NOT_MATCH_PARTITION';
exports[1738] = 'ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX';
exports[1739] = 'ER_WARN_INDEX_NOT_APPLICABLE';
exports[1740] = 'ER_PARTITION_EXCHANGE_FOREIGN_KEY';
exports[1741] = 'ER_NO_SUCH_KEY_VALUE';
exports[1742] = 'ER_RPL_INFO_DATA_TOO_LONG';
exports[1743] = 'ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE';
exports[1744] = 'ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE';
exports[1745] = 'ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX';
exports[1746] = 'ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT';
exports[1747] = 'ER_PARTITION_CLAUSE_ON_NONPARTITIONED';
exports[1748] = 'ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET';
exports[1749] = 'ER_NO_SUCH_PARTITION';
exports[1750] = 'ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE';
exports[1751] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE';
exports[1752] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE';
exports[1753] = 'ER_MTA_FEATURE_IS_NOT_SUPPORTED';
exports[1754] = 'ER_MTA_UPDATED_DBS_GREATER_MAX';
exports[1755] = 'ER_MTA_CANT_PARALLEL';
exports[1756] = 'ER_MTA_INCONSISTENT_DATA';
exports[1757] = 'ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING';
exports[1758] = 'ER_DA_INVALID_CONDITION_NUMBER';
exports[1759] = 'ER_INSECURE_PLAIN_TEXT';
exports[1760] = 'ER_INSECURE_CHANGE_SOURCE';
exports[1761] = 'ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO';
exports[1762] = 'ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO';
exports[1763] = 'ER_SQLTHREAD_WITH_SECURE_REPLICA';
exports[1764] = 'ER_TABLE_HAS_NO_FT';
exports[1765] = 'ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER';
exports[1766] = 'ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION';
exports[1767] = 'ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST';
exports[1768] = 'ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION';
exports[1769] = 'ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION';
exports[1770] = 'ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL';
exports[1771] = 'ER_SKIPPING_LOGGED_TRANSACTION';
exports[1772] = 'ER_MALFORMED_GTID_SET_SPECIFICATION';
exports[1773] = 'ER_MALFORMED_GTID_SET_ENCODING';
exports[1774] = 'ER_MALFORMED_GTID_SPECIFICATION';
exports[1775] = 'ER_GNO_EXHAUSTED';
exports[1776] = 'ER_BAD_REPLICA_AUTO_POSITION';
exports[1777] = 'ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF';
exports[1778] = 'ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET';
exports[1779] = 'ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON';
exports[1780] = 'ER_GTID_MODE_REQUIRES_BINLOG';
exports[1781] = 'ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF';
exports[1782] = 'ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON';
exports[1783] = 'ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF';
exports[1784] = 'ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF';
exports[1785] = 'ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE';
exports[1786] = 'ER_GTID_UNSAFE_CREATE_SELECT';
exports[1787] = 'ER_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRANSACTION';
exports[1788] = 'ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME';
exports[1789] = 'ER_SOURCE_HAS_PURGED_REQUIRED_GTIDS';
exports[1790] = 'ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID';
exports[1791] = 'ER_UNKNOWN_EXPLAIN_FORMAT';
exports[1792] = 'ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION';
exports[1793] = 'ER_TOO_LONG_TABLE_PARTITION_COMMENT';
exports[1794] = 'ER_REPLICA_CONFIGURATION';
exports[1795] = 'ER_INNODB_FT_LIMIT';
exports[1796] = 'ER_INNODB_NO_FT_TEMP_TABLE';
exports[1797] = 'ER_INNODB_FT_WRONG_DOCID_COLUMN';
exports[1798] = 'ER_INNODB_FT_WRONG_DOCID_INDEX';
exports[1799] = 'ER_INNODB_ONLINE_LOG_TOO_BIG';
exports[1800] = 'ER_UNKNOWN_ALTER_ALGORITHM';
exports[1801] = 'ER_UNKNOWN_ALTER_LOCK';
exports[1802] = 'ER_MTA_CHANGE_SOURCE_CANT_RUN_WITH_GAPS';
exports[1803] = 'ER_MTA_RECOVERY_FAILURE';
exports[1804] = 'ER_MTA_RESET_WORKERS';
exports[1805] = 'ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2';
exports[1806] = 'ER_REPLICA_SILENT_RETRY_TRANSACTION';
exports[1807] = 'ER_DISCARD_FK_CHECKS_RUNNING';
exports[1808] = 'ER_TABLE_SCHEMA_MISMATCH';
exports[1809] = 'ER_TABLE_IN_SYSTEM_TABLESPACE';
exports[1810] = 'ER_IO_READ_ERROR';
exports[1811] = 'ER_IO_WRITE_ERROR';
exports[1812] = 'ER_TABLESPACE_MISSING';
exports[1813] = 'ER_TABLESPACE_EXISTS';
exports[1814] = 'ER_TABLESPACE_DISCARDED';
exports[1815] = 'ER_INTERNAL_ERROR';
exports[1816] = 'ER_INNODB_IMPORT_ERROR';
exports[1817] = 'ER_INNODB_INDEX_CORRUPT';
exports[1818] = 'ER_INVALID_YEAR_COLUMN_LENGTH';
exports[1819] = 'ER_NOT_VALID_PASSWORD';
exports[1820] = 'ER_MUST_CHANGE_PASSWORD';
exports[1821] = 'ER_FK_NO_INDEX_CHILD';
exports[1822] = 'ER_FK_NO_INDEX_PARENT';
exports[1823] = 'ER_FK_FAIL_ADD_SYSTEM';
exports[1824] = 'ER_FK_CANNOT_OPEN_PARENT';
exports[1825] = 'ER_FK_INCORRECT_OPTION';
exports[1826] = 'ER_FK_DUP_NAME';
exports[1827] = 'ER_PASSWORD_FORMAT';
exports[1828] = 'ER_FK_COLUMN_CANNOT_DROP';
exports[1829] = 'ER_FK_COLUMN_CANNOT_DROP_CHILD';
exports[1830] = 'ER_FK_COLUMN_NOT_NULL';
exports[1831] = 'ER_DUP_INDEX';
exports[1832] = 'ER_FK_COLUMN_CANNOT_CHANGE';
exports[1833] = 'ER_FK_COLUMN_CANNOT_CHANGE_CHILD';
exports[1834] = 'ER_UNUSED5';
exports[1835] = 'ER_MALFORMED_PACKET';
exports[1836] = 'ER_READ_ONLY_MODE';
exports[1837] = 'ER_GTID_NEXT_TYPE_UNDEFINED_GTID';
exports[1838] = 'ER_VARIABLE_NOT_SETTABLE_IN_SP';
exports[1839] = 'ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF';
exports[1840] = 'ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY';
exports[1841] = 'ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY';
exports[1842] = 'ER_GTID_PURGED_WAS_CHANGED';
exports[1843] = 'ER_GTID_EXECUTED_WAS_CHANGED';
exports[1844] = 'ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES';
exports[1845] = 'ER_ALTER_OPERATION_NOT_SUPPORTED';
exports[1846] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON';
exports[1847] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY';
exports[1848] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION';
exports[1849] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME';
exports[1850] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE';
exports[1851] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK';
exports[1852] = 'ER_UNUSED6';
exports[1853] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK';
exports[1854] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC';
exports[1855] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS';
exports[1856] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS';
exports[1857] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS';
exports[1858] = 'ER_SQL_REPLICA_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE';
exports[1859] = 'ER_DUP_UNKNOWN_IN_INDEX';
exports[1860] = 'ER_IDENT_CAUSES_TOO_LONG_PATH';
exports[1861] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL';
exports[1862] = 'ER_MUST_CHANGE_PASSWORD_LOGIN';
exports[1863] = 'ER_ROW_IN_WRONG_PARTITION';
exports[1864] = 'ER_MTA_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX';
exports[1865] = 'ER_INNODB_NO_FT_USES_PARSER';
exports[1866] = 'ER_BINLOG_LOGICAL_CORRUPTION';
exports[1867] = 'ER_WARN_PURGE_LOG_IN_USE';
exports[1868] = 'ER_WARN_PURGE_LOG_IS_ACTIVE';
exports[1869] = 'ER_AUTO_INCREMENT_CONFLICT';
exports[1870] = 'WARN_ON_BLOCKHOLE_IN_RBR';
exports[1871] = 'ER_REPLICA_CM_INIT_REPOSITORY';
exports[1872] = 'ER_REPLICA_AM_INIT_REPOSITORY';
exports[1873] = 'ER_ACCESS_DENIED_CHANGE_USER_ERROR';
exports[1874] = 'ER_INNODB_READ_ONLY';
exports[1875] = 'ER_STOP_REPLICA_SQL_THREAD_TIMEOUT';
exports[1876] = 'ER_STOP_REPLICA_IO_THREAD_TIMEOUT';
exports[1877] = 'ER_TABLE_CORRUPT';
exports[1878] = 'ER_TEMP_FILE_WRITE_FAILURE';
exports[1879] = 'ER_INNODB_FT_AUX_NOT_HEX_ID';
exports[1880] = 'ER_OLD_TEMPORALS_UPGRADED';
exports[1881] = 'ER_INNODB_FORCED_RECOVERY';
exports[1882] = 'ER_AES_INVALID_IV';
exports[1883] = 'ER_PLUGIN_CANNOT_BE_UNINSTALLED';
exports[1884] = 'ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_ASSIGNED_GTID';
exports[1885] = 'ER_REPLICA_HAS_MORE_GTIDS_THAN_SOURCE';
exports[1886] = 'ER_MISSING_KEY';
exports[1887] = 'WARN_NAMED_PIPE_ACCESS_EVERYONE';
exports[3000] = 'ER_FILE_CORRUPT';
exports[3001] = 'ER_ERROR_ON_SOURCE';
exports[3002] = 'ER_INCONSISTENT_ERROR';
exports[3003] = 'ER_STORAGE_ENGINE_NOT_LOADED';
exports[3004] = 'ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER';
exports[3005] = 'ER_WARN_LEGACY_SYNTAX_CONVERTED';
exports[3006] = 'ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN';
exports[3007] = 'ER_CANNOT_DISCARD_TEMPORARY_TABLE';
exports[3008] = 'ER_FK_DEPTH_EXCEEDED';
exports[3009] = 'ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2';
exports[3010] = 'ER_WARN_TRIGGER_DOESNT_HAVE_CREATED';
exports[3011] = 'ER_REFERENCED_TRG_DOES_NOT_EXIST';
exports[3012] = 'ER_EXPLAIN_NOT_SUPPORTED';
exports[3013] = 'ER_INVALID_FIELD_SIZE';
exports[3014] = 'ER_MISSING_HA_CREATE_OPTION';
exports[3015] = 'ER_ENGINE_OUT_OF_MEMORY';
exports[3016] = 'ER_PASSWORD_EXPIRE_ANONYMOUS_USER';
exports[3017] = 'ER_REPLICA_SQL_THREAD_MUST_STOP';
exports[3018] = 'ER_NO_FT_MATERIALIZED_SUBQUERY';
exports[3019] = 'ER_INNODB_UNDO_LOG_FULL';
exports[3020] = 'ER_INVALID_ARGUMENT_FOR_LOGARITHM';
exports[3021] = 'ER_REPLICA_CHANNEL_IO_THREAD_MUST_STOP';
exports[3022] = 'ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO';
exports[3023] = 'ER_WARN_ONLY_SOURCE_LOG_FILE_NO_POS';
exports[3024] = 'ER_QUERY_TIMEOUT';
exports[3025] = 'ER_NON_RO_SELECT_DISABLE_TIMER';
exports[3026] = 'ER_DUP_LIST_ENTRY';
exports[3027] = 'ER_SQL_MODE_NO_EFFECT';
exports[3028] = 'ER_AGGREGATE_ORDER_FOR_UNION';
exports[3029] = 'ER_AGGREGATE_ORDER_NON_AGG_QUERY';
exports[3030] = 'ER_REPLICA_WORKER_STOPPED_PREVIOUS_THD_ERROR';
exports[3031] = 'ER_DONT_SUPPORT_REPLICA_PRESERVE_COMMIT_ORDER';
exports[3032] = 'ER_SERVER_OFFLINE_MODE';
exports[3033] = 'ER_GIS_DIFFERENT_SRIDS';
exports[3034] = 'ER_GIS_UNSUPPORTED_ARGUMENT';
exports[3035] = 'ER_GIS_UNKNOWN_ERROR';
exports[3036] = 'ER_GIS_UNKNOWN_EXCEPTION';
exports[3037] = 'ER_GIS_INVALID_DATA';
exports[3038] = 'ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION';
exports[3039] = 'ER_BOOST_GEOMETRY_CENTROID_EXCEPTION';
exports[3040] = 'ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION';
exports[3041] = 'ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION';
exports[3042] = 'ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION';
exports[3043] = 'ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION';
exports[3044] = 'ER_STD_BAD_ALLOC_ERROR';
exports[3045] = 'ER_STD_DOMAIN_ERROR';
exports[3046] = 'ER_STD_LENGTH_ERROR';
exports[3047] = 'ER_STD_INVALID_ARGUMENT';
exports[3048] = 'ER_STD_OUT_OF_RANGE_ERROR';
exports[3049] = 'ER_STD_OVERFLOW_ERROR';
exports[3050] = 'ER_STD_RANGE_ERROR';
exports[3051] = 'ER_STD_UNDERFLOW_ERROR';
exports[3052] = 'ER_STD_LOGIC_ERROR';
exports[3053] = 'ER_STD_RUNTIME_ERROR';
exports[3054] = 'ER_STD_UNKNOWN_EXCEPTION';
exports[3055] = 'ER_GIS_DATA_WRONG_ENDIANESS';
exports[3056] = 'ER_CHANGE_SOURCE_PASSWORD_LENGTH';
exports[3057] = 'ER_USER_LOCK_WRONG_NAME';
exports[3058] = 'ER_USER_LOCK_DEADLOCK';
exports[3059] = 'ER_REPLACE_INACCESSIBLE_ROWS';
exports[3060] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS';
exports[3061] = 'ER_ILLEGAL_USER_VAR';
exports[3062] = 'ER_GTID_MODE_OFF';
exports[3063] = 'ER_UNSUPPORTED_BY_REPLICATION_THREAD';
exports[3064] = 'ER_INCORRECT_TYPE';
exports[3065] = 'ER_FIELD_IN_ORDER_NOT_SELECT';
exports[3066] = 'ER_AGGREGATE_IN_ORDER_NOT_SELECT';
exports[3067] = 'ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN';
exports[3068] = 'ER_NET_OK_PACKET_TOO_LARGE';
exports[3069] = 'ER_INVALID_JSON_DATA';
exports[3070] = 'ER_INVALID_GEOJSON_MISSING_MEMBER';
exports[3071] = 'ER_INVALID_GEOJSON_WRONG_TYPE';
exports[3072] = 'ER_INVALID_GEOJSON_UNSPECIFIED';
exports[3073] = 'ER_DIMENSION_UNSUPPORTED';
exports[3074] = 'ER_REPLICA_CHANNEL_DOES_NOT_EXIST';
exports[3075] = 'ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT';
exports[3076] = 'ER_REPLICA_CHANNEL_NAME_INVALID_OR_TOO_LONG';
exports[3077] = 'ER_REPLICA_NEW_CHANNEL_WRONG_REPOSITORY';
exports[3078] = 'ER_SLAVE_CHANNEL_DELETE';
exports[3079] = 'ER_REPLICA_MULTIPLE_CHANNELS_CMD';
exports[3080] = 'ER_REPLICA_MAX_CHANNELS_EXCEEDED';
exports[3081] = 'ER_REPLICA_CHANNEL_MUST_STOP';
exports[3082] = 'ER_REPLICA_CHANNEL_NOT_RUNNING';
exports[3083] = 'ER_REPLICA_CHANNEL_WAS_RUNNING';
exports[3084] = 'ER_REPLICA_CHANNEL_WAS_NOT_RUNNING';
exports[3085] = 'ER_REPLICA_CHANNEL_SQL_THREAD_MUST_STOP';
exports[3086] = 'ER_REPLICA_CHANNEL_SQL_SKIP_COUNTER';
exports[3087] = 'ER_WRONG_FIELD_WITH_GROUP_V2';
exports[3088] = 'ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2';
exports[3089] = 'ER_WARN_DEPRECATED_SYSVAR_UPDATE';
exports[3090] = 'ER_WARN_DEPRECATED_SQLMODE';
exports[3091] = 'ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID';
exports[3092] = 'ER_GROUP_REPLICATION_CONFIGURATION';
exports[3093] = 'ER_GROUP_REPLICATION_RUNNING';
exports[3094] = 'ER_GROUP_REPLICATION_APPLIER_INIT_ERROR';
exports[3095] = 'ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT';
exports[3096] = 'ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR';
exports[3097] = 'ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR';
exports[3098] = 'ER_BEFORE_DML_VALIDATION_ERROR';
exports[3099] = 'ER_PREVENTS_VARIABLE_WITHOUT_RBR';
exports[3100] = 'ER_RUN_HOOK_ERROR';
exports[3101] = 'ER_TRANSACTION_ROLLBACK_DURING_COMMIT';
exports[3102] = 'ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED';
exports[3103] = 'ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN';
exports[3104] = 'ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN';
exports[3105] = 'ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN';
exports[3106] = 'ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN';
exports[3107] = 'ER_GENERATED_COLUMN_NON_PRIOR';
exports[3108] = 'ER_DEPENDENT_BY_GENERATED_COLUMN';
exports[3109] = 'ER_GENERATED_COLUMN_REF_AUTO_INC';
exports[3110] = 'ER_FEATURE_NOT_AVAILABLE';
exports[3111] = 'ER_CANT_SET_GTID_MODE';
exports[3112] = 'ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF';
exports[3113] = 'ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION';
exports[3114] = 'ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON';
exports[3115] = 'ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF';
exports[3116] = 'ER_CANT_ENFORCE_GTID_CONSISTENCY_WITH_ONGOING_GTID_VIOLATING_TX';
exports[3117] = 'ER_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TX';
exports[3118] = 'ER_ACCOUNT_HAS_BEEN_LOCKED';
exports[3119] = 'ER_WRONG_TABLESPACE_NAME';
exports[3120] = 'ER_TABLESPACE_IS_NOT_EMPTY';
exports[3121] = 'ER_WRONG_FILE_NAME';
exports[3122] = 'ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION';
exports[3123] = 'ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR';
exports[3124] = 'ER_WARN_BAD_MAX_EXECUTION_TIME';
exports[3125] = 'ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME';
exports[3126] = 'ER_WARN_CONFLICTING_HINT';
exports[3127] = 'ER_WARN_UNKNOWN_QB_NAME';
exports[3128] = 'ER_UNRESOLVED_HINT_NAME';
exports[3129] = 'ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE';
exports[3130] = 'ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED';
exports[3131] = 'ER_LOCKING_SERVICE_WRONG_NAME';
exports[3132] = 'ER_LOCKING_SERVICE_DEADLOCK';
exports[3133] = 'ER_LOCKING_SERVICE_TIMEOUT';
exports[3134] = 'ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED';
exports[3135] = 'ER_SQL_MODE_MERGED';
exports[3136] = 'ER_VTOKEN_PLUGIN_TOKEN_MISMATCH';
exports[3137] = 'ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND';
exports[3138] = 'ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID';
exports[3139] = 'ER_REPLICA_CHANNEL_OPERATION_NOT_ALLOWED';
exports[3140] = 'ER_INVALID_JSON_TEXT';
exports[3141] = 'ER_INVALID_JSON_TEXT_IN_PARAM';
exports[3142] = 'ER_INVALID_JSON_BINARY_DATA';
exports[3143] = 'ER_INVALID_JSON_PATH';
exports[3144] = 'ER_INVALID_JSON_CHARSET';
exports[3145] = 'ER_INVALID_JSON_CHARSET_IN_FUNCTION';
exports[3146] = 'ER_INVALID_TYPE_FOR_JSON';
exports[3147] = 'ER_INVALID_CAST_TO_JSON';
exports[3148] = 'ER_INVALID_JSON_PATH_CHARSET';
exports[3149] = 'ER_INVALID_JSON_PATH_WILDCARD';
exports[3150] = 'ER_JSON_VALUE_TOO_BIG';
exports[3151] = 'ER_JSON_KEY_TOO_BIG';
exports[3152] = 'ER_JSON_USED_AS_KEY';
exports[3153] = 'ER_JSON_VACUOUS_PATH';
exports[3154] = 'ER_JSON_BAD_ONE_OR_ALL_ARG';
exports[3155] = 'ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE';
exports[3156] = 'ER_INVALID_JSON_VALUE_FOR_CAST';
exports[3157] = 'ER_JSON_DOCUMENT_TOO_DEEP';
exports[3158] = 'ER_JSON_DOCUMENT_NULL_KEY';
exports[3159] = 'ER_SECURE_TRANSPORT_REQUIRED';
exports[3160] = 'ER_NO_SECURE_TRANSPORTS_CONFIGURED';
exports[3161] = 'ER_DISABLED_STORAGE_ENGINE';
exports[3162] = 'ER_USER_DOES_NOT_EXIST';
exports[3163] = 'ER_USER_ALREADY_EXISTS';
exports[3164] = 'ER_AUDIT_API_ABORT';
exports[3165] = 'ER_INVALID_JSON_PATH_ARRAY_CELL';
exports[3166] = 'ER_BUFPOOL_RESIZE_INPROGRESS';
exports[3167] = 'ER_FEATURE_DISABLED_SEE_DOC';
exports[3168] = 'ER_SERVER_ISNT_AVAILABLE';
exports[3169] = 'ER_SESSION_WAS_KILLED';
exports[3170] = 'ER_CAPACITY_EXCEEDED';
exports[3171] = 'ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER';
exports[3172] = 'ER_TABLE_NEEDS_UPG_PART';
exports[3173] = 'ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID';
exports[3174] = 'ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL';
exports[3175] = 'ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT';
exports[3176] = 'ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE';
exports[3177] = 'ER_LOCK_REFUSED_BY_ENGINE';
exports[3178] = 'ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN';
exports[3179] = 'ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE';
exports[3180] = 'ER_MASTER_KEY_ROTATION_ERROR_BY_SE';
exports[3181] = 'ER_MASTER_KEY_ROTATION_BINLOG_FAILED';
exports[3182] = 'ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE';
exports[3183] = 'ER_TABLESPACE_CANNOT_ENCRYPT';
exports[3184] = 'ER_INVALID_ENCRYPTION_OPTION';
exports[3185] = 'ER_CANNOT_FIND_KEY_IN_KEYRING';
exports[3186] = 'ER_CAPACITY_EXCEEDED_IN_PARSER';
exports[3187] = 'ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE';
exports[3188] = 'ER_KEYRING_UDF_KEYRING_SERVICE_ERROR';
exports[3189] = 'ER_USER_COLUMN_OLD_LENGTH';
exports[3190] = 'ER_CANT_RESET_SOURCE';
exports[3191] = 'ER_GROUP_REPLICATION_MAX_GROUP_SIZE';
exports[3192] = 'ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED';
exports[3193] = 'ER_TABLE_REFERENCED';
exports[3194] = 'ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE';
exports[3195] = 'ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO';
exports[3196] = 'ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID';
exports[3197] = 'ER_XA_RETRY';
exports[3198] = 'ER_KEYRING_AWS_UDF_AWS_KMS_ERROR';
exports[3199] = 'ER_BINLOG_UNSAFE_XA';
exports[3200] = 'ER_UDF_ERROR';
exports[3201] = 'ER_KEYRING_MIGRATION_FAILURE';
exports[3202] = 'ER_KEYRING_ACCESS_DENIED_ERROR';
exports[3203] = 'ER_KEYRING_MIGRATION_STATUS';
exports[3204] = 'ER_PLUGIN_FAILED_TO_OPEN_TABLES';
exports[3205] = 'ER_PLUGIN_FAILED_TO_OPEN_TABLE';
exports[3206] = 'ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED';
exports[3207] = 'ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET';
exports[3208] = 'ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY';
exports[3209] = 'ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED';
exports[3210] = 'ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED';
exports[3211] = 'ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE';
exports[3212] = 'ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED';
exports[3213] = 'ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS';
exports[3214] = 'ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE';
exports[3215] = 'ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT';
exports[3216] = 'ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED';
exports[3217] = 'ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE';
exports[3218] = 'ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE';
exports[3219] = 'ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR';
exports[3220] = 'ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY';
exports[3221] = 'ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY';
exports[3222] = 'ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS';
exports[3223] = 'ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC';
exports[3224] = 'ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER';
exports[3225] = 'ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER';
exports[3226] = 'WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP';
exports[3227] = 'ER_XA_REPLICATION_FILTERS';
exports[3228] = 'ER_CANT_OPEN_ERROR_LOG';
exports[3229] = 'ER_GROUPING_ON_TIMESTAMP_IN_DST';
exports[3230] = 'ER_CANT_START_SERVER_NAMED_PIPE';
exports[3231] = 'ER_WRITE_SET_EXCEEDS_LIMIT';
exports[3232] = 'ER_DEPRECATED_TLS_VERSION_SESSION_57';
exports[3233] = 'ER_WARN_DEPRECATED_TLS_VERSION_57';
exports[3234] = 'ER_WARN_WRONG_NATIVE_TABLE_STRUCTURE';
exports[3235] = 'ER_AES_INVALID_KDF_NAME';
exports[3236] = 'ER_AES_INVALID_KDF_ITERATIONS';
exports[3237] = 'WARN_AES_KEY_SIZE';
exports[3238] = 'ER_AES_INVALID_KDF_OPTION_SIZE';
exports[3500] = 'ER_UNSUPPORT_COMPRESSED_TEMPORARY_TABLE';
exports[3501] = 'ER_ACL_OPERATION_FAILED';
exports[3502] = 'ER_UNSUPPORTED_INDEX_ALGORITHM';
exports[3503] = 'ER_NO_SUCH_DB';
exports[3504] = 'ER_TOO_BIG_ENUM';
exports[3505] = 'ER_TOO_LONG_SET_ENUM_VALUE';
exports[3506] = 'ER_INVALID_DD_OBJECT';
exports[3507] = 'ER_UPDATING_DD_TABLE';
exports[3508] = 'ER_INVALID_DD_OBJECT_ID';
exports[3509] = 'ER_INVALID_DD_OBJECT_NAME';
exports[3510] = 'ER_TABLESPACE_MISSING_WITH_NAME';
exports[3511] = 'ER_TOO_LONG_ROUTINE_COMMENT';
exports[3512] = 'ER_SP_LOAD_FAILED';
exports[3513] = 'ER_INVALID_BITWISE_OPERANDS_SIZE';
exports[3514] = 'ER_INVALID_BITWISE_AGGREGATE_OPERANDS_SIZE';
exports[3515] = 'ER_WARN_UNSUPPORTED_HINT';
exports[3516] = 'ER_UNEXPECTED_GEOMETRY_TYPE';
exports[3517] = 'ER_SRS_PARSE_ERROR';
exports[3518] = 'ER_SRS_PROJ_PARAMETER_MISSING';
exports[3519] = 'ER_WARN_SRS_NOT_FOUND';
exports[3520] = 'ER_SRS_NOT_CARTESIAN';
exports[3521] = 'ER_SRS_NOT_CARTESIAN_UNDEFINED';
exports[3522] = 'ER_PK_INDEX_CANT_BE_INVISIBLE';
exports[3523] = 'ER_UNKNOWN_AUTHID';
exports[3524] = 'ER_FAILED_ROLE_GRANT';
exports[3525] = 'ER_OPEN_ROLE_TABLES';
exports[3526] = 'ER_FAILED_DEFAULT_ROLES';
exports[3527] = 'ER_COMPONENTS_NO_SCHEME';
exports[3528] = 'ER_COMPONENTS_NO_SCHEME_SERVICE';
exports[3529] = 'ER_COMPONENTS_CANT_LOAD';
exports[3530] = 'ER_ROLE_NOT_GRANTED';
exports[3531] = 'ER_FAILED_REVOKE_ROLE';
exports[3532] = 'ER_RENAME_ROLE';
exports[3533] = 'ER_COMPONENTS_CANT_ACQUIRE_SERVICE_IMPLEMENTATION';
exports[3534] = 'ER_COMPONENTS_CANT_SATISFY_DEPENDENCY';
exports[3535] = 'ER_COMPONENTS_LOAD_CANT_REGISTER_SERVICE_IMPLEMENTATION';
exports[3536] = 'ER_COMPONENTS_LOAD_CANT_INITIALIZE';
exports[3537] = 'ER_COMPONENTS_UNLOAD_NOT_LOADED';
exports[3538] = 'ER_COMPONENTS_UNLOAD_CANT_DEINITIALIZE';
exports[3539] = 'ER_COMPONENTS_CANT_RELEASE_SERVICE';
exports[3540] = 'ER_COMPONENTS_UNLOAD_CANT_UNREGISTER_SERVICE';
exports[3541] = 'ER_COMPONENTS_CANT_UNLOAD';
exports[3542] = 'ER_WARN_UNLOAD_THE_NOT_PERSISTED';
exports[3543] = 'ER_COMPONENT_TABLE_INCORRECT';
exports[3544] = 'ER_COMPONENT_MANIPULATE_ROW_FAILED';
exports[3545] = 'ER_COMPONENTS_UNLOAD_DUPLICATE_IN_GROUP';
exports[3546] = 'ER_CANT_SET_GTID_PURGED_DUE_SETS_CONSTRAINTS';
exports[3547] = 'ER_CANNOT_LOCK_USER_MANAGEMENT_CACHES';
exports[3548] = 'ER_SRS_NOT_FOUND';
exports[3549] = 'ER_VARIABLE_NOT_PERSISTED';
exports[3550] = 'ER_IS_QUERY_INVALID_CLAUSE';
exports[3551] = 'ER_UNABLE_TO_STORE_STATISTICS';
exports[3552] = 'ER_NO_SYSTEM_SCHEMA_ACCESS';
exports[3553] = 'ER_NO_SYSTEM_TABLESPACE_ACCESS';
exports[3554] = 'ER_NO_SYSTEM_TABLE_ACCESS';
exports[3555] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_DICTIONARY_TABLE';
exports[3556] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_SYSTEM_TABLE';
exports[3557] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_TABLE';
exports[3558] = 'ER_INVALID_OPTION_KEY';
exports[3559] = 'ER_INVALID_OPTION_VALUE';
exports[3560] = 'ER_INVALID_OPTION_KEY_VALUE_PAIR';
exports[3561] = 'ER_INVALID_OPTION_START_CHARACTER';
exports[3562] = 'ER_INVALID_OPTION_END_CHARACTER';
exports[3563] = 'ER_INVALID_OPTION_CHARACTERS';
exports[3564] = 'ER_DUPLICATE_OPTION_KEY';
exports[3565] = 'ER_WARN_SRS_NOT_FOUND_AXIS_ORDER';
exports[3566] = 'ER_NO_ACCESS_TO_NATIVE_FCT';
exports[3567] = 'ER_RESET_SOURCE_TO_VALUE_OUT_OF_RANGE';
exports[3568] = 'ER_UNRESOLVED_TABLE_LOCK';
exports[3569] = 'ER_DUPLICATE_TABLE_LOCK';
exports[3570] = 'ER_BINLOG_UNSAFE_SKIP_LOCKED';
exports[3571] = 'ER_BINLOG_UNSAFE_NOWAIT';
exports[3572] = 'ER_LOCK_NOWAIT';
exports[3573] = 'ER_CTE_RECURSIVE_REQUIRES_UNION';
exports[3574] = 'ER_CTE_RECURSIVE_REQUIRES_NONRECURSIVE_FIRST';
exports[3575] = 'ER_CTE_RECURSIVE_FORBIDS_AGGREGATION';
exports[3576] = 'ER_CTE_RECURSIVE_FORBIDDEN_JOIN_ORDER';
exports[3577] = 'ER_CTE_RECURSIVE_REQUIRES_SINGLE_REFERENCE';
exports[3578] = 'ER_SWITCH_TMP_ENGINE';
exports[3579] = 'ER_WINDOW_NO_SUCH_WINDOW';
exports[3580] = 'ER_WINDOW_CIRCULARITY_IN_WINDOW_GRAPH';
exports[3581] = 'ER_WINDOW_NO_CHILD_PARTITIONING';
exports[3582] = 'ER_WINDOW_NO_INHERIT_FRAME';
exports[3583] = 'ER_WINDOW_NO_REDEFINE_ORDER_BY';
exports[3584] = 'ER_WINDOW_FRAME_START_ILLEGAL';
exports[3585] = 'ER_WINDOW_FRAME_END_ILLEGAL';
exports[3586] = 'ER_WINDOW_FRAME_ILLEGAL';
exports[3587] = 'ER_WINDOW_RANGE_FRAME_ORDER_TYPE';
exports[3588] = 'ER_WINDOW_RANGE_FRAME_TEMPORAL_TYPE';
exports[3589] = 'ER_WINDOW_RANGE_FRAME_NUMERIC_TYPE';
exports[3590] = 'ER_WINDOW_RANGE_BOUND_NOT_CONSTANT';
exports[3591] = 'ER_WINDOW_DUPLICATE_NAME';
exports[3592] = 'ER_WINDOW_ILLEGAL_ORDER_BY';
exports[3593] = 'ER_WINDOW_INVALID_WINDOW_FUNC_USE';
exports[3594] = 'ER_WINDOW_INVALID_WINDOW_FUNC_ALIAS_USE';
exports[3595] = 'ER_WINDOW_NESTED_WINDOW_FUNC_USE_IN_WINDOW_SPEC';
exports[3596] = 'ER_WINDOW_ROWS_INTERVAL_USE';
exports[3597] = 'ER_WINDOW_NO_GROUP_ORDER';
exports[3598] = 'ER_WINDOW_EXPLAIN_JSON';
exports[3599] = 'ER_WINDOW_FUNCTION_IGNORES_FRAME';
exports[3600] = 'ER_WL9236_NOW';
exports[3601] = 'ER_INVALID_NO_OF_ARGS';
exports[3602] = 'ER_FIELD_IN_GROUPING_NOT_GROUP_BY';
exports[3603] = 'ER_TOO_LONG_TABLESPACE_COMMENT';
exports[3604] = 'ER_ENGINE_CANT_DROP_TABLE';
exports[3605] = 'ER_ENGINE_CANT_DROP_MISSING_TABLE';
exports[3606] = 'ER_TABLESPACE_DUP_FILENAME';
exports[3607] = 'ER_DB_DROP_RMDIR2';
exports[3608] = 'ER_IMP_NO_FILES_MATCHED';
exports[3609] = 'ER_IMP_SCHEMA_DOES_NOT_EXIST';
exports[3610] = 'ER_IMP_TABLE_ALREADY_EXISTS';
exports[3611] = 'ER_IMP_INCOMPATIBLE_MYSQLD_VERSION';
exports[3612] = 'ER_IMP_INCOMPATIBLE_DD_VERSION';
exports[3613] = 'ER_IMP_INCOMPATIBLE_SDI_VERSION';
exports[3614] = 'ER_WARN_INVALID_HINT';
exports[3615] = 'ER_VAR_DOES_NOT_EXIST';
exports[3616] = 'ER_LONGITUDE_OUT_OF_RANGE';
exports[3617] = 'ER_LATITUDE_OUT_OF_RANGE';
exports[3618] = 'ER_NOT_IMPLEMENTED_FOR_GEOGRAPHIC_SRS';
exports[3619] = 'ER_ILLEGAL_PRIVILEGE_LEVEL';
exports[3620] = 'ER_NO_SYSTEM_VIEW_ACCESS';
exports[3621] = 'ER_COMPONENT_FILTER_FLABBERGASTED';
exports[3622] = 'ER_PART_EXPR_TOO_LONG';
exports[3623] = 'ER_UDF_DROP_DYNAMICALLY_REGISTERED';
exports[3624] = 'ER_UNABLE_TO_STORE_COLUMN_STATISTICS';
exports[3625] = 'ER_UNABLE_TO_UPDATE_COLUMN_STATISTICS';
exports[3626] = 'ER_UNABLE_TO_DROP_COLUMN_STATISTICS';
exports[3627] = 'ER_UNABLE_TO_BUILD_HISTOGRAM';
exports[3628] = 'ER_MANDATORY_ROLE';
exports[3629] = 'ER_MISSING_TABLESPACE_FILE';
exports[3630] = 'ER_PERSIST_ONLY_ACCESS_DENIED_ERROR';
exports[3631] = 'ER_CMD_NEED_SUPER';
exports[3632] = 'ER_PATH_IN_DATADIR';
exports[3633] = 'ER_CLONE_DDL_IN_PROGRESS';
exports[3634] = 'ER_CLONE_TOO_MANY_CONCURRENT_CLONES';
exports[3635] = 'ER_APPLIER_LOG_EVENT_VALIDATION_ERROR';
exports[3636] = 'ER_CTE_MAX_RECURSION_DEPTH';
exports[3637] = 'ER_NOT_HINT_UPDATABLE_VARIABLE';
exports[3638] = 'ER_CREDENTIALS_CONTRADICT_TO_HISTORY';
exports[3639] = 'ER_WARNING_PASSWORD_HISTORY_CLAUSES_VOID';
exports[3640] = 'ER_CLIENT_DOES_NOT_SUPPORT';
exports[3641] = 'ER_I_S_SKIPPED_TABLESPACE';
exports[3642] = 'ER_TABLESPACE_ENGINE_MISMATCH';
exports[3643] = 'ER_WRONG_SRID_FOR_COLUMN';
exports[3644] = 'ER_CANNOT_ALTER_SRID_DUE_TO_INDEX';
exports[3645] = 'ER_WARN_BINLOG_PARTIAL_UPDATES_DISABLED';
exports[3646] = 'ER_WARN_BINLOG_V1_ROW_EVENTS_DISABLED';
exports[3647] = 'ER_WARN_BINLOG_PARTIAL_UPDATES_SUGGESTS_PARTIAL_IMAGES';
exports[3648] = 'ER_COULD_NOT_APPLY_JSON_DIFF';
exports[3649] = 'ER_CORRUPTED_JSON_DIFF';
exports[3650] = 'ER_RESOURCE_GROUP_EXISTS';
exports[3651] = 'ER_RESOURCE_GROUP_NOT_EXISTS';
exports[3652] = 'ER_INVALID_VCPU_ID';
exports[3653] = 'ER_INVALID_VCPU_RANGE';
exports[3654] = 'ER_INVALID_THREAD_PRIORITY';
exports[3655] = 'ER_DISALLOWED_OPERATION';
exports[3656] = 'ER_RESOURCE_GROUP_BUSY';
exports[3657] = 'ER_RESOURCE_GROUP_DISABLED';
exports[3658] = 'ER_FEATURE_UNSUPPORTED';
exports[3659] = 'ER_ATTRIBUTE_IGNORED';
exports[3660] = 'ER_INVALID_THREAD_ID';
exports[3661] = 'ER_RESOURCE_GROUP_BIND_FAILED';
exports[3662] = 'ER_INVALID_USE_OF_FORCE_OPTION';
exports[3663] = 'ER_GROUP_REPLICATION_COMMAND_FAILURE';
exports[3664] = 'ER_SDI_OPERATION_FAILED';
exports[3665] = 'ER_MISSING_JSON_TABLE_VALUE';
exports[3666] = 'ER_WRONG_JSON_TABLE_VALUE';
exports[3667] = 'ER_TF_MUST_HAVE_ALIAS';
exports[3668] = 'ER_TF_FORBIDDEN_JOIN_TYPE';
exports[3669] = 'ER_JT_VALUE_OUT_OF_RANGE';
exports[3670] = 'ER_JT_MAX_NESTED_PATH';
exports[3671] = 'ER_PASSWORD_EXPIRATION_NOT_SUPPORTED_BY_AUTH_METHOD';
exports[3672] = 'ER_INVALID_GEOJSON_CRS_NOT_TOP_LEVEL';
exports[3673] = 'ER_BAD_NULL_ERROR_NOT_IGNORED';
exports[3674] = 'WARN_USELESS_SPATIAL_INDEX';
exports[3675] = 'ER_DISK_FULL_NOWAIT';
exports[3676] = 'ER_PARSE_ERROR_IN_DIGEST_FN';
exports[3677] = 'ER_UNDISCLOSED_PARSE_ERROR_IN_DIGEST_FN';
exports[3678] = 'ER_SCHEMA_DIR_EXISTS';
exports[3679] = 'ER_SCHEMA_DIR_MISSING';
exports[3680] = 'ER_SCHEMA_DIR_CREATE_FAILED';
exports[3681] = 'ER_SCHEMA_DIR_UNKNOWN';
exports[3682] = 'ER_ONLY_IMPLEMENTED_FOR_SRID_0_AND_4326';
exports[3683] = 'ER_BINLOG_EXPIRE_LOG_DAYS_AND_SECS_USED_TOGETHER';
exports[3684] = 'ER_REGEXP_BUFFER_OVERFLOW';
exports[3685] = 'ER_REGEXP_ILLEGAL_ARGUMENT';
exports[3686] = 'ER_REGEXP_INDEX_OUTOFBOUNDS_ERROR';
exports[3687] = 'ER_REGEXP_INTERNAL_ERROR';
exports[3688] = 'ER_REGEXP_RULE_SYNTAX';
exports[3689] = 'ER_REGEXP_BAD_ESCAPE_SEQUENCE';
exports[3690] = 'ER_REGEXP_UNIMPLEMENTED';
exports[3691] = 'ER_REGEXP_MISMATCHED_PAREN';
exports[3692] = 'ER_REGEXP_BAD_INTERVAL';
exports[3693] = 'ER_REGEXP_MAX_LT_MIN';
exports[3694] = 'ER_REGEXP_INVALID_BACK_REF';
exports[3695] = 'ER_REGEXP_LOOK_BEHIND_LIMIT';
exports[3696] = 'ER_REGEXP_MISSING_CLOSE_BRACKET';
exports[3697] = 'ER_REGEXP_INVALID_RANGE';
exports[3698] = 'ER_REGEXP_STACK_OVERFLOW';
exports[3699] = 'ER_REGEXP_TIME_OUT';
exports[3700] = 'ER_REGEXP_PATTERN_TOO_BIG';
exports[3701] = 'ER_CANT_SET_ERROR_LOG_SERVICE';
exports[3702] = 'ER_EMPTY_PIPELINE_FOR_ERROR_LOG_SERVICE';
exports[3703] = 'ER_COMPONENT_FILTER_DIAGNOSTICS';
exports[3704] = 'ER_NOT_IMPLEMENTED_FOR_CARTESIAN_SRS';
exports[3705] = 'ER_NOT_IMPLEMENTED_FOR_PROJECTED_SRS';
exports[3706] = 'ER_NONPOSITIVE_RADIUS';
exports[3707] = 'ER_RESTART_SERVER_FAILED';
exports[3708] = 'ER_SRS_MISSING_MANDATORY_ATTRIBUTE';
exports[3709] = 'ER_SRS_MULTIPLE_ATTRIBUTE_DEFINITIONS';
exports[3710] = 'ER_SRS_NAME_CANT_BE_EMPTY_OR_WHITESPACE';
exports[3711] = 'ER_SRS_ORGANIZATION_CANT_BE_EMPTY_OR_WHITESPACE';
exports[3712] = 'ER_SRS_ID_ALREADY_EXISTS';
exports[3713] = 'ER_WARN_SRS_ID_ALREADY_EXISTS';
exports[3714] = 'ER_CANT_MODIFY_SRID_0';
exports[3715] = 'ER_WARN_RESERVED_SRID_RANGE';
exports[3716] = 'ER_CANT_MODIFY_SRS_USED_BY_COLUMN';
exports[3717] = 'ER_SRS_INVALID_CHARACTER_IN_ATTRIBUTE';
exports[3718] = 'ER_SRS_ATTRIBUTE_STRING_TOO_LONG';
exports[3719] = 'ER_DEPRECATED_UTF8_ALIAS';
exports[3720] = 'ER_DEPRECATED_NATIONAL';
exports[3721] = 'ER_INVALID_DEFAULT_UTF8MB4_COLLATION';
exports[3722] = 'ER_UNABLE_TO_COLLECT_LOG_STATUS';
exports[3723] = 'ER_RESERVED_TABLESPACE_NAME';
exports[3724] = 'ER_UNABLE_TO_SET_OPTION';
exports[3725] = 'ER_REPLICA_POSSIBLY_DIVERGED_AFTER_DDL';
exports[3726] = 'ER_SRS_NOT_GEOGRAPHIC';
exports[3727] = 'ER_POLYGON_TOO_LARGE';
exports[3728] = 'ER_SPATIAL_UNIQUE_INDEX';
exports[3729] = 'ER_INDEX_TYPE_NOT_SUPPORTED_FOR_SPATIAL_INDEX';
exports[3730] = 'ER_FK_CANNOT_DROP_PARENT';
exports[3731] = 'ER_GEOMETRY_PARAM_LONGITUDE_OUT_OF_RANGE';
exports[3732] = 'ER_GEOMETRY_PARAM_LATITUDE_OUT_OF_RANGE';
exports[3733] = 'ER_FK_CANNOT_USE_VIRTUAL_COLUMN';
exports[3734] = 'ER_FK_NO_COLUMN_PARENT';
exports[3735] = 'ER_CANT_SET_ERROR_SUPPRESSION_LIST';
exports[3736] = 'ER_SRS_GEOGCS_INVALID_AXES';
exports[3737] = 'ER_SRS_INVALID_SEMI_MAJOR_AXIS';
exports[3738] = 'ER_SRS_INVALID_INVERSE_FLATTENING';
exports[3739] = 'ER_SRS_INVALID_ANGULAR_UNIT';
exports[3740] = 'ER_SRS_INVALID_PRIME_MERIDIAN';
exports[3741] = 'ER_TRANSFORM_SOURCE_SRS_NOT_SUPPORTED';
exports[3742] = 'ER_TRANSFORM_TARGET_SRS_NOT_SUPPORTED';
exports[3743] = 'ER_TRANSFORM_SOURCE_SRS_MISSING_TOWGS84';
exports[3744] = 'ER_TRANSFORM_TARGET_SRS_MISSING_TOWGS84';
exports[3745] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_SESSION_BINLOG_FORMAT';
exports[3746] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT';
exports[3747] = 'ER_RUNNING_APPLIER_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT';
exports[3748] = 'ER_CLIENT_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRX_IN_SBR';
exports[3749] = 'ER_XA_CANT_CREATE_MDL_BACKUP';
exports[3750] = 'ER_TABLE_WITHOUT_PK';
exports[3751] = 'ER_WARN_DATA_TRUNCATED_FUNCTIONAL_INDEX';
exports[3752] = 'ER_WARN_DATA_OUT_OF_RANGE_FUNCTIONAL_INDEX';
exports[3753] = 'ER_FUNCTIONAL_INDEX_ON_JSON_OR_GEOMETRY_FUNCTION';
exports[3754] = 'ER_FUNCTIONAL_INDEX_REF_AUTO_INCREMENT';
exports[3755] = 'ER_CANNOT_DROP_COLUMN_FUNCTIONAL_INDEX';
exports[3756] = 'ER_FUNCTIONAL_INDEX_PRIMARY_KEY';
exports[3757] = 'ER_FUNCTIONAL_INDEX_ON_LOB';
exports[3758] = 'ER_FUNCTIONAL_INDEX_FUNCTION_IS_NOT_ALLOWED';
exports[3759] = 'ER_FULLTEXT_FUNCTIONAL_INDEX';
exports[3760] = 'ER_SPATIAL_FUNCTIONAL_INDEX';
exports[3761] = 'ER_WRONG_KEY_COLUMN_FUNCTIONAL_INDEX';
exports[3762] = 'ER_FUNCTIONAL_INDEX_ON_FIELD';
exports[3763] = 'ER_GENERATED_COLUMN_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3764] = 'ER_GENERATED_COLUMN_ROW_VALUE';
exports[3765] = 'ER_GENERATED_COLUMN_VARIABLES';
exports[3766] = 'ER_DEPENDENT_BY_DEFAULT_GENERATED_VALUE';
exports[3767] = 'ER_DEFAULT_VAL_GENERATED_NON_PRIOR';
exports[3768] = 'ER_DEFAULT_VAL_GENERATED_REF_AUTO_INC';
exports[3769] = 'ER_DEFAULT_VAL_GENERATED_FUNCTION_IS_NOT_ALLOWED';
exports[3770] = 'ER_DEFAULT_VAL_GENERATED_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3771] = 'ER_DEFAULT_VAL_GENERATED_ROW_VALUE';
exports[3772] = 'ER_DEFAULT_VAL_GENERATED_VARIABLES';
exports[3773] = 'ER_DEFAULT_AS_VAL_GENERATED';
exports[3774] = 'ER_UNSUPPORTED_ACTION_ON_DEFAULT_VAL_GENERATED';
exports[3775] = 'ER_GTID_UNSAFE_ALTER_ADD_COL_WITH_DEFAULT_EXPRESSION';
exports[3776] = 'ER_FK_CANNOT_CHANGE_ENGINE';
exports[3777] = 'ER_WARN_DEPRECATED_USER_SET_EXPR';
exports[3778] = 'ER_WARN_DEPRECATED_UTF8MB3_COLLATION';
exports[3779] = 'ER_WARN_DEPRECATED_NESTED_COMMENT_SYNTAX';
exports[3780] = 'ER_FK_INCOMPATIBLE_COLUMNS';
exports[3781] = 'ER_GR_HOLD_WAIT_TIMEOUT';
exports[3782] = 'ER_GR_HOLD_KILLED';
exports[3783] = 'ER_GR_HOLD_MEMBER_STATUS_ERROR';
exports[3784] = 'ER_RPL_ENCRYPTION_FAILED_TO_FETCH_KEY';
exports[3785] = 'ER_RPL_ENCRYPTION_KEY_NOT_FOUND';
exports[3786] = 'ER_RPL_ENCRYPTION_KEYRING_INVALID_KEY';
exports[3787] = 'ER_RPL_ENCRYPTION_HEADER_ERROR';
exports[3788] = 'ER_RPL_ENCRYPTION_FAILED_TO_ROTATE_LOGS';
exports[3789] = 'ER_RPL_ENCRYPTION_KEY_EXISTS_UNEXPECTED';
exports[3790] = 'ER_RPL_ENCRYPTION_FAILED_TO_GENERATE_KEY';
exports[3791] = 'ER_RPL_ENCRYPTION_FAILED_TO_STORE_KEY';
exports[3792] = 'ER_RPL_ENCRYPTION_FAILED_TO_REMOVE_KEY';
exports[3793] = 'ER_RPL_ENCRYPTION_UNABLE_TO_CHANGE_OPTION';
exports[3794] = 'ER_RPL_ENCRYPTION_MASTER_KEY_RECOVERY_FAILED';
exports[3795] = 'ER_SLOW_LOG_MODE_IGNORED_WHEN_NOT_LOGGING_TO_FILE';
exports[3796] = 'ER_GRP_TRX_CONSISTENCY_NOT_ALLOWED';
exports[3797] = 'ER_GRP_TRX_CONSISTENCY_BEFORE';
exports[3798] = 'ER_GRP_TRX_CONSISTENCY_AFTER_ON_TRX_BEGIN';
exports[3799] = 'ER_GRP_TRX_CONSISTENCY_BEGIN_NOT_ALLOWED';
exports[3800] = 'ER_FUNCTIONAL_INDEX_ROW_VALUE_IS_NOT_ALLOWED';
exports[3801] = 'ER_RPL_ENCRYPTION_FAILED_TO_ENCRYPT';
exports[3802] = 'ER_PAGE_TRACKING_NOT_STARTED';
exports[3803] = 'ER_PAGE_TRACKING_RANGE_NOT_TRACKED';
exports[3804] = 'ER_PAGE_TRACKING_CANNOT_PURGE';
exports[3805] = 'ER_RPL_ENCRYPTION_CANNOT_ROTATE_BINLOG_MASTER_KEY';
exports[3806] = 'ER_BINLOG_MASTER_KEY_RECOVERY_OUT_OF_COMBINATION';
exports[3807] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_OPERATE_KEY';
exports[3808] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_ROTATE_LOGS';
exports[3809] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_REENCRYPT_LOG';
exports[3810] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_UNUSED_KEYS';
exports[3811] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_AUX_KEY';
exports[3812] = 'ER_NON_BOOLEAN_EXPR_FOR_CHECK_CONSTRAINT';
exports[3813] = 'ER_COLUMN_CHECK_CONSTRAINT_REFERENCES_OTHER_COLUMN';
exports[3814] = 'ER_CHECK_CONSTRAINT_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3815] = 'ER_CHECK_CONSTRAINT_FUNCTION_IS_NOT_ALLOWED';
exports[3816] = 'ER_CHECK_CONSTRAINT_VARIABLES';
exports[3817] = 'ER_CHECK_CONSTRAINT_ROW_VALUE';
exports[3818] = 'ER_CHECK_CONSTRAINT_REFERS_AUTO_INCREMENT_COLUMN';
exports[3819] = 'ER_CHECK_CONSTRAINT_VIOLATED';
exports[3820] = 'ER_CHECK_CONSTRAINT_REFERS_UNKNOWN_COLUMN';
exports[3821] = 'ER_CHECK_CONSTRAINT_NOT_FOUND';
exports[3822] = 'ER_CHECK_CONSTRAINT_DUP_NAME';
exports[3823] = 'ER_CHECK_CONSTRAINT_CLAUSE_USING_FK_REFER_ACTION_COLUMN';
exports[3824] = 'WARN_UNENCRYPTED_TABLE_IN_ENCRYPTED_DB';
exports[3825] = 'ER_INVALID_ENCRYPTION_REQUEST';
exports[3826] = 'ER_CANNOT_SET_TABLE_ENCRYPTION';
exports[3827] = 'ER_CANNOT_SET_DATABASE_ENCRYPTION';
exports[3828] = 'ER_CANNOT_SET_TABLESPACE_ENCRYPTION';
exports[3829] = 'ER_TABLESPACE_CANNOT_BE_ENCRYPTED';
exports[3830] = 'ER_TABLESPACE_CANNOT_BE_DECRYPTED';
exports[3831] = 'ER_TABLESPACE_TYPE_UNKNOWN';
exports[3832] = 'ER_TARGET_TABLESPACE_UNENCRYPTED';
exports[3833] = 'ER_CANNOT_USE_ENCRYPTION_CLAUSE';
exports[3834] = 'ER_INVALID_MULTIPLE_CLAUSES';
exports[3835] = 'ER_UNSUPPORTED_USE_OF_GRANT_AS';
exports[3836] = 'ER_UKNOWN_AUTH_ID_OR_ACCESS_DENIED_FOR_GRANT_AS';
exports[3837] = 'ER_DEPENDENT_BY_FUNCTIONAL_INDEX';
exports[3838] = 'ER_PLUGIN_NOT_EARLY';
exports[3839] = 'ER_INNODB_REDO_LOG_ARCHIVE_START_SUBDIR_PATH';
exports[3840] = 'ER_INNODB_REDO_LOG_ARCHIVE_START_TIMEOUT';
exports[3841] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIRS_INVALID';
exports[3842] = 'ER_INNODB_REDO_LOG_ARCHIVE_LABEL_NOT_FOUND';
exports[3843] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_EMPTY';
exports[3844] = 'ER_INNODB_REDO_LOG_ARCHIVE_NO_SUCH_DIR';
exports[3845] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_CLASH';
exports[3846] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_PERMISSIONS';
exports[3847] = 'ER_INNODB_REDO_LOG_ARCHIVE_FILE_CREATE';
exports[3848] = 'ER_INNODB_REDO_LOG_ARCHIVE_ACTIVE';
exports[3849] = 'ER_INNODB_REDO_LOG_ARCHIVE_INACTIVE';
exports[3850] = 'ER_INNODB_REDO_LOG_ARCHIVE_FAILED';
exports[3851] = 'ER_INNODB_REDO_LOG_ARCHIVE_SESSION';
exports[3852] = 'ER_STD_REGEX_ERROR';
exports[3853] = 'ER_INVALID_JSON_TYPE';
exports[3854] = 'ER_CANNOT_CONVERT_STRING';
exports[3855] = 'ER_DEPENDENT_BY_PARTITION_FUNC';
exports[3856] = 'ER_WARN_DEPRECATED_FLOAT_AUTO_INCREMENT';
exports[3857] = 'ER_RPL_CANT_STOP_REPLICA_WHILE_LOCKED_BACKUP';
exports[3858] = 'ER_WARN_DEPRECATED_FLOAT_DIGITS';
exports[3859] = 'ER_WARN_DEPRECATED_FLOAT_UNSIGNED';
exports[3860] = 'ER_WARN_DEPRECATED_INTEGER_DISPLAY_WIDTH';
exports[3861] = 'ER_WARN_DEPRECATED_ZEROFILL';
exports[3862] = 'ER_CLONE_DONOR';
exports[3863] = 'ER_CLONE_PROTOCOL';
exports[3864] = 'ER_CLONE_DONOR_VERSION';
exports[3865] = 'ER_CLONE_OS';
exports[3866] = 'ER_CLONE_PLATFORM';
exports[3867] = 'ER_CLONE_CHARSET';
exports[3868] = 'ER_CLONE_CONFIG';
exports[3869] = 'ER_CLONE_SYS_CONFIG';
exports[3870] = 'ER_CLONE_PLUGIN_MATCH';
exports[3871] = 'ER_CLONE_LOOPBACK';
exports[3872] = 'ER_CLONE_ENCRYPTION';
exports[3873] = 'ER_CLONE_DISK_SPACE';
exports[3874] = 'ER_CLONE_IN_PROGRESS';
exports[3875] = 'ER_CLONE_DISALLOWED';
exports[3876] = 'ER_CANNOT_GRANT_ROLES_TO_ANONYMOUS_USER';
exports[3877] = 'ER_SECONDARY_ENGINE_PLUGIN';
exports[3878] = 'ER_SECOND_PASSWORD_CANNOT_BE_EMPTY';
exports[3879] = 'ER_DB_ACCESS_DENIED';
exports[3880] = 'ER_DA_AUTH_ID_WITH_SYSTEM_USER_PRIV_IN_MANDATORY_ROLES';
exports[3881] = 'ER_DA_RPL_GTID_TABLE_CANNOT_OPEN';
exports[3882] = 'ER_GEOMETRY_IN_UNKNOWN_LENGTH_UNIT';
exports[3883] = 'ER_DA_PLUGIN_INSTALL_ERROR';
exports[3884] = 'ER_NO_SESSION_TEMP';
exports[3885] = 'ER_DA_UNKNOWN_ERROR_NUMBER';
exports[3886] = 'ER_COLUMN_CHANGE_SIZE';
exports[3887] = 'ER_REGEXP_INVALID_CAPTURE_GROUP_NAME';
exports[3888] = 'ER_DA_SSL_LIBRARY_ERROR';
exports[3889] = 'ER_SECONDARY_ENGINE';
exports[3890] = 'ER_SECONDARY_ENGINE_DDL';
exports[3891] = 'ER_INCORRECT_CURRENT_PASSWORD';
exports[3892] = 'ER_MISSING_CURRENT_PASSWORD';
exports[3893] = 'ER_CURRENT_PASSWORD_NOT_REQUIRED';
exports[3894] = 'ER_PASSWORD_CANNOT_BE_RETAINED_ON_PLUGIN_CHANGE';
exports[3895] = 'ER_CURRENT_PASSWORD_CANNOT_BE_RETAINED';
exports[3896] = 'ER_PARTIAL_REVOKES_EXIST';
exports[3897] = 'ER_CANNOT_GRANT_SYSTEM_PRIV_TO_MANDATORY_ROLE';
exports[3898] = 'ER_XA_REPLICATION_FILTERS';
exports[3899] = 'ER_UNSUPPORTED_SQL_MODE';
exports[3900] = 'ER_REGEXP_INVALID_FLAG';
exports[3901] = 'ER_PARTIAL_REVOKE_AND_DB_GRANT_BOTH_EXISTS';
exports[3902] = 'ER_UNIT_NOT_FOUND';
exports[3903] = 'ER_INVALID_JSON_VALUE_FOR_FUNC_INDEX';
exports[3904] = 'ER_JSON_VALUE_OUT_OF_RANGE_FOR_FUNC_INDEX';
exports[3905] = 'ER_EXCEEDED_MV_KEYS_NUM';
exports[3906] = 'ER_EXCEEDED_MV_KEYS_SPACE';
exports[3907] = 'ER_FUNCTIONAL_INDEX_DATA_IS_TOO_LONG';
exports[3908] = 'ER_WRONG_MVI_VALUE';
exports[3909] = 'ER_WARN_FUNC_INDEX_NOT_APPLICABLE';
exports[3910] = 'ER_GRP_RPL_UDF_ERROR';
exports[3911] = 'ER_UPDATE_GTID_PURGED_WITH_GR';
exports[3912] = 'ER_GROUPING_ON_TIMESTAMP_IN_DST';
exports[3913] = 'ER_TABLE_NAME_CAUSES_TOO_LONG_PATH';
exports[3914] = 'ER_AUDIT_LOG_INSUFFICIENT_PRIVILEGE';
exports[3915] = 'ER_AUDIT_LOG_PASSWORD_HAS_BEEN_COPIED';
exports[3916] = 'ER_DA_GRP_RPL_STARTED_AUTO_REJOIN';
exports[3917] = 'ER_SYSVAR_CHANGE_DURING_QUERY';
exports[3918] = 'ER_GLOBSTAT_CHANGE_DURING_QUERY';
exports[3919] = 'ER_GRP_RPL_MESSAGE_SERVICE_INIT_FAILURE';
exports[3920] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_CLIENT';
exports[3921] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_LEVEL_CLIENT';
exports[3922] = 'ER_WRONG_COMPRESSION_ALGORITHM_CLIENT';
exports[3923] = 'ER_WRONG_COMPRESSION_LEVEL_CLIENT';
exports[3924] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_LIST_CLIENT';
exports[3925] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_CANNOT_BE_ANONYMOUS';
exports[3926] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_DOES_NOT_EXIST';
exports[3927] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_CORRUPT';
exports[3928] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_NEEDS_RPL_APPLIER_PRIV';
exports[3929] = 'ER_WARN_DA_PRIVILEGE_NOT_REGISTERED';
exports[3930] = 'ER_CLIENT_KEYRING_UDF_KEY_INVALID';
exports[3931] = 'ER_CLIENT_KEYRING_UDF_KEY_TYPE_INVALID';
exports[3932] = 'ER_CLIENT_KEYRING_UDF_KEY_TOO_LONG';
exports[3933] = 'ER_CLIENT_KEYRING_UDF_KEY_TYPE_TOO_LONG';
exports[3934] = 'ER_JSON_SCHEMA_VALIDATION_ERROR_WITH_DETAILED_REPORT';
exports[3935] = 'ER_DA_UDF_INVALID_CHARSET_SPECIFIED';
exports[3936] = 'ER_DA_UDF_INVALID_CHARSET';
exports[3937] = 'ER_DA_UDF_INVALID_COLLATION';
exports[3938] = 'ER_DA_UDF_INVALID_EXTENSION_ARGUMENT_TYPE';
exports[3939] = 'ER_MULTIPLE_CONSTRAINTS_WITH_SAME_NAME';
exports[3940] = 'ER_CONSTRAINT_NOT_FOUND';
exports[3941] = 'ER_ALTER_CONSTRAINT_ENFORCEMENT_NOT_SUPPORTED';
exports[3942] = 'ER_TABLE_VALUE_CONSTRUCTOR_MUST_HAVE_COLUMNS';
exports[3943] = 'ER_TABLE_VALUE_CONSTRUCTOR_CANNOT_HAVE_DEFAULT';
exports[3944] = 'ER_CLIENT_QUERY_FAILURE_INVALID_NON_ROW_FORMAT';
exports[3945] = 'ER_REQUIRE_ROW_FORMAT_INVALID_VALUE';
exports[3946] = 'ER_FAILED_TO_DETERMINE_IF_ROLE_IS_MANDATORY';
exports[3947] = 'ER_FAILED_TO_FETCH_MANDATORY_ROLE_LIST';
exports[3948] = 'ER_CLIENT_LOCAL_FILES_DISABLED';
exports[3949] = 'ER_IMP_INCOMPATIBLE_CFG_VERSION';
exports[3950] = 'ER_DA_OOM';
exports[3951] = 'ER_DA_UDF_INVALID_ARGUMENT_TO_SET_CHARSET';
exports[3952] = 'ER_DA_UDF_INVALID_RETURN_TYPE_TO_SET_CHARSET';
exports[3953] = 'ER_MULTIPLE_INTO_CLAUSES';
exports[3954] = 'ER_MISPLACED_INTO';
exports[3955] = 'ER_USER_ACCESS_DENIED_FOR_USER_ACCOUNT_BLOCKED_BY_PASSWORD_LOCK';
exports[3956] = 'ER_WARN_DEPRECATED_YEAR_UNSIGNED';
exports[3957] = 'ER_CLONE_NETWORK_PACKET';
exports[3958] = 'ER_SDI_OPERATION_FAILED_MISSING_RECORD';
exports[3959] = 'ER_DEPENDENT_BY_CHECK_CONSTRAINT';
exports[3960] = 'ER_GRP_OPERATION_NOT_ALLOWED_GR_MUST_STOP';
exports[3961] = 'ER_WARN_DEPRECATED_JSON_TABLE_ON_ERROR_ON_EMPTY';
exports[3962] = 'ER_WARN_DEPRECATED_INNER_INTO';
exports[3963] = 'ER_WARN_DEPRECATED_VALUES_FUNCTION_ALWAYS_NULL';
exports[3964] = 'ER_WARN_DEPRECATED_SQL_CALC_FOUND_ROWS';
exports[3965] = 'ER_WARN_DEPRECATED_FOUND_ROWS';
exports[3966] = 'ER_MISSING_JSON_VALUE';
exports[3967] = 'ER_MULTIPLE_JSON_VALUES';
exports[3968] = 'ER_HOSTNAME_TOO_LONG';
exports[3969] = 'ER_WARN_CLIENT_DEPRECATED_PARTITION_PREFIX_KEY';
exports[3970] = 'ER_GROUP_REPLICATION_USER_EMPTY_MSG';
exports[3971] = 'ER_GROUP_REPLICATION_USER_MANDATORY_MSG';
exports[3972] = 'ER_GROUP_REPLICATION_PASSWORD_LENGTH';
exports[3973] = 'ER_SUBQUERY_TRANSFORM_REJECTED';
exports[3974] = 'ER_DA_GRP_RPL_RECOVERY_ENDPOINT_FORMAT';
exports[3975] = 'ER_DA_GRP_RPL_RECOVERY_ENDPOINT_INVALID';
exports[3976] = 'ER_WRONG_VALUE_FOR_VAR_PLUS_ACTIONABLE_PART';
exports[3977] = 'ER_STATEMENT_NOT_ALLOWED_AFTER_START_TRANSACTION';
exports[3978] = 'ER_FOREIGN_KEY_WITH_ATOMIC_CREATE_SELECT';
exports[3979] = 'ER_NOT_ALLOWED_WITH_START_TRANSACTION';
exports[3980] = 'ER_INVALID_JSON_ATTRIBUTE';
exports[3981] = 'ER_ENGINE_ATTRIBUTE_NOT_SUPPORTED';
exports[3982] = 'ER_INVALID_USER_ATTRIBUTE_JSON';
exports[3983] = 'ER_INNODB_REDO_DISABLED';
exports[3984] = 'ER_INNODB_REDO_ARCHIVING_ENABLED';
exports[3985] = 'ER_MDL_OUT_OF_RESOURCES';
exports[3986] = 'ER_IMPLICIT_COMPARISON_FOR_JSON';
exports[3987] = 'ER_FUNCTION_DOES_NOT_SUPPORT_CHARACTER_SET';
exports[3988] = 'ER_IMPOSSIBLE_STRING_CONVERSION';
exports[3989] = 'ER_SCHEMA_READ_ONLY';
exports[3990] = 'ER_RPL_ASYNC_RECONNECT_GTID_MODE_OFF';
exports[3991] = 'ER_RPL_ASYNC_RECONNECT_AUTO_POSITION_OFF';
exports[3992] = 'ER_DISABLE_GTID_MODE_REQUIRES_ASYNC_RECONNECT_OFF';
exports[3993] = 'ER_DISABLE_AUTO_POSITION_REQUIRES_ASYNC_RECONNECT_OFF';
exports[3994] = 'ER_INVALID_PARAMETER_USE';
exports[3995] = 'ER_CHARACTER_SET_MISMATCH';
exports[3996] = 'ER_WARN_VAR_VALUE_CHANGE_NOT_SUPPORTED';
exports[3997] = 'ER_INVALID_TIME_ZONE_INTERVAL';
exports[3998] = 'ER_INVALID_CAST';
exports[3999] = 'ER_HYPERGRAPH_NOT_SUPPORTED_YET';
exports[4000] = 'ER_WARN_HYPERGRAPH_EXPERIMENTAL';
exports[4001] = 'ER_DA_NO_ERROR_LOG_PARSER_CONFIGURED';
exports[4002] = 'ER_DA_ERROR_LOG_TABLE_DISABLED';
exports[4003] = 'ER_DA_ERROR_LOG_MULTIPLE_FILTERS';
exports[4004] = 'ER_DA_CANT_OPEN_ERROR_LOG';
exports[4005] = 'ER_USER_REFERENCED_AS_DEFINER';
exports[4006] = 'ER_CANNOT_USER_REFERENCED_AS_DEFINER';
exports[4007] = 'ER_REGEX_NUMBER_TOO_BIG';
exports[4008] = 'ER_SPVAR_NONINTEGER_TYPE';
exports[4009] = 'WARN_UNSUPPORTED_ACL_TABLES_READ';
exports[4010] = 'ER_BINLOG_UNSAFE_ACL_TABLE_READ_IN_DML_DDL';
exports[4011] = 'ER_STOP_REPLICA_MONITOR_IO_THREAD_TIMEOUT';
exports[4012] = 'ER_STARTING_REPLICA_MONITOR_IO_THREAD';
exports[4013] = 'ER_CANT_USE_ANONYMOUS_TO_GTID_WITH_GTID_MODE_NOT_ON';
exports[4014] = 'ER_CANT_COMBINE_ANONYMOUS_TO_GTID_AND_AUTOPOSITION';
exports[4015] = 'ER_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_REQUIRES_GTID_MODE_ON';
exports[4016] = 'ER_SQL_REPLICA_SKIP_COUNTER_USED_WITH_GTID_MODE_ON';
exports[4017] = 'ER_USING_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_AS_LOCAL_OR_UUID';
exports[4018] = 'ER_CANT_SET_ANONYMOUS_TO_GTID_AND_WAIT_UNTIL_SQL_THD_AFTER_GTIDS';
exports[4019] = 'ER_CANT_SET_SQL_AFTER_OR_BEFORE_GTIDS_WITH_ANONYMOUS_TO_GTID';
exports[4020] = 'ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_GROUP_NAME';
exports[4021] = 'ER_CANT_USE_SAME_UUID_AS_GROUP_NAME';
exports[4022] = 'ER_GRP_RPL_RECOVERY_CHANNEL_STILL_RUNNING';
exports[4023] = 'ER_INNODB_INVALID_AUTOEXTEND_SIZE_VALUE';
exports[4024] = 'ER_INNODB_INCOMPATIBLE_WITH_TABLESPACE';
exports[4025] = 'ER_INNODB_AUTOEXTEND_SIZE_OUT_OF_RANGE';
exports[4026] = 'ER_CANNOT_USE_AUTOEXTEND_SIZE_CLAUSE';
exports[4027] = 'ER_ROLE_GRANTED_TO_ITSELF';
exports[4028] = 'ER_TABLE_MUST_HAVE_A_VISIBLE_COLUMN';
exports[4029] = 'ER_INNODB_COMPRESSION_FAILURE';
exports[4030] = 'ER_WARN_ASYNC_CONN_FAILOVER_NETWORK_NAMESPACE';
exports[4031] = 'ER_CLIENT_INTERACTION_TIMEOUT';
exports[4032] = 'ER_INVALID_CAST_TO_GEOMETRY';
exports[4033] = 'ER_INVALID_CAST_POLYGON_RING_DIRECTION';
exports[4034] = 'ER_GIS_DIFFERENT_SRIDS_AGGREGATION';
exports[4035] = 'ER_RELOAD_KEYRING_FAILURE';
exports[4036] = 'ER_SDI_GET_KEYS_INVALID_TABLESPACE';
exports[4037] = 'ER_CHANGE_RPL_SRC_WRONG_COMPRESSION_ALGORITHM_SIZE';
exports[4038] = 'ER_WARN_DEPRECATED_TLS_VERSION_FOR_CHANNEL_CLI';
exports[4039] = 'ER_CANT_USE_SAME_UUID_AS_VIEW_CHANGE_UUID';
exports[4040] = 'ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_VIEW_CHANGE_UUID';
exports[4041] = 'ER_GRP_RPL_VIEW_CHANGE_UUID_FAIL_GET_VARIABLE';
exports[4042] = 'ER_WARN_ADUIT_LOG_MAX_SIZE_AND_PRUNE_SECONDS';
exports[4043] = 'ER_WARN_ADUIT_LOG_MAX_SIZE_CLOSE_TO_ROTATE_ON_SIZE';
exports[4044] = 'ER_KERBEROS_CREATE_USER';
exports[4045] = 'ER_INSTALL_PLUGIN_CONFLICT_CLIENT';
exports[4046] = 'ER_DA_ERROR_LOG_COMPONENT_FLUSH_FAILED';
exports[4047] = 'ER_WARN_SQL_AFTER_MTS_GAPS_GAP_NOT_CALCULATED';
exports[4048] = 'ER_INVALID_ASSIGNMENT_TARGET';
exports[4049] = 'ER_OPERATION_NOT_ALLOWED_ON_GR_SECONDARY';
exports[4050] = 'ER_GRP_RPL_FAILOVER_CHANNEL_STATUS_PROPAGATION';
exports[4051] = 'ER_WARN_AUDIT_LOG_FORMAT_UNIX_TIMESTAMP_ONLY_WHEN_JSON';
exports[4052] = 'ER_INVALID_MFA_PLUGIN_SPECIFIED';
exports[4053] = 'ER_IDENTIFIED_BY_UNSUPPORTED';
exports[4054] = 'ER_INVALID_PLUGIN_FOR_REGISTRATION';
exports[4055] = 'ER_PLUGIN_REQUIRES_REGISTRATION';
exports[4056] = 'ER_MFA_METHOD_EXISTS';
exports[4057] = 'ER_MFA_METHOD_NOT_EXISTS';
exports[4058] = 'ER_AUTHENTICATION_POLICY_MISMATCH';
exports[4059] = 'ER_PLUGIN_REGISTRATION_DONE';
exports[4060] = 'ER_INVALID_USER_FOR_REGISTRATION';
exports[4061] = 'ER_USER_REGISTRATION_FAILED';
exports[4062] = 'ER_MFA_METHODS_INVALID_ORDER';
exports[4063] = 'ER_MFA_METHODS_IDENTICAL';
exports[4064] = 'ER_INVALID_MFA_OPERATIONS_FOR_PASSWORDLESS_USER';
exports[4065] = 'ER_CHANGE_REPLICATION_SOURCE_NO_OPTIONS_FOR_GTID_ONLY';
exports[4066] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_REQ_ROW_FORMAT_WITH_GTID_ONLY';
exports[4067] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POSITION_WITH_GTID_ONLY';
exports[4068] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_GTID_ONLY_WITHOUT_POSITIONS';
exports[4069] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POS_WITHOUT_POSITIONS';
exports[4070] = 'ER_CHANGE_REP_SOURCE_GR_CHANNEL_WITH_GTID_MODE_NOT_ON';
exports[4071] = 'ER_CANT_USE_GTID_ONLY_WITH_GTID_MODE_NOT_ON';
exports[4072] = 'ER_WARN_C_DISABLE_GTID_ONLY_WITH_SOURCE_AUTO_POS_INVALID_POS';
exports[4073] = 'ER_DA_SSL_FIPS_MODE_ERROR';
exports[4074] = 'ER_VALUE_OUT_OF_RANGE';
exports[4075] = 'ER_FULLTEXT_WITH_ROLLUP';
exports[4076] = 'ER_REGEXP_MISSING_RESOURCE';
exports[4077] = 'ER_WARN_REGEXP_USING_DEFAULT';
exports[4078] = 'ER_REGEXP_MISSING_FILE';
exports[4079] = 'ER_WARN_DEPRECATED_COLLATION';
exports[4080] = 'ER_CONCURRENT_PROCEDURE_USAGE';
exports[4081] = 'ER_DA_GLOBAL_CONN_LIMIT';
exports[4082] = 'ER_DA_CONN_LIMIT';
exports[4083] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE_INSTANT';
exports[4084] = 'ER_WARN_SF_UDF_NAME_COLLISION';
exports[4085] = 'ER_CANNOT_PURGE_BINLOG_WITH_BACKUP_LOCK';
exports[4086] = 'ER_TOO_MANY_WINDOWS';
exports[4087] = 'ER_MYSQLBACKUP_CLIENT_MSG';
exports[4088] = 'ER_COMMENT_CONTAINS_INVALID_STRING';
exports[4089] = 'ER_DEFINITION_CONTAINS_INVALID_STRING';
exports[4090] = 'ER_CANT_EXECUTE_COMMAND_WITH_ASSIGNED_GTID_NEXT';
exports[4091] = 'ER_XA_TEMP_TABLE';
exports[4092] = 'ER_INNODB_MAX_ROW_VERSION';
exports[4093] = 'ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_SIZE';
exports[4094] = 'ER_OPERATION_NOT_ALLOWED_WHILE_PRIMARY_CHANGE_IS_RUNNING';
exports[4095] = 'ER_WARN_DEPRECATED_DATETIME_DELIMITER';
exports[4096] = 'ER_WARN_DEPRECATED_SUPERFLUOUS_DELIMITER';
exports[4097] = 'ER_CANNOT_PERSIST_SENSITIVE_VARIABLES';
exports[4098] = 'ER_WARN_CANNOT_SECURELY_PERSIST_SENSITIVE_VARIABLES';
exports[4099] = 'ER_WARN_TRG_ALREADY_EXISTS';
exports[4100] = 'ER_IF_NOT_EXISTS_UNSUPPORTED_TRG_EXISTS_ON_DIFFERENT_TABLE';
exports[4101] = 'ER_IF_NOT_EXISTS_UNSUPPORTED_UDF_NATIVE_FCT_NAME_COLLISION';
exports[4102] = 'ER_SET_PASSWORD_AUTH_PLUGIN_ERROR';
exports[4103] = 'ER_REDUCED_DBLWR_FILE_CORRUPTED';
exports[4104] = 'ER_REDUCED_DBLWR_PAGE_FOUND';
exports[4105] = 'ER_SRS_INVALID_LATITUDE_OF_ORIGIN';
exports[4106] = 'ER_SRS_INVALID_LONGITUDE_OF_ORIGIN';
exports[4107] = 'ER_SRS_UNUSED_PROJ_PARAMETER_PRESENT';
exports[4108] = 'ER_GIPK_COLUMN_EXISTS';
exports[4109] = 'ER_GIPK_FAILED_AUTOINC_COLUMN_EXISTS';
exports[4110] = 'ER_GIPK_COLUMN_ALTER_NOT_ALLOWED';
exports[4111] = 'ER_DROP_PK_COLUMN_TO_DROP_GIPK';
exports[4112] = 'ER_CREATE_SELECT_WITH_GIPK_DISALLOWED_IN_SBR';
exports[4113] = 'ER_DA_EXPIRE_LOGS_DAYS_IGNORED';
exports[4114] = 'ER_CTE_RECURSIVE_NOT_UNION';
exports[4115] = 'ER_COMMAND_BACKEND_FAILED_TO_FETCH_SECURITY_CTX';
exports[4116] = 'ER_COMMAND_SERVICE_BACKEND_FAILED';
exports[4117] = 'ER_CLIENT_FILE_PRIVILEGE_FOR_REPLICATION_CHECKS';
exports[4118] = 'ER_GROUP_REPLICATION_FORCE_MEMBERS_COMMAND_FAILURE';
exports[4119] = 'ER_WARN_DEPRECATED_IDENT';
exports[4120] = 'ER_INTERSECT_ALL_MAX_DUPLICATES_EXCEEDED';
exports[4121] = 'ER_TP_QUERY_THRS_PER_GRP_EXCEEDS_TXN_THR_LIMIT';
exports[4122] = 'ER_BAD_TIMESTAMP_FORMAT';
exports[4123] = 'ER_SHAPE_PRIDICTION_UDF';
exports[4124] = 'ER_SRS_INVALID_HEIGHT';
exports[4125] = 'ER_SRS_INVALID_SCALING';
exports[4126] = 'ER_SRS_INVALID_ZONE_WIDTH';
exports[4127] = 'ER_SRS_INVALID_LATITUDE_POLAR_STERE_VAR_A';
exports[4128] = 'ER_WARN_DEPRECATED_CLIENT_NO_SCHEMA_OPTION';
exports[4129] = 'ER_TABLE_NOT_EMPTY';
exports[4130] = 'ER_TABLE_NO_PRIMARY_KEY';
exports[4131] = 'ER_TABLE_IN_SHARED_TABLESPACE';
exports[4132] = 'ER_INDEX_OTHER_THAN_PK';
exports[4133] = 'ER_LOAD_BULK_DATA_UNSORTED';
exports[4134] = 'ER_BULK_EXECUTOR_ERROR';
exports[4135] = 'ER_BULK_READER_LIBCURL_INIT_FAILED';
exports[4136] = 'ER_BULK_READER_LIBCURL_ERROR';
exports[4137] = 'ER_BULK_READER_SERVER_ERROR';
exports[4138] = 'ER_BULK_READER_COMMUNICATION_ERROR';
exports[4139] = 'ER_BULK_LOAD_DATA_FAILED';
exports[4140] = 'ER_BULK_LOADER_COLUMN_TOO_BIG_FOR_LEFTOVER_BUFFER';
exports[4141] = 'ER_BULK_LOADER_COMPONENT_ERROR';
exports[4142] = 'ER_BULK_LOADER_FILE_CONTAINS_LESS_LINES_THAN_IGNORE_CLAUSE';
exports[4143] = 'ER_BULK_PARSER_MISSING_ENCLOSED_BY';
exports[4144] = 'ER_BULK_PARSER_ROW_BUFFER_MAX_TOTAL_COLS_EXCEEDED';
exports[4145] = 'ER_BULK_PARSER_COPY_BUFFER_SIZE_EXCEEDED';
exports[4146] = 'ER_BULK_PARSER_UNEXPECTED_END_OF_INPUT';
exports[4147] = 'ER_BULK_PARSER_UNEXPECTED_ROW_TERMINATOR';
exports[4148] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_ENDING_ENCLOSED_BY';
exports[4149] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_NULL_ESCAPE';
exports[4150] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_COLUMN_TERMINATOR';
exports[4151] = 'ER_BULK_PARSER_INCOMPLETE_ESCAPE_SEQUENCE';
exports[4152] = 'ER_LOAD_BULK_DATA_FAILED';
exports[4153] = 'ER_LOAD_BULK_DATA_WRONG_VALUE_FOR_FIELD';
exports[4154] = 'ER_LOAD_BULK_DATA_WARN_NULL_TO_NOTNULL';
exports[4155] = 'ER_REQUIRE_TABLE_PRIMARY_KEY_CHECK_GENERATE_WITH_GR';
exports[4156] = 'ER_CANT_CHANGE_SYS_VAR_IN_READ_ONLY_MODE';
exports[4157] = 'ER_INNODB_INSTANT_ADD_DROP_NOT_SUPPORTED_MAX_SIZE';
exports[4158] = 'ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_FIELDS';
exports[4159] = 'ER_CANT_SET_PERSISTED';
exports[4160] = 'ER_INSTALL_COMPONENT_SET_NULL_VALUE';
exports[4161] = 'ER_INSTALL_COMPONENT_SET_UNUSED_VALUE';
exports[4162] = 'ER_WARN_DEPRECATED_USER_DEFINED_COLLATIONS';
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/string.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Iconv = __turbopack_require__("[project]/node_modules/.pnpm/iconv-lite@0.6.3/node_modules/iconv-lite/lib/index.js [app-route] (ecmascript)");
const { createLRU } = __turbopack_require__("[project]/node_modules/.pnpm/lru.min@1.1.1/node_modules/lru.min/lib/index.js [app-route] (ecmascript)");
const decoderCache = createLRU({
    max: 500
});
exports.decode = function(buffer, encoding, start, end, options) {
    if (Buffer.isEncoding(encoding)) {
        return buffer.toString(encoding, start, end);
    }
    // Optimize for common case: encoding="short_string", options=undefined.
    let decoder;
    if (!options) {
        decoder = decoderCache.get(encoding);
        if (!decoder) {
            decoder = Iconv.getDecoder(encoding);
            decoderCache.set(encoding, decoder);
        }
    } else {
        const decoderArgs = {
            encoding,
            options
        };
        const decoderKey = JSON.stringify(decoderArgs);
        decoder = decoderCache.get(decoderKey);
        if (!decoder) {
            decoder = Iconv.getDecoder(decoderArgs.encoding, decoderArgs.options);
            decoderCache.set(decoderKey, decoder);
        }
    }
    const res = decoder.write(buffer.slice(start, end));
    const trail = decoder.end();
    return trail ? res + trail : res;
};
exports.encode = function(string, encoding, options) {
    if (Buffer.isEncoding(encoding)) {
        return Buffer.from(string, encoding);
    }
    const encoder = Iconv.getEncoder(encoding, options || {});
    const res = encoder.write(string);
    const trail = encoder.end();
    return trail && trail.length > 0 ? Buffer.concat([
        res,
        trail
    ]) : res;
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on June 1, 2021.
// A comment describing some changes in the strict default SQL mode regarding
// non-standard dates was introduced.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const ErrorCodeToName = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/errors.js [app-route] (ecmascript)");
const NativeBuffer = __turbopack_require__("[externals]/ [external] (buffer, cjs)").Buffer;
const Long = __turbopack_require__("[project]/node_modules/.pnpm/long@5.2.3/node_modules/long/umd/index.js [app-route] (ecmascript)");
const StringParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/string.js [app-route] (ecmascript)");
const INVALID_DATE = new Date(NaN);
// this is nearly duplicate of previous function so generated code is not slower
// due to "if (dateStrings)" branching
const pad = '000000000000';
function leftPad(num, value) {
    const s = value.toString();
    // if we don't need to pad
    if (s.length >= num) {
        return s;
    }
    return (pad + s).slice(-num);
}
// The whole reason parse* function below exist
// is because String creation is relatively expensive (at least with V8), and if we have
// a buffer with "12345" content ideally we would like to bypass intermediate
// "12345" string creation and directly build 12345 number out of
// <Buffer 31 32 33 34 35> data.
// In my benchmarks the difference is ~25M 8-digit numbers per second vs
// 4.5 M using Number(packet.readLengthCodedString())
// not used when size is close to max precision as series of *10 accumulate error
// and approximate result mihgt be diffreent from (approximate as well) Number(bigNumStringValue))
// In the futire node version if speed difference is smaller parse* functions might be removed
// don't consider them as Packet public API
const minus = '-'.charCodeAt(0);
const plus = '+'.charCodeAt(0);
// TODO: handle E notation
const dot = '.'.charCodeAt(0);
const exponent = 'e'.charCodeAt(0);
const exponentCapital = 'E'.charCodeAt(0);
class Packet {
    constructor(id, buffer, start, end){
        // hot path, enable checks when testing only
        // if (!Buffer.isBuffer(buffer) || typeof start == 'undefined' || typeof end == 'undefined')
        //  throw new Error('invalid packet');
        this.sequenceId = id;
        this.numPackets = 1;
        this.buffer = buffer;
        this.start = start;
        this.offset = start + 4;
        this.end = end;
    }
    // ==============================
    // readers
    // ==============================
    reset() {
        this.offset = this.start + 4;
    }
    length() {
        return this.end - this.start;
    }
    slice() {
        return this.buffer.slice(this.start, this.end);
    }
    dump() {
        // eslint-disable-next-line no-console
        console.log([
            this.buffer.asciiSlice(this.start, this.end)
        ], this.buffer.slice(this.start, this.end), this.length(), this.sequenceId);
    }
    haveMoreData() {
        return this.end > this.offset;
    }
    skip(num) {
        this.offset += num;
    }
    readInt8() {
        return this.buffer[this.offset++];
    }
    readInt16() {
        this.offset += 2;
        return this.buffer.readUInt16LE(this.offset - 2);
    }
    readInt24() {
        return this.readInt16() + (this.readInt8() << 16);
    }
    readInt32() {
        this.offset += 4;
        return this.buffer.readUInt32LE(this.offset - 4);
    }
    readSInt8() {
        return this.buffer.readInt8(this.offset++);
    }
    readSInt16() {
        this.offset += 2;
        return this.buffer.readInt16LE(this.offset - 2);
    }
    readSInt32() {
        this.offset += 4;
        return this.buffer.readInt32LE(this.offset - 4);
    }
    readInt64JSNumber() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        const l = new Long(word0, word1, true);
        return l.toNumber();
    }
    readSInt64JSNumber() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        if (!(word1 & 0x80000000)) {
            return word0 + 0x100000000 * word1;
        }
        const l = new Long(word0, word1, false);
        return l.toNumber();
    }
    readInt64String() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        const res = new Long(word0, word1, true);
        return res.toString();
    }
    readSInt64String() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        const res = new Long(word0, word1, false);
        return res.toString();
    }
    readInt64() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        let res = new Long(word0, word1, true);
        const resNumber = res.toNumber();
        const resString = res.toString();
        res = resNumber.toString() === resString ? resNumber : resString;
        return res;
    }
    readSInt64() {
        const word0 = this.readInt32();
        const word1 = this.readInt32();
        let res = new Long(word0, word1, false);
        const resNumber = res.toNumber();
        const resString = res.toString();
        res = resNumber.toString() === resString ? resNumber : resString;
        return res;
    }
    isEOF() {
        return this.buffer[this.offset] === 0xfe && this.length() < 13;
    }
    eofStatusFlags() {
        return this.buffer.readInt16LE(this.offset + 3);
    }
    eofWarningCount() {
        return this.buffer.readInt16LE(this.offset + 1);
    }
    readLengthCodedNumber(bigNumberStrings, signed) {
        const byte1 = this.buffer[this.offset++];
        if (byte1 < 251) {
            return byte1;
        }
        return this.readLengthCodedNumberExt(byte1, bigNumberStrings, signed);
    }
    readLengthCodedNumberSigned(bigNumberStrings) {
        return this.readLengthCodedNumber(bigNumberStrings, true);
    }
    readLengthCodedNumberExt(tag, bigNumberStrings, signed) {
        let word0, word1;
        let res;
        if (tag === 0xfb) {
            return null;
        }
        if (tag === 0xfc) {
            return this.readInt8() + (this.readInt8() << 8);
        }
        if (tag === 0xfd) {
            return this.readInt8() + (this.readInt8() << 8) + (this.readInt8() << 16);
        }
        if (tag === 0xfe) {
            // TODO: check version
            // Up to MySQL 3.22, 0xfe was followed by a 4-byte integer.
            word0 = this.readInt32();
            word1 = this.readInt32();
            if (word1 === 0) {
                return word0; // don't convert to float if possible
            }
            if (word1 < 2097152) {
                // max exact float point int, 2^52 / 2^32
                return word1 * 0x100000000 + word0;
            }
            res = new Long(word0, word1, !signed); // Long need unsigned
            const resNumber = res.toNumber();
            const resString = res.toString();
            res = resNumber.toString() === resString ? resNumber : resString;
            return bigNumberStrings ? resString : res;
        }
        // eslint-disable-next-line no-console
        console.trace();
        throw new Error(`Should not reach here: ${tag}`);
    }
    readFloat() {
        const res = this.buffer.readFloatLE(this.offset);
        this.offset += 4;
        return res;
    }
    readDouble() {
        const res = this.buffer.readDoubleLE(this.offset);
        this.offset += 8;
        return res;
    }
    readBuffer(len) {
        if (typeof len === 'undefined') {
            len = this.end - this.offset;
        }
        this.offset += len;
        return this.buffer.slice(this.offset - len, this.offset);
    }
    // DATE, DATETIME and TIMESTAMP
    readDateTime(timezone) {
        if (!timezone || timezone === 'Z' || timezone === 'local') {
            const length = this.readInt8();
            if (length === 0xfb) {
                return null;
            }
            let y = 0;
            let m = 0;
            let d = 0;
            let H = 0;
            let M = 0;
            let S = 0;
            let ms = 0;
            if (length > 3) {
                y = this.readInt16();
                m = this.readInt8();
                d = this.readInt8();
            }
            if (length > 6) {
                H = this.readInt8();
                M = this.readInt8();
                S = this.readInt8();
            }
            if (length > 10) {
                ms = this.readInt32() / 1000;
            }
            // NO_ZERO_DATE mode and NO_ZERO_IN_DATE mode are part of the strict
            // default SQL mode used by MySQL 8.0. This means that non-standard
            // dates like '0000-00-00' become NULL. For older versions and other
            // possible MySQL flavours we still need to account for the
            // non-standard behaviour.
            if (y + m + d + H + M + S + ms === 0) {
                return INVALID_DATE;
            }
            if (timezone === 'Z') {
                return new Date(Date.UTC(y, m - 1, d, H, M, S, ms));
            }
            return new Date(y, m - 1, d, H, M, S, ms);
        }
        let str = this.readDateTimeString(6, 'T');
        if (str.length === 10) {
            str += 'T00:00:00';
        }
        return new Date(str + timezone);
    }
    readDateTimeString(decimals, timeSep) {
        const length = this.readInt8();
        let y = 0;
        let m = 0;
        let d = 0;
        let H = 0;
        let M = 0;
        let S = 0;
        let ms = 0;
        let str;
        if (length > 3) {
            y = this.readInt16();
            m = this.readInt8();
            d = this.readInt8();
            str = [
                leftPad(4, y),
                leftPad(2, m),
                leftPad(2, d)
            ].join('-');
        }
        if (length > 6) {
            H = this.readInt8();
            M = this.readInt8();
            S = this.readInt8();
            str += `${timeSep || ' '}${[
                leftPad(2, H),
                leftPad(2, M),
                leftPad(2, S)
            ].join(':')}`;
        }
        if (length > 10) {
            ms = this.readInt32();
            str += '.';
            if (decimals) {
                ms = leftPad(6, ms);
                if (ms.length > decimals) {
                    ms = ms.substring(0, decimals); // rounding is done at the MySQL side, only 0 are here
                }
            }
            str += ms;
        }
        return str;
    }
    // TIME - value as a string, Can be negative
    readTimeString(convertTtoMs) {
        const length = this.readInt8();
        if (length === 0) {
            return '00:00:00';
        }
        const sign = this.readInt8() ? -1 : 1; // 'isNegative' flag byte
        let d = 0;
        let H = 0;
        let M = 0;
        let S = 0;
        let ms = 0;
        if (length > 6) {
            d = this.readInt32();
            H = this.readInt8();
            M = this.readInt8();
            S = this.readInt8();
        }
        if (length > 10) {
            ms = this.readInt32();
        }
        if (convertTtoMs) {
            H += d * 24;
            M += H * 60;
            S += M * 60;
            ms += S * 1000;
            ms *= sign;
            return ms;
        }
        // Format follows mySQL TIME format ([-][h]hh:mm:ss[.u[u[u[u[u[u]]]]]])
        // For positive times below 24 hours, this makes it equal to ISO 8601 times
        return (sign === -1 ? '-' : '') + [
            leftPad(2, d * 24 + H),
            leftPad(2, M),
            leftPad(2, S)
        ].join(':') + (ms ? `.${ms}`.replace(/0+$/, '') : '');
    }
    readLengthCodedString(encoding) {
        const len = this.readLengthCodedNumber();
        // TODO: check manually first byte here to avoid polymorphic return type?
        if (len === null) {
            return null;
        }
        this.offset += len;
        // TODO: Use characterSetCode to get proper encoding
        // https://github.com/sidorares/node-mysql2/pull/374
        return StringParser.decode(this.buffer, encoding, this.offset - len, this.offset);
    }
    readLengthCodedBuffer() {
        const len = this.readLengthCodedNumber();
        if (len === null) {
            return null;
        }
        return this.readBuffer(len);
    }
    readNullTerminatedString(encoding) {
        const start = this.offset;
        let end = this.offset;
        while(this.buffer[end]){
            end = end + 1; // TODO: handle OOB check
        }
        this.offset = end + 1;
        return StringParser.decode(this.buffer, encoding, start, end);
    }
    // TODO reuse?
    readString(len, encoding) {
        if (typeof len === 'string' && typeof encoding === 'undefined') {
            encoding = len;
            len = undefined;
        }
        if (typeof len === 'undefined') {
            len = this.end - this.offset;
        }
        this.offset += len;
        return StringParser.decode(this.buffer, encoding, this.offset - len, this.offset);
    }
    parseInt(len, supportBigNumbers) {
        if (len === null) {
            return null;
        }
        if (len >= 14 && !supportBigNumbers) {
            const s = this.buffer.toString('ascii', this.offset, this.offset + len);
            this.offset += len;
            return Number(s);
        }
        let result = 0;
        const start = this.offset;
        const end = this.offset + len;
        let sign = 1;
        if (len === 0) {
            return 0; // TODO: assert? exception?
        }
        if (this.buffer[this.offset] === minus) {
            this.offset++;
            sign = -1;
        }
        // max precise int is 9007199254740992
        let str;
        const numDigits = end - this.offset;
        if (supportBigNumbers) {
            if (numDigits >= 15) {
                str = this.readString(end - this.offset, 'binary');
                result = parseInt(str, 10);
                if (result.toString() === str) {
                    return sign * result;
                }
                return sign === -1 ? `-${str}` : str;
            }
            if (numDigits > 16) {
                str = this.readString(end - this.offset);
                return sign === -1 ? `-${str}` : str;
            }
        }
        if (this.buffer[this.offset] === plus) {
            this.offset++; // just ignore
        }
        while(this.offset < end){
            result *= 10;
            result += this.buffer[this.offset] - 48;
            this.offset++;
        }
        const num = result * sign;
        if (!supportBigNumbers) {
            return num;
        }
        str = this.buffer.toString('ascii', start, end);
        if (num.toString() === str) {
            return num;
        }
        return str;
    }
    // note that if value of inputNumberAsString is bigger than MAX_SAFE_INTEGER
    // ( or smaller than MIN_SAFE_INTEGER ) the parseIntNoBigCheck result might be
    // different from what you would get from Number(inputNumberAsString)
    // String(parseIntNoBigCheck) <> String(Number(inputNumberAsString)) <> inputNumberAsString
    parseIntNoBigCheck(len) {
        if (len === null) {
            return null;
        }
        let result = 0;
        const end = this.offset + len;
        let sign = 1;
        if (len === 0) {
            return 0; // TODO: assert? exception?
        }
        if (this.buffer[this.offset] === minus) {
            this.offset++;
            sign = -1;
        }
        if (this.buffer[this.offset] === plus) {
            this.offset++; // just ignore
        }
        while(this.offset < end){
            result *= 10;
            result += this.buffer[this.offset] - 48;
            this.offset++;
        }
        return result * sign;
    }
    // copy-paste from https://github.com/mysqljs/mysql/blob/master/lib/protocol/Parser.js
    parseGeometryValue() {
        const buffer = this.readLengthCodedBuffer();
        let offset = 4;
        if (buffer === null || !buffer.length) {
            return null;
        }
        function parseGeometry() {
            let x, y, i, j, numPoints, line;
            let result = null;
            const byteOrder = buffer.readUInt8(offset);
            offset += 1;
            const wkbType = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
            offset += 4;
            switch(wkbType){
                case 1:
                    x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                    offset += 8;
                    y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                    offset += 8;
                    result = {
                        x: x,
                        y: y
                    };
                    break;
                case 2:
                    numPoints = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
                    offset += 4;
                    result = [];
                    for(i = numPoints; i > 0; i--){
                        x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                        offset += 8;
                        y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                        offset += 8;
                        result.push({
                            x: x,
                            y: y
                        });
                    }
                    break;
                case 3:
                    // eslint-disable-next-line no-case-declarations
                    const numRings = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
                    offset += 4;
                    result = [];
                    for(i = numRings; i > 0; i--){
                        numPoints = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
                        offset += 4;
                        line = [];
                        for(j = numPoints; j > 0; j--){
                            x = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                            offset += 8;
                            y = byteOrder ? buffer.readDoubleLE(offset) : buffer.readDoubleBE(offset);
                            offset += 8;
                            line.push({
                                x: x,
                                y: y
                            });
                        }
                        result.push(line);
                    }
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    // eslint-disable-next-line no-case-declarations
                    const num = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
                    offset += 4;
                    result = [];
                    for(i = num; i > 0; i--){
                        result.push(parseGeometry());
                    }
                    break;
            }
            return result;
        }
        return parseGeometry();
    }
    parseVector() {
        const bufLen = this.readLengthCodedNumber();
        const vectorEnd = this.offset + bufLen;
        const result = [];
        while(this.offset < vectorEnd && this.offset < this.end){
            result.push(this.readFloat());
        }
        return result;
    }
    parseDate(timezone) {
        const strLen = this.readLengthCodedNumber();
        if (strLen === null) {
            return null;
        }
        if (strLen !== 10) {
            // we expect only YYYY-MM-DD here.
            // if for some reason it's not the case return invalid date
            return new Date(NaN);
        }
        const y = this.parseInt(4);
        this.offset++; // -
        const m = this.parseInt(2);
        this.offset++; // -
        const d = this.parseInt(2);
        if (!timezone || timezone === 'local') {
            return new Date(y, m - 1, d);
        }
        if (timezone === 'Z') {
            return new Date(Date.UTC(y, m - 1, d));
        }
        return new Date(`${leftPad(4, y)}-${leftPad(2, m)}-${leftPad(2, d)}T00:00:00${timezone}`);
    }
    parseDateTime(timezone) {
        const str = this.readLengthCodedString('binary');
        if (str === null) {
            return null;
        }
        if (!timezone || timezone === 'local') {
            return new Date(str);
        }
        return new Date(`${str}${timezone}`);
    }
    parseFloat(len) {
        if (len === null) {
            return null;
        }
        let result = 0;
        const end = this.offset + len;
        let factor = 1;
        let pastDot = false;
        let charCode = 0;
        if (len === 0) {
            return 0; // TODO: assert? exception?
        }
        if (this.buffer[this.offset] === minus) {
            this.offset++;
            factor = -1;
        }
        if (this.buffer[this.offset] === plus) {
            this.offset++; // just ignore
        }
        while(this.offset < end){
            charCode = this.buffer[this.offset];
            if (charCode === dot) {
                pastDot = true;
                this.offset++;
            } else if (charCode === exponent || charCode === exponentCapital) {
                this.offset++;
                const exponentValue = this.parseInt(end - this.offset);
                return result / factor * Math.pow(10, exponentValue);
            } else {
                result *= 10;
                result += this.buffer[this.offset] - 48;
                this.offset++;
                if (pastDot) {
                    factor = factor * 10;
                }
            }
        }
        return result / factor;
    }
    parseLengthCodedIntNoBigCheck() {
        return this.parseIntNoBigCheck(this.readLengthCodedNumber());
    }
    parseLengthCodedInt(supportBigNumbers) {
        return this.parseInt(this.readLengthCodedNumber(), supportBigNumbers);
    }
    parseLengthCodedIntString() {
        return this.readLengthCodedString('binary');
    }
    parseLengthCodedFloat() {
        return this.parseFloat(this.readLengthCodedNumber());
    }
    peekByte() {
        return this.buffer[this.offset];
    }
    // OxFE is often used as "Alt" flag - not ok, not error.
    // For example, it's first byte of AuthSwitchRequest
    isAlt() {
        return this.peekByte() === 0xfe;
    }
    isError() {
        return this.peekByte() === 0xff;
    }
    asError(encoding) {
        this.reset();
        this.readInt8(); // fieldCount
        const errorCode = this.readInt16();
        let sqlState = '';
        if (this.buffer[this.offset] === 0x23) {
            this.skip(1);
            sqlState = this.readBuffer(5).toString();
        }
        const message = this.readString(undefined, encoding);
        const err = new Error(message);
        err.code = ErrorCodeToName[errorCode];
        err.errno = errorCode;
        err.sqlState = sqlState;
        err.sqlMessage = message;
        return err;
    }
    writeInt32(n) {
        this.buffer.writeUInt32LE(n, this.offset);
        this.offset += 4;
    }
    writeInt24(n) {
        this.writeInt8(n & 0xff);
        this.writeInt16(n >> 8);
    }
    writeInt16(n) {
        this.buffer.writeUInt16LE(n, this.offset);
        this.offset += 2;
    }
    writeInt8(n) {
        this.buffer.writeUInt8(n, this.offset);
        this.offset++;
    }
    writeDouble(n) {
        this.buffer.writeDoubleLE(n, this.offset);
        this.offset += 8;
    }
    writeBuffer(b) {
        b.copy(this.buffer, this.offset);
        this.offset += b.length;
    }
    writeNull() {
        this.buffer[this.offset] = 0xfb;
        this.offset++;
    }
    // TODO: refactor following three?
    writeNullTerminatedString(s, encoding) {
        const buf = StringParser.encode(s, encoding);
        this.buffer.length && buf.copy(this.buffer, this.offset);
        this.offset += buf.length;
        this.writeInt8(0);
    }
    writeString(s, encoding) {
        if (s === null) {
            this.writeInt8(0xfb);
            return;
        }
        if (s.length === 0) {
            return;
        }
        // const bytes = Buffer.byteLength(s, 'utf8');
        // this.buffer.write(s, this.offset, bytes, 'utf8');
        // this.offset += bytes;
        const buf = StringParser.encode(s, encoding);
        this.buffer.length && buf.copy(this.buffer, this.offset);
        this.offset += buf.length;
    }
    writeLengthCodedString(s, encoding) {
        const buf = StringParser.encode(s, encoding);
        this.writeLengthCodedNumber(buf.length);
        this.buffer.length && buf.copy(this.buffer, this.offset);
        this.offset += buf.length;
    }
    writeLengthCodedBuffer(b) {
        this.writeLengthCodedNumber(b.length);
        b.copy(this.buffer, this.offset);
        this.offset += b.length;
    }
    writeLengthCodedNumber(n) {
        if (n < 0xfb) {
            return this.writeInt8(n);
        }
        if (n < 0xffff) {
            this.writeInt8(0xfc);
            return this.writeInt16(n);
        }
        if (n < 0xffffff) {
            this.writeInt8(0xfd);
            return this.writeInt24(n);
        }
        if (n === null) {
            return this.writeInt8(0xfb);
        }
        // TODO: check that n is out of int precision
        this.writeInt8(0xfe);
        this.buffer.writeUInt32LE(n, this.offset);
        this.offset += 4;
        this.buffer.writeUInt32LE(n >> 32, this.offset);
        this.offset += 4;
        return this.offset;
    }
    writeDate(d, timezone) {
        this.buffer.writeUInt8(11, this.offset);
        if (!timezone || timezone === 'local') {
            this.buffer.writeUInt16LE(d.getFullYear(), this.offset + 1);
            this.buffer.writeUInt8(d.getMonth() + 1, this.offset + 3);
            this.buffer.writeUInt8(d.getDate(), this.offset + 4);
            this.buffer.writeUInt8(d.getHours(), this.offset + 5);
            this.buffer.writeUInt8(d.getMinutes(), this.offset + 6);
            this.buffer.writeUInt8(d.getSeconds(), this.offset + 7);
            this.buffer.writeUInt32LE(d.getMilliseconds() * 1000, this.offset + 8);
        } else {
            if (timezone !== 'Z') {
                const offset = (timezone[0] === '-' ? -1 : 1) * (parseInt(timezone.substring(1, 3), 10) * 60 + parseInt(timezone.substring(4), 10));
                if (offset !== 0) {
                    d = new Date(d.getTime() + 60000 * offset);
                }
            }
            this.buffer.writeUInt16LE(d.getUTCFullYear(), this.offset + 1);
            this.buffer.writeUInt8(d.getUTCMonth() + 1, this.offset + 3);
            this.buffer.writeUInt8(d.getUTCDate(), this.offset + 4);
            this.buffer.writeUInt8(d.getUTCHours(), this.offset + 5);
            this.buffer.writeUInt8(d.getUTCMinutes(), this.offset + 6);
            this.buffer.writeUInt8(d.getUTCSeconds(), this.offset + 7);
            this.buffer.writeUInt32LE(d.getUTCMilliseconds() * 1000, this.offset + 8);
        }
        this.offset += 12;
    }
    writeHeader(sequenceId) {
        const offset = this.offset;
        this.offset = 0;
        this.writeInt24(this.buffer.length - 4);
        this.writeInt8(sequenceId);
        this.offset = offset;
    }
    clone() {
        return new Packet(this.sequenceId, this.buffer, this.start, this.end);
    }
    type() {
        if (this.isEOF()) {
            return 'EOF';
        }
        if (this.isError()) {
            return 'Error';
        }
        if (this.buffer[this.offset] === 0) {
            return 'maybeOK'; // could be other packet types as well
        }
        return '';
    }
    static lengthCodedNumberLength(n) {
        if (n < 0xfb) {
            return 1;
        }
        if (n < 0xffff) {
            return 3;
        }
        if (n < 0xffffff) {
            return 5;
        }
        return 9;
    }
    static lengthCodedStringLength(str, encoding) {
        const buf = StringParser.encode(str, encoding);
        const slen = buf.length;
        return Packet.lengthCodedNumberLength(slen) + slen;
    }
    static MockBuffer() {
        const noop = function() {};
        const res = Buffer.alloc(0);
        for(const op in NativeBuffer.prototype){
            if (typeof res[op] === 'function') {
                res[op] = noop;
            }
        }
        return res;
    }
}
module.exports = Packet;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packet_parser.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const MAX_PACKET_LENGTH = 16777215;
function readPacketLength(b, off) {
    const b0 = b[off];
    const b1 = b[off + 1];
    const b2 = b[off + 2];
    if (b1 + b2 === 0) {
        return b0;
    }
    return b0 + (b1 << 8) + (b2 << 16);
}
class PacketParser {
    constructor(onPacket, packetHeaderLength){
        // 4 for normal packets, 7 for comprssed protocol packets
        if (typeof packetHeaderLength === 'undefined') {
            packetHeaderLength = 4;
        }
        // array of last payload chunks
        // only used when current payload is not complete
        this.buffer = [];
        // total length of chunks on buffer
        this.bufferLength = 0;
        this.packetHeaderLength = packetHeaderLength;
        // incomplete header state: number of header bytes received
        this.headerLen = 0;
        // expected payload length
        this.length = 0;
        this.largePacketParts = [];
        this.firstPacketSequenceId = 0;
        this.onPacket = onPacket;
        this.execute = PacketParser.prototype.executeStart;
        this._flushLargePacket = packetHeaderLength === 7 ? this._flushLargePacket7 : this._flushLargePacket4;
    }
    _flushLargePacket4() {
        const numPackets = this.largePacketParts.length;
        this.largePacketParts.unshift(Buffer.from([
            0,
            0,
            0,
            0
        ])); // insert header
        const body = Buffer.concat(this.largePacketParts);
        const packet = new Packet(this.firstPacketSequenceId, body, 0, body.length);
        this.largePacketParts.length = 0;
        packet.numPackets = numPackets;
        this.onPacket(packet);
    }
    _flushLargePacket7() {
        const numPackets = this.largePacketParts.length;
        this.largePacketParts.unshift(Buffer.from([
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ])); // insert header
        const body = Buffer.concat(this.largePacketParts);
        this.largePacketParts.length = 0;
        const packet = new Packet(this.firstPacketSequenceId, body, 0, body.length);
        packet.numPackets = numPackets;
        this.onPacket(packet);
    }
    executeStart(chunk) {
        let start = 0;
        const end = chunk.length;
        while(end - start >= 3){
            this.length = readPacketLength(chunk, start);
            if (end - start >= this.length + this.packetHeaderLength) {
                // at least one full packet
                const sequenceId = chunk[start + 3];
                if (this.length < MAX_PACKET_LENGTH && this.largePacketParts.length === 0) {
                    this.onPacket(new Packet(sequenceId, chunk, start, start + this.packetHeaderLength + this.length));
                } else {
                    // first large packet - remember it's id
                    if (this.largePacketParts.length === 0) {
                        this.firstPacketSequenceId = sequenceId;
                    }
                    this.largePacketParts.push(chunk.slice(start + this.packetHeaderLength, start + this.packetHeaderLength + this.length));
                    if (this.length < MAX_PACKET_LENGTH) {
                        this._flushLargePacket();
                    }
                }
                start += this.packetHeaderLength + this.length;
            } else {
                // payload is incomplete
                this.buffer = [
                    chunk.slice(start + 3, end)
                ];
                this.bufferLength = end - start - 3;
                this.execute = PacketParser.prototype.executePayload;
                return;
            }
        }
        if (end - start > 0) {
            // there is start of length header, but it's not full 3 bytes
            this.headerLen = end - start; // 1 or 2 bytes
            this.length = chunk[start];
            if (this.headerLen === 2) {
                this.length = chunk[start] + (chunk[start + 1] << 8);
                this.execute = PacketParser.prototype.executeHeader3;
            } else {
                this.execute = PacketParser.prototype.executeHeader2;
            }
        }
    }
    executePayload(chunk) {
        let start = 0;
        const end = chunk.length;
        const remainingPayload = this.length - this.bufferLength + this.packetHeaderLength - 3;
        if (end - start >= remainingPayload) {
            // last chunk for payload
            const payload = Buffer.allocUnsafe(this.length + this.packetHeaderLength);
            let offset = 3;
            for(let i = 0; i < this.buffer.length; ++i){
                this.buffer[i].copy(payload, offset);
                offset += this.buffer[i].length;
            }
            chunk.copy(payload, offset, start, start + remainingPayload);
            const sequenceId = payload[3];
            if (this.length < MAX_PACKET_LENGTH && this.largePacketParts.length === 0) {
                this.onPacket(new Packet(sequenceId, payload, 0, this.length + this.packetHeaderLength));
            } else {
                // first large packet - remember it's id
                if (this.largePacketParts.length === 0) {
                    this.firstPacketSequenceId = sequenceId;
                }
                this.largePacketParts.push(payload.slice(this.packetHeaderLength, this.packetHeaderLength + this.length));
                if (this.length < MAX_PACKET_LENGTH) {
                    this._flushLargePacket();
                }
            }
            this.buffer = [];
            this.bufferLength = 0;
            this.execute = PacketParser.prototype.executeStart;
            start += remainingPayload;
            if (end - start > 0) {
                return this.execute(chunk.slice(start, end));
            }
        } else {
            this.buffer.push(chunk);
            this.bufferLength += chunk.length;
        }
        return null;
    }
    executeHeader2(chunk) {
        this.length += chunk[0] << 8;
        if (chunk.length > 1) {
            this.length += chunk[1] << 16;
            this.execute = PacketParser.prototype.executePayload;
            return this.executePayload(chunk.slice(2));
        }
        this.execute = PacketParser.prototype.executeHeader3;
        return null;
    }
    executeHeader3(chunk) {
        this.length += chunk[0] << 16;
        this.execute = PacketParser.prototype.executePayload;
        return this.executePayload(chunk.slice(1));
    }
}
module.exports = PacketParser;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_next_factor.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// Copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class AuthNextFactor {
    constructor(opts){
        this.pluginName = opts.pluginName;
        this.pluginData = opts.pluginData;
    }
    toPacket(encoding) {
        const length = 6 + this.pluginName.length + this.pluginData.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(0x02);
        packet.writeNullTerminatedString(this.pluginName, encoding);
        packet.writeBuffer(this.pluginData);
        return packet;
    }
    static fromPacket(packet, encoding) {
        packet.readInt8(); // marker
        const name = packet.readNullTerminatedString(encoding);
        const data = packet.readBuffer();
        return new AuthNextFactor({
            pluginName: name,
            pluginData: data
        });
    }
}
module.exports = AuthNextFactor;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_request.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class AuthSwitchRequest {
    constructor(opts){
        this.pluginName = opts.pluginName;
        this.pluginData = opts.pluginData;
    }
    toPacket() {
        const length = 6 + this.pluginName.length + this.pluginData.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(0xfe);
        // TODO: use server encoding
        packet.writeNullTerminatedString(this.pluginName, 'cesu8');
        packet.writeBuffer(this.pluginData);
        return packet;
    }
    static fromPacket(packet) {
        packet.readInt8(); // marker
        // assert marker == 0xfe?
        // TODO: use server encoding
        const name = packet.readNullTerminatedString('cesu8');
        const data = packet.readBuffer();
        return new AuthSwitchRequest({
            pluginName: name,
            pluginData: data
        });
    }
}
module.exports = AuthSwitchRequest;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_request_more_data.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class AuthSwitchRequestMoreData {
    constructor(data){
        this.data = data;
    }
    toPacket() {
        const length = 5 + this.data.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(0x01);
        packet.writeBuffer(this.data);
        return packet;
    }
    static fromPacket(packet) {
        packet.readInt8(); // marker
        const data = packet.readBuffer();
        return new AuthSwitchRequestMoreData(data);
    }
    static verifyMarker(packet) {
        return packet.peekByte() === 0x01;
    }
}
module.exports = AuthSwitchRequestMoreData;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_response.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class AuthSwitchResponse {
    constructor(data){
        if (!Buffer.isBuffer(data)) {
            data = Buffer.from(data);
        }
        this.data = data;
    }
    toPacket() {
        const length = 4 + this.data.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeBuffer(this.data);
        return packet;
    }
    static fromPacket(packet) {
        const data = packet.readBuffer();
        return new AuthSwitchResponse(data);
    }
}
module.exports = AuthSwitchResponse;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binary_row.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Types = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const binaryReader = new Array(256);
class BinaryRow {
    constructor(columns){
        this.columns = columns || [];
    }
    static toPacket(columns, encoding) {
        // throw new Error('Not implemented');
        const sequenceId = 0; // TODO remove, this is calculated now in connecton
        let length = 0;
        columns.forEach((val)=>{
            if (val === null || typeof val === 'undefined') {
                ++length;
                return;
            }
            length += Packet.lengthCodedStringLength(val.toString(10), encoding);
        });
        length = length + 2;
        const buffer = Buffer.allocUnsafe(length + 4);
        const packet = new Packet(sequenceId, buffer, 0, length + 4);
        packet.offset = 4;
        packet.writeInt8(0);
        let bitmap = 0;
        let bitValue = 1;
        columns.forEach((parameter)=>{
            if (parameter.type === Types.NULL) {
                bitmap += bitValue;
            }
            bitValue *= 2;
            if (bitValue === 256) {
                packet.writeInt8(bitmap);
                bitmap = 0;
                bitValue = 1;
            }
        });
        if (bitValue !== 1) {
            packet.writeInt8(bitmap);
        }
        columns.forEach((val)=>{
            if (val === null) {
                packet.writeNull();
                return;
            }
            if (typeof val === 'undefined') {
                packet.writeInt8(0);
                return;
            }
            packet.writeLengthCodedString(val.toString(10), encoding);
        });
        return packet;
    }
    // TODO: complete list of types...
    static fromPacket(fields, packet) {
        const columns = new Array(fields.length);
        packet.readInt8(); // TODO check it's 0
        const nullBitmapLength = Math.floor((fields.length + 7 + 2) / 8);
        // TODO: read and interpret null bitmap
        packet.skip(nullBitmapLength);
        for(let i = 0; i < columns.length; ++i){
            columns[i] = binaryReader[fields[i].columnType].apply(packet);
        }
        return new BinaryRow(columns);
    }
}
// TODO: replace with constants.MYSQL_TYPE_*
binaryReader[Types.DECIMAL] = Packet.prototype.readLengthCodedString;
binaryReader[1] = Packet.prototype.readInt8; // tiny
binaryReader[2] = Packet.prototype.readInt16; // short
binaryReader[3] = Packet.prototype.readInt32; // long
binaryReader[4] = Packet.prototype.readFloat; // float
binaryReader[5] = Packet.prototype.readDouble; // double
binaryReader[6] = Packet.prototype.assertInvalid; // null, should be skipped vie null bitmap
binaryReader[7] = Packet.prototype.readTimestamp; // timestamp, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_TIMESTAMP
binaryReader[8] = Packet.prototype.readInt64; // long long
binaryReader[9] = Packet.prototype.readInt32; // int24
binaryReader[10] = Packet.prototype.readTimestamp; // date
binaryReader[11] = Packet.prototype.readTime; // time, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_TIME
binaryReader[12] = Packet.prototype.readDateTime; // datetime, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_DATETIME
binaryReader[13] = Packet.prototype.readInt16; // year
binaryReader[Types.VAR_STRING] = Packet.prototype.readLengthCodedString; // var string
module.exports = BinaryRow;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = {
    SLEEP: 0x00,
    QUIT: 0x01,
    INIT_DB: 0x02,
    QUERY: 0x03,
    FIELD_LIST: 0x04,
    CREATE_DB: 0x05,
    DROP_DB: 0x06,
    REFRESH: 0x07,
    SHUTDOWN: 0x08,
    STATISTICS: 0x09,
    PROCESS_INFO: 0x0a,
    CONNECT: 0x0b,
    PROCESS_KILL: 0x0c,
    DEBUG: 0x0d,
    PING: 0x0e,
    TIME: 0x0f,
    DELAYED_INSERT: 0x10,
    CHANGE_USER: 0x11,
    BINLOG_DUMP: 0x12,
    TABLE_DUMP: 0x13,
    CONNECT_OUT: 0x14,
    REGISTER_SLAVE: 0x15,
    STMT_PREPARE: 0x16,
    STMT_EXECUTE: 0x17,
    STMT_SEND_LONG_DATA: 0x18,
    STMT_CLOSE: 0x19,
    STMT_RESET: 0x1a,
    SET_OPTION: 0x1b,
    STMT_FETCH: 0x1c,
    DAEMON: 0x1d,
    BINLOG_DUMP_GTID: 0x1e,
    UNKNOWN: 0xff // bad!
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binlog_dump.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/com-binlog-dump.html#packet-COM_BINLOG_DUMP
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CommandCodes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
// TODO: add flag to constants
// 0x01 - BINLOG_DUMP_NON_BLOCK
// send EOF instead of blocking
class BinlogDump {
    constructor(opts){
        this.binlogPos = opts.binlogPos || 0;
        this.serverId = opts.serverId || 0;
        this.flags = opts.flags || 0;
        this.filename = opts.filename || '';
    }
    toPacket() {
        const length = 15 + Buffer.byteLength(this.filename, 'utf8'); // TODO: should be ascii?
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(CommandCodes.BINLOG_DUMP);
        packet.writeInt32(this.binlogPos);
        packet.writeInt16(this.flags);
        packet.writeInt32(this.serverId);
        packet.writeString(this.filename);
        return packet;
    }
}
module.exports = BinlogDump;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on September 21, 2021.
// New capability for multi-factor authentication based on mandatory session
// trackers, that are signaled with an extra single-byte prefix on new
// versions of the MySQL server.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
// Manually extracted from mysql-5.5.23/include/mysql_com.h
exports.LONG_PASSWORD = 0x00000001; /* new more secure passwords */ 
exports.FOUND_ROWS = 0x00000002; /* found instead of affected rows */ 
exports.LONG_FLAG = 0x00000004; /* get all column flags */ 
exports.CONNECT_WITH_DB = 0x00000008; /* one can specify db on connect */ 
exports.NO_SCHEMA = 0x00000010; /* don't allow database.table.column */ 
exports.COMPRESS = 0x00000020; /* can use compression protocol */ 
exports.ODBC = 0x00000040; /* odbc client */ 
exports.LOCAL_FILES = 0x00000080; /* can use LOAD DATA LOCAL */ 
exports.IGNORE_SPACE = 0x00000100; /* ignore spaces before '' */ 
exports.PROTOCOL_41 = 0x00000200; /* new 4.1 protocol */ 
exports.INTERACTIVE = 0x00000400; /* this is an interactive client */ 
exports.SSL = 0x00000800; /* switch to ssl after handshake */ 
exports.IGNORE_SIGPIPE = 0x00001000; /* IGNORE sigpipes */ 
exports.TRANSACTIONS = 0x00002000; /* client knows about transactions */ 
exports.RESERVED = 0x00004000; /* old flag for 4.1 protocol  */ 
exports.SECURE_CONNECTION = 0x00008000; /* new 4.1 authentication */ 
exports.MULTI_STATEMENTS = 0x00010000; /* enable/disable multi-stmt support */ 
exports.MULTI_RESULTS = 0x00020000; /* enable/disable multi-results */ 
exports.PS_MULTI_RESULTS = 0x00040000; /* multi-results in ps-protocol */ 
exports.PLUGIN_AUTH = 0x00080000; /* client supports plugin authentication */ 
exports.CONNECT_ATTRS = 0x00100000; /* permits connection attributes */ 
exports.PLUGIN_AUTH_LENENC_CLIENT_DATA = 0x00200000; /* Understands length-encoded integer for auth response data in Protocol::HandshakeResponse41. */ 
exports.CAN_HANDLE_EXPIRED_PASSWORDS = 0x00400000; /* Announces support for expired password extension. */ 
exports.SESSION_TRACK = 0x00800000; /* Can set SERVER_SESSION_STATE_CHANGED in the Status Flags and send session-state change data after a OK packet. */ 
exports.DEPRECATE_EOF = 0x01000000; /* Can send OK after a Text Resultset. */ 
exports.SSL_VERIFY_SERVER_CERT = 0x40000000;
exports.REMEMBER_OPTIONS = 0x80000000;
exports.MULTI_FACTOR_AUTHENTICATION = 0x10000000; /* multi-factor authentication */ 
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
/*
4.1 authentication: (http://bazaar.launchpad.net/~mysql/mysql-server/5.5/view/head:/sql/password.c)

  SERVER:  public_seed=create_random_string()
           send(public_seed)

  CLIENT:  recv(public_seed)
           hash_stage1=sha1("password")
           hash_stage2=sha1(hash_stage1)
           reply=xor(hash_stage1, sha1(public_seed,hash_stage2)

           // this three steps are done in scramble()

           send(reply)


  SERVER:  recv(reply)
           hash_stage1=xor(reply, sha1(public_seed,hash_stage2))
           candidate_hash2=sha1(hash_stage1)
           check(candidate_hash2==hash_stage2)

server stores sha1(sha1(password)) ( hash_stag2)
*/ const crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
function sha1(msg, msg1, msg2) {
    const hash = crypto.createHash('sha1');
    hash.update(msg);
    if (msg1) {
        hash.update(msg1);
    }
    if (msg2) {
        hash.update(msg2);
    }
    return hash.digest();
}
function xor(a, b) {
    const result = Buffer.allocUnsafe(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return result;
}
exports.xor = xor;
function token(password, scramble1, scramble2) {
    if (!password) {
        return Buffer.alloc(0);
    }
    const stage1 = sha1(password);
    return exports.calculateTokenFromPasswordSha(stage1, scramble1, scramble2);
}
exports.calculateTokenFromPasswordSha = function(passwordSha, scramble1, scramble2) {
    // we use AUTH 41 here, and we need only the bytes we just need.
    const authPluginData1 = scramble1.slice(0, 8);
    const authPluginData2 = scramble2.slice(0, 12);
    const stage2 = sha1(passwordSha);
    const stage3 = sha1(authPluginData1, authPluginData2, stage2);
    return xor(stage3, passwordSha);
};
exports.calculateToken = token;
exports.verifyToken = function(publicSeed1, publicSeed2, token, doubleSha) {
    const hashStage1 = xor(token, sha1(publicSeed1, publicSeed2, doubleSha));
    const candidateHash2 = sha1(hashStage1);
    return candidateHash2.compare(doubleSha) === 0;
};
exports.doubleSha1 = function(password) {
    return sha1(sha1(password));
};
function xorRotating(a, seed) {
    const result = Buffer.allocUnsafe(a.length);
    const seedLen = seed.length;
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ seed[i % seedLen];
    }
    return result;
}
exports.xorRotating = xorRotating;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/change_user.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const CommandCode = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const auth41 = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
// https://dev.mysql.com/doc/internals/en/com-change-user.html#packet-COM_CHANGE_USER
class ChangeUser {
    constructor(opts){
        this.flags = opts.flags;
        this.user = opts.user || '';
        this.database = opts.database || '';
        this.password = opts.password || '';
        this.passwordSha1 = opts.passwordSha1;
        this.authPluginData1 = opts.authPluginData1;
        this.authPluginData2 = opts.authPluginData2;
        this.connectAttributes = opts.connectAttrinutes || {};
        let authToken;
        if (this.passwordSha1) {
            authToken = auth41.calculateTokenFromPasswordSha(this.passwordSha1, this.authPluginData1, this.authPluginData2);
        } else {
            authToken = auth41.calculateToken(this.password, this.authPluginData1, this.authPluginData2);
        }
        this.authToken = authToken;
        this.charsetNumber = opts.charsetNumber;
    }
    // TODO
    // ChangeUser.fromPacket = function(packet)
    // };
    serializeToBuffer(buffer) {
        const isSet = (flag)=>this.flags & ClientConstants[flag];
        const packet = new Packet(0, buffer, 0, buffer.length);
        packet.offset = 4;
        const encoding = CharsetToEncoding[this.charsetNumber];
        packet.writeInt8(CommandCode.CHANGE_USER);
        packet.writeNullTerminatedString(this.user, encoding);
        if (isSet('SECURE_CONNECTION')) {
            packet.writeInt8(this.authToken.length);
            packet.writeBuffer(this.authToken);
        } else {
            packet.writeBuffer(this.authToken);
            packet.writeInt8(0);
        }
        packet.writeNullTerminatedString(this.database, encoding);
        packet.writeInt16(this.charsetNumber);
        if (isSet('PLUGIN_AUTH')) {
            // TODO: read this from parameters
            packet.writeNullTerminatedString('mysql_native_password', 'latin1');
        }
        if (isSet('CONNECT_ATTRS')) {
            const connectAttributes = this.connectAttributes;
            const attrNames = Object.keys(connectAttributes);
            let keysLength = 0;
            for(let k = 0; k < attrNames.length; ++k){
                keysLength += Packet.lengthCodedStringLength(attrNames[k], encoding);
                keysLength += Packet.lengthCodedStringLength(connectAttributes[attrNames[k]], encoding);
            }
            packet.writeLengthCodedNumber(keysLength);
            for(let k = 0; k < attrNames.length; ++k){
                packet.writeLengthCodedString(attrNames[k], encoding);
                packet.writeLengthCodedString(connectAttributes[attrNames[k]], encoding);
            }
        }
        return packet;
    }
    toPacket() {
        if (typeof this.user !== 'string') {
            throw new Error('"user" connection config property must be a string');
        }
        if (typeof this.database !== 'string') {
            throw new Error('"database" connection config property must be a string');
        }
        // dry run: calculate resulting packet length
        const p = this.serializeToBuffer(Packet.MockBuffer());
        return this.serializeToBuffer(Buffer.allocUnsafe(p.offset));
    }
}
module.exports = ChangeUser;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/close_statement.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CommandCodes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
class CloseStatement {
    constructor(id){
        this.id = id;
    }
    // note: no response sent back
    toPacket() {
        const packet = new Packet(0, Buffer.allocUnsafe(9), 0, 9);
        packet.offset = 4;
        packet.writeInt8(CommandCodes.STMT_CLOSE);
        packet.writeInt32(this.id);
        return packet;
    }
}
module.exports = CloseStatement;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/field_flags.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// Manually extracted from mysql-5.5.23/include/mysql_com.h
exports.NOT_NULL = 1; /* Field can't be NULL */ 
exports.PRI_KEY = 2; /* Field is part of a primary key */ 
exports.UNIQUE_KEY = 4; /* Field is part of a unique key */ 
exports.MULTIPLE_KEY = 8; /* Field is part of a key */ 
exports.BLOB = 16; /* Field is a blob */ 
exports.UNSIGNED = 32; /* Field is unsigned */ 
exports.ZEROFILL = 64; /* Field is zerofill */ 
exports.BINARY = 128; /* Field is binary   */ 
/* The following are only sent to new clients */ exports.ENUM = 256; /* field is an enum */ 
exports.AUTO_INCREMENT = 512; /* field is a autoincrement field */ 
exports.TIMESTAMP = 1024; /* Field is a timestamp */ 
exports.SET = 2048; /* field is a set */ 
exports.NO_DEFAULT_VALUE = 4096; /* Field doesn't have default value */ 
exports.ON_UPDATE_NOW = 8192; /* Field is set to NOW on UPDATE */ 
exports.NUM = 32768; /* Field is num (for clients) */ 
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/column_definition.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const StringParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/string.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
const fields = [
    'catalog',
    'schema',
    'table',
    'orgTable',
    'name',
    'orgName'
];
// creating JS string is relatively expensive (compared to
// reading few bytes from buffer) because all string properties
// except for name are unlikely to be used we postpone
// string conversion until property access
//
// TODO: watch for integration benchmarks (one with real network buffer)
// there could be bad side effect as keeping reference to a buffer makes it
// sit in the memory longer (usually until final .query() callback)
// Latest v8 perform much better in regard to bufferer -> string conversion,
// at some point of time this optimisation might become unnecessary
// see https://github.com/sidorares/node-mysql2/pull/137
//
class ColumnDefinition {
    constructor(packet, clientEncoding){
        this._buf = packet.buffer;
        this._clientEncoding = clientEncoding;
        this._catalogLength = packet.readLengthCodedNumber();
        this._catalogStart = packet.offset;
        packet.offset += this._catalogLength;
        this._schemaLength = packet.readLengthCodedNumber();
        this._schemaStart = packet.offset;
        packet.offset += this._schemaLength;
        this._tableLength = packet.readLengthCodedNumber();
        this._tableStart = packet.offset;
        packet.offset += this._tableLength;
        this._orgTableLength = packet.readLengthCodedNumber();
        this._orgTableStart = packet.offset;
        packet.offset += this._orgTableLength;
        // name is always used, don't make it lazy
        const _nameLength = packet.readLengthCodedNumber();
        const _nameStart = packet.offset;
        packet.offset += _nameLength;
        this._orgNameLength = packet.readLengthCodedNumber();
        this._orgNameStart = packet.offset;
        packet.offset += this._orgNameLength;
        packet.skip(1); //  length of the following fields (always 0x0c)
        this.characterSet = packet.readInt16();
        this.encoding = CharsetToEncoding[this.characterSet];
        this.name = StringParser.decode(this._buf, this.encoding === 'binary' ? this._clientEncoding : this.encoding, _nameStart, _nameStart + _nameLength);
        this.columnLength = packet.readInt32();
        this.columnType = packet.readInt8();
        this.type = this.columnType;
        this.flags = packet.readInt16();
        this.decimals = packet.readInt8();
    }
    inspect() {
        return {
            catalog: this.catalog,
            schema: this.schema,
            name: this.name,
            orgName: this.orgName,
            table: this.table,
            orgTable: this.orgTable,
            characterSet: this.characterSet,
            encoding: this.encoding,
            columnLength: this.columnLength,
            type: this.columnType,
            flags: this.flags,
            decimals: this.decimals
        };
    }
    [Symbol.for('nodejs.util.inspect.custom')](depth, inspectOptions, inspect) {
        const Types = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)");
        const typeNames = [];
        for(const t in Types){
            typeNames[Types[t]] = t;
        }
        const fiedFlags = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/field_flags.js [app-route] (ecmascript)");
        const flagNames = [];
        // TODO: respect inspectOptions.showHidden
        //const inspectFlags = inspectOptions.showHidden ? this.flags : this.flags & ~fiedFlags.PRI_KEY;
        const inspectFlags = this.flags;
        for(const f in fiedFlags){
            if (inspectFlags & fiedFlags[f]) {
                if (f === 'PRI_KEY') {
                    flagNames.push('PRIMARY KEY');
                } else if (f === 'NOT_NULL') {
                    flagNames.push('NOT NULL');
                } else if (f === 'BINARY') {
                // ignore flag for now
                } else if (f === 'MULTIPLE_KEY') {
                // not sure if that should be part of inspection.
                // in the schema usually this is part of index definition
                // example: UNIQUE KEY `my_uniq_id` (`id_box_elements`,`id_router`)
                // note that only first column has MULTIPLE_KEY flag set in this case
                // so there is no good way of knowing that this is part of index just
                // by looking at indifidual field flags
                } else if (f === 'NO_DEFAULT_VALUE') {
                // almost the same as NOT_NULL?
                } else if (f === 'BLOB') {
                // included in the type
                } else if (f === 'UNSIGNED') {
                // this should be first after type
                } else if (f === 'TIMESTAMP') {
                // timestamp flag is redundant for inspection - already included in type
                } else if (f === 'ON_UPDATE_NOW') {
                    flagNames.push('ON UPDATE CURRENT_TIMESTAMP');
                } else {
                    flagNames.push(f);
                }
            }
        }
        if (depth > 1) {
            return inspect({
                ...this.inspect(),
                typeName: typeNames[this.columnType],
                flags: flagNames
            });
        }
        const isUnsigned = this.flags & fiedFlags.UNSIGNED;
        let typeName = typeNames[this.columnType];
        if (typeName === 'BLOB') {
            // TODO: check for non-utf8mb4 encoding
            if (this.columnLength === 4294967295) {
                typeName = 'LONGTEXT';
            } else if (this.columnLength === 67108860) {
                typeName = 'MEDIUMTEXT';
            } else if (this.columnLength === 262140) {
                typeName = 'TEXT';
            } else if (this.columnLength === 1020) {
                typeName = 'TINYTEXT';
            } else {
                typeName = `BLOB(${this.columnLength})`;
            }
        } else if (typeName === 'VAR_STRING') {
            // TODO: check for non-utf8mb4 encoding
            typeName = `VARCHAR(${Math.ceil(this.columnLength / 4)})`;
        } else if (typeName === 'TINY') {
            if (this.columnLength === 3 && isUnsigned || this.columnLength === 4 && !isUnsigned) {
                typeName = 'TINYINT';
            } else {
                typeName = `TINYINT(${this.columnLength})`;
            }
        } else if (typeName === 'LONGLONG') {
            if (this.columnLength === 20) {
                typeName = 'BIGINT';
            } else {
                typeName = `BIGINT(${this.columnLength})`;
            }
        } else if (typeName === 'SHORT') {
            if (isUnsigned && this.columnLength === 5) {
                typeName = 'SMALLINT';
            } else if (!isUnsigned && this.columnLength === 6) {
                typeName = 'SMALLINT';
            } else {
                typeName = `SMALLINT(${this.columnLength})`;
            }
        } else if (typeName === 'LONG') {
            if (isUnsigned && this.columnLength === 10) {
                typeName = 'INT';
            } else if (!isUnsigned && this.columnLength === 11) {
                typeName = 'INT';
            } else {
                typeName = `INT(${this.columnLength})`;
            }
        } else if (typeName === 'INT24') {
            if (isUnsigned && this.columnLength === 8) {
                typeName = 'MEDIUMINT';
            } else if (!isUnsigned && this.columnLength === 9) {
                typeName = 'MEDIUMINT';
            } else {
                typeName = `MEDIUMINT(${this.columnLength})`;
            }
        } else if (typeName === 'DOUBLE') {
            // DOUBLE without modifiers is reported as DOUBLE(22, 31)
            if (this.columnLength === 22 && this.decimals === 31) {
                typeName = 'DOUBLE';
            } else {
                typeName = `DOUBLE(${this.columnLength},${this.decimals})`;
            }
        } else if (typeName === 'FLOAT') {
            // FLOAT without modifiers is reported as FLOAT(12, 31)
            if (this.columnLength === 12 && this.decimals === 31) {
                typeName = 'FLOAT';
            } else {
                typeName = `FLOAT(${this.columnLength},${this.decimals})`;
            }
        } else if (typeName === 'NEWDECIMAL') {
            if (this.columnLength === 11 && this.decimals === 0) {
                typeName = 'DECIMAL';
            } else if (this.decimals === 0) {
                // not sure why, but DECIMAL(13) is reported as DECIMAL(14, 0)
                // and DECIMAL(13, 9) is reported as NEWDECIMAL(15, 9)
                if (isUnsigned) {
                    typeName = `DECIMAL(${this.columnLength})`;
                } else {
                    typeName = `DECIMAL(${this.columnLength - 1})`;
                }
            } else {
                typeName = `DECIMAL(${this.columnLength - 2},${this.decimals})`;
            }
        } else {
            typeName = `${typeNames[this.columnType]}(${this.columnLength})`;
        }
        if (isUnsigned) {
            typeName += ' UNSIGNED';
        }
        // TODO respect colors option
        return `\`${this.name}\` ${[
            typeName,
            ...flagNames
        ].join(' ')}`;
    }
    static toPacket(column, sequenceId) {
        let length = 17; // = 4 padding + 1 + 12 for the rest
        fields.forEach((field)=>{
            length += Packet.lengthCodedStringLength(column[field], CharsetToEncoding[column.characterSet]);
        });
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(sequenceId, buffer, 0, length);
        function writeField(name) {
            packet.writeLengthCodedString(column[name], CharsetToEncoding[column.characterSet]);
        }
        packet.offset = 4;
        fields.forEach(writeField);
        packet.writeInt8(0x0c);
        packet.writeInt16(column.characterSet);
        packet.writeInt32(column.columnLength);
        packet.writeInt8(column.columnType);
        packet.writeInt16(column.flags);
        packet.writeInt8(column.decimals);
        packet.writeInt16(0); // filler
        return packet;
    }
    // node-mysql compatibility: alias "db" to "schema"
    get db() {
        return this.schema;
    }
}
const addString = function(name) {
    Object.defineProperty(ColumnDefinition.prototype, name, {
        get: function() {
            const start = this[`_${name}Start`];
            const end = start + this[`_${name}Length`];
            const val = StringParser.decode(this._buf, this.encoding === 'binary' ? this._clientEncoding : this.encoding, start, end);
            Object.defineProperty(this, name, {
                value: val,
                writable: false,
                configurable: false,
                enumerable: false
            });
            return val;
        }
    });
};
addString('catalog');
addString('schema');
addString('table');
addString('orgTable');
addString('orgName');
module.exports = ColumnDefinition;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/cursor.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = {
    NO_CURSOR: 0,
    READ_ONLY: 1,
    FOR_UPDATE: 2,
    SCROLLABLE: 3
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/execute.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const CursorType = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/cursor.js [app-route] (ecmascript)");
const CommandCodes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const Types = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
function isJSON(value) {
    return Array.isArray(value) || value.constructor === Object || typeof value.toJSON === 'function' && !Buffer.isBuffer(value);
}
/**
 * Converts a value to an object describing type, String/Buffer representation and length
 * @param {*} value
 */ function toParameter(value, encoding, timezone) {
    let type = Types.VAR_STRING;
    let length;
    let writer = function(value) {
        // eslint-disable-next-line no-invalid-this
        return Packet.prototype.writeLengthCodedString.call(this, value, encoding);
    };
    if (value !== null) {
        switch(typeof value){
            case 'undefined':
                throw new TypeError('Bind parameters must not contain undefined');
            case 'number':
                type = Types.DOUBLE;
                length = 8;
                writer = Packet.prototype.writeDouble;
                break;
            case 'boolean':
                value = value | 0;
                type = Types.TINY;
                length = 1;
                writer = Packet.prototype.writeInt8;
                break;
            case 'object':
                if (Object.prototype.toString.call(value) === '[object Date]') {
                    type = Types.DATETIME;
                    length = 12;
                    writer = function(value) {
                        // eslint-disable-next-line no-invalid-this
                        return Packet.prototype.writeDate.call(this, value, timezone);
                    };
                } else if (isJSON(value)) {
                    value = JSON.stringify(value);
                    type = Types.JSON;
                } else if (Buffer.isBuffer(value)) {
                    length = Packet.lengthCodedNumberLength(value.length) + value.length;
                    writer = Packet.prototype.writeLengthCodedBuffer;
                }
                break;
            default:
                value = value.toString();
        }
    } else {
        value = '';
        type = Types.NULL;
    }
    if (!length) {
        length = Packet.lengthCodedStringLength(value, encoding);
    }
    return {
        value,
        type,
        length,
        writer
    };
}
class Execute {
    constructor(id, parameters, charsetNumber, timezone){
        this.id = id;
        this.parameters = parameters;
        this.encoding = CharsetToEncoding[charsetNumber];
        this.timezone = timezone;
    }
    static fromPacket(packet, encoding) {
        const stmtId = packet.readInt32();
        const flags = packet.readInt8();
        const iterationCount = packet.readInt32();
        let i = packet.offset;
        while(i < packet.end - 1){
            if ((packet.buffer[i + 1] === Types.VAR_STRING || packet.buffer[i + 1] === Types.NULL || packet.buffer[i + 1] === Types.DOUBLE || packet.buffer[i + 1] === Types.TINY || packet.buffer[i + 1] === Types.DATETIME || packet.buffer[i + 1] === Types.JSON) && packet.buffer[i] === 1 && packet.buffer[i + 2] === 0) {
                break;
            } else {
                packet.readInt8();
            }
            i++;
        }
        const types = [];
        for(let i = packet.offset + 1; i < packet.end - 1; i++){
            if ((packet.buffer[i] === Types.VAR_STRING || packet.buffer[i] === Types.NULL || packet.buffer[i] === Types.DOUBLE || packet.buffer[i] === Types.TINY || packet.buffer[i] === Types.DATETIME || packet.buffer[i] === Types.JSON) && packet.buffer[i + 1] === 0) {
                types.push(packet.buffer[i]);
                packet.skip(2);
            }
        }
        packet.skip(1);
        const values = [];
        for(let i = 0; i < types.length; i++){
            if (types[i] === Types.VAR_STRING) {
                values.push(packet.readLengthCodedString(encoding));
            } else if (types[i] === Types.DOUBLE) {
                values.push(packet.readDouble());
            } else if (types[i] === Types.TINY) {
                values.push(packet.readInt8());
            } else if (types[i] === Types.DATETIME) {
                values.push(packet.readDateTime());
            } else if (types[i] === Types.JSON) {
                values.push(JSON.parse(packet.readLengthCodedString(encoding)));
            }
            if (types[i] === Types.NULL) {
                values.push(null);
            }
        }
        return {
            stmtId,
            flags,
            iterationCount,
            values
        };
    }
    toPacket() {
        // TODO: don't try to calculate packet length in advance, allocate some big buffer in advance (header + 256 bytes?)
        // and copy + reallocate if not enough
        // 0 + 4 - length, seqId
        // 4 + 1 - COM_EXECUTE
        // 5 + 4 - stmtId
        // 9 + 1 - flags
        // 10 + 4 - iteration-count (always 1)
        let length = 14;
        let parameters;
        if (this.parameters && this.parameters.length > 0) {
            length += Math.floor((this.parameters.length + 7) / 8);
            length += 1; // new-params-bound-flag
            length += 2 * this.parameters.length; // type byte for each parameter if new-params-bound-flag is set
            parameters = this.parameters.map((value)=>toParameter(value, this.encoding, this.timezone));
            length += parameters.reduce((accumulator, parameter)=>accumulator + parameter.length, 0);
        }
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(CommandCodes.STMT_EXECUTE);
        packet.writeInt32(this.id);
        packet.writeInt8(CursorType.NO_CURSOR); // flags
        packet.writeInt32(1); // iteration-count, always 1
        if (parameters) {
            let bitmap = 0;
            let bitValue = 1;
            parameters.forEach((parameter)=>{
                if (parameter.type === Types.NULL) {
                    bitmap += bitValue;
                }
                bitValue *= 2;
                if (bitValue === 256) {
                    packet.writeInt8(bitmap);
                    bitmap = 0;
                    bitValue = 1;
                }
            });
            if (bitValue !== 1) {
                packet.writeInt8(bitmap);
            }
            // TODO: explain meaning of the flag
            // afaik, if set n*2 bytes with type of parameter are sent before parameters
            // if not, previous execution types are used (TODO prooflink)
            packet.writeInt8(1); // new-params-bound-flag
            // Write parameter types
            parameters.forEach((parameter)=>{
                packet.writeInt8(parameter.type); // field type
                packet.writeInt8(0); // parameter flag
            });
            // Write parameter values
            parameters.forEach((parameter)=>{
                if (parameter.type !== Types.NULL) {
                    parameter.writer.call(packet, parameter.value);
                }
            });
        }
        return packet;
    }
}
module.exports = Execute;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/handshake.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
// https://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::Handshake
class Handshake {
    constructor(args){
        this.protocolVersion = args.protocolVersion;
        this.serverVersion = args.serverVersion;
        this.capabilityFlags = args.capabilityFlags;
        this.connectionId = args.connectionId;
        this.authPluginData1 = args.authPluginData1;
        this.authPluginData2 = args.authPluginData2;
        this.characterSet = args.characterSet;
        this.statusFlags = args.statusFlags;
        this.autPluginName = args.autPluginName;
    }
    setScrambleData(cb) {
        __turbopack_require__("[externals]/ [external] (crypto, cjs)").randomBytes(20, (err, data)=>{
            if (err) {
                cb(err);
                return;
            }
            this.authPluginData1 = data.slice(0, 8);
            this.authPluginData2 = data.slice(8, 20);
            cb();
        });
    }
    toPacket(sequenceId) {
        const length = 68 + Buffer.byteLength(this.serverVersion, 'utf8');
        const buffer = Buffer.alloc(length + 4, 0); // zero fill, 10 bytes filler later needs to contain zeros
        const packet = new Packet(sequenceId, buffer, 0, length + 4);
        packet.offset = 4;
        packet.writeInt8(this.protocolVersion);
        packet.writeString(this.serverVersion, 'cesu8');
        packet.writeInt8(0);
        packet.writeInt32(this.connectionId);
        packet.writeBuffer(this.authPluginData1);
        packet.writeInt8(0);
        const capabilityFlagsBuffer = Buffer.allocUnsafe(4);
        capabilityFlagsBuffer.writeUInt32LE(this.capabilityFlags, 0);
        packet.writeBuffer(capabilityFlagsBuffer.slice(0, 2));
        packet.writeInt8(this.characterSet);
        packet.writeInt16(this.statusFlags);
        packet.writeBuffer(capabilityFlagsBuffer.slice(2, 4));
        packet.writeInt8(21); // authPluginDataLength
        packet.skip(10);
        packet.writeBuffer(this.authPluginData2);
        packet.writeInt8(0);
        packet.writeString('mysql_native_password', 'latin1');
        packet.writeInt8(0);
        return packet;
    }
    static fromPacket(packet) {
        const args = {};
        args.protocolVersion = packet.readInt8();
        args.serverVersion = packet.readNullTerminatedString('cesu8');
        args.connectionId = packet.readInt32();
        args.authPluginData1 = packet.readBuffer(8);
        packet.skip(1);
        const capabilityFlagsBuffer = Buffer.allocUnsafe(4);
        capabilityFlagsBuffer[0] = packet.readInt8();
        capabilityFlagsBuffer[1] = packet.readInt8();
        if (packet.haveMoreData()) {
            args.characterSet = packet.readInt8();
            args.statusFlags = packet.readInt16();
            // upper 2 bytes
            capabilityFlagsBuffer[2] = packet.readInt8();
            capabilityFlagsBuffer[3] = packet.readInt8();
            args.capabilityFlags = capabilityFlagsBuffer.readUInt32LE(0);
            if (args.capabilityFlags & ClientConstants.PLUGIN_AUTH) {
                args.authPluginDataLength = packet.readInt8();
            } else {
                args.authPluginDataLength = 0;
                packet.skip(1);
            }
            packet.skip(10);
        } else {
            args.capabilityFlags = capabilityFlagsBuffer.readUInt16LE(0);
        }
        const isSecureConnection = args.capabilityFlags & ClientConstants.SECURE_CONNECTION;
        if (isSecureConnection) {
            const authPluginDataLength = args.authPluginDataLength;
            if (authPluginDataLength === 0) {
                // for Secure Password Authentication
                args.authPluginDataLength = 20;
                args.authPluginData2 = packet.readBuffer(12);
                packet.skip(1);
            } else {
                // length > 0
                // for Custom Auth Plugin (PLUGIN_AUTH)
                const len = Math.max(13, authPluginDataLength - 8);
                args.authPluginData2 = packet.readBuffer(len);
            }
        }
        if (args.capabilityFlags & ClientConstants.PLUGIN_AUTH) {
            args.autPluginName = packet.readNullTerminatedString('ascii');
        }
        return new Handshake(args);
    }
}
module.exports = Handshake;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/handshake_response.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const auth41 = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
class HandshakeResponse {
    constructor(handshake){
        this.user = handshake.user || '';
        this.database = handshake.database || '';
        this.password = handshake.password || '';
        this.passwordSha1 = handshake.passwordSha1;
        this.authPluginData1 = handshake.authPluginData1;
        this.authPluginData2 = handshake.authPluginData2;
        this.compress = handshake.compress;
        this.clientFlags = handshake.flags;
        // TODO: pre-4.1 auth support
        let authToken;
        if (this.passwordSha1) {
            authToken = auth41.calculateTokenFromPasswordSha(this.passwordSha1, this.authPluginData1, this.authPluginData2);
        } else {
            authToken = auth41.calculateToken(this.password, this.authPluginData1, this.authPluginData2);
        }
        this.authToken = authToken;
        this.charsetNumber = handshake.charsetNumber;
        this.encoding = CharsetToEncoding[handshake.charsetNumber];
        this.connectAttributes = handshake.connectAttributes;
    }
    serializeResponse(buffer) {
        const isSet = (flag)=>this.clientFlags & ClientConstants[flag];
        const packet = new Packet(0, buffer, 0, buffer.length);
        packet.offset = 4;
        packet.writeInt32(this.clientFlags);
        packet.writeInt32(0); // max packet size. todo: move to config
        packet.writeInt8(this.charsetNumber);
        packet.skip(23);
        const encoding = this.encoding;
        packet.writeNullTerminatedString(this.user, encoding);
        let k;
        if (isSet('PLUGIN_AUTH_LENENC_CLIENT_DATA')) {
            packet.writeLengthCodedNumber(this.authToken.length);
            packet.writeBuffer(this.authToken);
        } else if (isSet('SECURE_CONNECTION')) {
            packet.writeInt8(this.authToken.length);
            packet.writeBuffer(this.authToken);
        } else {
            packet.writeBuffer(this.authToken);
            packet.writeInt8(0);
        }
        if (isSet('CONNECT_WITH_DB')) {
            packet.writeNullTerminatedString(this.database, encoding);
        }
        if (isSet('PLUGIN_AUTH')) {
            // TODO: pass from config
            packet.writeNullTerminatedString('mysql_native_password', 'latin1');
        }
        if (isSet('CONNECT_ATTRS')) {
            const connectAttributes = this.connectAttributes || {};
            const attrNames = Object.keys(connectAttributes);
            let keysLength = 0;
            for(k = 0; k < attrNames.length; ++k){
                keysLength += Packet.lengthCodedStringLength(attrNames[k], encoding);
                keysLength += Packet.lengthCodedStringLength(connectAttributes[attrNames[k]], encoding);
            }
            packet.writeLengthCodedNumber(keysLength);
            for(k = 0; k < attrNames.length; ++k){
                packet.writeLengthCodedString(attrNames[k], encoding);
                packet.writeLengthCodedString(connectAttributes[attrNames[k]], encoding);
            }
        }
        return packet;
    }
    toPacket() {
        if (typeof this.user !== 'string') {
            throw new Error('"user" connection config property must be a string');
        }
        if (typeof this.database !== 'string') {
            throw new Error('"database" connection config property must be a string');
        }
        // dry run: calculate resulting packet length
        const p = this.serializeResponse(Packet.MockBuffer());
        return this.serializeResponse(Buffer.alloc(p.offset));
    }
    static fromPacket(packet) {
        const args = {};
        args.clientFlags = packet.readInt32();
        function isSet(flag) {
            return args.clientFlags & ClientConstants[flag];
        }
        args.maxPacketSize = packet.readInt32();
        args.charsetNumber = packet.readInt8();
        const encoding = CharsetToEncoding[args.charsetNumber];
        args.encoding = encoding;
        packet.skip(23);
        args.user = packet.readNullTerminatedString(encoding);
        let authTokenLength;
        if (isSet('PLUGIN_AUTH_LENENC_CLIENT_DATA')) {
            authTokenLength = packet.readLengthCodedNumber(encoding);
            args.authToken = packet.readBuffer(authTokenLength);
        } else if (isSet('SECURE_CONNECTION')) {
            authTokenLength = packet.readInt8();
            args.authToken = packet.readBuffer(authTokenLength);
        } else {
            args.authToken = packet.readNullTerminatedString(encoding);
        }
        if (isSet('CONNECT_WITH_DB')) {
            args.database = packet.readNullTerminatedString(encoding);
        }
        if (isSet('PLUGIN_AUTH')) {
            args.authPluginName = packet.readNullTerminatedString(encoding);
        }
        if (isSet('CONNECT_ATTRS')) {
            const keysLength = packet.readLengthCodedNumber(encoding);
            const keysEnd = packet.offset + keysLength;
            const attrs = {};
            while(packet.offset < keysEnd){
                attrs[packet.readLengthCodedString(encoding)] = packet.readLengthCodedString(encoding);
            }
            args.connectAttributes = attrs;
        }
        return args;
    }
}
module.exports = HandshakeResponse;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/prepare_statement.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CommandCodes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const StringParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/string.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
class PrepareStatement {
    constructor(sql, charsetNumber){
        this.query = sql;
        this.charsetNumber = charsetNumber;
        this.encoding = CharsetToEncoding[charsetNumber];
    }
    toPacket() {
        const buf = StringParser.encode(this.query, this.encoding);
        const length = 5 + buf.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(CommandCodes.STMT_PREPARE);
        packet.writeBuffer(buf);
        return packet;
    }
}
module.exports = PrepareStatement;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/prepared_statement_header.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
class PreparedStatementHeader {
    constructor(packet){
        packet.skip(1); // should be 0
        this.id = packet.readInt32();
        this.fieldCount = packet.readInt16();
        this.parameterCount = packet.readInt16();
        packet.skip(1); // should be 0
        this.warningCount = packet.readInt16();
    }
}
// TODO: toPacket
module.exports = PreparedStatementHeader;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/query.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CommandCode = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const StringParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/string.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
class Query {
    constructor(sql, charsetNumber){
        this.query = sql;
        this.charsetNumber = charsetNumber;
        this.encoding = CharsetToEncoding[charsetNumber];
    }
    toPacket() {
        const buf = StringParser.encode(this.query, this.encoding);
        const length = 5 + buf.length;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(CommandCode.QUERY);
        packet.writeBuffer(buf);
        return packet;
    }
}
module.exports = Query;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/register_slave.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/com-register-slave.html
// note that documentation is incorrect, for example command code is actually 0x15 but documented as 0x14
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const CommandCodes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
class RegisterSlave {
    constructor(opts){
        this.serverId = opts.serverId || 0;
        this.slaveHostname = opts.slaveHostname || '';
        this.slaveUser = opts.slaveUser || '';
        this.slavePassword = opts.slavePassword || '';
        this.slavePort = opts.slavePort || 0;
        this.replicationRank = opts.replicationRank || 0;
        this.masterId = opts.masterId || 0;
    }
    toPacket() {
        const length = 15 + // TODO: should be ascii?
        Buffer.byteLength(this.slaveHostname, 'utf8') + Buffer.byteLength(this.slaveUser, 'utf8') + Buffer.byteLength(this.slavePassword, 'utf8') + 3 + 4;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(CommandCodes.REGISTER_SLAVE);
        packet.writeInt32(this.serverId);
        packet.writeInt8(Buffer.byteLength(this.slaveHostname, 'utf8'));
        packet.writeString(this.slaveHostname);
        packet.writeInt8(Buffer.byteLength(this.slaveUser, 'utf8'));
        packet.writeString(this.slaveUser);
        packet.writeInt8(Buffer.byteLength(this.slavePassword, 'utf8'));
        packet.writeString(this.slavePassword);
        packet.writeInt16(this.slavePort);
        packet.writeInt32(this.replicationRank);
        packet.writeInt32(this.masterId);
        return packet;
    }
}
module.exports = RegisterSlave;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/server_status.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// Manually extracted from mysql-5.5.23/include/mysql_com.h
/**
  Is raised when a multi-statement transaction
  has been started, either explicitly, by means
  of BEGIN or COMMIT AND CHAIN, or
  implicitly, by the first transactional
  statement, when autocommit=off.
*/ exports.SERVER_STATUS_IN_TRANS = 1;
exports.SERVER_STATUS_AUTOCOMMIT = 2; /* Server in auto_commit mode */ 
exports.SERVER_MORE_RESULTS_EXISTS = 8; /* Multi query - next query exists */ 
exports.SERVER_QUERY_NO_GOOD_INDEX_USED = 16;
exports.SERVER_QUERY_NO_INDEX_USED = 32;
/**
  The server was able to fulfill the clients request and opened a
  read-only non-scrollable cursor for a query. This flag comes
  in reply to COM_STMT_EXECUTE and COM_STMT_FETCH commands.
*/ exports.SERVER_STATUS_CURSOR_EXISTS = 64;
/**
  This flag is sent when a read-only cursor is exhausted, in reply to
  COM_STMT_FETCH command.
*/ exports.SERVER_STATUS_LAST_ROW_SENT = 128;
exports.SERVER_STATUS_DB_DROPPED = 256; /* A database was dropped */ 
exports.SERVER_STATUS_NO_BACKSLASH_ESCAPES = 512;
/**
  Sent to the client if after a prepared statement reprepare
  we discovered that the new statement returns a different
  number of result set columns.
*/ exports.SERVER_STATUS_METADATA_CHANGED = 1024;
exports.SERVER_QUERY_WAS_SLOW = 2048;
/**
  To mark ResultSet containing output parameter values.
*/ exports.SERVER_PS_OUT_PARAMS = 4096;
exports.SERVER_STATUS_IN_TRANS_READONLY = 0x2000; // in a read-only transaction
exports.SERVER_SESSION_STATE_CHANGED = 0x4000;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/encoding_charset.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// inverse of charset_encodings
// given encoding, get matching mysql charset number
module.exports = {
    big5: 1,
    latin2: 2,
    dec8: 3,
    cp850: 4,
    latin1: 5,
    hp8: 6,
    koi8r: 7,
    swe7: 10,
    ascii: 11,
    eucjp: 12,
    sjis: 13,
    cp1251: 14,
    hebrew: 16,
    tis620: 18,
    euckr: 19,
    latin7: 20,
    koi8u: 22,
    gb2312: 24,
    greek: 25,
    cp1250: 26,
    gbk: 28,
    cp1257: 29,
    latin5: 30,
    armscii8: 32,
    cesu8: 33,
    ucs2: 35,
    cp866: 36,
    keybcs2: 37,
    macintosh: 38,
    macroman: 39,
    cp852: 40,
    utf8: 45,
    utf8mb4: 45,
    utf16: 54,
    utf16le: 56,
    cp1256: 57,
    utf32: 60,
    binary: 63,
    geostd8: 92,
    cp932: 95,
    eucjpms: 97,
    gb18030: 248
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/session_track.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
exports.SYSTEM_VARIABLES = 0;
exports.SCHEMA = 1;
exports.STATE_CHANGE = 2;
exports.STATE_GTIDS = 3;
exports.TRANSACTION_CHARACTERISTICS = 4;
exports.TRANSACTION_STATE = 5;
exports.FIRST_KEY = exports.SYSTEM_VARIABLES;
exports.LAST_KEY = exports.TRANSACTION_STATE;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/resultset_header.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// TODO: rename to OK packet
// https://dev.mysql.com/doc/internals/en/packet-OK_Packet.html
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const ServerSatusFlags = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/server_status.js [app-route] (ecmascript)");
const EncodingToCharset = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/encoding_charset.js [app-route] (ecmascript)");
const sessionInfoTypes = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/session_track.js [app-route] (ecmascript)");
class ResultSetHeader {
    constructor(packet, connection){
        const bigNumberStrings = connection.config.bigNumberStrings;
        const encoding = connection.serverEncoding;
        const flags = connection._handshakePacket.capabilityFlags;
        const isSet = function(flag) {
            return flags & ClientConstants[flag];
        };
        if (packet.buffer[packet.offset] !== 0) {
            this.fieldCount = packet.readLengthCodedNumber();
            if (this.fieldCount === null) {
                this.infileName = packet.readString(undefined, encoding);
            }
            return;
        }
        this.fieldCount = packet.readInt8(); // skip OK byte
        this.affectedRows = packet.readLengthCodedNumber(bigNumberStrings);
        this.insertId = packet.readLengthCodedNumberSigned(bigNumberStrings);
        this.info = '';
        if (isSet('PROTOCOL_41')) {
            this.serverStatus = packet.readInt16();
            this.warningStatus = packet.readInt16();
        } else if (isSet('TRANSACTIONS')) {
            this.serverStatus = packet.readInt16();
        }
        let stateChanges = null;
        if (isSet('SESSION_TRACK') && packet.offset < packet.end) {
            this.info = packet.readLengthCodedString(encoding);
            if (this.serverStatus && ServerSatusFlags.SERVER_SESSION_STATE_CHANGED) {
                // session change info record - see
                // https://dev.mysql.com/doc/internals/en/packet-OK_Packet.html#cs-sect-packet-ok-sessioninfo
                let len = packet.offset < packet.end ? packet.readLengthCodedNumber() : 0;
                const end = packet.offset + len;
                let type, key, stateEnd;
                if (len > 0) {
                    stateChanges = {
                        systemVariables: {},
                        schema: null,
                        gtids: [],
                        trackStateChange: null
                    };
                }
                while(packet.offset < end){
                    type = packet.readInt8();
                    len = packet.readLengthCodedNumber();
                    stateEnd = packet.offset + len;
                    if (type === sessionInfoTypes.SYSTEM_VARIABLES) {
                        key = packet.readLengthCodedString(encoding);
                        const val = packet.readLengthCodedString(encoding);
                        stateChanges.systemVariables[key] = val;
                        if (key === 'character_set_client') {
                            const charsetNumber = EncodingToCharset[val];
                            connection.config.charsetNumber = charsetNumber;
                        }
                    } else if (type === sessionInfoTypes.SCHEMA) {
                        key = packet.readLengthCodedString(encoding);
                        stateChanges.schema = key;
                    } else if (type === sessionInfoTypes.STATE_CHANGE) {
                        stateChanges.trackStateChange = packet.readLengthCodedString(encoding);
                    } else if (type === sessionInfoTypes.STATE_GTIDS) {
                        // TODO: find if the first length coded string means anything. Usually comes as empty
                        // eslint-disable-next-line no-unused-vars
                        const _unknownString = packet.readLengthCodedString(encoding);
                        const gtid = packet.readLengthCodedString(encoding);
                        stateChanges.gtids = gtid.split(',');
                    } else {
                    // unsupported session track type. For now just ignore
                    }
                    packet.offset = stateEnd;
                }
            }
        } else {
            this.info = packet.readString(undefined, encoding);
        }
        if (stateChanges) {
            this.stateChanges = stateChanges;
        }
        const m = this.info.match(/\schanged:\s*(\d+)/i);
        if (m !== null) {
            this.changedRows = parseInt(m[1], 10);
        } else {
            this.changedRows = 0;
        }
    }
    // TODO: should be consistent instance member, but it's just easier here to have just function
    static toPacket(fieldCount, insertId) {
        let length = 4 + Packet.lengthCodedNumberLength(fieldCount);
        if (typeof insertId !== 'undefined') {
            length += Packet.lengthCodedNumberLength(insertId);
        }
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeLengthCodedNumber(fieldCount);
        if (typeof insertId !== 'undefined') {
            packet.writeLengthCodedNumber(insertId);
        }
        return packet;
    }
}
module.exports = ResultSetHeader;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/ssl_request.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class SSLRequest {
    constructor(flags, charset){
        this.clientFlags = flags | ClientConstants.SSL;
        this.charset = charset;
    }
    toPacket() {
        const length = 36;
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        buffer.fill(0);
        packet.offset = 4;
        packet.writeInt32(this.clientFlags);
        packet.writeInt32(0); // max packet size. todo: move to config
        packet.writeInt8(this.charset);
        return packet;
    }
}
module.exports = SSLRequest;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/text_row.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class TextRow {
    constructor(columns){
        this.columns = columns || [];
    }
    static fromPacket(packet) {
        // packet.reset(); // set offset to starting point?
        const columns = [];
        while(packet.haveMoreData()){
            columns.push(packet.readLengthCodedString());
        }
        return new TextRow(columns);
    }
    static toPacket(columns, encoding) {
        const sequenceId = 0; // TODO remove, this is calculated now in connecton
        let length = 0;
        columns.forEach((val)=>{
            if (val === null || typeof val === 'undefined') {
                ++length;
                return;
            }
            length += Packet.lengthCodedStringLength(val.toString(10), encoding);
        });
        const buffer = Buffer.allocUnsafe(length + 4);
        const packet = new Packet(sequenceId, buffer, 0, length + 4);
        packet.offset = 4;
        columns.forEach((val)=>{
            if (val === null) {
                packet.writeNull();
                return;
            }
            if (typeof val === 'undefined') {
                packet.writeInt8(0);
                return;
            }
            packet.writeLengthCodedString(val.toString(10), encoding);
        });
        return packet;
    }
}
module.exports = TextRow;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on June 1, 2021.
// A utility method was introduced to generate an Error instance from a
// binary server packet.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
// This file was modified by Oracle on September 21, 2021.
// The new AuthNextFactor packet is now available.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const process = __turbopack_require__("[externals]/ [external] (process, cjs)");
const AuthNextFactor = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_next_factor.js [app-route] (ecmascript)");
const AuthSwitchRequest = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_request.js [app-route] (ecmascript)");
const AuthSwitchRequestMoreData = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_request_more_data.js [app-route] (ecmascript)");
const AuthSwitchResponse = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/auth_switch_response.js [app-route] (ecmascript)");
const BinaryRow = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binary_row.js [app-route] (ecmascript)");
const BinlogDump = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binlog_dump.js [app-route] (ecmascript)");
const ChangeUser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/change_user.js [app-route] (ecmascript)");
const CloseStatement = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/close_statement.js [app-route] (ecmascript)");
const ColumnDefinition = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/column_definition.js [app-route] (ecmascript)");
const Execute = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/execute.js [app-route] (ecmascript)");
const Handshake = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/handshake.js [app-route] (ecmascript)");
const HandshakeResponse = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/handshake_response.js [app-route] (ecmascript)");
const PrepareStatement = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/prepare_statement.js [app-route] (ecmascript)");
const PreparedStatementHeader = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/prepared_statement_header.js [app-route] (ecmascript)");
const Query = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/query.js [app-route] (ecmascript)");
const RegisterSlave = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/register_slave.js [app-route] (ecmascript)");
const ResultSetHeader = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/resultset_header.js [app-route] (ecmascript)");
const SSLRequest = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/ssl_request.js [app-route] (ecmascript)");
const TextRow = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/text_row.js [app-route] (ecmascript)");
const ctorMap = {
    AuthNextFactor,
    AuthSwitchRequest,
    AuthSwitchRequestMoreData,
    AuthSwitchResponse,
    BinaryRow,
    BinlogDump,
    ChangeUser,
    CloseStatement,
    ColumnDefinition,
    Execute,
    Handshake,
    HandshakeResponse,
    PrepareStatement,
    PreparedStatementHeader,
    Query,
    RegisterSlave,
    ResultSetHeader,
    SSLRequest,
    TextRow
};
Object.entries(ctorMap).forEach(([name, ctor])=>{
    module.exports[name] = ctor;
    // monkey-patch it to include name if debug is on
    if (process.env.NODE_DEBUG) {
        if (ctor.prototype.toPacket) {
            const old = ctor.prototype.toPacket;
            ctor.prototype.toPacket = function() {
                const p = old.call(this);
                p._name = name;
                return p;
            };
        }
    }
});
// simple packets:
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
exports.Packet = Packet;
class OK {
    static toPacket(args, encoding) {
        args = args || {};
        const affectedRows = args.affectedRows || 0;
        const insertId = args.insertId || 0;
        const serverStatus = args.serverStatus || 0;
        const warningCount = args.warningCount || 0;
        const message = args.message || '';
        let length = 9 + Packet.lengthCodedNumberLength(affectedRows);
        length += Packet.lengthCodedNumberLength(insertId);
        const buffer = Buffer.allocUnsafe(length);
        const packet = new Packet(0, buffer, 0, length);
        packet.offset = 4;
        packet.writeInt8(0);
        packet.writeLengthCodedNumber(affectedRows);
        packet.writeLengthCodedNumber(insertId);
        packet.writeInt16(serverStatus);
        packet.writeInt16(warningCount);
        packet.writeString(message, encoding);
        packet._name = 'OK';
        return packet;
    }
}
exports.OK = OK;
// warnings, statusFlags
class EOF {
    static toPacket(warnings, statusFlags) {
        if (typeof warnings === 'undefined') {
            warnings = 0;
        }
        if (typeof statusFlags === 'undefined') {
            statusFlags = 0;
        }
        const packet = new Packet(0, Buffer.allocUnsafe(9), 0, 9);
        packet.offset = 4;
        packet.writeInt8(0xfe);
        packet.writeInt16(warnings);
        packet.writeInt16(statusFlags);
        packet._name = 'EOF';
        return packet;
    }
}
exports.EOF = EOF;
class Error {
    static toPacket(args, encoding) {
        const length = 13 + Buffer.byteLength(args.message, 'utf8');
        const packet = new Packet(0, Buffer.allocUnsafe(length), 0, length);
        packet.offset = 4;
        packet.writeInt8(0xff);
        packet.writeInt16(args.code);
        // TODO: sql state parameter
        packet.writeString('#_____', encoding);
        packet.writeString(args.message, encoding);
        packet._name = 'Error';
        return packet;
    }
    static fromPacket(packet) {
        packet.readInt8(); // marker
        const code = packet.readInt16();
        packet.readString(1, 'ascii'); // sql state marker
        // The SQL state of the ERR_Packet which is always 5 bytes long.
        // https://dev.mysql.com/doc/dev/mysql-server/8.0.11/page_protocol_basic_dt_strings.html#sect_protocol_basic_dt_string_fix
        packet.readString(5, 'ascii'); // sql state (ignore for now)
        const message = packet.readNullTerminatedString('utf8');
        const error = new Error();
        error.message = message;
        error.code = code;
        return error;
    }
}
exports.Error = Error;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/sha256_password.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const PLUGIN_NAME = 'sha256_password';
const crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const { xorRotating } = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
const REQUEST_SERVER_KEY_PACKET = Buffer.from([
    1
]);
const STATE_INITIAL = 0;
const STATE_WAIT_SERVER_KEY = 1;
const STATE_FINAL = -1;
function encrypt(password, scramble, key) {
    const stage1 = xorRotating(Buffer.from(`${password}\0`, 'utf8'), scramble);
    return crypto.publicEncrypt(key, stage1);
}
module.exports = (pluginOptions = {})=>({ connection })=>{
        let state = 0;
        let scramble = null;
        const password = connection.config.password;
        const authWithKey = (serverKey)=>{
            const _password = encrypt(password, scramble, serverKey);
            state = STATE_FINAL;
            return _password;
        };
        return (data)=>{
            switch(state){
                case STATE_INITIAL:
                    scramble = data.slice(0, 20);
                    // if client provides key we can save one extra roundrip on first connection
                    if (pluginOptions.serverPublicKey) {
                        return authWithKey(pluginOptions.serverPublicKey);
                    }
                    state = STATE_WAIT_SERVER_KEY;
                    return REQUEST_SERVER_KEY_PACKET;
                case STATE_WAIT_SERVER_KEY:
                    if (pluginOptions.onServerPublicKey) {
                        pluginOptions.onServerPublicKey(data);
                    }
                    return authWithKey(data);
                case STATE_FINAL:
                    throw new Error(`Unexpected data in AuthMoreData packet received by ${PLUGIN_NAME} plugin in STATE_FINAL state.`);
            }
            throw new Error(`Unexpected data in AuthMoreData packet received by ${PLUGIN_NAME} plugin in state ${state}`);
        };
    };
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/caching_sha2_password.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// https://mysqlserverteam.com/mysql-8-0-4-new-default-authentication-plugin-caching_sha2_password/
const PLUGIN_NAME = 'caching_sha2_password';
const crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const { xor, xorRotating } = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
const REQUEST_SERVER_KEY_PACKET = Buffer.from([
    2
]);
const FAST_AUTH_SUCCESS_PACKET = Buffer.from([
    3
]);
const PERFORM_FULL_AUTHENTICATION_PACKET = Buffer.from([
    4
]);
const STATE_INITIAL = 0;
const STATE_TOKEN_SENT = 1;
const STATE_WAIT_SERVER_KEY = 2;
const STATE_FINAL = -1;
function sha256(msg) {
    const hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest();
}
function calculateToken(password, scramble) {
    if (!password) {
        return Buffer.alloc(0);
    }
    const stage1 = sha256(Buffer.from(password));
    const stage2 = sha256(stage1);
    const stage3 = sha256(Buffer.concat([
        stage2,
        scramble
    ]));
    return xor(stage1, stage3);
}
function encrypt(password, scramble, key) {
    const stage1 = xorRotating(Buffer.from(`${password}\0`, 'utf8'), scramble);
    return crypto.publicEncrypt({
        key,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    }, stage1);
}
module.exports = (pluginOptions = {})=>({ connection })=>{
        let state = 0;
        let scramble = null;
        const password = connection.config.password;
        const authWithKey = (serverKey)=>{
            const _password = encrypt(password, scramble, serverKey);
            state = STATE_FINAL;
            return _password;
        };
        return (data)=>{
            switch(state){
                case STATE_INITIAL:
                    scramble = data.slice(0, 20);
                    state = STATE_TOKEN_SENT;
                    return calculateToken(password, scramble);
                case STATE_TOKEN_SENT:
                    if (FAST_AUTH_SUCCESS_PACKET.equals(data)) {
                        state = STATE_FINAL;
                        return null;
                    }
                    if (PERFORM_FULL_AUTHENTICATION_PACKET.equals(data)) {
                        const isSecureConnection = typeof pluginOptions.overrideIsSecure === 'undefined' ? connection.config.ssl || connection.config.socketPath : pluginOptions.overrideIsSecure;
                        if (isSecureConnection) {
                            state = STATE_FINAL;
                            return Buffer.from(`${password}\0`, 'utf8');
                        }
                        // if client provides key we can save one extra roundrip on first connection
                        if (pluginOptions.serverPublicKey) {
                            return authWithKey(pluginOptions.serverPublicKey);
                        }
                        state = STATE_WAIT_SERVER_KEY;
                        return REQUEST_SERVER_KEY_PACKET;
                    }
                    throw new Error(`Invalid AuthMoreData packet received by ${PLUGIN_NAME} plugin in STATE_TOKEN_SENT state.`);
                case STATE_WAIT_SERVER_KEY:
                    if (pluginOptions.onServerPublicKey) {
                        pluginOptions.onServerPublicKey(data);
                    }
                    return authWithKey(data);
                case STATE_FINAL:
                    throw new Error(`Unexpected data in AuthMoreData packet received by ${PLUGIN_NAME} plugin in STATE_FINAL state.`);
            }
            throw new Error(`Unexpected data in AuthMoreData packet received by ${PLUGIN_NAME} plugin in state ${state}`);
        };
    };
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_native_password.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
//const PLUGIN_NAME = 'mysql_native_password';
const auth41 = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
module.exports = (pluginOptions)=>({ connection, command })=>{
        const password = command.password || pluginOptions.password || connection.config.password;
        const passwordSha1 = command.passwordSha1 || pluginOptions.passwordSha1 || connection.config.passwordSha1;
        return (data)=>{
            const authPluginData1 = data.slice(0, 8);
            const authPluginData2 = data.slice(8, 20);
            let authToken;
            if (passwordSha1) {
                authToken = auth41.calculateTokenFromPasswordSha(passwordSha1, authPluginData1, authPluginData2);
            } else {
                authToken = auth41.calculateToken(password, authPluginData1, authPluginData2);
            }
            return authToken;
        };
    };
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_clear_password.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
function bufferFromStr(str) {
    return Buffer.from(`${str}\0`);
}
const create_mysql_clear_password_plugin = (pluginOptions)=>function mysql_clear_password_plugin({ connection, command }) {
        const password = command.password || pluginOptions.password || connection.config.password;
        return function() {
            return bufferFromStr(password);
        };
    };
module.exports = create_mysql_clear_password_plugin;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/auth_switch.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on July 5, 2021.
// Errors generated by asynchronous authentication plugins are now being
// handled and subsequently emitted at the command level.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const sha256_password = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/sha256_password.js [app-route] (ecmascript)");
const caching_sha2_password = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/caching_sha2_password.js [app-route] (ecmascript)");
const mysql_native_password = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_native_password.js [app-route] (ecmascript)");
const mysql_clear_password = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_clear_password.js [app-route] (ecmascript)");
const standardAuthPlugins = {
    sha256_password: sha256_password({}),
    caching_sha2_password: caching_sha2_password({}),
    mysql_native_password: mysql_native_password({}),
    mysql_clear_password: mysql_clear_password({})
};
function warnLegacyAuthSwitch() {
    console.warn('WARNING! authSwitchHandler api is deprecated, please use new authPlugins api');
}
function authSwitchPluginError(error, command) {
    // Authentication errors are fatal
    error.code = 'AUTH_SWITCH_PLUGIN_ERROR';
    error.fatal = true;
    command.emit('error', error);
}
function authSwitchRequest(packet, connection, command) {
    const { pluginName, pluginData } = Packets.AuthSwitchRequest.fromPacket(packet);
    let authPlugin = connection.config.authPlugins && connection.config.authPlugins[pluginName];
    // legacy plugin api don't allow to override mysql_native_password
    // if pluginName is mysql_native_password it's using standard auth4.1 auth
    if (connection.config.authSwitchHandler && pluginName !== 'mysql_native_password') {
        const legacySwitchHandler = connection.config.authSwitchHandler;
        warnLegacyAuthSwitch();
        legacySwitchHandler({
            pluginName,
            pluginData
        }, (err, data)=>{
            if (err) {
                return authSwitchPluginError(err, command);
            }
            connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
        });
        return;
    }
    if (!authPlugin) {
        authPlugin = standardAuthPlugins[pluginName];
    }
    if (!authPlugin) {
        throw new Error(`Server requests authentication using unknown plugin ${pluginName}. See ${'TODO: add plugins doco here'} on how to configure or author authentication plugins.`);
    }
    connection._authPlugin = authPlugin({
        connection,
        command
    });
    Promise.resolve(connection._authPlugin(pluginData)).then((data)=>{
        if (data) {
            connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
        }
    }).catch((err)=>{
        authSwitchPluginError(err, command);
    });
}
function authSwitchRequestMoreData(packet, connection, command) {
    const { data } = Packets.AuthSwitchRequestMoreData.fromPacket(packet);
    if (connection.config.authSwitchHandler) {
        const legacySwitchHandler = connection.config.authSwitchHandler;
        warnLegacyAuthSwitch();
        legacySwitchHandler({
            pluginData: data
        }, (err, data)=>{
            if (err) {
                return authSwitchPluginError(err, command);
            }
            connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
        });
        return;
    }
    if (!connection._authPlugin) {
        throw new Error('AuthPluginMoreData received but no auth plugin instance found');
    }
    Promise.resolve(connection._authPlugin(data)).then((data)=>{
        if (data) {
            connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
        }
    }).catch((err)=>{
        authSwitchPluginError(err, command);
    });
}
module.exports = {
    authSwitchRequest,
    authSwitchRequestMoreData
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/compressed_protocol.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// connection mixins
// implementation of http://dev.mysql.com/doc/internals/en/compression.html
const zlib = __turbopack_require__("[externals]/ [external] (zlib, cjs)");
const PacketParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packet_parser.js [app-route] (ecmascript)");
function handleCompressedPacket(packet) {
    // eslint-disable-next-line consistent-this, no-invalid-this
    const connection = this;
    const deflatedLength = packet.readInt24();
    const body = packet.readBuffer();
    if (deflatedLength !== 0) {
        connection.inflateQueue.push((task)=>{
            zlib.inflate(body, (err, data)=>{
                if (err) {
                    connection._handleNetworkError(err);
                    return;
                }
                connection._bumpCompressedSequenceId(packet.numPackets);
                connection._inflatedPacketsParser.execute(data);
                task.done();
            });
        });
    } else {
        connection.inflateQueue.push((task)=>{
            connection._bumpCompressedSequenceId(packet.numPackets);
            connection._inflatedPacketsParser.execute(body);
            task.done();
        });
    }
}
function writeCompressed(buffer) {
    // http://dev.mysql.com/doc/internals/en/example-several-mysql-packets.html
    // note: sending a MySQL Packet of the size 2^24−5 to 2^24−1 via compression
    // leads to at least one extra compressed packet.
    // (this is because "length of the packet before compression" need to fit
    // into 3 byte unsigned int. "length of the packet before compression" includes
    // 4 byte packet header, hence 2^24−5)
    const MAX_COMPRESSED_LENGTH = 16777210;
    let start;
    if (buffer.length > MAX_COMPRESSED_LENGTH) {
        for(start = 0; start < buffer.length; start += MAX_COMPRESSED_LENGTH){
            writeCompressed.call(// eslint-disable-next-line no-invalid-this
            this, buffer.slice(start, start + MAX_COMPRESSED_LENGTH));
        }
        return;
    }
    // eslint-disable-next-line no-invalid-this, consistent-this
    const connection = this;
    let packetLen = buffer.length;
    const compressHeader = Buffer.allocUnsafe(7);
    // seqqueue is used here because zlib async execution is routed via thread pool
    // internally and when we have multiple compressed packets arriving we need
    // to assemble uncompressed result sequentially
    (function(seqId) {
        connection.deflateQueue.push((task)=>{
            zlib.deflate(buffer, (err, compressed)=>{
                if (err) {
                    connection._handleFatalError(err);
                    return;
                }
                let compressedLength = compressed.length;
                if (compressedLength < packetLen) {
                    compressHeader.writeUInt8(compressedLength & 0xff, 0);
                    compressHeader.writeUInt16LE(compressedLength >> 8, 1);
                    compressHeader.writeUInt8(seqId, 3);
                    compressHeader.writeUInt8(packetLen & 0xff, 4);
                    compressHeader.writeUInt16LE(packetLen >> 8, 5);
                    connection.writeUncompressed(compressHeader);
                    connection.writeUncompressed(compressed);
                } else {
                    // http://dev.mysql.com/doc/internals/en/uncompressed-payload.html
                    // To send an uncompressed payload:
                    //   - set length of payload before compression to 0
                    //   - the compressed payload contains the uncompressed payload instead.
                    compressedLength = packetLen;
                    packetLen = 0;
                    compressHeader.writeUInt8(compressedLength & 0xff, 0);
                    compressHeader.writeUInt16LE(compressedLength >> 8, 1);
                    compressHeader.writeUInt8(seqId, 3);
                    compressHeader.writeUInt8(packetLen & 0xff, 4);
                    compressHeader.writeUInt16LE(packetLen >> 8, 5);
                    connection.writeUncompressed(compressHeader);
                    connection.writeUncompressed(buffer);
                }
                task.done();
            });
        });
    })(connection.compressedSequenceId);
    connection._bumpCompressedSequenceId(1);
}
function enableCompression(connection) {
    connection._lastWrittenPacketId = 0;
    connection._lastReceivedPacketId = 0;
    connection._handleCompressedPacket = handleCompressedPacket;
    connection._inflatedPacketsParser = new PacketParser((p)=>{
        connection.handlePacket(p);
    }, 4);
    connection._inflatedPacketsParser._lastPacket = 0;
    connection.packetParser = new PacketParser((packet)=>{
        connection._handleCompressedPacket(packet);
    }, 7);
    connection.writeUncompressed = connection.write;
    connection.write = writeCompressed;
    const seqqueue = __turbopack_require__("[project]/node_modules/.pnpm/seq-queue@0.0.5/node_modules/seq-queue/index.js [app-route] (ecmascript)");
    connection.inflateQueue = seqqueue.createQueue();
    connection.deflateQueue = seqqueue.createQueue();
}
module.exports = {
    enableCompression: enableCompression
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
const Timers = __turbopack_require__("[externals]/ [external] (timers, cjs)");
class Command extends EventEmitter {
    constructor(){
        super();
        this.next = null;
    }
    // slow. debug only
    stateName() {
        const state = this.next;
        for(const i in this){
            if (this[i] === state && i !== 'next') {
                return i;
            }
        }
        return 'unknown name';
    }
    execute(packet, connection) {
        if (!this.next) {
            this.next = this.start;
            connection._resetSequenceId();
        }
        if (packet && packet.isError()) {
            const err = packet.asError(connection.clientEncoding);
            err.sql = this.sql || this.query;
            if (this.queryTimeout) {
                Timers.clearTimeout(this.queryTimeout);
                this.queryTimeout = null;
            }
            if (this.onResult) {
                this.onResult(err);
                this.emit('end');
            } else {
                this.emit('error', err);
                this.emit('end');
            }
            return true;
        }
        // TODO: don't return anything from execute, it's ugly and error-prone. Listen for 'end' event in connection
        this.next = this.next(packet, connection);
        if (this.next) {
            return false;
        }
        this.emit('end');
        return true;
    }
}
module.exports = Command;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/client_handshake.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on June 17, 2021.
// Handshake errors are now maked as fatal and the corresponding events are
// emitted in the command instance itself.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
// This file was modified by Oracle on September 21, 2021.
// Handshake workflow now supports additional authentication factors requested
// by the server.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
const auth41 = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_41.js [app-route] (ecmascript)");
function flagNames(flags) {
    const res = [];
    for(const c in ClientConstants){
        if (flags & ClientConstants[c]) {
            res.push(c.replace(/_/g, ' ').toLowerCase());
        }
    }
    return res;
}
class ClientHandshake extends Command {
    constructor(clientFlags){
        super();
        this.handshake = null;
        this.clientFlags = clientFlags;
        this.authenticationFactor = 0;
    }
    start() {
        return ClientHandshake.prototype.handshakeInit;
    }
    sendSSLRequest(connection) {
        const sslRequest = new Packets.SSLRequest(this.clientFlags, connection.config.charsetNumber);
        connection.writePacket(sslRequest.toPacket());
    }
    sendCredentials(connection) {
        if (connection.config.debug) {
            // eslint-disable-next-line
            console.log('Sending handshake packet: flags:%d=(%s)', this.clientFlags, flagNames(this.clientFlags).join(', '));
        }
        this.user = connection.config.user;
        this.password = connection.config.password;
        // "password1" is an alias to the original "password" value
        // to make it easier to integrate multi-factor authentication
        this.password1 = connection.config.password;
        // "password2" and "password3" are the 2nd and 3rd factor authentication
        // passwords, which can be undefined depending on the authentication
        // plugin being used
        this.password2 = connection.config.password2;
        this.password3 = connection.config.password3;
        this.passwordSha1 = connection.config.passwordSha1;
        this.database = connection.config.database;
        this.autPluginName = this.handshake.autPluginName;
        const handshakeResponse = new Packets.HandshakeResponse({
            flags: this.clientFlags,
            user: this.user,
            database: this.database,
            password: this.password,
            passwordSha1: this.passwordSha1,
            charsetNumber: connection.config.charsetNumber,
            authPluginData1: this.handshake.authPluginData1,
            authPluginData2: this.handshake.authPluginData2,
            compress: connection.config.compress,
            connectAttributes: connection.config.connectAttributes
        });
        connection.writePacket(handshakeResponse.toPacket());
    }
    calculateNativePasswordAuthToken(authPluginData) {
        // TODO: dont split into authPluginData1 and authPluginData2, instead join when 1 & 2 received
        const authPluginData1 = authPluginData.slice(0, 8);
        const authPluginData2 = authPluginData.slice(8, 20);
        let authToken;
        if (this.passwordSha1) {
            authToken = auth41.calculateTokenFromPasswordSha(this.passwordSha1, authPluginData1, authPluginData2);
        } else {
            authToken = auth41.calculateToken(this.password, authPluginData1, authPluginData2);
        }
        return authToken;
    }
    handshakeInit(helloPacket, connection) {
        this.on('error', (e)=>{
            connection._fatalError = e;
            connection._protocolError = e;
        });
        this.handshake = Packets.Handshake.fromPacket(helloPacket);
        if (connection.config.debug) {
            // eslint-disable-next-line
            console.log('Server hello packet: capability flags:%d=(%s)', this.handshake.capabilityFlags, flagNames(this.handshake.capabilityFlags).join(', '));
        }
        connection.serverCapabilityFlags = this.handshake.capabilityFlags;
        connection.serverEncoding = CharsetToEncoding[this.handshake.characterSet];
        connection.connectionId = this.handshake.connectionId;
        const serverSSLSupport = this.handshake.capabilityFlags & ClientConstants.SSL;
        // multi factor authentication is enabled with the
        // "MULTI_FACTOR_AUTHENTICATION" capability and should only be used if it
        // is supported by the server
        const multiFactorAuthentication = this.handshake.capabilityFlags & ClientConstants.MULTI_FACTOR_AUTHENTICATION;
        this.clientFlags = this.clientFlags | multiFactorAuthentication;
        // use compression only if requested by client and supported by server
        connection.config.compress = connection.config.compress && this.handshake.capabilityFlags & ClientConstants.COMPRESS;
        this.clientFlags = this.clientFlags | connection.config.compress;
        if (connection.config.ssl) {
            // client requires SSL but server does not support it
            if (!serverSSLSupport) {
                const err = new Error('Server does not support secure connection');
                err.code = 'HANDSHAKE_NO_SSL_SUPPORT';
                err.fatal = true;
                this.emit('error', err);
                return false;
            }
            // send ssl upgrade request and immediately upgrade connection to secure
            this.clientFlags |= ClientConstants.SSL;
            this.sendSSLRequest(connection);
            connection.startTLS((err)=>{
                // after connection is secure
                if (err) {
                    // SSL negotiation error are fatal
                    err.code = 'HANDSHAKE_SSL_ERROR';
                    err.fatal = true;
                    this.emit('error', err);
                    return;
                }
                // rest of communication is encrypted
                this.sendCredentials(connection);
            });
        } else {
            this.sendCredentials(connection);
        }
        if (multiFactorAuthentication) {
            // if the server supports multi-factor authentication, we enable it in
            // the client
            this.authenticationFactor = 1;
        }
        return ClientHandshake.prototype.handshakeResult;
    }
    handshakeResult(packet, connection) {
        const marker = packet.peekByte();
        // packet can be OK_Packet, ERR_Packet, AuthSwitchRequest, AuthNextFactor
        // or AuthMoreData
        if (marker === 0xfe || marker === 1 || marker === 0x02) {
            const authSwitch = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/auth_switch.js [app-route] (ecmascript)");
            try {
                if (marker === 1) {
                    authSwitch.authSwitchRequestMoreData(packet, connection, this);
                } else {
                    // if authenticationFactor === 0, it means the server does not support
                    // the multi-factor authentication capability
                    if (this.authenticationFactor !== 0) {
                        // if we are past the first authentication factor, we should use the
                        // corresponding password (if there is one)
                        connection.config.password = this[`password${this.authenticationFactor}`];
                        // update the current authentication factor
                        this.authenticationFactor += 1;
                    }
                    // if marker === 0x02, it means it is an AuthNextFactor packet,
                    // which is similar in structure to an AuthSwitchRequest packet,
                    // so, we can use it directly
                    authSwitch.authSwitchRequest(packet, connection, this);
                }
                return ClientHandshake.prototype.handshakeResult;
            } catch (err) {
                // Authentication errors are fatal
                err.code = 'AUTH_SWITCH_PLUGIN_ERROR';
                err.fatal = true;
                if (this.onResult) {
                    this.onResult(err);
                } else {
                    this.emit('error', err);
                }
                return null;
            }
        }
        if (marker !== 0) {
            const err = new Error('Unexpected packet during handshake phase');
            // Unknown handshake errors are fatal
            err.code = 'HANDSHAKE_UNKNOWN_ERROR';
            err.fatal = true;
            if (this.onResult) {
                this.onResult(err);
            } else {
                this.emit('error', err);
            }
            return null;
        }
        // this should be called from ClientHandshake command only
        // and skipped when called from ChangeUser command
        if (!connection.authorized) {
            connection.authorized = true;
            if (connection.config.compress) {
                const enableCompression = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/compressed_protocol.js [app-route] (ecmascript)").enableCompression;
                enableCompression(connection);
            }
        }
        if (this.onResult) {
            this.onResult(null);
        }
        return null;
    }
}
module.exports = ClientHandshake;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/server_handshake.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const CommandCode = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const Errors = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/errors.js [app-route] (ecmascript)");
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
class ServerHandshake extends Command {
    constructor(args){
        super();
        this.args = args;
    /*
    this.protocolVersion = args.protocolVersion || 10;
    this.serverVersion   = args.serverVersion;
    this.connectionId    = args.connectionId,
    this.statusFlags     = args.statusFlags,
    this.characterSet    = args.characterSet,
    this.capabilityFlags = args.capabilityFlags || 512;
    */ }
    start(packet, connection) {
        const serverHelloPacket = new Packets.Handshake(this.args);
        this.serverHello = serverHelloPacket;
        serverHelloPacket.setScrambleData((err)=>{
            if (err) {
                connection.emit('error', new Error('Error generating random bytes'));
                return;
            }
            connection.writePacket(serverHelloPacket.toPacket(0));
        });
        return ServerHandshake.prototype.readClientReply;
    }
    readClientReply(packet, connection) {
        // check auth here
        const clientHelloReply = Packets.HandshakeResponse.fromPacket(packet);
        // TODO check we don't have something similar already
        connection.clientHelloReply = clientHelloReply;
        if (this.args.authCallback) {
            this.args.authCallback({
                user: clientHelloReply.user,
                database: clientHelloReply.database,
                address: connection.stream.remoteAddress,
                authPluginData1: this.serverHello.authPluginData1,
                authPluginData2: this.serverHello.authPluginData2,
                authToken: clientHelloReply.authToken
            }, (err, mysqlError)=>{
                // if (err)
                if (!mysqlError) {
                    connection.writeOk();
                } else {
                    // TODO create constants / errorToCode
                    // 1045 = ER_ACCESS_DENIED_ERROR
                    connection.writeError({
                        message: mysqlError.message || '',
                        code: mysqlError.code || 1045
                    });
                    connection.close();
                }
            });
        } else {
            connection.writeOk();
        }
        return ServerHandshake.prototype.dispatchCommands;
    }
    _isStatement(query, name) {
        const firstWord = query.split(' ')[0].toUpperCase();
        return firstWord === name;
    }
    dispatchCommands(packet, connection) {
        // command from client to server
        let knownCommand = true;
        const encoding = connection.clientHelloReply.encoding;
        const commandCode = packet.readInt8();
        switch(commandCode){
            case CommandCode.STMT_PREPARE:
                if (connection.listeners('stmt_prepare').length) {
                    const query = packet.readString(undefined, encoding);
                    connection.emit('stmt_prepare', query);
                } else {
                    connection.writeError({
                        code: Errors.HA_ERR_INTERNAL_ERROR,
                        message: 'No query handler for prepared statements.'
                    });
                }
                break;
            case CommandCode.STMT_EXECUTE:
                if (connection.listeners('stmt_execute').length) {
                    const { stmtId, flags, iterationCount, values } = Packets.Execute.fromPacket(packet, encoding);
                    connection.emit('stmt_execute', stmtId, flags, iterationCount, values);
                } else {
                    connection.writeError({
                        code: Errors.HA_ERR_INTERNAL_ERROR,
                        message: 'No query handler for execute statements.'
                    });
                }
                break;
            case CommandCode.QUIT:
                if (connection.listeners('quit').length) {
                    connection.emit('quit');
                } else {
                    connection.stream.end();
                }
                break;
            case CommandCode.INIT_DB:
                if (connection.listeners('init_db').length) {
                    const schemaName = packet.readString(undefined, encoding);
                    connection.emit('init_db', schemaName);
                } else {
                    connection.writeOk();
                }
                break;
            case CommandCode.QUERY:
                if (connection.listeners('query').length) {
                    const query = packet.readString(undefined, encoding);
                    if (this._isStatement(query, 'PREPARE') || this._isStatement(query, 'SET')) {
                        connection.emit('stmt_prepare', query);
                    } else if (this._isStatement(query, 'EXECUTE')) {
                        connection.emit('stmt_execute', null, null, null, null, query);
                    } else connection.emit('query', query);
                } else {
                    connection.writeError({
                        code: Errors.HA_ERR_INTERNAL_ERROR,
                        message: 'No query handler'
                    });
                }
                break;
            case CommandCode.FIELD_LIST:
                if (connection.listeners('field_list').length) {
                    const table = packet.readNullTerminatedString(encoding);
                    const fields = packet.readString(undefined, encoding);
                    connection.emit('field_list', table, fields);
                } else {
                    connection.writeError({
                        code: Errors.ER_WARN_DEPRECATED_SYNTAX,
                        message: 'As of MySQL 5.7.11, COM_FIELD_LIST is deprecated and will be removed in a future version of MySQL.'
                    });
                }
                break;
            case CommandCode.PING:
                if (connection.listeners('ping').length) {
                    connection.emit('ping');
                } else {
                    connection.writeOk();
                }
                break;
            default:
                knownCommand = false;
        }
        if (connection.listeners('packet').length) {
            connection.emit('packet', packet.clone(), knownCommand, commandCode);
        } else if (!knownCommand) {
            // eslint-disable-next-line no-console
            console.log('Unknown command:', commandCode);
        }
        return ServerHandshake.prototype.dispatchCommands;
    }
}
module.exports = ServerHandshake; // TODO: implement server-side 4.1 authentication
 /*
4.1 authentication: (http://bazaar.launchpad.net/~mysql/mysql-server/5.5/view/head:/sql/password.c)

  SERVER:  public_seed=create_random_string()
           send(public_seed)

  CLIENT:  recv(public_seed)
           hash_stage1=sha1("password")
           hash_stage2=sha1(hash_stage1)
           reply=xor(hash_stage1, sha1(public_seed,hash_stage2)

           // this three steps are done in scramble()

           send(reply)


  SERVER:  recv(reply)
           hash_stage1=xor(reply, sha1(public_seed,hash_stage2))
           candidate_hash2=sha1(hash_stage1)
           check(candidate_hash2==hash_stage2)

server stores sha1(sha1(password)) ( hash_stag2)
*/ 
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/helpers.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
/*

  this seems to be not only shorter, but faster than
  string.replace(/\\/g, '\\\\').
            replace(/\u0008/g, '\\b').
            replace(/\t/g, '\\t').
            replace(/\n/g, '\\n').
            replace(/\f/g, '\\f').
            replace(/\r/g, '\\r').
            replace(/'/g, '\\\'').
            replace(/"/g, '\\"');
  or string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
  see http://jsperf.com/string-escape-regexp-vs-json-stringify
  */ function srcEscape(str) {
    return JSON.stringify({
        [str]: 1
    }).slice(1, -3);
}
exports.srcEscape = srcEscape;
let highlightFn;
let cardinalRecommended = false;
try {
    // the purpose of this is to prevent projects using Webpack from displaying a warning during runtime if cardinal is not a dependency
    const REQUIRE_TERMINATOR = '';
    highlightFn = (()=>{
        const e = new Error("Cannot find module 'cardinal'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })().highlight;
} catch (err) {
    highlightFn = (text)=>{
        if (!cardinalRecommended) {
            // eslint-disable-next-line no-console
            console.log('For nicer debug output consider install cardinal@^2.0.0');
            cardinalRecommended = true;
        }
        return text;
    };
}
/**
 * Prints debug message with code frame, will try to use `cardinal` if available.
 */ function printDebugWithCode(msg, code) {
    // eslint-disable-next-line no-console
    console.log(`\n\n${msg}:\n`);
    // eslint-disable-next-line no-console
    console.log(`${highlightFn(code)}\n`);
}
exports.printDebugWithCode = printDebugWithCode;
/**
 * checks whether the `type` is in the `list`
 */ function typeMatch(type, list, Types) {
    if (Array.isArray(list)) {
        return list.some((t)=>type === Types[t]);
    }
    return !!list;
}
exports.typeMatch = typeMatch;
const privateObjectProps = new Set([
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__',
    '__proto__'
]);
exports.privateObjectProps = privateObjectProps;
const fieldEscape = (field)=>{
    if (privateObjectProps.has(field)) {
        throw new Error(`The field name (${field}) can't be the same as an object's private property.`);
    }
    return srcEscape(field);
};
exports.fieldEscape = fieldEscape;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/parser_cache.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { createLRU } = __turbopack_require__("[project]/node_modules/.pnpm/lru.min@1.1.1/node_modules/lru.min/lib/index.js [app-route] (ecmascript)");
const parserCache = createLRU({
    max: 15000
});
function keyFromFields(type, fields, options, config) {
    const res = [
        type,
        typeof options.nestTables,
        options.nestTables,
        Boolean(options.rowsAsArray),
        Boolean(options.supportBigNumbers || config.supportBigNumbers),
        Boolean(options.bigNumberStrings || config.bigNumberStrings),
        typeof options.typeCast,
        options.timezone || config.timezone,
        Boolean(options.decimalNumbers),
        options.dateStrings
    ];
    for(let i = 0; i < fields.length; ++i){
        const field = fields[i];
        res.push([
            field.name,
            field.columnType,
            field.length,
            field.schema,
            field.table,
            field.flags,
            field.characterSet
        ]);
    }
    return JSON.stringify(res, null, 0);
}
function getParser(type, fields, options, config, compiler) {
    const key = keyFromFields(type, fields, options, config);
    let parser = parserCache.get(key);
    if (parser) {
        return parser;
    }
    parser = compiler(fields, options, config);
    parserCache.set(key, parser);
    return parser;
}
function setMaxCache(max) {
    parserCache.resize(max);
}
function clearCache() {
    parserCache.clear();
}
module.exports = {
    getParser: getParser,
    setMaxCache: setMaxCache,
    clearCache: clearCache,
    _keyFromFields: keyFromFields
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/text_parser.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Types = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)");
const Charsets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)");
const helpers = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/helpers.js [app-route] (ecmascript)");
const genFunc = __turbopack_require__("[project]/node_modules/.pnpm/generate-function@2.3.1/node_modules/generate-function/index.js [app-route] (ecmascript)");
const parserCache = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/parser_cache.js [app-route] (ecmascript)");
const typeNames = [];
for(const t in Types){
    typeNames[Types[t]] = t;
}
function readCodeFor(type, charset, encodingExpr, config, options) {
    const supportBigNumbers = Boolean(options.supportBigNumbers || config.supportBigNumbers);
    const bigNumberStrings = Boolean(options.bigNumberStrings || config.bigNumberStrings);
    const timezone = options.timezone || config.timezone;
    const dateStrings = options.dateStrings || config.dateStrings;
    switch(type){
        case Types.TINY:
        case Types.SHORT:
        case Types.LONG:
        case Types.INT24:
        case Types.YEAR:
            return 'packet.parseLengthCodedIntNoBigCheck()';
        case Types.LONGLONG:
            if (supportBigNumbers && bigNumberStrings) {
                return 'packet.parseLengthCodedIntString()';
            }
            return `packet.parseLengthCodedInt(${supportBigNumbers})`;
        case Types.FLOAT:
        case Types.DOUBLE:
            return 'packet.parseLengthCodedFloat()';
        case Types.NULL:
            return 'packet.readLengthCodedNumber()';
        case Types.DECIMAL:
        case Types.NEWDECIMAL:
            if (config.decimalNumbers) {
                return 'packet.parseLengthCodedFloat()';
            }
            return 'packet.readLengthCodedString("ascii")';
        case Types.DATE:
            if (helpers.typeMatch(type, dateStrings, Types)) {
                return 'packet.readLengthCodedString("ascii")';
            }
            return `packet.parseDate(${helpers.srcEscape(timezone)})`;
        case Types.DATETIME:
        case Types.TIMESTAMP:
            if (helpers.typeMatch(type, dateStrings, Types)) {
                return 'packet.readLengthCodedString("ascii")';
            }
            return `packet.parseDateTime(${helpers.srcEscape(timezone)})`;
        case Types.TIME:
            return 'packet.readLengthCodedString("ascii")';
        case Types.GEOMETRY:
            return 'packet.parseGeometryValue()';
        case Types.VECTOR:
            return 'packet.parseVector()';
        case Types.JSON:
            // Since for JSON columns mysql always returns charset 63 (BINARY),
            // we have to handle it according to JSON specs and use "utf8",
            // see https://github.com/sidorares/node-mysql2/issues/409
            return config.jsonStrings ? 'packet.readLengthCodedString("utf8")' : 'JSON.parse(packet.readLengthCodedString("utf8"))';
        default:
            if (charset === Charsets.BINARY) {
                return 'packet.readLengthCodedBuffer()';
            }
            return `packet.readLengthCodedString(${encodingExpr})`;
    }
}
function compile(fields, options, config) {
    // use global typeCast if current query doesn't specify one
    if (typeof config.typeCast === 'function' && typeof options.typeCast !== 'function') {
        options.typeCast = config.typeCast;
    }
    function wrap(field, _this) {
        return {
            type: typeNames[field.columnType],
            length: field.columnLength,
            db: field.schema,
            table: field.table,
            name: field.name,
            string: function(encoding = field.encoding) {
                if (field.columnType === Types.JSON && encoding === field.encoding) {
                    // Since for JSON columns mysql always returns charset 63 (BINARY),
                    // we have to handle it according to JSON specs and use "utf8",
                    // see https://github.com/sidorares/node-mysql2/issues/1661
                    console.warn(`typeCast: JSON column "${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \`field.string("utf8")\``);
                }
                return _this.packet.readLengthCodedString(encoding);
            },
            buffer: function() {
                return _this.packet.readLengthCodedBuffer();
            },
            geometry: function() {
                return _this.packet.parseGeometryValue();
            }
        };
    }
    const parserFn = genFunc();
    parserFn('(function () {')('return class TextRow {');
    // constructor method
    parserFn('constructor(fields) {');
    // node-mysql typeCast compatibility wrapper
    // see https://github.com/mysqljs/mysql/blob/96fdd0566b654436624e2375c7b6604b1f50f825/lib/protocol/packets/Field.js
    if (typeof options.typeCast === 'function') {
        parserFn('const _this = this;');
        parserFn('for(let i=0; i<fields.length; ++i) {');
        parserFn('this[`wrap${i}`] = wrap(fields[i], _this);');
        parserFn('}');
    }
    parserFn('}');
    // next method
    parserFn('next(packet, fields, options) {');
    parserFn('this.packet = packet;');
    if (options.rowsAsArray) {
        parserFn(`const result = new Array(${fields.length});`);
    } else {
        parserFn('const result = {};');
    }
    const resultTables = {};
    let resultTablesArray = [];
    if (options.nestTables === true) {
        for(let i = 0; i < fields.length; i++){
            resultTables[fields[i].table] = 1;
        }
        resultTablesArray = Object.keys(resultTables);
        for(let i = 0; i < resultTablesArray.length; i++){
            parserFn(`result[${helpers.fieldEscape(resultTablesArray[i])}] = {};`);
        }
    }
    let lvalue = '';
    let fieldName = '';
    let tableName = '';
    for(let i = 0; i < fields.length; i++){
        fieldName = helpers.fieldEscape(fields[i].name);
        // parserFn(`// ${fieldName}: ${typeNames[fields[i].columnType]}`);
        if (typeof options.nestTables === 'string') {
            lvalue = `result[${helpers.fieldEscape(fields[i].table + options.nestTables + fields[i].name)}]`;
        } else if (options.nestTables === true) {
            tableName = helpers.fieldEscape(fields[i].table);
            parserFn(`if (!result[${tableName}]) result[${tableName}] = {};`);
            lvalue = `result[${tableName}][${fieldName}]`;
        } else if (options.rowsAsArray) {
            lvalue = `result[${i.toString(10)}]`;
        } else {
            lvalue = `result[${fieldName}]`;
        }
        if (options.typeCast === false) {
            parserFn(`${lvalue} = packet.readLengthCodedBuffer();`);
        } else {
            const encodingExpr = `fields[${i}].encoding`;
            const readCode = readCodeFor(fields[i].columnType, fields[i].characterSet, encodingExpr, config, options);
            if (typeof options.typeCast === 'function') {
                parserFn(`${lvalue} = options.typeCast(this.wrap${i}, function() { return ${readCode} });`);
            } else {
                parserFn(`${lvalue} = ${readCode};`);
            }
        }
    }
    parserFn('return result;');
    parserFn('}');
    parserFn('};')('})()');
    if (config.debug) {
        helpers.printDebugWithCode('Compiled text protocol row parser', parserFn.toString());
    }
    if (typeof options.typeCast === 'function') {
        return parserFn.toFunction({
            wrap
        });
    }
    return parserFn.toFunction();
}
function getTextParser(fields, options, config) {
    return parserCache.getParser('text', fields, options, config, compile);
}
module.exports = getTextParser;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/query.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const process = __turbopack_require__("[externals]/ [external] (process, cjs)");
const Timers = __turbopack_require__("[externals]/ [external] (timers, cjs)");
const Readable = __turbopack_require__("[externals]/ [external] (stream, cjs)").Readable;
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const getTextParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/text_parser.js [app-route] (ecmascript)");
const ServerStatus = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/server_status.js [app-route] (ecmascript)");
const EmptyPacket = new Packets.Packet(0, Buffer.allocUnsafe(4), 0, 4);
// http://dev.mysql.com/doc/internals/en/com-query.html
class Query extends Command {
    constructor(options, callback){
        super();
        this.sql = options.sql;
        this.values = options.values;
        this._queryOptions = options;
        this.namedPlaceholders = options.namedPlaceholders || false;
        this.onResult = callback;
        this.timeout = options.timeout;
        this.queryTimeout = null;
        this._fieldCount = 0;
        this._rowParser = null;
        this._fields = [];
        this._rows = [];
        this._receivedFieldsCount = 0;
        this._resultIndex = 0;
        this._localStream = null;
        this._unpipeStream = function() {};
        this._streamFactory = options.infileStreamFactory;
        this._connection = null;
    }
    then() {
        const err = "You have tried to call .then(), .catch(), or invoked await on the result of query that is not a promise, which is a programming error. Try calling con.promise().query(), or require('mysql2/promise') instead of 'mysql2' for a promise-compatible version of the query interface. To learn how to use async/await or Promises check out documentation at https://sidorares.github.io/node-mysql2/docs#using-promise-wrapper, or the mysql2 documentation at https://sidorares.github.io/node-mysql2/docs/documentation/promise-wrapper";
        // eslint-disable-next-line
        console.log(err);
        throw new Error(err);
    }
    /* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */ start(_packet, connection) {
        if (connection.config.debug) {
            // eslint-disable-next-line
            console.log('        Sending query command: %s', this.sql);
        }
        this._connection = connection;
        this.options = Object.assign({}, connection.config, this._queryOptions);
        this._setTimeout();
        const cmdPacket = new Packets.Query(this.sql, connection.config.charsetNumber);
        connection.writePacket(cmdPacket.toPacket(1));
        return Query.prototype.resultsetHeader;
    }
    done() {
        this._unpipeStream();
        // if all ready timeout, return null directly
        if (this.timeout && !this.queryTimeout) {
            return null;
        }
        // else clear timer
        if (this.queryTimeout) {
            Timers.clearTimeout(this.queryTimeout);
            this.queryTimeout = null;
        }
        if (this.onResult) {
            let rows, fields;
            if (this._resultIndex === 0) {
                rows = this._rows[0];
                fields = this._fields[0];
            } else {
                rows = this._rows;
                fields = this._fields;
            }
            if (fields) {
                process.nextTick(()=>{
                    this.onResult(null, rows, fields);
                });
            } else {
                process.nextTick(()=>{
                    this.onResult(null, rows);
                });
            }
        }
        return null;
    }
    doneInsert(rs) {
        if (this._localStreamError) {
            if (this.onResult) {
                this.onResult(this._localStreamError, rs);
            } else {
                this.emit('error', this._localStreamError);
            }
            return null;
        }
        this._rows.push(rs);
        this._fields.push(void 0);
        this.emit('fields', void 0);
        this.emit('result', rs);
        if (rs.serverStatus & ServerStatus.SERVER_MORE_RESULTS_EXISTS) {
            this._resultIndex++;
            return this.resultsetHeader;
        }
        return this.done();
    }
    resultsetHeader(packet, connection) {
        const rs = new Packets.ResultSetHeader(packet, connection);
        this._fieldCount = rs.fieldCount;
        if (connection.config.debug) {
            // eslint-disable-next-line
            console.log(`        Resultset header received, expecting ${rs.fieldCount} column definition packets`);
        }
        if (this._fieldCount === 0) {
            return this.doneInsert(rs);
        }
        if (this._fieldCount === null) {
            return this._streamLocalInfile(connection, rs.infileName);
        }
        this._receivedFieldsCount = 0;
        this._rows.push([]);
        this._fields.push([]);
        return this.readField;
    }
    _streamLocalInfile(connection, path) {
        if (this._streamFactory) {
            this._localStream = this._streamFactory(path);
        } else {
            this._localStreamError = new Error(`As a result of LOCAL INFILE command server wants to read ${path} file, but as of v2.0 you must provide streamFactory option returning ReadStream.`);
            connection.writePacket(EmptyPacket);
            return this.infileOk;
        }
        const onConnectionError = ()=>{
            this._unpipeStream();
        };
        const onDrain = ()=>{
            this._localStream.resume();
        };
        const onPause = ()=>{
            this._localStream.pause();
        };
        const onData = function(data) {
            const dataWithHeader = Buffer.allocUnsafe(data.length + 4);
            data.copy(dataWithHeader, 4);
            connection.writePacket(new Packets.Packet(0, dataWithHeader, 0, dataWithHeader.length));
        };
        const onEnd = ()=>{
            connection.removeListener('error', onConnectionError);
            connection.writePacket(EmptyPacket);
        };
        const onError = (err)=>{
            this._localStreamError = err;
            connection.removeListener('error', onConnectionError);
            connection.writePacket(EmptyPacket);
        };
        this._unpipeStream = ()=>{
            connection.stream.removeListener('pause', onPause);
            connection.stream.removeListener('drain', onDrain);
            this._localStream.removeListener('data', onData);
            this._localStream.removeListener('end', onEnd);
            this._localStream.removeListener('error', onError);
        };
        connection.stream.on('pause', onPause);
        connection.stream.on('drain', onDrain);
        this._localStream.on('data', onData);
        this._localStream.on('end', onEnd);
        this._localStream.on('error', onError);
        connection.once('error', onConnectionError);
        return this.infileOk;
    }
    readField(packet, connection) {
        this._receivedFieldsCount++;
        // Often there is much more data in the column definition than in the row itself
        // If you set manually _fields[0] to array of ColumnDefinition's (from previous call)
        // you can 'cache' result of parsing. Field packets still received, but ignored in that case
        // this is the reason _receivedFieldsCount exist (otherwise we could just use current length of fields array)
        if (this._fields[this._resultIndex].length !== this._fieldCount) {
            const field = new Packets.ColumnDefinition(packet, connection.clientEncoding);
            this._fields[this._resultIndex].push(field);
            if (connection.config.debug) {
                /* eslint-disable no-console */ console.log('        Column definition:');
                console.log(`          name: ${field.name}`);
                console.log(`          type: ${field.columnType}`);
                console.log(`         flags: ${field.flags}`);
            /* eslint-enable no-console */ }
        }
        // last field received
        if (this._receivedFieldsCount === this._fieldCount) {
            const fields = this._fields[this._resultIndex];
            this.emit('fields', fields);
            this._rowParser = new (getTextParser(fields, this.options, connection.config))(fields);
            return Query.prototype.fieldsEOF;
        }
        return Query.prototype.readField;
    }
    fieldsEOF(packet, connection) {
        // check EOF
        if (!packet.isEOF()) {
            return connection.protocolError('Expected EOF packet');
        }
        return this.row;
    }
    /* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */ row(packet, _connection) {
        if (packet.isEOF()) {
            const status = packet.eofStatusFlags();
            const moreResults = status & ServerStatus.SERVER_MORE_RESULTS_EXISTS;
            if (moreResults) {
                this._resultIndex++;
                return Query.prototype.resultsetHeader;
            }
            return this.done();
        }
        let row;
        try {
            row = this._rowParser.next(packet, this._fields[this._resultIndex], this.options);
        } catch (err) {
            this._localStreamError = err;
            return this.doneInsert(null);
        }
        if (this.onResult) {
            this._rows[this._resultIndex].push(row);
        } else {
            this.emit('result', row, this._resultIndex);
        }
        return Query.prototype.row;
    }
    infileOk(packet, connection) {
        const rs = new Packets.ResultSetHeader(packet, connection);
        return this.doneInsert(rs);
    }
    stream(options) {
        options = options || {};
        options.objectMode = true;
        const stream = new Readable(options);
        stream._read = ()=>{
            this._connection && this._connection.resume();
        };
        this.on('result', (row, resultSetIndex)=>{
            if (!stream.push(row)) {
                this._connection.pause();
            }
            stream.emit('result', row, resultSetIndex); // replicate old emitter
        });
        this.on('error', (err)=>{
            stream.emit('error', err); // Pass on any errors
        });
        this.on('end', ()=>{
            stream.push(null); // pushing null, indicating EOF
        });
        this.on('fields', (fields)=>{
            stream.emit('fields', fields); // replicate old emitter
        });
        stream.on('end', ()=>{
            stream.emit('close');
        });
        return stream;
    }
    _setTimeout() {
        if (this.timeout) {
            const timeoutHandler = this._handleTimeoutError.bind(this);
            this.queryTimeout = Timers.setTimeout(timeoutHandler, this.timeout);
        }
    }
    _handleTimeoutError() {
        if (this.queryTimeout) {
            Timers.clearTimeout(this.queryTimeout);
            this.queryTimeout = null;
        }
        const err = new Error('Query inactivity timeout');
        err.errorno = 'PROTOCOL_SEQUENCE_TIMEOUT';
        err.code = 'PROTOCOL_SEQUENCE_TIMEOUT';
        err.syscall = 'query';
        if (this.onResult) {
            this.onResult(err);
        } else {
            this.emit('error', err);
        }
    }
}
Query.prototype.catch = Query.prototype.then;
module.exports = Query;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/close_statement.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
class CloseStatement extends Command {
    constructor(id){
        super();
        this.id = id;
    }
    start(packet, connection) {
        connection.writePacket(new Packets.CloseStatement(this.id).toPacket(1));
        return null;
    }
}
module.exports = CloseStatement;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/binary_parser.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const FieldFlags = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/field_flags.js [app-route] (ecmascript)");
const Charsets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)");
const Types = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)");
const helpers = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/helpers.js [app-route] (ecmascript)");
const genFunc = __turbopack_require__("[project]/node_modules/.pnpm/generate-function@2.3.1/node_modules/generate-function/index.js [app-route] (ecmascript)");
const parserCache = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/parser_cache.js [app-route] (ecmascript)");
const typeNames = [];
for(const t in Types){
    typeNames[Types[t]] = t;
}
function readCodeFor(field, config, options, fieldNum) {
    const supportBigNumbers = Boolean(options.supportBigNumbers || config.supportBigNumbers);
    const bigNumberStrings = Boolean(options.bigNumberStrings || config.bigNumberStrings);
    const timezone = options.timezone || config.timezone;
    const dateStrings = options.dateStrings || config.dateStrings;
    const unsigned = field.flags & FieldFlags.UNSIGNED;
    switch(field.columnType){
        case Types.TINY:
            return unsigned ? 'packet.readInt8();' : 'packet.readSInt8();';
        case Types.SHORT:
            return unsigned ? 'packet.readInt16();' : 'packet.readSInt16();';
        case Types.LONG:
        case Types.INT24:
            return unsigned ? 'packet.readInt32();' : 'packet.readSInt32();';
        case Types.YEAR:
            return 'packet.readInt16()';
        case Types.FLOAT:
            return 'packet.readFloat();';
        case Types.DOUBLE:
            return 'packet.readDouble();';
        case Types.NULL:
            return 'null;';
        case Types.DATE:
        case Types.DATETIME:
        case Types.TIMESTAMP:
        case Types.NEWDATE:
            if (helpers.typeMatch(field.columnType, dateStrings, Types)) {
                return `packet.readDateTimeString(${parseInt(field.decimals, 10)});`;
            }
            return `packet.readDateTime(${helpers.srcEscape(timezone)});`;
        case Types.TIME:
            return 'packet.readTimeString()';
        case Types.DECIMAL:
        case Types.NEWDECIMAL:
            if (config.decimalNumbers) {
                return 'packet.parseLengthCodedFloat();';
            }
            return 'packet.readLengthCodedString("ascii");';
        case Types.GEOMETRY:
            return 'packet.parseGeometryValue();';
        case Types.VECTOR:
            return 'packet.parseVector()';
        case Types.JSON:
            // Since for JSON columns mysql always returns charset 63 (BINARY),
            // we have to handle it according to JSON specs and use "utf8",
            // see https://github.com/sidorares/node-mysql2/issues/409
            return config.jsonStrings ? 'packet.readLengthCodedString("utf8")' : 'JSON.parse(packet.readLengthCodedString("utf8"));';
        case Types.LONGLONG:
            if (!supportBigNumbers) {
                return unsigned ? 'packet.readInt64JSNumber();' : 'packet.readSInt64JSNumber();';
            }
            if (bigNumberStrings) {
                return unsigned ? 'packet.readInt64String();' : 'packet.readSInt64String();';
            }
            return unsigned ? 'packet.readInt64();' : 'packet.readSInt64();';
        default:
            if (field.characterSet === Charsets.BINARY) {
                return 'packet.readLengthCodedBuffer();';
            }
            return `packet.readLengthCodedString(fields[${fieldNum}].encoding)`;
    }
}
function compile(fields, options, config) {
    const parserFn = genFunc();
    const nullBitmapLength = Math.floor((fields.length + 7 + 2) / 8);
    function wrap(field, packet) {
        return {
            type: typeNames[field.columnType],
            length: field.columnLength,
            db: field.schema,
            table: field.table,
            name: field.name,
            string: function(encoding = field.encoding) {
                if (field.columnType === Types.JSON && encoding === field.encoding) {
                    // Since for JSON columns mysql always returns charset 63 (BINARY),
                    // we have to handle it according to JSON specs and use "utf8",
                    // see https://github.com/sidorares/node-mysql2/issues/1661
                    console.warn(`typeCast: JSON column "${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \`field.string("utf8")\``);
                }
                if ([
                    Types.DATETIME,
                    Types.NEWDATE,
                    Types.TIMESTAMP,
                    Types.DATE
                ].includes(field.columnType)) {
                    return packet.readDateTimeString(parseInt(field.decimals, 10));
                }
                if (field.columnType === Types.TINY) {
                    const unsigned = field.flags & FieldFlags.UNSIGNED;
                    return String(unsigned ? packet.readInt8() : packet.readSInt8());
                }
                if (field.columnType === Types.TIME) {
                    return packet.readTimeString();
                }
                return packet.readLengthCodedString(encoding);
            },
            buffer: function() {
                return packet.readLengthCodedBuffer();
            },
            geometry: function() {
                return packet.parseGeometryValue();
            }
        };
    }
    parserFn('(function(){');
    parserFn('return class BinaryRow {');
    parserFn('constructor() {');
    parserFn('}');
    parserFn('next(packet, fields, options) {');
    if (options.rowsAsArray) {
        parserFn(`const result = new Array(${fields.length});`);
    } else {
        parserFn('const result = {};');
    }
    // Global typeCast
    if (typeof config.typeCast === 'function' && typeof options.typeCast !== 'function') {
        options.typeCast = config.typeCast;
    }
    parserFn('packet.readInt8();'); // status byte
    for(let i = 0; i < nullBitmapLength; ++i){
        parserFn(`const nullBitmaskByte${i} = packet.readInt8();`);
    }
    let lvalue = '';
    let currentFieldNullBit = 4;
    let nullByteIndex = 0;
    let fieldName = '';
    let tableName = '';
    for(let i = 0; i < fields.length; i++){
        fieldName = helpers.fieldEscape(fields[i].name);
        // parserFn(`// ${fieldName}: ${typeNames[fields[i].columnType]}`);
        if (typeof options.nestTables === 'string') {
            lvalue = `result[${helpers.fieldEscape(fields[i].table + options.nestTables + fields[i].name)}]`;
        } else if (options.nestTables === true) {
            tableName = helpers.fieldEscape(fields[i].table);
            parserFn(`if (!result[${tableName}]) result[${tableName}] = {};`);
            lvalue = `result[${tableName}][${fieldName}]`;
        } else if (options.rowsAsArray) {
            lvalue = `result[${i.toString(10)}]`;
        } else {
            lvalue = `result[${fieldName}]`;
        }
        parserFn(`if (nullBitmaskByte${nullByteIndex} & ${currentFieldNullBit}) `);
        parserFn(`${lvalue} = null;`);
        parserFn('else {');
        if (options.typeCast === false) {
            parserFn(`${lvalue} = packet.readLengthCodedBuffer();`);
        } else {
            const fieldWrapperVar = `fieldWrapper${i}`;
            parserFn(`const ${fieldWrapperVar} = wrap(fields[${i}], packet);`);
            const readCode = readCodeFor(fields[i], config, options, i);
            if (typeof options.typeCast === 'function') {
                parserFn(`${lvalue} = options.typeCast(${fieldWrapperVar}, function() { return ${readCode} });`);
            } else {
                parserFn(`${lvalue} = ${readCode};`);
            }
        }
        parserFn('}');
        currentFieldNullBit *= 2;
        if (currentFieldNullBit === 0x100) {
            currentFieldNullBit = 1;
            nullByteIndex++;
        }
    }
    parserFn('return result;');
    parserFn('}');
    parserFn('};')('})()');
    if (config.debug) {
        helpers.printDebugWithCode('Compiled binary protocol row parser', parserFn.toString());
    }
    return parserFn.toFunction({
        wrap
    });
}
function getBinaryParser(fields, options, config) {
    return parserCache.getParser('binary', fields, options, config, compile);
}
module.exports = getBinaryParser;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/execute.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Query = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/query.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const getBinaryParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/binary_parser.js [app-route] (ecmascript)");
class Execute extends Command {
    constructor(options, callback){
        super();
        this.statement = options.statement;
        this.sql = options.sql;
        this.values = options.values;
        this.onResult = callback;
        this.parameters = options.values;
        this.insertId = 0;
        this.timeout = options.timeout;
        this.queryTimeout = null;
        this._rows = [];
        this._fields = [];
        this._result = [];
        this._fieldCount = 0;
        this._rowParser = null;
        this._executeOptions = options;
        this._resultIndex = 0;
        this._localStream = null;
        this._unpipeStream = function() {};
        this._streamFactory = options.infileStreamFactory;
        this._connection = null;
    }
    buildParserFromFields(fields, connection) {
        return getBinaryParser(fields, this.options, connection.config);
    }
    start(packet, connection) {
        this._connection = connection;
        this.options = Object.assign({}, connection.config, this._executeOptions);
        this._setTimeout();
        const executePacket = new Packets.Execute(this.statement.id, this.parameters, connection.config.charsetNumber, connection.config.timezone);
        //For reasons why this try-catch is here, please see
        // https://github.com/sidorares/node-mysql2/pull/689
        //For additional discussion, see
        // 1. https://github.com/sidorares/node-mysql2/issues/493
        // 2. https://github.com/sidorares/node-mysql2/issues/187
        // 3. https://github.com/sidorares/node-mysql2/issues/480
        try {
            connection.writePacket(executePacket.toPacket(1));
        } catch (error) {
            this.onResult(error);
        }
        return Execute.prototype.resultsetHeader;
    }
    readField(packet, connection) {
        let fields;
        // disabling for now, but would be great to find reliable way to parse fields only once
        // fields reported by prepare can be empty at all or just incorrect - see #169
        //
        // perfomance optimisation: if we already have this field parsed in statement header, use one from header
        // const field = this.statement.columns.length == this._fieldCount ?
        //  this.statement.columns[this._receivedFieldsCount] : new Packets.ColumnDefinition(packet);
        const field = new Packets.ColumnDefinition(packet, connection.clientEncoding);
        this._receivedFieldsCount++;
        this._fields[this._resultIndex].push(field);
        if (this._receivedFieldsCount === this._fieldCount) {
            fields = this._fields[this._resultIndex];
            this.emit('fields', fields, this._resultIndex);
            return Execute.prototype.fieldsEOF;
        }
        return Execute.prototype.readField;
    }
    fieldsEOF(packet, connection) {
        // check EOF
        if (!packet.isEOF()) {
            return connection.protocolError('Expected EOF packet');
        }
        this._rowParser = new (this.buildParserFromFields(this._fields[this._resultIndex], connection))();
        return Execute.prototype.row;
    }
}
Execute.prototype.done = Query.prototype.done;
Execute.prototype.doneInsert = Query.prototype.doneInsert;
Execute.prototype.resultsetHeader = Query.prototype.resultsetHeader;
Execute.prototype._findOrCreateReadStream = Query.prototype._findOrCreateReadStream;
Execute.prototype._streamLocalInfile = Query.prototype._streamLocalInfile;
Execute.prototype._setTimeout = Query.prototype._setTimeout;
Execute.prototype._handleTimeoutError = Query.prototype._handleTimeoutError;
Execute.prototype.row = Query.prototype.row;
Execute.prototype.stream = Query.prototype.stream;
module.exports = Execute;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/prepare.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const CloseStatement = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/close_statement.js [app-route] (ecmascript)");
const Execute = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/execute.js [app-route] (ecmascript)");
class PreparedStatementInfo {
    constructor(query, id, columns, parameters, connection){
        this.query = query;
        this.id = id;
        this.columns = columns;
        this.parameters = parameters;
        this.rowParser = null;
        this._connection = connection;
    }
    close() {
        return this._connection.addCommand(new CloseStatement(this.id));
    }
    execute(parameters, callback) {
        if (typeof parameters === 'function') {
            callback = parameters;
            parameters = [];
        }
        return this._connection.addCommand(new Execute({
            statement: this,
            values: parameters
        }, callback));
    }
}
class Prepare extends Command {
    constructor(options, callback){
        super();
        this.query = options.sql;
        this.onResult = callback;
        this.id = 0;
        this.fieldCount = 0;
        this.parameterCount = 0;
        this.fields = [];
        this.parameterDefinitions = [];
        this.options = options;
    }
    start(packet, connection) {
        const Connection = connection.constructor;
        this.key = Connection.statementKey(this.options);
        const statement = connection._statements.get(this.key);
        if (statement) {
            if (this.onResult) {
                this.onResult(null, statement);
            }
            return null;
        }
        const cmdPacket = new Packets.PrepareStatement(this.query, connection.config.charsetNumber, this.options.values);
        connection.writePacket(cmdPacket.toPacket(1));
        return Prepare.prototype.prepareHeader;
    }
    prepareHeader(packet, connection) {
        const header = new Packets.PreparedStatementHeader(packet);
        this.id = header.id;
        this.fieldCount = header.fieldCount;
        this.parameterCount = header.parameterCount;
        if (this.parameterCount > 0) {
            return Prepare.prototype.readParameter;
        }
        if (this.fieldCount > 0) {
            return Prepare.prototype.readField;
        }
        return this.prepareDone(connection);
    }
    readParameter(packet, connection) {
        // there might be scenarios when mysql server reports more parameters than
        // are actually present in the array of parameter definitions.
        // if EOF packet is received we switch to "read fields" state if there are
        // any fields reported by the server, otherwise we finish the command.
        if (packet.isEOF()) {
            if (this.fieldCount > 0) {
                return Prepare.prototype.readField;
            }
            return this.prepareDone(connection);
        }
        const def = new Packets.ColumnDefinition(packet, connection.clientEncoding);
        this.parameterDefinitions.push(def);
        if (this.parameterDefinitions.length === this.parameterCount) {
            return Prepare.prototype.parametersEOF;
        }
        return this.readParameter;
    }
    readField(packet, connection) {
        if (packet.isEOF()) {
            return this.prepareDone(connection);
        }
        const def = new Packets.ColumnDefinition(packet, connection.clientEncoding);
        this.fields.push(def);
        if (this.fields.length === this.fieldCount) {
            return Prepare.prototype.fieldsEOF;
        }
        return Prepare.prototype.readField;
    }
    parametersEOF(packet, connection) {
        if (!packet.isEOF()) {
            return connection.protocolError('Expected EOF packet after parameters');
        }
        if (this.fieldCount > 0) {
            return Prepare.prototype.readField;
        }
        return this.prepareDone(connection);
    }
    fieldsEOF(packet, connection) {
        if (!packet.isEOF()) {
            return connection.protocolError('Expected EOF packet after fields');
        }
        return this.prepareDone(connection);
    }
    prepareDone(connection) {
        const statement = new PreparedStatementInfo(this.query, this.id, this.fields, this.parameterDefinitions, connection);
        connection._statements.set(this.key, statement);
        if (this.onResult) {
            this.onResult(null, statement);
        }
        return null;
    }
}
module.exports = Prepare;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/ping.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const CommandCode = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
// TODO: time statistics?
// usefull for queue size and network latency monitoring
// store created,sent,reply timestamps
class Ping extends Command {
    constructor(callback){
        super();
        this.onResult = callback;
    }
    start(packet, connection) {
        const ping = new Packet(0, Buffer.from([
            1,
            0,
            0,
            0,
            CommandCode.PING
        ]), 0, 5);
        connection.writePacket(ping);
        return Ping.prototype.pingResponse;
    }
    pingResponse() {
        // TODO: check it's OK packet. error check already done in caller
        if (this.onResult) {
            process.nextTick(this.onResult.bind(this));
        }
        return null;
    }
}
module.exports = Ping;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/register_slave.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
class RegisterSlave extends Command {
    constructor(opts, callback){
        super();
        this.onResult = callback;
        this.opts = opts;
    }
    start(packet, connection) {
        const newPacket = new Packets.RegisterSlave(this.opts);
        connection.writePacket(newPacket.toPacket(1));
        return RegisterSlave.prototype.registerResponse;
    }
    registerResponse() {
        if (this.onResult) {
            process.nextTick(this.onResult.bind(this));
        }
        return null;
    }
}
module.exports = RegisterSlave;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binlog_query_statusvars.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// http://dev.mysql.com/doc/internals/en/query-event.html
const keys = {
    FLAGS2: 0,
    SQL_MODE: 1,
    CATALOG: 2,
    AUTO_INCREMENT: 3,
    CHARSET: 4,
    TIME_ZONE: 5,
    CATALOG_NZ: 6,
    LC_TIME_NAMES: 7,
    CHARSET_DATABASE: 8,
    TABLE_MAP_FOR_UPDATE: 9,
    MASTER_DATA_WRITTEN: 10,
    INVOKERS: 11,
    UPDATED_DB_NAMES: 12,
    MICROSECONDS: 3
};
module.exports = function parseStatusVars(buffer) {
    const result = {};
    let offset = 0;
    let key, length, prevOffset;
    while(offset < buffer.length){
        key = buffer[offset++];
        switch(key){
            case keys.FLAGS2:
                result.flags = buffer.readUInt32LE(offset);
                offset += 4;
                break;
            case keys.SQL_MODE:
                // value is 8 bytes, but all dcumented flags are in first 4 bytes
                result.sqlMode = buffer.readUInt32LE(offset);
                offset += 8;
                break;
            case keys.CATALOG:
                length = buffer[offset++];
                result.catalog = buffer.toString('utf8', offset, offset + length);
                offset += length + 1; // null byte after string
                break;
            case keys.CHARSET:
                result.clientCharset = buffer.readUInt16LE(offset);
                result.connectionCollation = buffer.readUInt16LE(offset + 2);
                result.serverCharset = buffer.readUInt16LE(offset + 4);
                offset += 6;
                break;
            case keys.TIME_ZONE:
                length = buffer[offset++];
                result.timeZone = buffer.toString('utf8', offset, offset + length);
                offset += length; // no null byte
                break;
            case keys.CATALOG_NZ:
                length = buffer[offset++];
                result.catalogNz = buffer.toString('utf8', offset, offset + length);
                offset += length; // no null byte
                break;
            case keys.LC_TIME_NAMES:
                result.lcTimeNames = buffer.readUInt16LE(offset);
                offset += 2;
                break;
            case keys.CHARSET_DATABASE:
                result.schemaCharset = buffer.readUInt16LE(offset);
                offset += 2;
                break;
            case keys.TABLE_MAP_FOR_UPDATE:
                result.mapForUpdate1 = buffer.readUInt32LE(offset);
                result.mapForUpdate2 = buffer.readUInt32LE(offset + 4);
                offset += 8;
                break;
            case keys.MASTER_DATA_WRITTEN:
                result.masterDataWritten = buffer.readUInt32LE(offset);
                offset += 4;
                break;
            case keys.INVOKERS:
                length = buffer[offset++];
                result.invokerUsername = buffer.toString('utf8', offset, offset + length);
                offset += length;
                length = buffer[offset++];
                result.invokerHostname = buffer.toString('utf8', offset, offset + length);
                offset += length;
                break;
            case keys.UPDATED_DB_NAMES:
                length = buffer[offset++];
                // length - number of null-terminated strings
                result.updatedDBs = []; // we'll store them as array here
                for(; length; --length){
                    prevOffset = offset;
                    // fast forward to null terminating byte
                    while(buffer[offset++] && offset < buffer.length){
                    // empty body, everything inside while condition
                    }
                    result.updatedDBs.push(buffer.toString('utf8', prevOffset, offset - 1));
                }
                break;
            case keys.MICROSECONDS:
                result.microseconds = // REVIEW: INVALID UNKNOWN VARIABLE!
                buffer.readInt16LE(offset) + (buffer[offset + 2] << 16);
                offset += 3;
        }
    }
    return result;
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/binlog_dump.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const eventParsers = [];
class BinlogEventHeader {
    constructor(packet){
        this.timestamp = packet.readInt32();
        this.eventType = packet.readInt8();
        this.serverId = packet.readInt32();
        this.eventSize = packet.readInt32();
        this.logPos = packet.readInt32();
        this.flags = packet.readInt16();
    }
}
class BinlogDump extends Command {
    constructor(opts){
        super();
        // this.onResult = callback;
        this.opts = opts;
    }
    start(packet, connection) {
        const newPacket = new Packets.BinlogDump(this.opts);
        connection.writePacket(newPacket.toPacket(1));
        return BinlogDump.prototype.binlogData;
    }
    binlogData(packet) {
        // ok - continue consuming events
        // error - error
        // eof - end of binlog
        if (packet.isEOF()) {
            this.emit('eof');
            return null;
        }
        // binlog event header
        packet.readInt8();
        const header = new BinlogEventHeader(packet);
        const EventParser = eventParsers[header.eventType];
        let event;
        if (EventParser) {
            event = new EventParser(packet);
        } else {
            event = {
                name: 'UNKNOWN'
            };
        }
        event.header = header;
        this.emit('event', event);
        return BinlogDump.prototype.binlogData;
    }
}
class RotateEvent {
    constructor(packet){
        this.pposition = packet.readInt32();
        // TODO: read uint64 here
        packet.readInt32(); // positionDword2
        this.nextBinlog = packet.readString();
        this.name = 'RotateEvent';
    }
}
class FormatDescriptionEvent {
    constructor(packet){
        this.binlogVersion = packet.readInt16();
        this.serverVersion = packet.readString(50).replace(/\u0000.*/, ''); // eslint-disable-line no-control-regex
        this.createTimestamp = packet.readInt32();
        this.eventHeaderLength = packet.readInt8(); // should be 19
        this.eventsLength = packet.readBuffer();
        this.name = 'FormatDescriptionEvent';
    }
}
class QueryEvent {
    constructor(packet){
        const parseStatusVars = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/binlog_query_statusvars.js [app-route] (ecmascript)");
        this.slaveProxyId = packet.readInt32();
        this.executionTime = packet.readInt32();
        const schemaLength = packet.readInt8();
        this.errorCode = packet.readInt16();
        const statusVarsLength = packet.readInt16();
        const statusVars = packet.readBuffer(statusVarsLength);
        this.schema = packet.readString(schemaLength);
        packet.readInt8(); // should be zero
        this.statusVars = parseStatusVars(statusVars);
        this.query = packet.readString();
        this.name = 'QueryEvent';
    }
}
class XidEvent {
    constructor(packet){
        this.binlogVersion = packet.readInt16();
        this.xid = packet.readInt64();
        this.name = 'XidEvent';
    }
}
eventParsers[2] = QueryEvent;
eventParsers[4] = RotateEvent;
eventParsers[15] = FormatDescriptionEvent;
eventParsers[16] = XidEvent;
module.exports = BinlogDump;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/change_user.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on September 21, 2021.
// The changes involve saving additional authentication factor passwords
// in the command scope and enabling multi-factor authentication in the
// client-side when the server supports it.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const ClientHandshake = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/client_handshake.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
class ChangeUser extends Command {
    constructor(options, callback){
        super();
        this.onResult = callback;
        this.user = options.user;
        this.password = options.password;
        // "password1" is an alias of "password"
        this.password1 = options.password;
        this.password2 = options.password2;
        this.password3 = options.password3;
        this.database = options.database;
        this.passwordSha1 = options.passwordSha1;
        this.charsetNumber = options.charsetNumber;
        this.currentConfig = options.currentConfig;
        this.authenticationFactor = 0;
    }
    start(packet, connection) {
        const newPacket = new Packets.ChangeUser({
            flags: connection.config.clientFlags,
            user: this.user,
            database: this.database,
            charsetNumber: this.charsetNumber,
            password: this.password,
            passwordSha1: this.passwordSha1,
            authPluginData1: connection._handshakePacket.authPluginData1,
            authPluginData2: connection._handshakePacket.authPluginData2
        });
        this.currentConfig.user = this.user;
        this.currentConfig.password = this.password;
        this.currentConfig.database = this.database;
        this.currentConfig.charsetNumber = this.charsetNumber;
        connection.clientEncoding = CharsetToEncoding[this.charsetNumber];
        // clear prepared statements cache as all statements become invalid after changeUser
        connection._statements.clear();
        connection.writePacket(newPacket.toPacket());
        // check if the server supports multi-factor authentication
        const multiFactorAuthentication = connection.serverCapabilityFlags & ClientConstants.MULTI_FACTOR_AUTHENTICATION;
        if (multiFactorAuthentication) {
            // if the server supports multi-factor authentication, we enable it in
            // the client
            this.authenticationFactor = 1;
        }
        return ChangeUser.prototype.handshakeResult;
    }
}
ChangeUser.prototype.handshakeResult = ClientHandshake.prototype.handshakeResult;
ChangeUser.prototype.calculateNativePasswordAuthToken = ClientHandshake.prototype.calculateNativePasswordAuthToken;
module.exports = ChangeUser;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/quit.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Command = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/command.js [app-route] (ecmascript)");
const CommandCode = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/commands.js [app-route] (ecmascript)");
const Packet = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/packet.js [app-route] (ecmascript)");
class Quit extends Command {
    constructor(callback){
        super();
        this.onResult = callback;
    }
    start(packet, connection) {
        connection._closing = true;
        const quit = new Packet(0, Buffer.from([
            1,
            0,
            0,
            0,
            CommandCode.QUIT
        ]), 0, 5);
        if (this.onResult) {
            this.onResult();
        }
        connection.writePacket(quit);
        return null;
    }
}
module.exports = Quit;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const ClientHandshake = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/client_handshake.js [app-route] (ecmascript)");
const ServerHandshake = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/server_handshake.js [app-route] (ecmascript)");
const Query = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/query.js [app-route] (ecmascript)");
const Prepare = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/prepare.js [app-route] (ecmascript)");
const CloseStatement = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/close_statement.js [app-route] (ecmascript)");
const Execute = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/execute.js [app-route] (ecmascript)");
const Ping = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/ping.js [app-route] (ecmascript)");
const RegisterSlave = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/register_slave.js [app-route] (ecmascript)");
const BinlogDump = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/binlog_dump.js [app-route] (ecmascript)");
const ChangeUser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/change_user.js [app-route] (ecmascript)");
const Quit = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/quit.js [app-route] (ecmascript)");
module.exports = {
    ClientHandshake,
    ServerHandshake,
    Query,
    Prepare,
    CloseStatement,
    Execute,
    Ping,
    RegisterSlave,
    BinlogDump,
    ChangeUser,
    Quit
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/package.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"name\":\"mysql2\",\"version\":\"3.11.4\",\"description\":\"fast mysql driver. Implements core protocol, prepared statements, ssl and compression in native JS\",\"main\":\"index.js\",\"typings\":\"typings/mysql/index\",\"scripts\":{\"lint\":\"npm run lint:docs && npm run lint:code\",\"lint:code\":\"eslint index.js promise.js index.d.ts promise.d.ts \\\"typings/**/*.ts\\\" \\\"lib/**/*.js\\\" \\\"test/**/*.{js,cjs,mjs,ts}\\\" \\\"benchmarks/**/*.js\\\"\",\"lint:docs\":\"eslint Contributing.md README.md\",\"lint:typings\":\"npx prettier --check ./typings\",\"lint:tests\":\"npx prettier --check ./test\",\"test\":\"poku --debug --include=\\\"test/esm,test/unit,test/integration\\\"\",\"test:bun\":\"poku --debug --platform=\\\"bun\\\" --include=\\\"test/esm,test/unit,test/integration\\\"\",\"test:deno\":\"deno run --allow-read --allow-env --allow-run npm:poku --debug --platform=\\\"deno\\\" --deno-allow=\\\"read,env,net,sys\\\" --deno-cjs=\\\".js,.cjs\\\" --include=\\\"test/esm,test/unit,test/integration\\\"\",\"test:tsc-build\":\"cd \\\"test/tsc-build\\\" && npx tsc -p \\\"tsconfig.json\\\"\",\"coverage-test\":\"c8 npm run test\",\"benchmark\":\"node ./benchmarks/benchmark.js\",\"prettier\":\"prettier --single-quote --trailing-comma none --write \\\"{lib,test}/**/*.js\\\"\",\"prettier:docs\":\"prettier --single-quote --trailing-comma none --write README.md\",\"precommit\":\"lint-staged\",\"eslint-check\":\"eslint --print-config .eslintrc | eslint-config-prettier-check\",\"wait-port\":\"wait-on\"},\"lint-staged\":{\"*.js\":[\"prettier --single-quote --trailing-comma none --write\",\"git add\"]},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/sidorares/node-mysql2\"},\"homepage\":\"https://sidorares.github.io/node-mysql2/docs\",\"keywords\":[\"mysql\",\"client\",\"server\"],\"files\":[\"lib\",\"typings/mysql\",\"index.js\",\"index.d.ts\",\"promise.js\",\"promise.d.ts\"],\"exports\":{\".\":\"./index.js\",\"./package.json\":\"./package.json\",\"./promise\":\"./promise.js\",\"./promise.js\":\"./promise.js\"},\"engines\":{\"node\":\">= 8.0\"},\"author\":\"Andrey Sidorov <andrey.sidorov@gmail.com>\",\"license\":\"MIT\",\"dependencies\":{\"aws-ssl-profiles\":\"^1.1.1\",\"denque\":\"^2.1.0\",\"generate-function\":\"^2.3.1\",\"iconv-lite\":\"^0.6.3\",\"long\":\"^5.2.1\",\"lru.min\":\"^1.0.0\",\"named-placeholders\":\"^1.1.3\",\"seq-queue\":\"^0.0.5\",\"sqlstring\":\"^2.3.2\"},\"devDependencies\":{\"@types/node\":\"^22.0.0\",\"@typescript-eslint/eslint-plugin\":\"^5.42.1\",\"@typescript-eslint/parser\":\"^5.42.1\",\"assert-diff\":\"^3.0.2\",\"benchmark\":\"^2.1.4\",\"c8\":\"^10.1.1\",\"error-stack-parser\":\"^2.0.3\",\"eslint\":\"^8.27.0\",\"eslint-config-prettier\":\"^9.0.0\",\"eslint-plugin-async-await\":\"0.0.0\",\"eslint-plugin-markdown\":\"^5.0.0\",\"lint-staged\":\"^15.0.1\",\"poku\":\"^2.0.0\",\"portfinder\":\"^1.0.28\",\"prettier\":\"^3.0.0\",\"progress\":\"^2.0.3\",\"typescript\":\"^5.0.2\"}}"));}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/ssl_profiles.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const awsCaBundle = __turbopack_require__("[project]/node_modules/.pnpm/aws-ssl-profiles@1.1.2/node_modules/aws-ssl-profiles/lib/index.js [app-route] (ecmascript)");
/**
 * @deprecated
 * Please, use [**aws-ssl-profiles**](https://github.com/mysqljs/aws-ssl-profiles).
 */ exports['Amazon RDS'] = {
    ca: awsCaBundle.ca
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection_config.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on September 21, 2021.
// New connection options for additional authentication factors were
// introduced.
// Multi-factor authentication capability is now enabled if one of these
// options is used.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const { URL } = __turbopack_require__("[externals]/ [external] (url, cjs)");
const ClientConstants = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/client.js [app-route] (ecmascript)");
const Charsets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)");
const { version } = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/package.json (json)");
let SSLProfiles = null;
const validOptions = {
    authPlugins: 1,
    authSwitchHandler: 1,
    bigNumberStrings: 1,
    charset: 1,
    charsetNumber: 1,
    compress: 1,
    connectAttributes: 1,
    connectTimeout: 1,
    database: 1,
    dateStrings: 1,
    debug: 1,
    decimalNumbers: 1,
    enableKeepAlive: 1,
    flags: 1,
    host: 1,
    insecureAuth: 1,
    infileStreamFactory: 1,
    isServer: 1,
    keepAliveInitialDelay: 1,
    localAddress: 1,
    maxPreparedStatements: 1,
    multipleStatements: 1,
    namedPlaceholders: 1,
    nestTables: 1,
    password: 1,
    // with multi-factor authentication, the main password (used for the first
    // authentication factor) can be provided via password1
    password1: 1,
    password2: 1,
    password3: 1,
    passwordSha1: 1,
    pool: 1,
    port: 1,
    queryFormat: 1,
    rowsAsArray: 1,
    socketPath: 1,
    ssl: 1,
    stream: 1,
    stringifyObjects: 1,
    supportBigNumbers: 1,
    timezone: 1,
    trace: 1,
    typeCast: 1,
    uri: 1,
    user: 1,
    // These options are used for Pool
    connectionLimit: 1,
    maxIdle: 1,
    idleTimeout: 1,
    Promise: 1,
    queueLimit: 1,
    waitForConnections: 1,
    jsonStrings: 1
};
class ConnectionConfig {
    constructor(options){
        if (typeof options === 'string') {
            options = ConnectionConfig.parseUrl(options);
        } else if (options && options.uri) {
            const uriOptions = ConnectionConfig.parseUrl(options.uri);
            for(const key in uriOptions){
                if (!Object.prototype.hasOwnProperty.call(uriOptions, key)) continue;
                if (options[key]) continue;
                options[key] = uriOptions[key];
            }
        }
        for(const key in options){
            if (!Object.prototype.hasOwnProperty.call(options, key)) continue;
            if (validOptions[key] !== 1) {
                // REVIEW: Should this be emitted somehow?
                // eslint-disable-next-line no-console
                console.error(`Ignoring invalid configuration option passed to Connection: ${key}. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection`);
            }
        }
        this.isServer = options.isServer;
        this.stream = options.stream;
        this.host = options.host || 'localhost';
        this.port = (typeof options.port === 'string' ? parseInt(options.port, 10) : options.port) || 3306;
        this.localAddress = options.localAddress;
        this.socketPath = options.socketPath;
        this.user = options.user || undefined;
        // for the purpose of multi-factor authentication, or not, the main
        // password (used for the 1st authentication factor) can also be
        // provided via the "password1" option
        this.password = options.password || options.password1 || undefined;
        this.password2 = options.password2 || undefined;
        this.password3 = options.password3 || undefined;
        this.passwordSha1 = options.passwordSha1 || undefined;
        this.database = options.database;
        this.connectTimeout = isNaN(options.connectTimeout) ? 10 * 1000 : options.connectTimeout;
        this.insecureAuth = options.insecureAuth || false;
        this.infileStreamFactory = options.infileStreamFactory || undefined;
        this.supportBigNumbers = options.supportBigNumbers || false;
        this.bigNumberStrings = options.bigNumberStrings || false;
        this.decimalNumbers = options.decimalNumbers || false;
        this.dateStrings = options.dateStrings || false;
        this.debug = options.debug;
        this.trace = options.trace !== false;
        this.stringifyObjects = options.stringifyObjects || false;
        this.enableKeepAlive = options.enableKeepAlive !== false;
        this.keepAliveInitialDelay = options.keepAliveInitialDelay;
        if (options.timezone && !/^(?:local|Z|[ +-]\d\d:\d\d)$/.test(options.timezone)) {
            // strictly supports timezones specified by mysqljs/mysql:
            // https://github.com/mysqljs/mysql#user-content-connection-options
            // eslint-disable-next-line no-console
            console.error(`Ignoring invalid timezone passed to Connection: ${options.timezone}. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection`);
            // SqlStrings falls back to UTC on invalid timezone
            this.timezone = 'Z';
        } else {
            this.timezone = options.timezone || 'local';
        }
        this.queryFormat = options.queryFormat;
        this.pool = options.pool || undefined;
        this.ssl = typeof options.ssl === 'string' ? ConnectionConfig.getSSLProfile(options.ssl) : options.ssl || false;
        this.multipleStatements = options.multipleStatements || false;
        this.rowsAsArray = options.rowsAsArray || false;
        this.namedPlaceholders = options.namedPlaceholders || false;
        this.nestTables = options.nestTables === undefined ? undefined : options.nestTables;
        this.typeCast = options.typeCast === undefined ? true : options.typeCast;
        if (this.timezone[0] === ' ') {
            // "+" is a url encoded char for space so it
            // gets translated to space when giving a
            // connection string..
            this.timezone = `+${this.timezone.slice(1)}`;
        }
        if (this.ssl) {
            if (typeof this.ssl !== 'object') {
                throw new TypeError(`SSL profile must be an object, instead it's a ${typeof this.ssl}`);
            }
            // Default rejectUnauthorized to true
            this.ssl.rejectUnauthorized = this.ssl.rejectUnauthorized !== false;
        }
        this.maxPacketSize = 0;
        this.charsetNumber = options.charset ? ConnectionConfig.getCharsetNumber(options.charset) : options.charsetNumber || Charsets.UTF8MB4_UNICODE_CI;
        this.compress = options.compress || false;
        this.authPlugins = options.authPlugins;
        this.authSwitchHandler = options.authSwitchHandler;
        this.clientFlags = ConnectionConfig.mergeFlags(ConnectionConfig.getDefaultFlags(options), options.flags || '');
        // Default connection attributes
        // https://dev.mysql.com/doc/refman/8.0/en/performance-schema-connection-attribute-tables.html
        const defaultConnectAttributes = {
            _client_name: 'Node-MySQL-2',
            _client_version: version
        };
        this.connectAttributes = {
            ...defaultConnectAttributes,
            ...options.connectAttributes || {}
        };
        this.maxPreparedStatements = options.maxPreparedStatements || 16000;
        this.jsonStrings = options.jsonStrings || false;
    }
    static mergeFlags(default_flags, user_flags) {
        let flags = 0x0, i;
        if (!Array.isArray(user_flags)) {
            user_flags = String(user_flags || '').toUpperCase().split(/\s*,+\s*/);
        }
        // add default flags unless "blacklisted"
        for(i in default_flags){
            if (user_flags.indexOf(`-${default_flags[i]}`) >= 0) {
                continue;
            }
            flags |= ClientConstants[default_flags[i]] || 0x0;
        }
        // add user flags unless already already added
        for(i in user_flags){
            if (user_flags[i][0] === '-') {
                continue;
            }
            if (default_flags.indexOf(user_flags[i]) >= 0) {
                continue;
            }
            flags |= ClientConstants[user_flags[i]] || 0x0;
        }
        return flags;
    }
    static getDefaultFlags(options) {
        const defaultFlags = [
            'LONG_PASSWORD',
            'FOUND_ROWS',
            'LONG_FLAG',
            'CONNECT_WITH_DB',
            'ODBC',
            'LOCAL_FILES',
            'IGNORE_SPACE',
            'PROTOCOL_41',
            'IGNORE_SIGPIPE',
            'TRANSACTIONS',
            'RESERVED',
            'SECURE_CONNECTION',
            'MULTI_RESULTS',
            'TRANSACTIONS',
            'SESSION_TRACK',
            'CONNECT_ATTRS'
        ];
        if (options && options.multipleStatements) {
            defaultFlags.push('MULTI_STATEMENTS');
        }
        defaultFlags.push('PLUGIN_AUTH');
        defaultFlags.push('PLUGIN_AUTH_LENENC_CLIENT_DATA');
        return defaultFlags;
    }
    static getCharsetNumber(charset) {
        const num = Charsets[charset.toUpperCase()];
        if (num === undefined) {
            throw new TypeError(`Unknown charset '${charset}'`);
        }
        return num;
    }
    static getSSLProfile(name) {
        if (!SSLProfiles) {
            SSLProfiles = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/ssl_profiles.js [app-route] (ecmascript)");
        }
        const ssl = SSLProfiles[name];
        if (ssl === undefined) {
            throw new TypeError(`Unknown SSL profile '${name}'`);
        }
        return ssl;
    }
    static parseUrl(url) {
        const parsedUrl = new URL(url);
        const options = {
            host: decodeURIComponent(parsedUrl.hostname),
            port: parseInt(parsedUrl.port, 10),
            database: decodeURIComponent(parsedUrl.pathname.slice(1)),
            user: decodeURIComponent(parsedUrl.username),
            password: decodeURIComponent(parsedUrl.password)
        };
        parsedUrl.searchParams.forEach((value, key)=>{
            try {
                // Try to parse this as a JSON expression first
                options[key] = JSON.parse(value);
            } catch (err) {
                // Otherwise assume it is a plain string
                options[key] = value;
            }
        });
        return options;
    }
}
module.exports = ConnectionConfig;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// This file was modified by Oracle on June 1, 2021.
// The changes involve new logic to handle an additional ERR Packet sent by
// the MySQL server when the connection is closed unexpectedly.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
// This file was modified by Oracle on June 17, 2021.
// The changes involve logic to ensure the socket connection is closed when
// there is a fatal error.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
// This file was modified by Oracle on September 21, 2021.
// The changes involve passing additional authentication factor passwords
// to the ChangeUser Command instance.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.
'use strict';
const Net = __turbopack_require__("[externals]/ [external] (net, cjs)");
const Tls = __turbopack_require__("[externals]/ [external] (tls, cjs)");
const Timers = __turbopack_require__("[externals]/ [external] (timers, cjs)");
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
const Readable = __turbopack_require__("[externals]/ [external] (stream, cjs)").Readable;
const Queue = __turbopack_require__("[project]/node_modules/.pnpm/denque@2.1.0/node_modules/denque/index.js [app-route] (ecmascript)");
const SqlString = __turbopack_require__("[project]/node_modules/.pnpm/sqlstring@2.3.3/node_modules/sqlstring/index.js [app-route] (ecmascript)");
const { createLRU } = __turbopack_require__("[project]/node_modules/.pnpm/lru.min@1.1.1/node_modules/lru.min/lib/index.js [app-route] (ecmascript)");
const PacketParser = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packet_parser.js [app-route] (ecmascript)");
const Packets = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/packets/index.js [app-route] (ecmascript)");
const Commands = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/commands/index.js [app-route] (ecmascript)");
const ConnectionConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection_config.js [app-route] (ecmascript)");
const CharsetToEncoding = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)");
let _connectionId = 0;
let convertNamedPlaceholders = null;
class Connection extends EventEmitter {
    constructor(opts){
        super();
        this.config = opts.config;
        // TODO: fill defaults
        // if no params, connect to /var/lib/mysql/mysql.sock ( /tmp/mysql.sock on OSX )
        // if host is given, connect to host:3306
        // TODO: use `/usr/local/mysql/bin/mysql_config --socket` output? as default socketPath
        // if there is no host/port and no socketPath parameters?
        if (!opts.config.stream) {
            if (opts.config.socketPath) {
                this.stream = Net.connect(opts.config.socketPath);
            } else {
                this.stream = Net.connect(opts.config.port, opts.config.host);
                // Optionally enable keep-alive on the socket.
                if (this.config.enableKeepAlive) {
                    this.stream.on('connect', ()=>{
                        this.stream.setKeepAlive(true, this.config.keepAliveInitialDelay);
                    });
                }
                // Enable TCP_NODELAY flag. This is needed so that the network packets
                // are sent immediately to the server
                this.stream.setNoDelay(true);
            }
        // if stream is a function, treat it as "stream agent / factory"
        } else if (typeof opts.config.stream === 'function') {
            this.stream = opts.config.stream(opts);
        } else {
            this.stream = opts.config.stream;
        }
        this._internalId = _connectionId++;
        this._commands = new Queue();
        this._command = null;
        this._paused = false;
        this._paused_packets = new Queue();
        this._statements = createLRU({
            max: this.config.maxPreparedStatements,
            onEviction: function(_, statement) {
                statement.close();
            }
        });
        this.serverCapabilityFlags = 0;
        this.authorized = false;
        this.sequenceId = 0;
        this.compressedSequenceId = 0;
        this.threadId = null;
        this._handshakePacket = null;
        this._fatalError = null;
        this._protocolError = null;
        this._outOfOrderPackets = [];
        this.clientEncoding = CharsetToEncoding[this.config.charsetNumber];
        this.stream.on('error', this._handleNetworkError.bind(this));
        // see https://gist.github.com/khoomeister/4985691#use-that-instead-of-bind
        this.packetParser = new PacketParser((p)=>{
            this.handlePacket(p);
        });
        this.stream.on('data', (data)=>{
            if (this.connectTimeout) {
                Timers.clearTimeout(this.connectTimeout);
                this.connectTimeout = null;
            }
            this.packetParser.execute(data);
        });
        this.stream.on('end', ()=>{
            // emit the end event so that the pooled connection can close the connection
            this.emit('end');
        });
        this.stream.on('close', ()=>{
            // we need to set this flag everywhere where we want connection to close
            if (this._closing) {
                return;
            }
            if (!this._protocolError) {
                // no particular error message before disconnect
                this._protocolError = new Error('Connection lost: The server closed the connection.');
                this._protocolError.fatal = true;
                this._protocolError.code = 'PROTOCOL_CONNECTION_LOST';
            }
            this._notifyError(this._protocolError);
        });
        let handshakeCommand;
        if (!this.config.isServer) {
            handshakeCommand = new Commands.ClientHandshake(this.config.clientFlags);
            handshakeCommand.on('end', ()=>{
                // this happens when handshake finishes early either because there was
                // some fatal error or the server sent an error packet instead of
                // an hello packet (for example, 'Too many connections' error)
                if (!handshakeCommand.handshake || this._fatalError || this._protocolError) {
                    return;
                }
                this._handshakePacket = handshakeCommand.handshake;
                this.threadId = handshakeCommand.handshake.connectionId;
                this.emit('connect', handshakeCommand.handshake);
            });
            handshakeCommand.on('error', (err)=>{
                this._closing = true;
                this._notifyError(err);
            });
            this.addCommand(handshakeCommand);
        }
        // in case there was no initial handshake but we need to read sting, assume it utf-8
        // most common example: "Too many connections" error ( packet is sent immediately on connection attempt, we don't know server encoding yet)
        // will be overwritten with actual encoding value as soon as server handshake packet is received
        this.serverEncoding = 'utf8';
        if (this.config.connectTimeout) {
            const timeoutHandler = this._handleTimeoutError.bind(this);
            this.connectTimeout = Timers.setTimeout(timeoutHandler, this.config.connectTimeout);
        }
    }
    promise(promiseImpl) {
        const PromiseConnection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").PromiseConnection;
        return new PromiseConnection(this, promiseImpl);
    }
    _addCommandClosedState(cmd) {
        const err = new Error("Can't add new command when connection is in closed state");
        err.fatal = true;
        if (cmd.onResult) {
            cmd.onResult(err);
        } else {
            this.emit('error', err);
        }
    }
    _handleFatalError(err) {
        err.fatal = true;
        // stop receiving packets
        this.stream.removeAllListeners('data');
        this.addCommand = this._addCommandClosedState;
        this.write = ()=>{
            this.emit('error', new Error("Can't write in closed state"));
        };
        this._notifyError(err);
        this._fatalError = err;
    }
    _handleNetworkError(err) {
        if (this.connectTimeout) {
            Timers.clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
        // Do not throw an error when a connection ends with a RST,ACK packet
        if (err.code === 'ECONNRESET' && this._closing) {
            return;
        }
        this._handleFatalError(err);
    }
    _handleTimeoutError() {
        if (this.connectTimeout) {
            Timers.clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
        this.stream.destroy && this.stream.destroy();
        const err = new Error('connect ETIMEDOUT');
        err.errorno = 'ETIMEDOUT';
        err.code = 'ETIMEDOUT';
        err.syscall = 'connect';
        this._handleNetworkError(err);
    }
    // notify all commands in the queue and bubble error as connection "error"
    // called on stream error or unexpected termination
    _notifyError(err) {
        if (this.connectTimeout) {
            Timers.clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
        // prevent from emitting 'PROTOCOL_CONNECTION_LOST' after EPIPE or ECONNRESET
        if (this._fatalError) {
            return;
        }
        let command;
        // if there is no active command, notify connection
        // if there are commands and all of them have callbacks, pass error via callback
        let bubbleErrorToConnection = !this._command;
        if (this._command && this._command.onResult) {
            this._command.onResult(err);
            this._command = null;
        // connection handshake is special because we allow it to be implicit
        // if error happened during handshake, but there are others commands in queue
        // then bubble error to other commands and not to connection
        } else if (!(this._command && this._command.constructor === Commands.ClientHandshake && this._commands.length > 0)) {
            bubbleErrorToConnection = true;
        }
        while(command = this._commands.shift()){
            if (command.onResult) {
                command.onResult(err);
            } else {
                bubbleErrorToConnection = true;
            }
        }
        // notify connection if some comands in the queue did not have callbacks
        // or if this is pool connection ( so it can be removed from pool )
        if (bubbleErrorToConnection || this._pool) {
            this.emit('error', err);
        }
        // close connection after emitting the event in case of a fatal error
        if (err.fatal) {
            this.close();
        }
    }
    write(buffer) {
        const result = this.stream.write(buffer, (err)=>{
            if (err) {
                this._handleNetworkError(err);
            }
        });
        if (!result) {
            this.stream.emit('pause');
        }
    }
    // http://dev.mysql.com/doc/internals/en/sequence-id.html
    //
    // The sequence-id is incremented with each packet and may wrap around.
    // It starts at 0 and is reset to 0 when a new command
    // begins in the Command Phase.
    // http://dev.mysql.com/doc/internals/en/example-several-mysql-packets.html
    _resetSequenceId() {
        this.sequenceId = 0;
        this.compressedSequenceId = 0;
    }
    _bumpCompressedSequenceId(numPackets) {
        this.compressedSequenceId += numPackets;
        this.compressedSequenceId %= 256;
    }
    _bumpSequenceId(numPackets) {
        this.sequenceId += numPackets;
        this.sequenceId %= 256;
    }
    writePacket(packet) {
        const MAX_PACKET_LENGTH = 16777215;
        const length = packet.length();
        let chunk, offset, header;
        if (length < MAX_PACKET_LENGTH) {
            packet.writeHeader(this.sequenceId);
            if (this.config.debug) {
                // eslint-disable-next-line no-console
                console.log(`${this._internalId} ${this.connectionId} <== ${this._command._commandName}#${this._command.stateName()}(${[
                    this.sequenceId,
                    packet._name,
                    packet.length()
                ].join(',')})`);
                // eslint-disable-next-line no-console
                console.log(`${this._internalId} ${this.connectionId} <== ${packet.buffer.toString('hex')}`);
            }
            this._bumpSequenceId(1);
            this.write(packet.buffer);
        } else {
            if (this.config.debug) {
                // eslint-disable-next-line no-console
                console.log(`${this._internalId} ${this.connectionId} <== Writing large packet, raw content not written:`);
                // eslint-disable-next-line no-console
                console.log(`${this._internalId} ${this.connectionId} <== ${this._command._commandName}#${this._command.stateName()}(${[
                    this.sequenceId,
                    packet._name,
                    packet.length()
                ].join(',')})`);
            }
            for(offset = 4; offset < 4 + length; offset += MAX_PACKET_LENGTH){
                chunk = packet.buffer.slice(offset, offset + MAX_PACKET_LENGTH);
                if (chunk.length === MAX_PACKET_LENGTH) {
                    header = Buffer.from([
                        0xff,
                        0xff,
                        0xff,
                        this.sequenceId
                    ]);
                } else {
                    header = Buffer.from([
                        chunk.length & 0xff,
                        chunk.length >> 8 & 0xff,
                        chunk.length >> 16 & 0xff,
                        this.sequenceId
                    ]);
                }
                this._bumpSequenceId(1);
                this.write(header);
                this.write(chunk);
            }
        }
    }
    // 0.11+ environment
    startTLS(onSecure) {
        if (this.config.debug) {
            // eslint-disable-next-line no-console
            console.log('Upgrading connection to TLS');
        }
        const secureContext = Tls.createSecureContext({
            ca: this.config.ssl.ca,
            cert: this.config.ssl.cert,
            ciphers: this.config.ssl.ciphers,
            key: this.config.ssl.key,
            passphrase: this.config.ssl.passphrase,
            minVersion: this.config.ssl.minVersion,
            maxVersion: this.config.ssl.maxVersion
        });
        const rejectUnauthorized = this.config.ssl.rejectUnauthorized;
        const verifyIdentity = this.config.ssl.verifyIdentity;
        const servername = this.config.host;
        let secureEstablished = false;
        this.stream.removeAllListeners('data');
        const secureSocket = Tls.connect({
            rejectUnauthorized,
            requestCert: rejectUnauthorized,
            checkServerIdentity: verifyIdentity ? Tls.checkServerIdentity : function() {
                return undefined;
            },
            secureContext,
            isServer: false,
            socket: this.stream,
            servername
        }, ()=>{
            secureEstablished = true;
            if (rejectUnauthorized) {
                if (typeof servername === 'string' && verifyIdentity) {
                    const cert = secureSocket.getPeerCertificate(true);
                    const serverIdentityCheckError = Tls.checkServerIdentity(servername, cert);
                    if (serverIdentityCheckError) {
                        onSecure(serverIdentityCheckError);
                        return;
                    }
                }
            }
            onSecure();
        });
        // error handler for secure socket
        secureSocket.on('error', (err)=>{
            if (secureEstablished) {
                this._handleNetworkError(err);
            } else {
                onSecure(err);
            }
        });
        secureSocket.on('data', (data)=>{
            this.packetParser.execute(data);
        });
        this.write = (buffer)=>secureSocket.write(buffer);
    }
    protocolError(message, code) {
        // Starting with MySQL 8.0.24, if the client closes the connection
        // unexpectedly, the server will send a last ERR Packet, which we can
        // safely ignore.
        // https://dev.mysql.com/worklog/task/?id=12999
        if (this._closing) {
            return;
        }
        const err = new Error(message);
        err.fatal = true;
        err.code = code || 'PROTOCOL_ERROR';
        this.emit('error', err);
    }
    get fatalError() {
        return this._fatalError;
    }
    handlePacket(packet) {
        if (this._paused) {
            this._paused_packets.push(packet);
            return;
        }
        if (this.config.debug) {
            if (packet) {
                // eslint-disable-next-line no-console
                console.log(` raw: ${packet.buffer.slice(packet.offset, packet.offset + packet.length()).toString('hex')}`);
                // eslint-disable-next-line no-console
                console.trace();
                const commandName = this._command ? this._command._commandName : '(no command)';
                const stateName = this._command ? this._command.stateName() : '(no command)';
                // eslint-disable-next-line no-console
                console.log(`${this._internalId} ${this.connectionId} ==> ${commandName}#${stateName}(${[
                    packet.sequenceId,
                    packet.type(),
                    packet.length()
                ].join(',')})`);
            }
        }
        if (!this._command) {
            const marker = packet.peekByte();
            // If it's an Err Packet, we should use it.
            if (marker === 0xff) {
                const error = Packets.Error.fromPacket(packet);
                this.protocolError(error.message, error.code);
            } else {
                // Otherwise, it means it's some other unexpected packet.
                this.protocolError('Unexpected packet while no commands in the queue', 'PROTOCOL_UNEXPECTED_PACKET');
            }
            this.close();
            return;
        }
        if (packet) {
            // Note: when server closes connection due to inactivity, Err packet ER_CLIENT_INTERACTION_TIMEOUT from MySQL 8.0.24, sequenceId will be 0
            if (this.sequenceId !== packet.sequenceId) {
                const err = new Error(`Warning: got packets out of order. Expected ${this.sequenceId} but received ${packet.sequenceId}`);
                err.expected = this.sequenceId;
                err.received = packet.sequenceId;
                this.emit('warn', err); // REVIEW
                // eslint-disable-next-line no-console
                console.error(err.message);
            }
            this._bumpSequenceId(packet.numPackets);
        }
        try {
            if (this._fatalError) {
                // skip remaining packets after client is in the error state
                return;
            }
            const done = this._command.execute(packet, this);
            if (done) {
                this._command = this._commands.shift();
                if (this._command) {
                    this.sequenceId = 0;
                    this.compressedSequenceId = 0;
                    this.handlePacket();
                }
            }
        } catch (err) {
            this._handleFatalError(err);
            this.stream.destroy();
        }
    }
    addCommand(cmd) {
        // this.compressedSequenceId = 0;
        // this.sequenceId = 0;
        if (this.config.debug) {
            const commandName = cmd.constructor.name;
            // eslint-disable-next-line no-console
            console.log(`Add command: ${commandName}`);
            cmd._commandName = commandName;
        }
        if (!this._command) {
            this._command = cmd;
            this.handlePacket();
        } else {
            this._commands.push(cmd);
        }
        return cmd;
    }
    format(sql, values) {
        if (typeof this.config.queryFormat === 'function') {
            return this.config.queryFormat.call(this, sql, values, this.config.timezone);
        }
        const opts = {
            sql: sql,
            values: values
        };
        this._resolveNamedPlaceholders(opts);
        return SqlString.format(opts.sql, opts.values, this.config.stringifyObjects, this.config.timezone);
    }
    escape(value) {
        return SqlString.escape(value, false, this.config.timezone);
    }
    escapeId(value) {
        return SqlString.escapeId(value, false);
    }
    raw(sql) {
        return SqlString.raw(sql);
    }
    _resolveNamedPlaceholders(options) {
        let unnamed;
        if (this.config.namedPlaceholders || options.namedPlaceholders) {
            if (Array.isArray(options.values)) {
                // if an array is provided as the values, assume the conversion is not necessary.
                // this allows the usage of unnamed placeholders even if the namedPlaceholders flag is enabled.
                return;
            }
            if (convertNamedPlaceholders === null) {
                convertNamedPlaceholders = __turbopack_require__("[project]/node_modules/.pnpm/named-placeholders@1.1.3/node_modules/named-placeholders/index.js [app-route] (ecmascript)")();
            }
            unnamed = convertNamedPlaceholders(options.sql, options.values);
            options.sql = unnamed[0];
            options.values = unnamed[1];
        }
    }
    query(sql, values, cb) {
        let cmdQuery;
        if (sql.constructor === Commands.Query) {
            cmdQuery = sql;
        } else {
            cmdQuery = Connection.createQuery(sql, values, cb, this.config);
        }
        this._resolveNamedPlaceholders(cmdQuery);
        const rawSql = this.format(cmdQuery.sql, cmdQuery.values !== undefined ? cmdQuery.values : []);
        cmdQuery.sql = rawSql;
        return this.addCommand(cmdQuery);
    }
    pause() {
        this._paused = true;
        this.stream.pause();
    }
    resume() {
        let packet;
        this._paused = false;
        while(packet = this._paused_packets.shift()){
            this.handlePacket(packet);
            // don't resume if packet handler paused connection
            if (this._paused) {
                return;
            }
        }
        this.stream.resume();
    }
    // TODO: named placeholders support
    prepare(options, cb) {
        if (typeof options === 'string') {
            options = {
                sql: options
            };
        }
        return this.addCommand(new Commands.Prepare(options, cb));
    }
    unprepare(sql) {
        let options = {};
        if (typeof sql === 'object') {
            options = sql;
        } else {
            options.sql = sql;
        }
        const key = Connection.statementKey(options);
        const stmt = this._statements.get(key);
        if (stmt) {
            this._statements.delete(key);
            stmt.close();
        }
        return stmt;
    }
    execute(sql, values, cb) {
        let options = {
            infileStreamFactory: this.config.infileStreamFactory
        };
        if (typeof sql === 'object') {
            // execute(options, cb)
            options = {
                ...options,
                ...sql,
                sql: sql.sql,
                values: sql.values
            };
            if (typeof values === 'function') {
                cb = values;
            } else {
                options.values = options.values || values;
            }
        } else if (typeof values === 'function') {
            // execute(sql, cb)
            cb = values;
            options.sql = sql;
            options.values = undefined;
        } else {
            // execute(sql, values, cb)
            options.sql = sql;
            options.values = values;
        }
        this._resolveNamedPlaceholders(options);
        // check for values containing undefined
        if (options.values) {
            //If namedPlaceholder is not enabled and object is passed as bind parameters
            if (!Array.isArray(options.values)) {
                throw new TypeError('Bind parameters must be array if namedPlaceholders parameter is not enabled');
            }
            options.values.forEach((val)=>{
                //If namedPlaceholder is not enabled and object is passed as bind parameters
                if (!Array.isArray(options.values)) {
                    throw new TypeError('Bind parameters must be array if namedPlaceholders parameter is not enabled');
                }
                if (val === undefined) {
                    throw new TypeError('Bind parameters must not contain undefined. To pass SQL NULL specify JS null');
                }
                if (typeof val === 'function') {
                    throw new TypeError('Bind parameters must not contain function(s). To pass the body of a function as a string call .toString() first');
                }
            });
        }
        const executeCommand = new Commands.Execute(options, cb);
        const prepareCommand = new Commands.Prepare(options, (err, stmt)=>{
            if (err) {
                // skip execute command if prepare failed, we have main
                // combined callback here
                executeCommand.start = function() {
                    return null;
                };
                if (cb) {
                    cb(err);
                } else {
                    executeCommand.emit('error', err);
                }
                executeCommand.emit('end');
                return;
            }
            executeCommand.statement = stmt;
        });
        this.addCommand(prepareCommand);
        this.addCommand(executeCommand);
        return executeCommand;
    }
    changeUser(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = {};
        }
        const charsetNumber = options.charset ? ConnectionConfig.getCharsetNumber(options.charset) : this.config.charsetNumber;
        return this.addCommand(new Commands.ChangeUser({
            user: options.user || this.config.user,
            // for the purpose of multi-factor authentication, or not, the main
            // password (used for the 1st authentication factor) can also be
            // provided via the "password1" option
            password: options.password || options.password1 || this.config.password || this.config.password1,
            password2: options.password2 || this.config.password2,
            password3: options.password3 || this.config.password3,
            passwordSha1: options.passwordSha1 || this.config.passwordSha1,
            database: options.database || this.config.database,
            timeout: options.timeout,
            charsetNumber: charsetNumber,
            currentConfig: this.config
        }, (err)=>{
            if (err) {
                err.fatal = true;
            }
            if (callback) {
                callback(err);
            }
        }));
    }
    // transaction helpers
    beginTransaction(cb) {
        return this.query('START TRANSACTION', cb);
    }
    commit(cb) {
        return this.query('COMMIT', cb);
    }
    rollback(cb) {
        return this.query('ROLLBACK', cb);
    }
    ping(cb) {
        return this.addCommand(new Commands.Ping(cb));
    }
    _registerSlave(opts, cb) {
        return this.addCommand(new Commands.RegisterSlave(opts, cb));
    }
    _binlogDump(opts, cb) {
        return this.addCommand(new Commands.BinlogDump(opts, cb));
    }
    // currently just alias to close
    destroy() {
        this.close();
    }
    close() {
        if (this.connectTimeout) {
            Timers.clearTimeout(this.connectTimeout);
            this.connectTimeout = null;
        }
        this._closing = true;
        this.stream.end();
        this.addCommand = this._addCommandClosedState;
    }
    createBinlogStream(opts) {
        // TODO: create proper stream class
        // TODO: use through2
        let test = 1;
        const stream = new Readable({
            objectMode: true
        });
        stream._read = function() {
            return {
                data: test++
            };
        };
        this._registerSlave(opts, ()=>{
            const dumpCmd = this._binlogDump(opts);
            dumpCmd.on('event', (ev)=>{
                stream.push(ev);
            });
            dumpCmd.on('eof', ()=>{
                stream.push(null);
                // if non-blocking, then close stream to prevent errors
                if (opts.flags && opts.flags & 0x01) {
                    this.close();
                }
            });
        // TODO: pipe errors as well
        });
        return stream;
    }
    connect(cb) {
        if (!cb) {
            return;
        }
        if (this._fatalError || this._protocolError) {
            return cb(this._fatalError || this._protocolError);
        }
        if (this._handshakePacket) {
            return cb(null, this);
        }
        let connectCalled = 0;
        function callbackOnce(isErrorHandler) {
            return function(param) {
                if (!connectCalled) {
                    if (isErrorHandler) {
                        cb(param);
                    } else {
                        cb(null, param);
                    }
                }
                connectCalled = 1;
            };
        }
        this.once('error', callbackOnce(true));
        this.once('connect', callbackOnce(false));
    }
    // ===================================
    // outgoing server connection methods
    // ===================================
    writeColumns(columns) {
        this.writePacket(Packets.ResultSetHeader.toPacket(columns.length));
        columns.forEach((column)=>{
            this.writePacket(Packets.ColumnDefinition.toPacket(column, this.serverConfig.encoding));
        });
        this.writeEof();
    }
    // row is array of columns, not hash
    writeTextRow(column) {
        this.writePacket(Packets.TextRow.toPacket(column, this.serverConfig.encoding));
    }
    writeBinaryRow(column) {
        this.writePacket(Packets.BinaryRow.toPacket(column, this.serverConfig.encoding));
    }
    writeTextResult(rows, columns, binary = false) {
        this.writeColumns(columns);
        rows.forEach((row)=>{
            const arrayRow = new Array(columns.length);
            columns.forEach((column)=>{
                arrayRow.push(row[column.name]);
            });
            if (binary) {
                this.writeBinaryRow(arrayRow);
            } else this.writeTextRow(arrayRow);
        });
        this.writeEof();
    }
    writeEof(warnings, statusFlags) {
        this.writePacket(Packets.EOF.toPacket(warnings, statusFlags));
    }
    writeOk(args) {
        if (!args) {
            args = {
                affectedRows: 0
            };
        }
        this.writePacket(Packets.OK.toPacket(args, this.serverConfig.encoding));
    }
    writeError(args) {
        // if we want to send error before initial hello was sent, use default encoding
        const encoding = this.serverConfig ? this.serverConfig.encoding : 'cesu8';
        this.writePacket(Packets.Error.toPacket(args, encoding));
    }
    serverHandshake(args) {
        this.serverConfig = args;
        this.serverConfig.encoding = CharsetToEncoding[this.serverConfig.characterSet];
        return this.addCommand(new Commands.ServerHandshake(args));
    }
    // ===============================================================
    end(callback) {
        if (this.config.isServer) {
            this._closing = true;
            const quitCmd = new EventEmitter();
            setImmediate(()=>{
                this.stream.end();
                quitCmd.emit('end');
            });
            return quitCmd;
        }
        // trigger error if more commands enqueued after end command
        const quitCmd = this.addCommand(new Commands.Quit(callback));
        this.addCommand = this._addCommandClosedState;
        return quitCmd;
    }
    static createQuery(sql, values, cb, config) {
        let options = {
            rowsAsArray: config.rowsAsArray,
            infileStreamFactory: config.infileStreamFactory
        };
        if (typeof sql === 'object') {
            // query(options, cb)
            options = {
                ...options,
                ...sql,
                sql: sql.sql,
                values: sql.values
            };
            if (typeof values === 'function') {
                cb = values;
            } else if (values !== undefined) {
                options.values = values;
            }
        } else if (typeof values === 'function') {
            // query(sql, cb)
            cb = values;
            options.sql = sql;
            options.values = undefined;
        } else {
            // query(sql, values, cb)
            options.sql = sql;
            options.values = values;
        }
        return new Commands.Query(options, cb);
    }
    static statementKey(options) {
        return `${typeof options.nestTables}/${options.nestTables}/${options.rowsAsArray}${options.sql}`;
    }
}
module.exports = Connection;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_connection.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const Connection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/index.js [app-route] (ecmascript)").Connection;
class PoolConnection extends Connection {
    constructor(pool, options){
        super(options);
        this._pool = pool;
        // The last active time of this connection
        this.lastActiveTime = Date.now();
        // When a fatal error occurs the connection's protocol ends, which will cause
        // the connection to end as well, thus we only need to watch for the end event
        // and we will be notified of disconnects.
        // REVIEW: Moved to `once`
        this.once('end', ()=>{
            this._removeFromPool();
        });
        this.once('error', ()=>{
            this._removeFromPool();
        });
    }
    release() {
        if (!this._pool || this._pool._closed) {
            return;
        }
        // update last active time
        this.lastActiveTime = Date.now();
        this._pool.releaseConnection(this);
    }
    promise(promiseImpl) {
        const PromisePoolConnection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").PromisePoolConnection;
        return new PromisePoolConnection(this, promiseImpl);
    }
    end() {
        const err = new Error('Calling conn.end() to release a pooled connection is ' + 'deprecated. In next version calling conn.end() will be ' + 'restored to default conn.end() behavior. Use ' + 'conn.release() instead.');
        this.emit('warn', err);
        // eslint-disable-next-line no-console
        console.warn(err.message);
        this.release();
    }
    destroy() {
        this._removeFromPool();
        super.destroy();
    }
    _removeFromPool() {
        if (!this._pool || this._pool._closed) {
            return;
        }
        const pool = this._pool;
        this._pool = null;
        pool._removeConnection(this);
    }
}
PoolConnection.statementKey = Connection.statementKey;
module.exports = PoolConnection;
// TODO: Remove this when we are removing PoolConnection#end
PoolConnection.prototype._realEnd = Connection.prototype.end;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const process = __turbopack_require__("[externals]/ [external] (process, cjs)");
const mysql = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/index.js [app-route] (ecmascript)");
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
const PoolConnection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_connection.js [app-route] (ecmascript)");
const Queue = __turbopack_require__("[project]/node_modules/.pnpm/denque@2.1.0/node_modules/denque/index.js [app-route] (ecmascript)");
const Connection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection.js [app-route] (ecmascript)");
function spliceConnection(queue, connection) {
    const len = queue.length;
    for(let i = 0; i < len; i++){
        if (queue.get(i) === connection) {
            queue.removeOne(i);
            break;
        }
    }
}
class Pool extends EventEmitter {
    constructor(options){
        super();
        this.config = options.config;
        this.config.connectionConfig.pool = this;
        this._allConnections = new Queue();
        this._freeConnections = new Queue();
        this._connectionQueue = new Queue();
        this._closed = false;
        if (this.config.maxIdle < this.config.connectionLimit) {
            // create idle connection timeout automatically release job
            this._removeIdleTimeoutConnections();
        }
    }
    promise(promiseImpl) {
        const PromisePool = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").PromisePool;
        return new PromisePool(this, promiseImpl);
    }
    getConnection(cb) {
        if (this._closed) {
            return process.nextTick(()=>cb(new Error('Pool is closed.')));
        }
        let connection;
        if (this._freeConnections.length > 0) {
            connection = this._freeConnections.pop();
            this.emit('acquire', connection);
            return process.nextTick(()=>cb(null, connection));
        }
        if (this.config.connectionLimit === 0 || this._allConnections.length < this.config.connectionLimit) {
            connection = new PoolConnection(this, {
                config: this.config.connectionConfig
            });
            this._allConnections.push(connection);
            return connection.connect((err)=>{
                if (this._closed) {
                    return cb(new Error('Pool is closed.'));
                }
                if (err) {
                    return cb(err);
                }
                this.emit('connection', connection);
                this.emit('acquire', connection);
                return cb(null, connection);
            });
        }
        if (!this.config.waitForConnections) {
            return process.nextTick(()=>cb(new Error('No connections available.')));
        }
        if (this.config.queueLimit && this._connectionQueue.length >= this.config.queueLimit) {
            return cb(new Error('Queue limit reached.'));
        }
        this.emit('enqueue');
        return this._connectionQueue.push(cb);
    }
    releaseConnection(connection) {
        let cb;
        if (!connection._pool) {
            // The connection has been removed from the pool and is no longer good.
            if (this._connectionQueue.length) {
                cb = this._connectionQueue.shift();
                process.nextTick(this.getConnection.bind(this, cb));
            }
        } else if (this._connectionQueue.length) {
            cb = this._connectionQueue.shift();
            process.nextTick(cb.bind(null, null, connection));
        } else {
            this._freeConnections.push(connection);
            this.emit('release', connection);
        }
    }
    end(cb) {
        this._closed = true;
        clearTimeout(this._removeIdleTimeoutConnectionsTimer);
        if (typeof cb !== 'function') {
            cb = function(err) {
                if (err) {
                    throw err;
                }
            };
        }
        let calledBack = false;
        let closedConnections = 0;
        let connection;
        const endCB = (function(err) {
            if (calledBack) {
                return;
            }
            if (err || ++closedConnections >= this._allConnections.length) {
                calledBack = true;
                cb(err);
                return;
            }
        }).bind(this);
        if (this._allConnections.length === 0) {
            endCB();
            return;
        }
        for(let i = 0; i < this._allConnections.length; i++){
            connection = this._allConnections.get(i);
            connection._realEnd(endCB);
        }
    }
    query(sql, values, cb) {
        const cmdQuery = Connection.createQuery(sql, values, cb, this.config.connectionConfig);
        if (typeof cmdQuery.namedPlaceholders === 'undefined') {
            cmdQuery.namedPlaceholders = this.config.connectionConfig.namedPlaceholders;
        }
        this.getConnection((err, conn)=>{
            if (err) {
                if (typeof cmdQuery.onResult === 'function') {
                    cmdQuery.onResult(err);
                } else {
                    cmdQuery.emit('error', err);
                }
                return;
            }
            try {
                conn.query(cmdQuery).once('end', ()=>{
                    conn.release();
                });
            } catch (e) {
                conn.release();
                throw e;
            }
        });
        return cmdQuery;
    }
    execute(sql, values, cb) {
        // TODO construct execute command first here and pass it to connection.execute
        // so that polymorphic arguments logic is there in one place
        if (typeof values === 'function') {
            cb = values;
            values = [];
        }
        this.getConnection((err, conn)=>{
            if (err) {
                return cb(err);
            }
            try {
                conn.execute(sql, values, cb).once('end', ()=>{
                    conn.release();
                });
            } catch (e) {
                conn.release();
                return cb(e);
            }
        });
    }
    _removeConnection(connection) {
        // Remove connection from all connections
        spliceConnection(this._allConnections, connection);
        // Remove connection from free connections
        spliceConnection(this._freeConnections, connection);
        this.releaseConnection(connection);
    }
    _removeIdleTimeoutConnections() {
        if (this._removeIdleTimeoutConnectionsTimer) {
            clearTimeout(this._removeIdleTimeoutConnectionsTimer);
        }
        this._removeIdleTimeoutConnectionsTimer = setTimeout(()=>{
            try {
                while(this._freeConnections.length > this.config.maxIdle || this._freeConnections.length > 0 && Date.now() - this._freeConnections.get(0).lastActiveTime > this.config.idleTimeout){
                    this._freeConnections.get(0).destroy();
                }
            } finally{
                this._removeIdleTimeoutConnections();
            }
        }, 1000);
    }
    format(sql, values) {
        return mysql.format(sql, values, this.config.connectionConfig.stringifyObjects, this.config.connectionConfig.timezone);
    }
    escape(value) {
        return mysql.escape(value, this.config.connectionConfig.stringifyObjects, this.config.connectionConfig.timezone);
    }
    escapeId(value) {
        return mysql.escapeId(value, false);
    }
}
module.exports = Pool;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_config.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const ConnectionConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection_config.js [app-route] (ecmascript)");
class PoolConfig {
    constructor(options){
        if (typeof options === 'string') {
            options = ConnectionConfig.parseUrl(options);
        }
        this.connectionConfig = new ConnectionConfig(options);
        this.waitForConnections = options.waitForConnections === undefined ? true : Boolean(options.waitForConnections);
        this.connectionLimit = isNaN(options.connectionLimit) ? 10 : Number(options.connectionLimit);
        this.maxIdle = isNaN(options.maxIdle) ? this.connectionLimit : Number(options.maxIdle);
        this.idleTimeout = isNaN(options.idleTimeout) ? 60000 : Number(options.idleTimeout);
        this.queueLimit = isNaN(options.queueLimit) ? 0 : Number(options.queueLimit);
    }
}
module.exports = PoolConfig;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_cluster.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const process = __turbopack_require__("[externals]/ [external] (process, cjs)");
const Pool = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool.js [app-route] (ecmascript)");
const PoolConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_config.js [app-route] (ecmascript)");
const Connection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection.js [app-route] (ecmascript)");
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
/**
 * Selector
 */ const makeSelector = {
    RR () {
        let index = 0;
        return (clusterIds)=>clusterIds[index++ % clusterIds.length];
    },
    RANDOM () {
        return (clusterIds)=>clusterIds[Math.floor(Math.random() * clusterIds.length)];
    },
    ORDER () {
        return (clusterIds)=>clusterIds[0];
    }
};
class PoolNamespace {
    constructor(cluster, pattern, selector){
        this._cluster = cluster;
        this._pattern = pattern;
        this._selector = makeSelector[selector]();
    }
    getConnection(cb) {
        const clusterNode = this._getClusterNode();
        if (clusterNode === null) {
            return cb(new Error('Pool does Not exists.'));
        }
        return this._cluster._getConnection(clusterNode, (err, connection)=>{
            if (err) {
                return cb(err);
            }
            if (connection === 'retry') {
                return this.getConnection(cb);
            }
            return cb(null, connection);
        });
    }
    /**
   * pool cluster query
   * @param {*} sql
   * @param {*} values
   * @param {*} cb
   * @returns query
   */ query(sql, values, cb) {
        const query = Connection.createQuery(sql, values, cb, {});
        this.getConnection((err, conn)=>{
            if (err) {
                if (typeof query.onResult === 'function') {
                    query.onResult(err);
                } else {
                    query.emit('error', err);
                }
                return;
            }
            try {
                conn.query(query).once('end', ()=>{
                    conn.release();
                });
            } catch (e) {
                conn.release();
                throw e;
            }
        });
        return query;
    }
    /**
   * pool cluster execute
   * @param {*} sql 
   * @param {*} values 
   * @param {*} cb 
   */ execute(sql, values, cb) {
        if (typeof values === 'function') {
            cb = values;
            values = [];
        }
        this.getConnection((err, conn)=>{
            if (err) {
                return cb(err);
            }
            try {
                conn.execute(sql, values, cb).once('end', ()=>{
                    conn.release();
                });
            } catch (e) {
                conn.release();
                throw e;
            }
        });
    }
    _getClusterNode() {
        const foundNodeIds = this._cluster._findNodeIds(this._pattern);
        if (foundNodeIds.length === 0) {
            return null;
        }
        const nodeId = foundNodeIds.length === 1 ? foundNodeIds[0] : this._selector(foundNodeIds);
        return this._cluster._getNode(nodeId);
    }
}
class PoolCluster extends EventEmitter {
    constructor(config){
        super();
        config = config || {};
        this._canRetry = typeof config.canRetry === 'undefined' ? true : config.canRetry;
        this._removeNodeErrorCount = config.removeNodeErrorCount || 5;
        this._defaultSelector = config.defaultSelector || 'RR';
        this._closed = false;
        this._lastId = 0;
        this._nodes = {};
        this._serviceableNodeIds = [];
        this._namespaces = {};
        this._findCaches = {};
    }
    of(pattern, selector) {
        pattern = pattern || '*';
        selector = selector || this._defaultSelector;
        selector = selector.toUpperCase();
        if (!makeSelector[selector] === 'undefined') {
            selector = this._defaultSelector;
        }
        const key = pattern + selector;
        if (typeof this._namespaces[key] === 'undefined') {
            this._namespaces[key] = new PoolNamespace(this, pattern, selector);
        }
        return this._namespaces[key];
    }
    add(id, config) {
        if (typeof id === 'object') {
            config = id;
            id = `CLUSTER::${++this._lastId}`;
        }
        if (typeof this._nodes[id] === 'undefined') {
            this._nodes[id] = {
                id: id,
                errorCount: 0,
                pool: new Pool({
                    config: new PoolConfig(config)
                })
            };
            this._serviceableNodeIds.push(id);
            this._clearFindCaches();
        }
    }
    getConnection(pattern, selector, cb) {
        let namespace;
        if (typeof pattern === 'function') {
            cb = pattern;
            namespace = this.of();
        } else {
            if (typeof selector === 'function') {
                cb = selector;
                selector = this._defaultSelector;
            }
            namespace = this.of(pattern, selector);
        }
        namespace.getConnection(cb);
    }
    end(callback) {
        const cb = callback !== undefined ? callback : (err)=>{
            if (err) {
                throw err;
            }
        };
        if (this._closed) {
            process.nextTick(cb);
            return;
        }
        this._closed = true;
        let calledBack = false;
        let waitingClose = 0;
        const onEnd = (err)=>{
            if (!calledBack && (err || --waitingClose <= 0)) {
                calledBack = true;
                return cb(err);
            }
        };
        for(const id in this._nodes){
            waitingClose++;
            this._nodes[id].pool.end(onEnd);
        }
        if (waitingClose === 0) {
            process.nextTick(onEnd);
        }
    }
    _findNodeIds(pattern) {
        if (typeof this._findCaches[pattern] !== 'undefined') {
            return this._findCaches[pattern];
        }
        let foundNodeIds;
        if (pattern === '*') {
            // all
            foundNodeIds = this._serviceableNodeIds;
        } else if (this._serviceableNodeIds.indexOf(pattern) !== -1) {
            // one
            foundNodeIds = [
                pattern
            ];
        } else {
            // wild matching
            const keyword = pattern.substring(pattern.length - 1, 0);
            foundNodeIds = this._serviceableNodeIds.filter((id)=>id.startsWith(keyword));
        }
        this._findCaches[pattern] = foundNodeIds;
        return foundNodeIds;
    }
    _getNode(id) {
        return this._nodes[id] || null;
    }
    _increaseErrorCount(node) {
        if (++node.errorCount >= this._removeNodeErrorCount) {
            const index = this._serviceableNodeIds.indexOf(node.id);
            if (index !== -1) {
                this._serviceableNodeIds.splice(index, 1);
                delete this._nodes[node.id];
                this._clearFindCaches();
                node.pool.end();
                this.emit('remove', node.id);
            }
        }
    }
    _decreaseErrorCount(node) {
        if (node.errorCount > 0) {
            --node.errorCount;
        }
    }
    _getConnection(node, cb) {
        node.pool.getConnection((err, connection)=>{
            if (err) {
                this._increaseErrorCount(node);
                if (this._canRetry) {
                    // REVIEW: this seems wrong?
                    this.emit('warn', err);
                    // eslint-disable-next-line no-console
                    console.warn(`[Error] PoolCluster : ${err}`);
                    return cb(null, 'retry');
                }
                return cb(err);
            }
            this._decreaseErrorCount(node);
            connection._clusterId = node.id;
            return cb(null, connection);
        });
    }
    _clearFindCaches() {
        this._findCaches = {};
    }
}
module.exports = PoolCluster;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/server.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const net = __turbopack_require__("[externals]/ [external] (net, cjs)");
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
const Connection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection.js [app-route] (ecmascript)");
const ConnectionConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection_config.js [app-route] (ecmascript)");
// TODO: inherit Server from net.Server
class Server extends EventEmitter {
    constructor(){
        super();
        this.connections = [];
        this._server = net.createServer(this._handleConnection.bind(this));
    }
    _handleConnection(socket) {
        const connectionConfig = new ConnectionConfig({
            stream: socket,
            isServer: true
        });
        const connection = new Connection({
            config: connectionConfig
        });
        this.emit('connection', connection);
    }
    listen(port) {
        this._port = port;
        this._server.listen.apply(this._server, arguments);
        return this;
    }
    close(cb) {
        this._server.close(cb);
    }
}
module.exports = Server;
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = {
    caching_sha2_password: __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/caching_sha2_password.js [app-route] (ecmascript)"),
    mysql_clear_password: __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_clear_password.js [app-route] (ecmascript)"),
    mysql_native_password: __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/mysql_native_password.js [app-route] (ecmascript)"),
    sha256_password: __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/sha256_password.js [app-route] (ecmascript)")
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const SqlString = __turbopack_require__("[project]/node_modules/.pnpm/sqlstring@2.3.3/node_modules/sqlstring/index.js [app-route] (ecmascript)");
const Connection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection.js [app-route] (ecmascript)");
const ConnectionConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/connection_config.js [app-route] (ecmascript)");
const parserCache = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/parser_cache.js [app-route] (ecmascript)");
exports.createConnection = function(opts) {
    return new Connection({
        config: new ConnectionConfig(opts)
    });
};
exports.connect = exports.createConnection;
exports.Connection = Connection;
exports.ConnectionConfig = ConnectionConfig;
const Pool = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool.js [app-route] (ecmascript)");
const PoolCluster = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_cluster.js [app-route] (ecmascript)");
exports.createPool = function(config) {
    const PoolConfig = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_config.js [app-route] (ecmascript)");
    return new Pool({
        config: new PoolConfig(config)
    });
};
exports.createPoolCluster = function(config) {
    const PoolCluster = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_cluster.js [app-route] (ecmascript)");
    return new PoolCluster(config);
};
exports.createQuery = Connection.createQuery;
exports.Pool = Pool;
exports.PoolCluster = PoolCluster;
exports.createServer = function(handler) {
    const Server = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/server.js [app-route] (ecmascript)");
    const s = new Server();
    if (handler) {
        s.on('connection', handler);
    }
    return s;
};
exports.PoolConnection = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/pool_connection.js [app-route] (ecmascript)");
exports.authPlugins = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/auth_plugins/index.js [app-route] (ecmascript)");
exports.escape = SqlString.escape;
exports.escapeId = SqlString.escapeId;
exports.format = SqlString.format;
exports.raw = SqlString.raw;
exports.__defineGetter__('createConnectionPromise', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").createConnection);
exports.__defineGetter__('createPoolPromise', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").createPool);
exports.__defineGetter__('createPoolClusterPromise', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)").createPoolCluster);
exports.__defineGetter__('Types', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)"));
exports.__defineGetter__('Charsets', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)"));
exports.__defineGetter__('CharsetToEncoding', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)"));
exports.setMaxParserCache = function(max) {
    parserCache.setMaxCache(max);
};
exports.clearParserCache = function() {
    parserCache.clearCache();
};
}}),
"[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/promise.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const core = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/index.js [app-route] (ecmascript)");
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)").EventEmitter;
const parserCache = __turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/parsers/parser_cache.js [app-route] (ecmascript)");
function makeDoneCb(resolve, reject, localErr) {
    return function(err, rows, fields) {
        if (err) {
            localErr.message = err.message;
            localErr.code = err.code;
            localErr.errno = err.errno;
            localErr.sql = err.sql;
            localErr.sqlState = err.sqlState;
            localErr.sqlMessage = err.sqlMessage;
            reject(localErr);
        } else {
            resolve([
                rows,
                fields
            ]);
        }
    };
}
function inheritEvents(source, target, events) {
    const listeners = {};
    target.on('newListener', (eventName)=>{
        if (events.indexOf(eventName) >= 0 && !target.listenerCount(eventName)) {
            source.on(eventName, listeners[eventName] = function() {
                const args = [].slice.call(arguments);
                args.unshift(eventName);
                target.emit.apply(target, args);
            });
        }
    }).on('removeListener', (eventName)=>{
        if (events.indexOf(eventName) >= 0 && !target.listenerCount(eventName)) {
            source.removeListener(eventName, listeners[eventName]);
            delete listeners[eventName];
        }
    });
}
class PromisePreparedStatementInfo {
    constructor(statement, promiseImpl){
        this.statement = statement;
        this.Promise = promiseImpl;
    }
    execute(parameters) {
        const s = this.statement;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            if (parameters) {
                s.execute(parameters, done);
            } else {
                s.execute(done);
            }
        });
    }
    close() {
        return new this.Promise((resolve)=>{
            this.statement.close();
            resolve();
        });
    }
}
class PromiseConnection extends EventEmitter {
    constructor(connection, promiseImpl){
        super();
        this.connection = connection;
        this.Promise = promiseImpl || Promise;
        inheritEvents(connection, this, [
            'error',
            'drain',
            'connect',
            'end',
            'enqueue'
        ]);
    }
    release() {
        this.connection.release();
    }
    query(query, params) {
        const c = this.connection;
        const localErr = new Error();
        if (typeof params === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            if (params !== undefined) {
                c.query(query, params, done);
            } else {
                c.query(query, done);
            }
        });
    }
    execute(query, params) {
        const c = this.connection;
        const localErr = new Error();
        if (typeof params === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            if (params !== undefined) {
                c.execute(query, params, done);
            } else {
                c.execute(query, done);
            }
        });
    }
    end() {
        return new this.Promise((resolve)=>{
            this.connection.end(resolve);
        });
    }
    beginTransaction() {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            c.beginTransaction(done);
        });
    }
    commit() {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            c.commit(done);
        });
    }
    rollback() {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            c.rollback(done);
        });
    }
    ping() {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            c.ping((err)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    resolve(true);
                }
            });
        });
    }
    connect() {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            c.connect((err, param)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    resolve(param);
                }
            });
        });
    }
    prepare(options) {
        const c = this.connection;
        const promiseImpl = this.Promise;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            c.prepare(options, (err, statement)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    const wrappedStatement = new PromisePreparedStatementInfo(statement, promiseImpl);
                    resolve(wrappedStatement);
                }
            });
        });
    }
    changeUser(options) {
        const c = this.connection;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            c.changeUser(options, (err)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    resolve();
                }
            });
        });
    }
    get config() {
        return this.connection.config;
    }
    get threadId() {
        return this.connection.threadId;
    }
}
function createConnection(opts) {
    const coreConnection = core.createConnection(opts);
    const createConnectionErr = new Error();
    const thePromise = opts.Promise || Promise;
    if (!thePromise) {
        throw new Error('no Promise implementation available.' + 'Use promise-enabled node version or pass userland Promise' + " implementation as parameter, for example: { Promise: require('bluebird') }");
    }
    return new thePromise((resolve, reject)=>{
        coreConnection.once('connect', ()=>{
            resolve(new PromiseConnection(coreConnection, thePromise));
        });
        coreConnection.once('error', (err)=>{
            createConnectionErr.message = err.message;
            createConnectionErr.code = err.code;
            createConnectionErr.errno = err.errno;
            createConnectionErr.sqlState = err.sqlState;
            reject(createConnectionErr);
        });
    });
}
// note: the callback of "changeUser" is not called on success
// hence there is no possibility to call "resolve"
// patching PromiseConnection
// create facade functions for prototype functions on "Connection" that are not yet
// implemented with PromiseConnection
// proxy synchronous functions only
(function(functionsToWrap) {
    for(let i = 0; functionsToWrap && i < functionsToWrap.length; i++){
        const func = functionsToWrap[i];
        if (typeof core.Connection.prototype[func] === 'function' && PromiseConnection.prototype[func] === undefined) {
            PromiseConnection.prototype[func] = function factory(funcName) {
                return function() {
                    return core.Connection.prototype[funcName].apply(this.connection, arguments);
                };
            }(func);
        }
    }
})([
    // synchronous functions
    'close',
    'createBinlogStream',
    'destroy',
    'escape',
    'escapeId',
    'format',
    'pause',
    'pipe',
    'resume',
    'unprepare'
]);
class PromisePoolConnection extends PromiseConnection {
    constructor(connection, promiseImpl){
        super(connection, promiseImpl);
    }
    destroy() {
        return core.PoolConnection.prototype.destroy.apply(this.connection, arguments);
    }
}
class PromisePool extends EventEmitter {
    constructor(pool, thePromise){
        super();
        this.pool = pool;
        this.Promise = thePromise || Promise;
        inheritEvents(pool, this, [
            'acquire',
            'connection',
            'enqueue',
            'release'
        ]);
    }
    getConnection() {
        const corePool = this.pool;
        return new this.Promise((resolve, reject)=>{
            corePool.getConnection((err, coreConnection)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(new PromisePoolConnection(coreConnection, this.Promise));
                }
            });
        });
    }
    releaseConnection(connection) {
        if (connection instanceof PromisePoolConnection) connection.release();
    }
    query(sql, args) {
        const corePool = this.pool;
        const localErr = new Error();
        if (typeof args === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            if (args !== undefined) {
                corePool.query(sql, args, done);
            } else {
                corePool.query(sql, done);
            }
        });
    }
    execute(sql, args) {
        const corePool = this.pool;
        const localErr = new Error();
        if (typeof args === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            if (args) {
                corePool.execute(sql, args, done);
            } else {
                corePool.execute(sql, done);
            }
        });
    }
    end() {
        const corePool = this.pool;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            corePool.end((err)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    resolve();
                }
            });
        });
    }
}
function createPool(opts) {
    const corePool = core.createPool(opts);
    const thePromise = opts.Promise || Promise;
    if (!thePromise) {
        throw new Error('no Promise implementation available.' + 'Use promise-enabled node version or pass userland Promise' + " implementation as parameter, for example: { Promise: require('bluebird') }");
    }
    return new PromisePool(corePool, thePromise);
}
(function(functionsToWrap) {
    for(let i = 0; functionsToWrap && i < functionsToWrap.length; i++){
        const func = functionsToWrap[i];
        if (typeof core.Pool.prototype[func] === 'function' && PromisePool.prototype[func] === undefined) {
            PromisePool.prototype[func] = function factory(funcName) {
                return function() {
                    return core.Pool.prototype[funcName].apply(this.pool, arguments);
                };
            }(func);
        }
    }
})([
    // synchronous functions
    'escape',
    'escapeId',
    'format'
]);
class PromisePoolCluster extends EventEmitter {
    constructor(poolCluster, thePromise){
        super();
        this.poolCluster = poolCluster;
        this.Promise = thePromise || Promise;
        inheritEvents(poolCluster, this, [
            'warn',
            'remove'
        ]);
    }
    getConnection(pattern, selector) {
        const corePoolCluster = this.poolCluster;
        return new this.Promise((resolve, reject)=>{
            corePoolCluster.getConnection(pattern, selector, (err, coreConnection)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(new PromisePoolConnection(coreConnection, this.Promise));
                }
            });
        });
    }
    query(sql, args) {
        const corePoolCluster = this.poolCluster;
        const localErr = new Error();
        if (typeof args === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            corePoolCluster.query(sql, args, done);
        });
    }
    execute(sql, args) {
        const corePoolCluster = this.poolCluster;
        const localErr = new Error();
        if (typeof args === 'function') {
            throw new Error('Callback function is not available with promise clients.');
        }
        return new this.Promise((resolve, reject)=>{
            const done = makeDoneCb(resolve, reject, localErr);
            corePoolCluster.execute(sql, args, done);
        });
    }
    of(pattern, selector) {
        return new PromisePoolCluster(this.poolCluster.of(pattern, selector), this.Promise);
    }
    end() {
        const corePoolCluster = this.poolCluster;
        const localErr = new Error();
        return new this.Promise((resolve, reject)=>{
            corePoolCluster.end((err)=>{
                if (err) {
                    localErr.message = err.message;
                    localErr.code = err.code;
                    localErr.errno = err.errno;
                    localErr.sqlState = err.sqlState;
                    localErr.sqlMessage = err.sqlMessage;
                    reject(localErr);
                } else {
                    resolve();
                }
            });
        });
    }
}
/**
 * proxy poolCluster synchronous functions
 */ (function(functionsToWrap) {
    for(let i = 0; functionsToWrap && i < functionsToWrap.length; i++){
        const func = functionsToWrap[i];
        if (typeof core.PoolCluster.prototype[func] === 'function' && PromisePoolCluster.prototype[func] === undefined) {
            PromisePoolCluster.prototype[func] = function factory(funcName) {
                return function() {
                    return core.PoolCluster.prototype[funcName].apply(this.poolCluster, arguments);
                };
            }(func);
        }
    }
})([
    'add'
]);
function createPoolCluster(opts) {
    const corePoolCluster = core.createPoolCluster(opts);
    const thePromise = opts && opts.Promise || Promise;
    if (!thePromise) {
        throw new Error('no Promise implementation available.' + 'Use promise-enabled node version or pass userland Promise' + " implementation as parameter, for example: { Promise: require('bluebird') }");
    }
    return new PromisePoolCluster(corePoolCluster, thePromise);
}
exports.createConnection = createConnection;
exports.createPool = createPool;
exports.createPoolCluster = createPoolCluster;
exports.escape = core.escape;
exports.escapeId = core.escapeId;
exports.format = core.format;
exports.raw = core.raw;
exports.PromisePool = PromisePool;
exports.PromiseConnection = PromiseConnection;
exports.PromisePoolConnection = PromisePoolConnection;
exports.__defineGetter__('Types', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/types.js [app-route] (ecmascript)"));
exports.__defineGetter__('Charsets', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charsets.js [app-route] (ecmascript)"));
exports.__defineGetter__('CharsetToEncoding', ()=>__turbopack_require__("[project]/node_modules/.pnpm/mysql2@3.11.4/node_modules/mysql2/lib/constants/charset_encodings.js [app-route] (ecmascript)"));
exports.setMaxParserCache = function(max) {
    parserCache.setMaxCache(max);
};
exports.clearParserCache = function() {
    parserCache.clearCache();
};
}}),

};

//# sourceMappingURL=6375b_mysql2_e20b06._.js.map