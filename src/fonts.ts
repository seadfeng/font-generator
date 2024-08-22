// fonts.ts
// This script generates Unicode transforms for various font styles.
// Parts of this code are inspired by or adapted from:
// https://github.com/DenverCoder1/unicode-formatter/blob/main/src/js/main.js
export default {
  normal: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  sans: "\"\\ !#$%&'()*+,-./𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫:;<=>?@𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹[]^_`𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓{|}~𝖺́𝖾́𝗂́𝗈́𝗎́𝖠́𝖤́𝖨́𝖮́𝖴́𝖺̀𝖺̂æ𝖼̧𝖾̀𝖾́𝖾̂𝖾̈𝗂̂𝗂̈𝗈̂œ𝗎̀𝗎̂𝗎̈𝗒̈𝖠̀𝖠̂Æ𝖢̧𝖤̀𝖤́𝖤̂𝖤̈𝖨̂𝖨̈𝖮̂Œ𝖴̀𝖴̂𝖴̈𝖸̈",
  sansBold: "\"\\ !#$%&'()*+,-./𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵:;<=>?@𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭[]^_`𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇{|}~𝗮́𝗲́𝗶́𝗼́𝘂́𝗔́𝗘́𝗜́𝗢́𝗨́𝗮̀𝗮̂æ𝗰̧𝗲̀𝗲́𝗲̂𝗲̈𝗶̂𝗶̈𝗼̂œ𝘂̀𝘂̂𝘂̈𝘆̈𝗔̀𝗔̂Æ𝗖̧𝗘̀𝗘́𝗘̂𝗘̈𝗜̂𝗜̈𝗢̂Œ𝗨̀𝗨̂𝗨̈𝗬̈",
  sansItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡[]^_`𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻{|}~𝘢́𝘦́𝘪́𝘰́𝘶́𝘈́𝘌́𝘐́𝘖́𝘜́𝘢̀𝘢̂æ𝘤̧𝘦̀𝘦́𝘦̂𝘦̈𝘪̂𝘪̈𝘰̂œ𝘶̀𝘶̂𝘶̈𝘺̈𝘈̀𝘈̂Æ𝘊̧𝘌̀𝘌́𝘌̂𝘌̈𝘐̂𝘐̈𝘖̂Œ𝘜̀𝘜̂𝘜̈𝘠̈",
  sansBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕[]^_`𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯{|}~𝙖́𝙚́𝙞́𝙤́𝙪́𝘼́𝙀́𝙄́𝙊́𝙐́𝙖̀𝙖̂æ𝙘̧𝙚̀𝙚́𝙚̂𝙚̈𝙞̂𝙞̈𝙤̂œ𝙪̀𝙪̂𝙪̈𝙮̈𝘼̀𝘼̂Æ𝘾̧𝙀̀𝙀́𝙀̂𝙀̈𝙄̂𝙄̈𝙊̂Œ𝙐̀𝙐̂𝙐̈𝙔̈",
  monospace: "\"\\ !#$%&'()*+,-./𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿:;<=>?@𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉[]^_`𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣{|}~𝚊́𝚎́𝚒́𝚘́𝚞́𝙰́𝙴́𝙸́𝙾́𝚄́𝚊̀𝚊̂æ𝚌̧𝚎̀𝚎́𝚎̂𝚎̈𝚒̂𝚒̈𝚘̂œ𝚞̀𝚞̂𝚞̈𝚢̈𝙰̀𝙰̂Æ𝙲̧𝙴̀𝙴́𝙴̂𝙴̈𝙸̂𝙸̈𝙾̂Œ𝚄̀𝚄̂𝚄̈𝚈̈",
  fullwidth: "\"＼　！＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；<＝>？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  fraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ[]^_`𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷{|}~𝔞́𝔢́𝔦́𝔬́𝔲́𝔄́𝔈́ℑ́𝔒́𝔘́𝔞̀𝔞̂æ𝔠̧𝔢̀𝔢́𝔢̂𝔢̈𝔦̂𝔦̈𝔬̂œ𝔲̀𝔲̂𝔲̈𝔶̈𝔄̀𝔄̂Æℭ̧𝔈̀𝔈́𝔈̂𝔈̈ℑ̂ℑ̈𝔒̂Œ𝔘̀𝔘̂𝔘̈𝔜̈",
  boldFraktur: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅[]^_`𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟{|}~𝖆́𝖊́𝖎́𝖔́𝖚́𝕬́𝕰́𝕴́𝕺́𝖀́𝖆̀𝖆̂æ𝖈̧𝖊̀𝖊́𝖊̂𝖊̈𝖎̂𝖎̈𝖔̂œ𝖚̀𝖚̂𝖚̈𝖞̈𝕬̀𝕬̂Æ𝕮̧𝕰̀𝕰́𝕰̂𝕰̈𝕴̂𝕴̈𝕺̂Œ𝖀̀𝖀̂𝖀̈𝖄̈",
  serifBold: "\"\\ !#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~𝐚́𝐞́𝐢́𝐨́𝐮́𝐀́𝐄́𝐈́𝐎́𝐔́𝐚̀𝐚̂æ𝐜̧𝐞̀𝐞́𝐞̂𝐞̈𝐢̂𝐢̈𝐨̂œ𝐮̀𝐮̂𝐮̈𝐲̈𝐀̀𝐀̂Æ𝐂̧𝐄̀𝐄́𝐄̂𝐄̈𝐈̂𝐈̈𝐎̂Œ𝐔̀𝐔̂𝐔̈𝐘̈",
  serifItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍[]^_`𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧{|}~𝑎́𝑒́𝑖́𝑜́𝑢́𝐴́𝐸́𝐼́𝑂́𝑈́𝑎̀𝑎̂æ𝑐̧𝑒̀𝑒́𝑒̂𝑒̈𝑖̂𝑖̈𝑜̂œ𝑢̀𝑢̂𝑢̈𝑦̈𝐴̀𝐴̂Æ𝐶̧𝐸̀𝐸́𝐸̂𝐸̈𝐼̂𝐼̈𝑂̂Œ𝑈̀𝑈̂𝑈̈𝑌̈",
  serifBoldItalic: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁[]^_`𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛{|}~𝒂́𝒆́𝒊́𝒐́𝒖́𝑨́𝑬́𝑰́𝑶́𝑼́𝒂̀𝒂̂æ𝒄̧𝒆̀𝒆́𝒆̂𝒆̈𝒊̂𝒊̈𝒐̂œ𝒖̀𝒖̂𝒖̈𝒚̈𝑨̀𝑨̂Æ𝑪̧𝑬̀𝑬́𝑬̂𝑬̈𝑰̂𝑰̈𝑶̂Œ𝑼̀𝑼̂𝑼̈𝒀̈",
  doubleStruck: "\"\\ !#$%&'()*+,-./𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡:;<=>?@𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ[]^_`𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫{|}~𝕒́𝕖́𝕚́𝕠́𝕦́𝔸́𝔼́𝕀́𝕆́𝕌́𝕒̀𝕒̂æ𝕔̧𝕖̀𝕖́𝕖̂𝕖̈𝕚̂𝕚̈𝕠̂œ𝕦̀𝕦̂𝕦̈𝕪̈𝔸̀𝔸̂Æℂ̧𝔼̀𝔼́𝔼̂𝔼̈𝕀̂𝕀̈𝕆̂Œ𝕌̀𝕌̂𝕌̈𝕐̈",
  // Cursive script
  script: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵[]^_`𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏{|}~𝒶́ℯ́𝒾́ℴ́𝓊́𝒜́ℰ́ℐ́𝒪́𝒰́𝒶̀𝒶̂æ𝒸̧ℯ̀ℯ́ℯ̂ℯ̈𝒾̂𝒾̈ℴ̂œ𝓊̀𝓊̂𝓊̈𝓎̈𝒜̀𝒜̂Æ𝒞̧ℰ̀ℰ́ℰ̂ℰ̈ℐ̂ℐ̈𝒪̂Œ𝒰̀𝒰̂𝒰̈𝒴̈",
  // Bold cursive script
  boldScript: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩[]^_`𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃{|}~𝓪́𝓮́𝓲́𝓸́𝓾́𝓐́𝓔́𝓘́𝓞́𝓤́𝓪̀𝓪̂æ𝓬̧𝓮̀𝓮́𝓮̂𝓮̈𝓲̂𝓲̈𝓸̂œ𝓾̀𝓾̂𝓾̈𝔂̈𝓐̀𝓐̂Æ𝓒̧𝓔̀𝓔́𝓔̂𝓔̈𝓘̂𝓘̈𝓞̂Œ𝓤̀𝓤̂𝓤̈𝓨̈",
  circled: "\"⦸ !#$%&'()⊛⊕,⊖⨀⊘⓪①②③④⑤⑥⑦⑧⑨:;⧀⊜⧁?@ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ[]^_`ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ{⦶}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  circledNegative: "\"\\ !#$%&'()*+,-./⓿❶❷❸❹❺❻❼❽❾:;<=>?@🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩[]^_`🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩{|}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  squared: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉[]^_`🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉{|}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  squaredNegative: "\"⧅ !#$%&'()⧆⊞,⊟⊡⧄0123456789:;<=>?@🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉[]^_`🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉{|}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  parenthesized: "\"\\ !#$%&'()*+,-./0⑴⑵⑶⑷⑸⑹⑺⑻⑼:;<=>?@⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵[]^_`⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵{|}~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  smallCaps: "\"\\ !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩꞯʀꜱᴛᴜᴠᴡxʏᴢ{|}~ᴀ́ᴇ́ɪ́ᴏ́ᴜ́ÁÉÍÓÚᴀ̀ᴀ̂æᴄ̧ᴇ̀ᴇ́ᴇ̂ᴇ̈ɪ̂ɪ̈ᴏ̂œᴜ̀ᴜ̂ᴜ̈ʏ̈ÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  subscript: "\"\\ !#$%&'₍₎*₊,₋./₀₁₂₃₄₅₆₇₈₉:;<₌>?@ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘ🇶ʀꜱᴛᴜᴠᴡxʏᴢ[]^_`ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏{|}~áₑ́ᵢ́ₒ́ᵤ́ÁÉÍÓÚàâæçₑ̀ₑ́ₑ̂ₑ̈ᵢ̂ᵢ̈ₒ̂œᵤ̀ᵤ̂ᵤ̈ÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  superscript: "\"\\ !#$%&'⁽⁾*⁺,⁻./⁰¹²³⁴⁵⁶⁷⁸⁹:;<⁼>?@ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ[]^_`ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ{|}~ᵃ́ᵉ́ᶦ́ᵒ́ᵘ́ᴬ́ᴱ́ᴵ́ᴼ́ᵁ́ᵃ̀ᵃ̂æᶜ̧ᵉ̀ᵉ́ᵉ̂ᵉ̈ᶦ̂ᶦ̈ᵒ̂œᵘ̀ᵘ̂ᵘ̈ʸ̈ᴬ̀ᴬ̂Æᶜ̧ᴱ̀ᴱ́ᴱ̂ᴱ̈ᴵ̂ᴵ̈ᴼ̂Œᵁ̀ᵁ̂ᵁ̈ʸ̈",
  inverted: "„\\ ¡#$%⅋,)(*+‘-˙/0ƖՇƐᔭϛ9𝘓86:;<=>¿@∀ꓭↃꓷƎℲ⅁HIſꓘ⅂WNOԀῸꓤS⊥∩ꓥMX⅄Z][^‾`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz}|{~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  mirrored: "\"/ !#$%&')(*+,-.\\0߁ςƐ߂टმ٢8୧:;<=>⸮@AꓭↃꓷƎꟻӘHIႱꓘ⅃MИOꟼϘЯꙄTUVWXYZ][^_`ɒdↄbɘʇϱʜiįʞlmᴎoqpᴙꙅɈυvwxγz}|{~áéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  rotatedLeft: "=/ !#$%&-⏝⏜*+`ǀ∙\\ⴰ↽വ𝈐ፓහமΓꝏᓂ⠒;˅𝄥∧ᣇ@ᗉߘ𝈱⌓ш𝈯ᘎ⌶𝄩⥟𝈎⨼∑Zⴰᓇⵚᓚᔕ⊢⊃𝈷ᕒ×⤚𝇙⎵⎴‹|`ơᓄ𝈱ᓀш𝈯თ𝈦𝄩ᓜ𝈎⨼ᗴ⊂ⴰᓇᓂᓚᔕ𝀏⊃𝈷З×⤚𝇙⏟_⏞ಽáéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
  rotatedRight: "=/ !#$%&-⏜⏝*+`ǀ∙\\ⴰ⇀ᘚω𝈦හの⨼ꝏᓄ⠒;∧𝄥˅?@ᗆϖᴒᗜጠ╖ᘏ⌶𝄩ᓚ⌤⌐ᕒZⴰᓀᓄᓓᔕ⊣⊂<ᓬ×⤙𝇙⎴⎵›|`⌕ᓂᴒ௨ጠ╖மፓ𝄩ᓚ⌤⌐ᴟᴝⴰᓀᓄᓓᔕ𝀏⊂<ᓬ×⤙𝇙⏞_⏟ಽáéíóúÁÉÍÓÚàâæçèéêëîïôœùûüÿÀÂÆÇÈÉÊËÎÏÔŒÙÛÜŸ",
}