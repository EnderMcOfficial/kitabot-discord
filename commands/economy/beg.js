module.exports = ({
    name: "beg",
    description: "Beg for money!",
    usage: "",
    code: `$color[RANDOM]
    $description[You begged from $randomMention and got $random[10;500]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[10;500]]]
    $globalCooldown[30s;{description: Don't beg so much... Do it again in **%time%!**}{color:RANDOM}]
    ` 
})
