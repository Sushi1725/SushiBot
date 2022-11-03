const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] });
const prefix = '!';
const fsLibrary  = require('fs')

const { MessageAttachment } = require('discord.js');

// for when the bot starts up
client.once('ready', () => {
    console.log('SushiBot is online!')
    // client.user.setActivity(' Mr Liang\'s tongue', { type: 'WATCHING' });
    client.user.setActivity(' the Birdcage play NNN', { type: 'WATCHING' });
});

// let bot talk through console
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get("1026101854163189790").send(x.join(" "));
});

// client.on('message', msg =>{
//     if (msg.author == client.user)
//     return
//     if (msg.author.bot) return
//     const role = msg.guild.roles.cache.find(role => role.name === 'Emus')
//     const member = client.users.fetch('947096977060012062')
    

//     if(msg.content.includes('test')){
//         console.log(role)
//         console.log(member)
//         member.roles.add(role)
//         setTimeout(function(){
//             member.roles.remove(role)
//         },2500);
//     }
// });



// no nig november funny tings
const ni = ["nigger", "Nigger", "nIgger", "NIgger", "niGger", "NiGger", "nIGger", "NIGger", "nigGer", "NigGer", "nIgGer", "NIgGer", "niGGer", "NiGGer", "nIGGer", "NIGGer", "niggEr", "NiggEr", "nIggEr", "NIggEr", "niGgEr", "NiGgEr", "nIGgEr", "NIGgEr", "nigGEr", "NigGEr", "nIgGEr", "NIgGEr", "niGGEr", "NiGGEr", "nIGGEr", "NIGGEr", "niggeR", "NiggeR", "nIggeR", "NIggeR", "niGgeR", "NiGgeR", "nIGgeR", "NIGgeR", "nigGeR", "NigGeR", "nIgGeR", "NIgGeR", "niGGeR", "NiGGeR", "nIGGeR", "NIGGeR", "niggER", "NiggER", "nIggER", "NIggER", "niGgER", "NiGgER", "nIGgER", "NIGgER", "nigGER", "NigGER", "nIgGER", "NIgGER", "niGGER", "NiGGER", "nIGGER", "NIGGER", "nigga", "Nigga", "nIgga", "NIgga", "niGga", "NiGga", "nIGga", "NIGga", "nigGa", "NigGa", "nIgGa", "NIgGa", "niGGa", "NiGGa", "nIGGa", "NIGGa", "niggA", "NiggA", "nIggA", "NIggA", "niGgA", "NiGgA", "nIGgA", "NIGgA", "nigGA", "NigGA", "nIgGA", "NIgGA", "niGGA", "NiGGA", "nIGGA", "NIGGA"]
const nig = ["nigg", "Nigg", "nIgg", "NIgg", "niGg", "NiGg", "nIGg", "NIGg", "nigG", "NigG", "nIgG", "NIgG", "niGG", "NiGG", "nIGG", "NIGG", "nig ", "Nig ", "nIg ", "NIg ", "niG ", "NiG ", "nIG ", "NIG ", "nig", "Nig", "nIg", "NIg", "niG", "NiG", "nIG", "NIG"]
client.on('message', message => {
    if (message.author == client.user)
        return
    if (message.author.bot) return

        // for each individual user, a different file
        if(message.author == ('626688631309991937')){           // sushi
            for (var a = 0; a < ni.length; a++) {
                if(message.content.includes(ni[a])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/shou-yi.txt', (error, txtString) => {
                        if (error) throw err;
                        let a = parseInt(txtString) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/shou-yi.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var A = 0; A < nig.length; A++) {
                if(message.content === (nig[A])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/shou-yi.txt', (error, aaa) => {
                        if (error) throw err;
                        let a = parseInt(aaa) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/shou-yi.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
                // for each individual user, a different file
        if(message.author == ('424724370469158922')){     //michael
            for (var b = 0; b < ni.length; b++) {
                if(message.content.includes(ni[b])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/michael.txt', (error, aab) => {
                        if (error) throw err;
                        let a = parseInt(aab) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/michael.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var B = 0; B < nig.length; B++) {
                if(message.content === (nig[B])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/michael.txt', (error, aac) => {
                        if (error) throw err;
                        let a = parseInt(aac) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/michael.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, c different file
        if(message.author == ('601225718508290049')){     // mark
            for (var c = 0; c < ni.length; c++) {
                if(message.content.includes(ni[c])){
                    // Data which will need to add in c file.
                    fsLibrary.readFile('./things/mark.txt', (error, aad) => {
                        if (error) throw err;
                        let a = parseInt(aad) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/mark.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var C = 0; C < nig.length; C++) {
                if(message.content === (nig[C])){
                    // Data which will need to add in C file.
                    fsLibrary.readFile('./things/mark.txt', (error, aae) => {
                        if (error) throw err;
                        let a = parseInt(aae) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/mark.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, c different file
        if(message.author == ('636548131936403476')){      // heyheyheychoc
            for (var d = 0; d < ni.length; d++) {
                if(message.content.includes(ni[d])){
                    // Data which will need to add in c file.
                    fsLibrary.readFile('./things/heyheyheychoc.txt', (error, aaf) => {
                        if (error) throw err;
                        let c = parseInt(aaf) + 1
                        let data = c.toString()
                        fsLibrary.writeFile('./things/heyheyheychoc.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var D = 0; D < nig.length; D++) {
                if(message.content === (nig[D])){
                    // Data which will need to add in c file.
                    fsLibrary.readFile('./things/heyheyheychoc.txt', (error, aag) => {
                        if (error) throw err;
                        let c = parseInt(aag) + 1
                        let data = c.toString()
                        fsLibrary.writeFile('./things/heyheyheychoc.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, a different file
        if(message.author == ('654230200430624798')){       //nivriti
            for (var e = 0; e < ni.length; e++) {
                if(message.content.includes(ni[e])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/niv.txt', (error, aah) => {
                        if (error) throw err;
                        let a = parseInt(aah) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/niv.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var E = 0; E < nig.length; E++) {
                if(message.content === (nig[E])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/niv.txt', (error, aai) => {
                        if (error) throw err;
                        let a = parseInt(aai) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/niv.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, f different file
        if(message.author == ('327773882566311937')){        //gang steve
            for (var f = 0; f < ni.length; f++) {
                if(message.content.includes(ni[f])){
                    // Data which will need to add in f file.
                    fsLibrary.readFile('./things/gangsteve.txt', (error, aaj) => {
                        if (error) throw err;
                        let a = parseInt(aaj) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/gangsteve.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var F = 0; F < nig.length; F++) {
                if(message.content === (nig[F])){
                    // Data which will need to add in F file.
                    fsLibrary.readFile('./things/gangsteve.txt', (error, aak) => {
                        if (error) throw err;
                        let a = parseInt(aak) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/gangsteve.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, f different file
        if(message.author == ('372987776745865216')){         //ghassan
            for (var g = 0; g < ni.length; g++) {
                if(message.content.includes(ni[g])){
                    // Data which will need to add in f file.
                    fsLibrary.readFile('./things/goose.txt', (error, aal) => {
                        if (error) throw err;
                        let a = parseInt(aal) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/goose.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var G = 0; G < nig.length; G++) {
                if(message.content === (nig[G])){
                    // Data which will need to add in f file.
                    fsLibrary.readFile('./things/goose.txt', (error, aam) => {
                        if (error) throw err;
                        let a = parseInt(aam) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/goose.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, a different file
        if(message.author == ('337096500439941120')){          //syed haider
            for (var h = 0; h < ni.length; h++) {
                if(message.content.includes(ni[h])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/syed.txt', (error, aan) => {
                        if (error) throw err;
                        let a = parseInt(aan) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/syed.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var H = 0; H < nig.length; H++) {
                if(message.content === (nig[H])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/syed.txt', (error, aao) => {
                        if (error) throw err;
                        let a = parseInt(aao) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/syed.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, i different file
        if(message.author == ('552012442318798870')){         //kingo
            for (var i = 0; i < ni.length; i++) {
                if(message.content.includes(ni[i])){
                    // Data which will need to add in i file.
                    fsLibrary.readFile('./things/kingo.txt', (error, aap) => {
                        if (error) throw err;
                        let a = parseInt(aap) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/kingo.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var I = 0; I < nig.length; I++) {
                if(message.content === (nig[I])){
                    // Data which will need to add in I file.
                    fsLibrary.readFile('./things/kingo.txt', (error, aaq) => {
                        if (error) throw err;
                        let a = parseInt(aaq) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/kingo.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, i different file
        if(message.author == ('707492264426995762')){          //nigoline tan
            for (var j = 0; j < ni.length; j++) {
                if(message.content.includes(ni[j])){
                    // Data which will need to add in i file.
                    fsLibrary.readFile('./things/carrot.txt', (error, aar) => {
                        if (error) throw err;
                        let i = parseInt(aar) + 1
                        let data = i.toString()
                        fsLibrary.writeFile('./things/carrot.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var J = 0; J < nig.length; J++) {
                if(message.content === (nig[J])){
                    // Data which will need to add in i file.
                    fsLibrary.readFile('./things/carrot.txt', (error, aas) => {
                        if (error) throw err;
                        let i = parseInt(aas) + 1
                        let data = i.toString()
                        fsLibrary.writeFile('./things/carrot.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, a different file
        if(message.author == ('438949233471520768')){        //caio marinho
            for (var k = 0; k < ni.length; k++) {
                if(message.content.includes(ni[k])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/caio.txt', (error, aat) => {
                        if (error) throw err;
                        let a = parseInt(aat) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/caio.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var K = 0; K < nig.length; K++) {
                if(message.content === (nig[K])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/caio.txt', (error, aau) => {
                        if (error) throw err;
                        let a = parseInt(aau) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/caio.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, l different file
        if(message.author == ('400187146662707202')){            //niggith
            for (var l = 0; l < ni.length; l++) {
                if(message.content.includes(ni[l])){
                    // Data which will need to add in l file.
                    fsLibrary.readFile('./things/nikith.txt', (error, aav) => {
                        if (error) throw err;
                        let a = parseInt(aav) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/nikith.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var L = 0; L < nig.length; L++) {
                if(message.content === (nig[L])){
                    // Data which will need to add in L file.
                    fsLibrary.readFile('./things/nikith.txt', (error, aaw) => {
                        if (error) throw err;
                        let a = parseInt(aaw) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/nikith.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
            // for each individual user, l different file
        if(message.author == ('886822807479128065')){         //ramsey
            for (var m = 0; m < ni.length; m++) {
                if(message.content.includes(ni[m])){
                    // Data which will need to add in l file.
                    fsLibrary.readFile('./things/ramsey.txt', (error, aax) => {
                        if (error) throw err;
                        let a = parseInt(aax) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/ramsey.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var M = 0; M < nig.length; M++) {
                if(message.content === (nig[M])){
                    // Data which will need to add in l file.
                    fsLibrary.readFile('./things/ramsey.txt', (error, aay) => {
                        if (error) throw err;
                        let a = parseInt(aay) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/ramsey.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
    
        // for each individual user, a different file
        if(message.author == ('737280378532003960')){       //gang steve alt
            for (var n = 0; n < ni.length; n++) {
                if(message.content.includes(ni[n])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/gangstevealt.txt', (error, aaz) => {
                        if (error) throw err;
                        let a = parseInt(aaz) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/gangstevealt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var N = 0; N < nig.length; N++) {
                if(message.content === (nig[N])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/gangstevealt.txt', (error, aba) => {
                        if (error) throw err;
                        let a = parseInt(aba) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/gangstevealt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, o different file
        if(message.author == ('398725227585994754')){        //cooper
            for (var o = 0; o < ni.length; o++) {
                if(message.content.includes(ni[o])){
                    // Data which will need to add in o file.
                    fsLibrary.readFile('./things/cooper.txt', (error, abb) => {
                        if (error) throw err;
                        let a = parseInt(abb) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/cooper.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var O = 0; O < nig.length; O++) {
                if(message.content === (nig[O])){
                    // Data which will need to add in O file.
                    fsLibrary.readFile('./things/cooper.txt', (error, abc) => {
                        if (error) throw err;
                        let a = parseInt(abc) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/cooper.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, o different file
        if(message.author == ('520808954620805139')){    //kalmar
            for (var p = 0; p < ni.length; p++) {
                if(message.content.includes(ni[p])){
                    // Data which will need to add in o file.
                    fsLibrary.readFile('./things/kalmar.txt', (error, abd) => {
                        if (error) throw err;
                        let o = parseInt(abd) + 1
                        let data = o.toString()
                        fsLibrary.writeFile('./things/kalmar.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var P = 0; P < nig.length; P++) {
                if(message.content === (nig[P])){
                    // Data which will need to add in o file.
                    fsLibrary.readFile('./things/kalmar.txt', (error, abe) => {
                        if (error) throw err;
                        let o = parseInt(abe) + 1
                        let data = o.toString()
                        fsLibrary.writeFile('./things/kalmar.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, a different file
        if(message.author == ('674744224608026624')){        //caio alt
            for (var q = 0; q < ni.length; q++) {
                if(message.content.includes(ni[q])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/caioalt.txt', (error, abf) => {
                        if (error) throw err;
                        let a = parseInt(abf) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/caioalt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var Q = 0; Q < nig.length; Q++) {
                if(message.content === (nig[Q])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/caioalt.txt', (error, abg) => {
                        if (error) throw err;
                        let a = parseInt(abg) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/caioalt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, r different file
        if(message.author == ('283856988335505408')){          //kalmar alt
            for (var r = 0; r < ni.length; r++) {
                if(message.content.includes(ni[r])){
                    // Data which will need to add in r file.
                    fsLibrary.readFile('./things/kalmaralt.txt', (error, abh) => {
                        if (error) throw err;
                        let a = parseInt(abh) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/kalmaralt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var R = 0; R < nig.length; R++) {
                if(message.content === (nig[R])){
                    // Data which will need to add in R file.
                    fsLibrary.readFile('./things/kalmaralt.txt', (error, abi) => {
                        if (error) throw err;
                        let a = parseInt(abi) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/kalmaralt.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, r different file
        if(message.author == ('868125292529586176')){      //nikita
            for (var s = 0; s < ni.length; s++) {
                if(message.content.includes(ni[s])){
                    // Data which will need to add in r file.
                    fsLibrary.readFile('./things/nikita.txt', (error, abj) => {
                        if (error) throw err;
                        let a = parseInt(abj) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/nikita.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var S = 0; S < nig.length; S++) {
                if(message.content === (nig[S])){
                    // Data which will need to add in r file.
                    fsLibrary.readFile('./things/nikita.txt', (error, abk) => {
                        if (error) throw err;
                        let a = parseInt(abk) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/nikita.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, a different file
        if(message.author == ('517789769162555422')){     //fleeton
            for (var t = 0; t < ni.length; t++) {
                if(message.content.includes(ni[t])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/fleeton.txt', (error, abl) => {
                        if (error) throw err;
                        let a = parseInt(abl) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/fleeton.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var T = 0; T < nig.length; T++) {
                if(message.content === (nig[T])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/fleeton.txt', (error, abm) => {
                        if (error) throw err;
                        let a = parseInt(abm) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/fleeton.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, u different file
        if(message.author == ('424156215896178709')){    //emre
            for (var u = 0; u < ni.length; u++) {
                if(message.content.includes(ni[u])){
                    // Data which will need to add in u file.
                    fsLibrary.readFile('./things/emre.txt', (error, abn) => {
                        if (error) throw err;
                        let a = parseInt(abn) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/emre.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var U = 0; U < nig.length; U++) {
                if(message.content === (nig[U])){
                    // Data which will need to add in U file.
                    fsLibrary.readFile('./things/emre.txt', (error, abo) => {
                        if (error) throw err;
                        let a = parseInt(abo) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/emre.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, u different file
        if(message.author == ('276955094778642432')){         // david coulam
            for (var v = 0; v < ni.length; v++) {
                if(message.content.includes(ni[v])){
                    // Data which will need to add in u file.
                    fsLibrary.readFile('./things/david.txt', (error, abp) => {
                        if (error) throw err;
                        let u = parseInt(abp) + 1
                        let data = u.toString()
                        fsLibrary.writeFile('./things/david.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var V = 0; V < nig.length; V++) {
                if(message.content === (nig[V])){
                    // Data which will need to add in u file.
                    fsLibrary.readFile('./things/david.txt', (error, abq) => {
                        if (error) throw err;
                        let u = parseInt(abq) + 1
                        let data = u.toString()
                        fsLibrary.writeFile('./things/david.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, a different file
        if(message.author == ('897595663288778786')){             //zena
            for (var w = 0; w < ni.length; w++) {
                if(message.content.includes(ni[w])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/zena.txt', (error, abr) => {
                        if (error) throw err;
                        let a = parseInt(abr) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/zena.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var W = 0; W < nig.length; W++) {
                if(message.content === (nig[W])){
                    // Data which will need to add in a file.
                    fsLibrary.readFile('./things/zena.txt', (error, abs) => {
                        if (error) throw err;
                        let a = parseInt(abs) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/zena.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
     
            // for each individual user, x different file
        if(message.author == ('451634294159572992')){         //mahin
            for (var x = 0; x < ni.length; x++) {
                if(message.content.includes(ni[x])){
                    // Data which will need to add in x file.
                    fsLibrary.readFile('./things/mahin.txt', (error, abt) => {
                        if (error) throw err;
                        let a = parseInt(abt) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/mahin.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
            for (var X = 0; X < nig.length; X++) {
                if(message.content === (nig[X])){
                    // Data which will need to add in X file.
                    fsLibrary.readFile('./things/mahin.txt', (error, abu) => {
                        if (error) throw err;
                        let a = parseInt(abu) + 1
                        let data = a.toString()
                        fsLibrary.writeFile('./things/mahin.txt', data, (error) => {
                            if (error) throw err;
                        })
                    })
                    message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
                }
            }
        }
                // for each individual user, x different file
    if(message.author == ('1005009857339981895')){             //carrotalt (carrot alt)
        for (var y = 0; y < ni.length; y++) {
            if(message.content.includes(ni[y])){
                // Data which will need to add in x file.
                fsLibrary.readFile('./things/carrotalt.txt', (error, abv) => {
                    if (error) throw err;
                    let a = parseInt(abv) + 1
                    let data = a.toString()
                    fsLibrary.writeFile('./things/carrotalt.txt', data, (error) => {
                        if (error) throw err;
                    })
                })
                message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
            }
        }
        for (var Y = 0; Y < nig.length; Y++) {
            if(message.content === (nig[Y])){
                // Data which will need to add in x file.
                fsLibrary.readFile('./things/carrotalt.txt', (error, abw) => {
                    if (error) throw err;
                    let a = parseInt(abw) + 1
                    let data = a.toString()
                    fsLibrary.writeFile('./things/carrotalt.txt', data, (error) => {
                        if (error) throw err;
                    })
                })
                message.channel.send(":warning: you said n-word!! (or had the intention to) :warning:")
            }
        }
    }

})

client.on('message', message => {
    if (message.author == client.user)
        return
    if (message.author.bot) return

    if(!message.content.startsWith(prefix) || message.author.bot) return;


    if(message.author == ('626688631309991937')){  
        if(message.content.includes('!add')){
            let split_message = message.content.split(' ')
            console.log(split_message.slice(2));
            if(split_message.length > 3 || split_message.length <= 1){
                message.channel.send('format: !add {user\'s name} {amount}')
                // break;
            } else {
                console.log(split_message[0]);
                console.log(split_message[1]);
                console.log(split_message[2]);
                fsLibrary.readFile('./things/' + split_message[1] + '.txt', (error, acx) => {
                    if (error) throw err;
                    let a = parseInt(acx) + parseInt(split_message[2])
                    let data = a.toString()
                    fsLibrary.writeFile('./things/' + split_message[1] + '.txt', data, (error) => {
                        if (error) throw err;
                    })
                    message.channel.send('updated?')
                })
            }
        }
    }

    if(message.author == ('626688631309991937')){  
        if(message.content.includes('!subtract')){
            let split_message = message.content.split(' ')
            console.log(split_message.slice(2));
            if(split_message.length > 3 || split_message.length <= 1){
                message.channel.send('format: !subtract {user\'s name} {amount}')
                // break;
            } else {
                console.log(split_message[0]);
                console.log(split_message[1]);
                console.log(split_message[2]);
                fsLibrary.readFile('./things/' + split_message[1] + '.txt', (error, acx) => {
                    if (error) throw err;
                    let a = parseInt(acx) - parseInt(split_message[2])
                    let data = a.toString()
                    fsLibrary.writeFile('./things/' + split_message[1] + '.txt', data, (error) => {
                        if (error) throw err;
                    })
                    message.channel.send('updated?')
                })
            }
        }
    }

})


//bot commands
client.on('message', message =>{
    if (message.author == client.user)
        return
    if (message.author.bot) return

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'shou-yi'){
        fsLibrary.readFile('./things/shou-yi.txt', (error, abx) => {
            if (error) throw err;
            message.channel.send('Shou-Yi - ' + abx.toString());
        })
    }
    if(command === 'michael'){
        fsLibrary.readFile('./things/michael.txt', (error, aby) => {
            if (error) throw err;
            message.channel.send('Michael - ' + aby.toString());
        })
    }
    if(command === 'mark'){
        fsLibrary.readFile('./things/mark.txt', (error, abz) => {
            if (error) throw err;
            message.channel.send('Mark - ' + abz.toString());
        })
    }
    if(command === 'heyheyheychoc'){
        fsLibrary.readFile('./things/heyheyheychoc.txt', (error, aca) => {
            if (error) throw err;
            message.channel.send('Alex I - ' + aca.toString());
        })
    }
    if(command === 'niv'){
        fsLibrary.readFile('./things/niv.txt', (error, acb) => {
            if (error) throw err;
            message.channel.send('Nivriti - ' + acb.toString());
        })
    }
    if(command === 'gangsteve'){
        fsLibrary.readFile('./things/gangsteve.txt', (error, acc) => {
            if (error) throw err;
            message.channel.send('Sam W - ' + acc.toString());
        })
    }
    if(command === 'goose'){
        fsLibrary.readFile('./things/goose.txt', (error, acd) => {
            if (error) throw err;
            message.channel.send('Ghassan - ' + acd.toString());
        })

    }
    if(command === 'syed'){
        fsLibrary.readFile('./things/syed.txt', (error, ace) => {
            if (error) throw err;
            message.channel.send('Syed - ' + ace.toString());
        })
    }
    if(command === 'kingo'){
        fsLibrary.readFile('./things/kingo.txt', (error, acf) => {
            if (error) throw err;
            message.channel.send('Kingo - ' + acf.toString());
        })
    }
    if(command === 'carrot'){
        fsLibrary.readFile('./things/carrot.txt', (error, acg) => {
            if (error) throw err;
            message.channel.send('Caroline - ' + acg.toString());
        })
    }
    if(command === 'caio'){
        fsLibrary.readFile('./things/caio.txt', (error, ach) => {
            if (error) throw err;
            message.channel.send('Caio - ' + ach.toString());
        })
    }
    if(command === 'nikith'){
        fsLibrary.readFile('./things/nikith.txt', (error, aci) => {
            if (error) throw err;
            message.channel.send('Nikith - ' + aci.toString());
        })
    }
    if(command === 'ramsey'){
        fsLibrary.readFile('./things/ramsey.txt', (error, acj) => {
            if (error) throw err;
            message.channel.send('Ramsey - ' + acj.toString());
        })
    }
    if(command === 'gangstevealt'){
        fsLibrary.readFile('./things/gangstevealt.txt', (error, ack) => {
            if (error) throw err;
            message.channel.send('Sam W Alt - ' + ack.toString());
        })
    }
    if(command === 'cooper'){
        fsLibrary.readFile('./things/cooper.txt', (error, acl) => {
            if (error) throw err;
            message.channel.send('Cooper - ' + acl.toString());
        })
    }
    if(command === 'kalmar'){
        fsLibrary.readFile('./things/kalmar.txt', (error, acm) => {
            if (error) throw err;
            message.channel.send('Alex K - ' + acm.toString());
        })
    }
    if(command === 'caioalt'){
        fsLibrary.readFile('./things/caioalt.txt', (error, acn) => {
            if (error) throw err;
            message.channel.send('Caio Alt - ' + acn.toString());
        })
    }
    if(command === 'kalmaralt'){
        fsLibrary.readFile('./things/kalmaralt.txt', (error, aco) => {
            if (error) throw err;
            message.channel.send('Alex K Alt - ' + aco.toString());
        })
    }
    if(command === 'nikita'){
        fsLibrary.readFile('./things/nikita.txt', (error, acp) => {
            if (error) throw err;
            message.channel.send('Nikita - ' + acp.toString());
        })
    }
    if(command === 'fleeton'){
        fsLibrary.readFile('./things/fleeton.txt', (error, acq) => {
            if (error) throw err;
            message.channel.send('Nicholas - ' + acq.toString());
        })
    }
    if(command === 'emre'){
        fsLibrary.readFile('./things/emre.txt', (error, acr) => {
            if (error) throw err;
            message.channel.send('Emre - ' + acr.toString());
        })
    }
    if(command === 'david'){
        fsLibrary.readFile('./things/david.txt', (error, acs) => {
            if (error) throw err;
            message.channel.send('David - ' + acs.toString());
        })
    }
    if(command === 'zena'){
        fsLibrary.readFile('./things/zena.txt', (error, act) => {
            if (error) throw err;
            message.channel.send('Zena - ' + act.toString());
        })
    }
    if(command === 'mahin'){
        fsLibrary.readFile('./things/mahin.txt', (error, acu) => {
            if (error) throw err;
            message.channel.send('Mahin - ' + acu.toString());
        })
    }
    if(command === 'carrotalt'){
        fsLibrary.readFile('./things/carrotalt.txt', (error, acv) => {
            if (error) throw err;
            message.channel.send('Caroline Alt - ' + acv.toString());
        })
    }

    if(command === 'uptime'){
        // bot uptime tings
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        // message.channel.send(uptime)

        const uptimeembed = new MessageEmbed()
        .setColor('#c39167')
        .setTitle('Uptime')
        .setDescription(uptime)
        .setTimestamp()
        .setFooter({ text: 'sushi#9501', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png' });

        message.channel.send({ embeds: [uptimeembed] });

    }

    if(command === 'images'){
        message.channel.send('https://discord.gg/tRcUbbb2pF')
    }

    if(command === 'nigga'){
        message.channel.send('There are currently `7` browns within *The Birdage* \n <@&953942592284921906>')
    }

    if(command === 'ping'){
        message.channel.send((`pong! \`${Date.now() - message.createdTimestamp}ms\``))
    }

    if(command === 'compilation'){
        message.channel.send('https://youtu.be/U0R1xiPYA-4')
    }

    if(command === 'github'){
        message.channel.send('https://github.com/Sushi1725/Roll-a-Ball---Remixed.git')
    }

    if(command === 'website'){
        message.channel.send('https://food-thought.000webhostapp.com/')
    }

    if(command === 'help'){
        const exampleEmbed = new MessageEmbed()
        .setColor('#c39167')
        .setTitle('SushiBot')
        .setURL('https://github.com/Sushi1725/Roll-a-Ball---Remixed.git')
        .setAuthor({ name: 'Shou-Yi Lai', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png', url: 'https://github.com/Sushi1725/Roll-a-Ball---Remixed.git' })
        .setDescription('A bot made by sushi#0229')
        .setThumbnail('https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png')
        .addFields(
            { name: 'Commands', value: '!ping \n !github \n !website \n !images \n !compilation'},
        //	{ name: '\u200B', value: '\u200B' },
        //	{ name: 'Inline field title', value: 'Some value here', inline: true },
        //	{ name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'sushi#0229', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png' });

        message.channel.send({ embeds: [exampleEmbed] });
    }

});


// client.on('guildMemberAdd', member => {
//     console.log('User @' + member.user.tag + ' has joined the server!');
//     var role = member.guild.roles.cache.find(role => role.name == "Newbie")
//     member.roles.add(role);
// });





// bot commands
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//self destruct command
    // if(command === 'STOP'){
    //     if(message.author == ('626688631309991937')){
    //         client.log('client destroyed')
    //         message.channel.send("Shutting down...")
    //         setTimeout(function(){
    //             client.destroy();
    //         },50);
    //     }
    // } else {
    //     message.reply("Uh oh, you do not have the permissions to do that")
    // }

    // if(command === 'join'){
    //     message.member.voice.channel.join()
    // }

    // if(command === 'next'){
    //     client.channels.get(948116413393014814).send("yo")
    // }

    // if(command === 'test'){
    //     message.channel.send('hosting rn')
    //     let testRole = message.guild.roles.cache.find(role => role.name === 'everyone');
    //     let channel = message.channel;

    //     // overwrites 'SEND_MESSAGES' role, only on this specific channel
    //     channel.permissionOverwrites(
    //         testRole,
    //         { 'SEND_MESSAGES': false },
    //         // optional 'reason' for permission overwrite
    //         'closing up shop'
    //     )
    // }

//     if(command === 'uptime'){
//         // bot uptime tings
//         let totalSeconds = (client.uptime / 1000);
//         let days = Math.floor(totalSeconds / 86400);
//         totalSeconds %= 86400;
//         let hours = Math.floor(totalSeconds / 3600);
//         totalSeconds %= 3600;
//         let minutes = Math.floor(totalSeconds / 60);
//         let seconds = Math.floor(totalSeconds % 60);
//         let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

//         // message.channel.send(uptime)

//         const uptimeembed = new MessageEmbed()
//         .setColor('#c39167')
//         .setTitle('Uptime')
//         .setDescription(uptime)
//         .setTimestamp()
//         .setFooter({ text: 'sushi#9501', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png' });

//         message.channel.send({ embeds: [uptimeembed] });

//     }

//     if(command === 'images'){
//         message.channel.send('https://discord.gg/tRcUbbb2pF')
//     }

//     if(command === 'nigga'){
//         message.channel.send('There are currently `7` browns within *The Birdage* \n <@&953942592284921906>')
//     }

//     if(command === 'ping'){
//         message.channel.send((`pong! \`${Date.now() - message.createdTimestamp}ms\``))
//     }

//     if(command === 'compilation'){
//         message.channel.send('https://youtu.be/U0R1xiPYA-4')
//     }

//     if(command === 'github'){
//         message.channel.send('https://github.com/Sushi1725/Roll-a-Ball---Remixed.git')
//     }

//     if(command === 'website'){
//         message.channel.send('https://food-thought.000webhostapp.com/')
//     }

//     if(command === 'help'){
//         const exampleEmbed = new MessageEmbed()
//         .setColor('#c39167')
//         .setTitle('SushiBot')
//         .setURL('https://github.com/Sushi1725/Roll-a-Ball---Remixed.git')
//         .setAuthor({ name: 'Shou-Yi Lai', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png', url: 'https://github.com/Sushi1725/Roll-a-Ball---Remixed.git' })
//         .setDescription('A bot made by sushi#0229')
//         .setThumbnail('https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png')
//         .addFields(
//             { name: 'Commands', value: '!ping \n !github \n !website \n !images \n !compilation'},
//         //	{ name: '\u200B', value: '\u200B' },
//         //	{ name: 'Inline field title', value: 'Some value here', inline: true },
//         //	{ name: 'Inline field title', value: 'Some value here', inline: true },
//         )
//         //.addField('Inline field title', 'Some value here', true)
//         //.setImage('https://i.imgur.com/AfFp7pu.png')
//         .setTimestamp()
//         .setFooter({ text: 'sushi#0229', iconURL: 'https://cdn.discordapp.com/attachments/948116413393014814/953225866513633330/unknown.png' });

//         message.channel.send({ embeds: [exampleEmbed] });
//     }

// });

// // new pi bot command [not on rn]
// client.on('message', message =>{
//     // if(!message.content.startsWith(prefix) || message.author.bot) return;

//     // const args = message.content.slice(prefix.length).split(/ +/);
//     // const command = args.shift().toLowerCase();

//     // cmdChannel = client.channels.cache.get('949201286832742410')
//     // if(message.channel.id === cmdChannel.id) {
//     //     if(command === 'pi') {
//     //         message.reply(Discord.Attachment('./pi.txt'))
//     //     }
//     // }
//     // else {
//     //     if(command !== 'pi') return
//     //     message.channel.send('Please execute this command in ' + message.guild.channels.cache.get('949201286832742410').toString());
//     // }
    
// })

// // join vc and play audio [not work rn]
// var isReady = true;
// client.on('message', message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
    
//     // if(command === 'join'){
//         if (isReady === true && command === 'join'){
//             isReady = false;
//             console.log('isReady is now false')
//             message.member.voice.channel.join()
//                 .then(connection =>{
//                     console.log('bot should join vc now')
//                     const dispatcher = connection.playFile('./Major_-_Gift_from_God.mp3');
//                     dispatcher.on("end", end => {message.member.voice.channel.leave()});
//                 })
//                 .catch(err => console.log(err));
//             isReady = true;
//         }
//     // }
// });

// // pi command
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     if(!message.content.startsWith(prefix) || message.author.bot) return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     const attachment = new MessageAttachment("pi.txt")

//     if(command === 'pi') {
//         message.reply({ files: [attachment] })
//     }
// });

// // pi bot command [off rn]
// client.on('message', message =>{
//     // if(!message.content.startsWith(prefix) || message.author.bot) return;

//     // const args = message.content.slice(prefix.length).split(/ +/);
//     // const command = args.shift().toLowerCase();
    
//     // cmdChannel = client.channels.cache.get('949201286832742410')
//     // if(message.channel.id === cmdChannel.id) {
//     //     if(command === 'pi') {
//     //         message.reply("`3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027`")
//     //         message.reply("`590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919561814675142691239748940907186494231961567945208095146550225231603881930142093762137855956638937787083039069792077346722182562599661501421503068038447734549202605414665925201497442850732518666002132434088190710486331734649651453905796268561005508106658796998163574736384052571459102897064140110971206280439039759515677157700420337869936007230558763176359421873125147120532928191826186125867321579198414848829164470609575270695722091756711672291098169091528017350671274858322287183520935396572512108357915136988209144421006751033467110314126711136990865851639831501970165151168517143765761835155650884909989859982387345528331635507647918535893226185489632132933089857064204675259070915481416549859461637180270981994309924488957571282890592323326097299712084433573265489382391193259746366730583604142813883032038249037589852437441702913276561809377344403070746921120191302033038019762110110044929321516084244485963766983895228684783123552658213144957685726243344189303968642624341077322697802807318915441101044682325271620105265227211`")
//     //         message.reply("`166039666557309254711055785376346682065310989652691862056476931257058635662018558100729360659876486117910453348850346113657686753249441668039626579787718556084552965412665408530614344431858676975145661406800700237877659134401712749470420562230538994561314071127000407854733269939081454664645880797270826683063432858785698305235808933065757406795457163775254202114955761581400250126228594130216471550979259230990796547376125517656751357517829666454779174501129961489030463994713296210734043751895735961458901938971311179042978285647503203198691514028708085990480109412147221317947647772622414254854540332157185306142288137585043063321751829798662237172159160771669254748738986654949450114654062843366393790039769265672146385306736096571209180763832716641627488880078692560290228472104031721186082041900042296617119637792133757511495950156604963186294726547364252308177036751590673502350728354056704038674351362222477158915049530984448933309634087807693259939780541934144737744184263129860809988868741326047215695162396586457302163159819319516735381297416772947867242292465436680098067692823828068996400482435403701416314965897940924323789690706977942236250822168895738379862300159377647165122893578601588161755782973523344604281512627203734314653197777416031990665541876397929334419521541341899485444734567383162499341913181480927777103863877343177207545654532207770921201905166096280490926360197598828161332316663652861932668633606273567630354477628035045077723554710585954870279081435624014517180624643626794561275318134078330336254232783944975382437205835311477119926063813346776879695970309833913077109870408591337464144282277263465947047458784778720192771528073176790770715721344473060570073349243693113835049316312840425121925651798069411352801314701304781643788518529092854520116583934196562134914341595625865865570552690496520985803385072242648293972858478316305777756068887644624824685792603953527734803048029005876075825104747091643961362676044925627420420832085661190625454337213153595845`")
//     //         message.reply("`068772460290161876679524061634252257719542916299193064553779914037340432875262888963995879475729174642635745525407909145135711136941091193932519107602082520261879853188770584297259167781314969900901921169717372784768472686084900337702424291651300500516832336435038951702989392233451722013812806965011784408745196012122859937162313017114448464090389064495444006198690754851602632750529834918740786680881833851022833450850486082503930213321971551843063545500766828294930413776552793975175461395398468339363830474611996653858153842056853386218672523340283087112328278921250771262946322956398989893582116745627010218356462201349671518819097303811980049734072396103685406643193950979019069963955245300545058068550195673022921913933918568034490398205955100226353536192041994745538593810234395544959778377902374216172711172364343543947822181852862408514006660443325888569867054315470696574745855033232334210730154594051655379068662733379958511562578432298827372319898757141595781119635833005940873068121602876496286744604774649159950549737425626901049037781986835938146574126804925648798556145372347867330390468838343634655379498641927056387293174872332083760112302991136793862708943879936201629515413371424892830722012690147546684765357616477379467520049075715552781965362132392640616013635815590742202020318727760527721900556148425551879253034351398442532234157623361064250639049750086562710953591946589751413103482276930624743536325691607815478181152843667957061108615331504452127473924544945423682886061340841486377670096120715124914043027253860764823634143346235189757664521641376796903149501910857598442391986291642193994907236234646844117394032659184044378051333894525742399508296591228508555821572503107125701266830240292952522011872676756220415420516184163484756516999811614101002996078386909291603028840026910414079288621507842451670908700069928212066041837180653556725253256753286129104248776182582976515795984703562226293486003415872298053498965022629174878820273420922224533985626476691490556`")
//     //         message.reply("`284250391275771028402799806636582548892648802545661017296702664076559042909945681506526530537182941270336931378517860904070866711496558343434769338578171138645587367812301458768712660348913909562009939361031029161615288138437909904231747336394804575931493140529763475748119356709110137751721008031559024853090669203767192203322909433467685142214477379393751703443661991040337511173547191855046449026365512816228824462575916333039107225383742182140883508657391771509682887478265699599574490661758344137522397096834080053559849175417381883999446974867626551658276584835884531427756879002909517028352971634456212964043523117600665101241200659755851276178583829204197484423608007193045761893234922927965019875187212726750798125547095890455635792122103334669749923563025494780249011419521238281530911407907386025152274299581807247162591668545133312394804947079119153267343028244186041426363954800044800267049624820179289647669758318327131425170296923488962766844032326092752496035799646925650493681836090032380929345958897069536534940603402166544375589004563288225054525564056448246515187547119621844396582533754388569094113031509526179378002974120766514793942590298969594699556576121865619673378623625612521632086286922210327488921865436480229678070576561514463204692790682120738837781423356282360896320806822246801224826117718589638140918390367367222088832151375560037279839400415297002878307667094447456013455641725437090697939612257142989467154357846878861444581231459357198492252847160504922124247014121478057345510500801908699603302763478708108175450119307141223390866393833952942578690507643100638351983438934159613185434754649556978103829309716465143840700707360411237359984345225161050702705623526601276484830840761183013052793205427462865403603674532865105706587488225698157936789766974220575059683440869735020141020672358502007245225632651341055924019027421624843914035998953539459094407046912091409387001264560016237428802109276457931065792295524988727584610126483699989225695968815920560010`")
//     //         message.reply("`165525637567856672279661988578279484885583439751874454551296563443480396642055798293680435220277098429423253302257634180703947699415979159453006975214829336655566156787364005366656416547321704390352132954352916941459904160875320186837937023488868947915107163785290234529244077365949563051007421087142613497459561513849871375704710178795731042296906667021449863746459528082436944578977233004876476524133907592043401963403911473202338071509522201068256342747164602433544005152126693249341967397704159568375355516673027390074972973635496453328886984406119649616277344951827369558822075735517665158985519098666539354948106887320685990754079234240230092590070173196036225475647894064754834664776041146323390565134330684495397907090302346046147096169688688501408347040546074295869913829668246818571031887906528703665083243197440477185567893482308943106828702722809736248093996270607472645539925399442808113736943388729406307926159599546262462970706259484556903471197299640908941805953439325123623550813494900436427852713831591256898929519642728757394691427253436694153236100453730488198551706594121735246258954873016760029886592578662856124966552353382942878542534048308330701653722856355915253478445981831341129001999205981352205117336585640782648494276441137639386692480311836445369858917544264739988228462184490087776977631279572267265556259628254276531830013407092233436577916012809317940171859859993384923549564005709955856113498025249906698423301735035804408116855265311709957089942732870925848789443646005041089226691783525870785951298344172953519537885534573742608590290817651557803905946408735061232261120093731080485485263572282576820341605048466277504500312620080079980492548534694146977516493270950493463938243222718851597405470214828971117779237612257887347718819682546298126868581705074027255026332904497627789442362167411918626943965067151577958675648239939176042601763387045499017614364120469218237076488783419689686118155815873606293860381017121585527266830082383404656475880405138080163`")
//     //         message.reply("`363887421637140643549556186896411228214075330265510042410489678352858829024367090488711819090949453314421828766181031007354770549815968077200947469613436092861484941785017180779306810854690009445899527942439813921350558642219648349151263901280383200109773868066287792397180146134324457264009737425700735921003154150893679300816998053652027600727749674584002836240534603726341655425902760183484030681138185510597970566400750942608788573579603732451414678670368809880609716425849759513806930944940151542222194329130217391253835591503100333032511174915696917450271494331515588540392216409722910112903552181576282328318234254832611191280092825256190205263016391147724733148573910777587442538761174657867116941477642144111126358355387136101102326798775641024682403226483464176636980663785768134920453022408197278564719839630878154322116691224641591177673225326433568614618654522268126887268445968442416107854016768142080885028005414361314623082102594173756238994207571362751674573189189456283525704413354375857534269869947254703165661399199968262824727064133622217892390317608542894373393561889165125042440400895271983787386480584726895462438823437517885201439560057104811949884239060613695734231559079670346149143447886360410318235073650277859089757827273130504889398900992391350337325085598265586708924261242947367019390772713070686917092646254842324074855036608013604668951184009366860954632500214585293095000090715105823626729326453738210493872499669933942468551648326113414611068026744663733437534076429402668297386522093570162638464852851490362932019919968828517183953669134522244470804592396602817156551565666111359823112250628905854914509715755390024393153519090210711945730024388017661503527086260253788179751947806101371500448991721002220133501310601639154158957803711779277522597874289191791552241718958536168059474123419339842021874564925644346239253195313510331147639491199507285843065836193536932969928983791494193940608572486396883690326556436421664425760791471086998431573374964883529276`")
//     //         message.reply("`932822076294728238153740996154559879825989109371712621828302584811238901196822142945766758071865380650648702613389282299497257453033283896381843944770779402284359883410035838542389735424395647555684095224844554139239410001620769363684677641301781965937997155746854194633489374843912974239143365936041003523437770658886778113949861647874714079326385873862473288964564359877466763847946650407411182565837887845485814896296127399841344272608606187245545236064315371011274680977870446409475828034876975894832824123929296058294861919667091895808983320121031843034012849511620353428014412761728583024355983003204202451207287253558119584014918096925339507577840006746552603144616705082768277222353419110263416315714740612385042584598841990761128725805911393568960143166828317632356732541707342081733223046298799280490851409479036887868789493054695570307261900950207643349335910602454508645362893545686295853131533718386826561786227363716975774183023986006591481616404944965011732131389574706208847480236537103115089842799275442685327797431139514357417221975979935968525228574526379628961269157235798662057340837576687388426640599099350500081337543245463596750484423528487470144354541957625847356421619813407346854111766883118654489377697956651727966232671481033864391375186594673002443450054499539974237232871249483470604406347160632583064982979551010954183623503030945309733583446283947630477564501500850757894954893139394489921612552559770143685894358587752637962559708167764380012543650237141278346792610199558522471722017772370041780841942394872540680155603599839054898572354674564239058585021671903139526294455439131663134530893906204678438778505423939052473136201294769187497519101147231528932677253391814660730008902776896311481090220972452075916729700785058071718638105496797310016787085069420709223290807038326345345203802786099055690013413718236837099194951648960075504934126787643674638490206396401976668559233565463913836318574569814719621084108096188460545603903845534372914144651347494078488`")
//     //         message.reply("`442377217515433426030669883176833100113310869042193903108014378433415137092435301367763108491351615642269847507430329716746964066653152703532546711266752246055119958183196376370761799191920357958200759560530234626775794393630746305690108011494271410093913691381072581378135789400559950018354251184172136055727522103526803735726527922417373605751127887218190844900617801388971077082293100279766593583875890939568814856026322439372656247277603789081445883785501970284377936240782505270487581647032458129087839523245323789602984166922548964971560698119218658492677040395648127810217991321741630581055459880130048456299765112124153637451500563507012781592671424134210330156616535602473380784302865525722275304999883701534879300806260180962381516136690334111138653851091936739383522934588832255088706450753947395204396807906708680644509698654880168287434378612645381583428075306184548590379821799459968115441974253634439960290251001588827216474500682070419376158454712318346007262933955054823955713725684023226821301247679452264482091023564775272308208106351889915269288910845557112660396503439789627825001611015323516051965590421184494990778999200732947690586857787872098290135295661397888486050978608595701773129815531495168146717695976099421003618355913877781769845875810446628399880600616229848616935337386578773598336161338413385368421197893890018529569196780455448285848370117096721253533875862158231013310387766827211572694951817958975469399264219791552338576623167627547570354699414892904130186386119439196283887054367774322427680913236544948536676800000106526248547305586159899914017076983854831887501429389089950685453076511680333732226517566220752695179144225280816517166776672793035485154204023817460892328391703275425750867655117859395002793389592057668278967764453184040418554010435134838953120132637836928358082719378312654961745997056745071833206503455664403449045362756001125018433560736122276594927839370647842645676338818807565612168960504161139039063960162022153684941092605387688714`")
//     //         message.reply("`837989559999112099164646441191856827700457424343402167227644558933012778158686952506949936461017568506016714535431581480105458860564550133203758645485840324029871709348091055621167154684847780394475697980426318099175642280987399876697323769573701580806822904599212366168902596273043067931653114940176473769387351409336183321614280214976339918983548487562529875242387307755955595546519639440182184099841248982623673771467226061633643296406335728107078875816404381485018841143188598827694490119321296827158884133869434682859006664080631407775772570563072940049294030242049841656547973670548558044586572022763784046682337985282710578431975354179501134727362577408021347682604502285157979579764746702284099956160156910890384582450267926594205550395879229818526480070683765041836562094555434613513415257006597488191634135955671964965403218727160264859304903978748958906612725079482827693895352175362185079629778514618843271922322381015874445052866523802253284389137527384589238442253547265309817157844783421582232702069028723233005386216347988509469547200479523112015043293226628272763217790884008786148022147537657810581970222630971749507212724847947816957296142365859578209083073323356034846531873029302665964501371837542889755797144992465403868179921389346924474198509733462679332107268687076806263991936196504409954216762784091466985692571507431574079380532392523947755744159184582156251819215523370960748332923492103451462643744980559610330799414534778457469999212859999939961228161521931488876938802228108300198601654941654261696858678837260958774567618250727599295089318052187292461086763995891614585505839727420980909781729323930106766386824040111304024700735085782872462713494636853181546969046696869392547251941399291465242385776255004748529547681479546700705034799958886769501612497228204030399546327883069597624936151010243655535223069061294938859901573466102371223547891129254769617600504797492806072126803922691102777226102544149221576504508120677173571202718024296810620377657883716690910`")
//     //         message.reply("`941807448781404907551782038565390991047759414132154328440625030180275716965082096427348414695726397884256008453121406593580904127113592004197598513625479616063228873618136737324450607924411763997597461938358457491598809766744709300654634242346063423747466608043170126005205592849369594143408146852981505394717890045183575515412522359059068726487863575254191128887737176637486027660634960353679470269232297186832771739323619200777452212624751869833495151019864269887847171939664976907082521742336566272592844062043021411371992278526998469884770232382384005565551788908766136013047709843861168705231055314916251728373272867600724817298763756981633541507460883866364069347043720668865127568826614973078865701568501691864748854167915459650723428773069985371390430026653078398776385032381821553559732353068604301067576083890862704984188859513809103042359578249514398859011318583584066747237029714978508414585308578133915627076035639076394731145549583226694570249413983163433237897595568085683629725386791327505554252449194358912840504522695381217913191451350099384631177401797151228378546011603595540286440590249646693070776905548102885020808580087811577381719174177601733073855475800605601433774329901272867725304318251975791679296996504146070664571258883469797964293162296552016879730003564630457930884032748077181155533090988702550520768046303460865816539487695196004408482065967379473168086415645650530049881616490578831154345485052660069823093157776500378070466126470602145750579327096204782561524714591896522360839664562410519551052235723973951288181640597859142791481654263289200428160913693777372229998332708208296995573772737566761552711392258805520189887620114168005468736558063347160373429170390798639652296131280178267971728982293607028806908776866059325274637840539769184808204102194471971386925608416245112398062011318454124478205011079876071715568315407886543904121087303240201068534194723047666672174986986854707678120512473679247919315085644477537985379973223445612278584329684664751333`")
//     //         message.reply("`657369238720146472367942787004250325558992688434959287612400755875694641370562514001179713316620715371543600687647731867558714878398908107429530941060596944315847753970094398839491443235366853920994687964506653398573888786614762944341401049888993160051207678103588611660202961193639682134960750111649832785635316145168457695687109002999769841263266502347716728657378579085746646077228341540311441529418804782543876177079043000156698677679576090996693607559496515273634981189641304331166277471233881740603731743970540670310967676574869535878967003192586625941051053358438465602339179674926784476370847497833365557900738419147319886271352595462518160434225372996286326749682405806029642114638643686422472488728343417044157348248183330164056695966886676956349141632842641497453334999948000266998758881593507357815195889900539512085351035726137364034367534714104836017546488300407846416745216737190483109676711344349481926268111073994825060739495073503169019731852119552635632584339099822498624067031076831844660729124874754031617969941139738776589986855417031884778867592902607004321266617919223520938227878880988633599116081923535557046463491132085918979613279131975649097600013996234445535014346426860464495862476909434704829329414041114654092398834443515913320107739441118407410768498106634724104823935827401944935665161088463125678529776973468430306146241803585293315973458303845541033701091676776374276210213701354854450926307190114731848574923318167207213727935567952844392548156091372812840633303937356242001604566455741458816605216660873874804724339121295587776390696903707882852775389405246075849623157436917113176134783882719416860662572103685132156647800147675231039357860689611125996028183930954870905907386135191459181951029732787557104972901148717189718004696169777001791391961379141716270701895846921434369676292745910994006008498356842520191559370370101104974733949387788598941743303178534870760322198297057975119144051099423588303454635349234982688362404332726741554030161950568065418`")
            
//     //         message.channel.send("as of right now, 23,976 digits of pi have been sent")
//     //     }
//     // }
//     // else {
//     //     if(command !== 'pi') return
//     //     message.channel.send('Please execute this command in ' + message.guild.channels.cache.get('949201286832742410').toString());
//     // }
    
// });

// // i like ___ / i love ___
// const imWords = ["i like", "I like", "i like", "I like", "i Like", "I Like", "i Like", "I Like", "i lIke", "I lIke", "i lIke", "I lIke", "i LIke", "I LIke", "i LIke", "I LIke", "i liKe", "I liKe", "i liKe", "I liKe", "i LiKe", "I LiKe", "i LiKe", "I LiKe", "i lIKe", "I lIKe", "i lIKe", "I lIKe", "i LIKe", "I LIKe", "i LIKe", "I LIKe", "i likE", "I likE", "i likE", "I likE", "i LikE", "I LikE", "i LikE", "I LikE", "i lIkE", "I lIkE", "i lIkE", "I lIkE", "i LIkE", "I LIkE", "i LIkE", "I LIkE", "i liKE", "I liKE", "i liKE", "I liKE", "i LiKE", "I LiKE", "i LiKE", "I LiKE", "i lIKE", "I lIKE", "i lIKE", "I lIKE", "i LIKE", "I LIKE", "i LIKE", "I LIKE"];
// const lovewords = ['i love', 'I love', 'i love', 'I love', 'i Love', 'I Love', 'i Love', 'I Love', 'i lOve', 'I lOve', 'i lOve', 'I lOve', 'i LOve', 'I LOve', 'i LOve', 'I LOve', 'i loVe', 'I loVe', 'i loVe', 'I loVe', 'i LoVe', 'I LoVe', 'i LoVe', 'I LoVe', 'i lOVe', 'I lOVe', 'i lOVe', 'I lOVe', 'i LOVe', 'I LOVe', 'i LOVe', 'I LOVe', 'i lovE', 'I lovE', 'i lovE', 'I lovE', 'i LovE', 'I LovE', 'i LovE', 'I LovE', 'i lOvE', 'I lOvE', 'i lOvE', 'I lOvE', 'i LOvE', 'I LOvE', 'i LOvE', 'I LOvE', 'i loVE', 'I loVE', 'i loVE', 'I loVE', 'i LoVE', 'I LoVE', 'i LoVE', 'I LoVE', 'i lOVE', 'I lOVE', 'i lOVE', 'I lOVE', 'i LOVE', 'I LOVE', 'i LOVE', 'I LOVE'];
// client.on('message', msg => {
//     if (msg.author == client.user)
//         return
//     if (msg.author.bot) return
    
//     for (var i = 0; i < imWords.length; i++) {
//         const index = msg.content.indexOf(imWords[i]);
//         if (index !== -1) {
//             // add one to include the space
//             const name = msg.content.slice(index + imWords[i].length + 1);
//             msg.reply(`kid named ${name}`);
//             break;
//         }
//     }

//     for (var h = 0; h < lovewords.length; h++) {
//         const love = msg.content.indexOf(lovewords[h]);
//         if (love !== -1) {
//             // add one to include the space
//             const nam = msg.content.slice(love + lovewords[h].length + 1);
//             msg.reply(`kid named ${nam}`);
//             break;
//         }
//     }
// });

// // i am ___ + knows ur address + liar
// const hello_ = ['i am', 'I am', 'i am', 'I am', 'i Am', 'I Am', 'i Am', 'I Am', 'i aM', 'I aM', 'i aM', 'I aM', 'i AM', 'I AM', 'i AM', 'I AM', 'i\'m', 'I\'m', 'i\'M', 'I\'M'];
// const im = ['im ', 'Im ', 'iM ', 'IM ']
// const sushi = ['sushi', 'Sushi', 'sUshi', 'SUshi', 'suShi', 'SuShi', 'sUShi', 'SUShi', 'susHi', 'SusHi', 'sUsHi', 'SUsHi', 'suSHi', 'SuSHi', 'sUSHi', 'SUSHi', 'sushI', 'SushI', 'sUshI', 'SUshI', 'suShI', 'SuShI', 'sUShI', 'SUShI', 'susHI', 'SusHI', 'sUsHI', 'SUsHI', 'suSHI', 'SuSHI', 'sUSHI', 'SUSHI']
// const shouyi = ['shou-yi', 'Shou-yi', 'sHou-yi', 'SHou-yi', 'shOu-yi', 'ShOu-yi', 'sHOu-yi', 'SHOu-yi', 'shoU-yi', 'ShoU-yi', 'sHoU-yi', 'SHoU-yi', 'shOU-yi', 'ShOU-yi', 'sHOU-yi', 'SHOU-yi', 'shou-yi', 'Shou-yi', 'sHou-yi', 'SHou-yi', 'shOu-yi', 'ShOu-yi', 'sHOu-yi', 'SHOu-yi', 'shoU-yi', 'ShoU-yi', 'sHoU-yi', 'SHoU-yi', 'shOU-yi', 'ShOU-yi', 'sHOU-yi', 'SHOU-yi', 'shou-Yi', 'Shou-Yi', 'sHou-Yi', 'SHou-Yi', 'shOu-Yi', 'ShOu-Yi', 'sHOu-Yi', 'SHOu-Yi', 'shoU-Yi', 'ShoU-Yi', 'sHoU-Yi', 'SHoU-Yi', 'shOU-Yi', 'ShOU-Yi', 'sHOU-Yi', 'SHOU-Yi', 'shou-Yi', 'Shou-Yi', 'sHou-Yi', 'SHou-Yi', 'shOu-Yi', 'ShOu-Yi', 'sHOu-Yi', 'SHOu-Yi', 'shoU-Yi', 'ShoU-Yi', 'sHoU-Yi', 'SHoU-Yi', 'shOU-Yi', 'ShOU-Yi', 'sHOU-Yi', 'SHOU-Yi', 'shou-yI', 'Shou-yI', 'sHou-yI', 'SHou-yI', 'shOu-yI', 'ShOu-yI', 'sHOu-yI', 'SHOu-yI', 'shoU-yI', 'ShoU-yI', 'sHoU-yI', 'SHoU-yI', 'shOU-yI', 'ShOU-yI', 'sHOU-yI', 'SHOU-yI', 'shou-yI', 'Shou-yI', 'sHou-yI', 'SHou-yI', 'shOu-yI', 'ShOu-yI', 'sHOu-yI', 'SHOu-yI', 'shoU-yI', 'ShoU-yI', 'sHoU-yI', 'SHoU-yI', 'shOU-yI', 'ShOU-yI', 'sHOU-yI', 'SHOU-yI', 'shou-YI', 'Shou-YI', 'sHou-YI', 'SHou-YI', 'shOu-YI', 'ShOu-YI', 'sHOu-YI', 'SHOu-YI', 'shoU-YI', 'ShoU-YI', 'sHoU-YI', 'SHoU-YI', 'shOU-YI', 'ShOU-YI', 'sHOU-YI', 'SHOU-YI', 'shou-YI', 'Shou-YI', 'sHou-YI', 'SHou-YI', 'shOu-YI', 'ShOu-YI', 'sHOu-YI', 'SHOu-YI', 'shoU-YI', 'ShoU-YI', 'sHoU-YI', 'SHoU-YI', 'shOU-YI', 'ShOU-YI', 'sHOU-YI', 'SHOU-YI']
// const sushibot = ['sushibot', 'Sushibot', 'sUshibot', 'SUshibot', 'suShibot', 'SuShibot', 'sUShibot', 'SUShibot', 'susHibot', 'SusHibot', 'sUsHibot', 'SUsHibot', 'suSHibot', 'SuSHibot', 'sUSHibot', 'SUSHibot', 'sushIbot', 'SushIbot', 'sUshIbot', 'SUshIbot', 'suShIbot', 'SuShIbot', 'sUShIbot', 'SUShIbot', 'susHIbot', 'SusHIbot', 'sUsHIbot', 'SUsHIbot', 'suSHIbot', 'SuSHIbot', 'sUSHIbot', 'SUSHIbot', 'sushiBot', 'SushiBot', 'sUshiBot', 'SUshiBot', 'suShiBot', 'SuShiBot', 'sUShiBot', 'SUShiBot', 'susHiBot', 'SusHiBot', 'sUsHiBot', 'SUsHiBot', 'suSHiBot', 'SuSHiBot', 'sUSHiBot', 'SUSHiBot', 'sushIBot', 'SushIBot', 'sUshIBot', 'SUshIBot', 'suShIBot', 'SuShIBot', 'sUShIBot', 'SUShIBot', 'susHIBot', 'SusHIBot', 'sUsHIBot', 'SUsHIBot', 'suSHIBot', 'SuSHIBot', 'sUSHIBot', 'SUSHIBot', 'sushibOt', 'SushibOt', 'sUshibOt', 'SUshibOt', 'suShibOt', 'SuShibOt', 'sUShibOt', 'SUShibOt', 'susHibOt', 'SusHibOt', 'sUsHibOt', 'SUsHibOt', 'suSHibOt', 'SuSHibOt', 'sUSHibOt', 'SUSHibOt', 'sushIbOt', 'SushIbOt', 'sUshIbOt', 'SUshIbOt', 'suShIbOt', 'SuShIbOt', 'sUShIbOt', 'SUShIbOt', 'susHIbOt', 'SusHIbOt', 'sUsHIbOt', 'SUsHIbOt', 'suSHIbOt', 'SuSHIbOt', 'sUSHIbOt', 'SUSHIbOt', 'sushiBOt', 'SushiBOt', 'sUshiBOt', 'SUshiBOt', 'suShiBOt', 'SuShiBOt', 'sUShiBOt', 'SUShiBOt', 'susHiBOt', 'SusHiBOt', 'sUsHiBOt', 'SUsHiBOt', 'suSHiBOt', 'SuSHiBOt', 'sUSHiBOt', 'SUSHiBOt', 'sushIBOt', 'SushIBOt', 'sUshIBOt', 'SUshIBOt', 'suShIBOt']
// const susibot = ['SuShIBOt', 'sUShIBOt', 'SUShIBOt', 'susHIBOt', 'SusHIBOt', 'sUsHIBOt', 'SUsHIBOt', 'suSHIBOt', 'SuSHIBOt', 'sUSHIBOt', 'SUSHIBOt', 'sushiboT', 'SushiboT', 'sUshiboT', 'SUshiboT', 'suShiboT', 'SuShiboT', 'sUShiboT', 'SUShiboT', 'susHiboT', 'SusHiboT', 'sUsHiboT', 'SUsHiboT', 'suSHiboT', 'SuSHiboT', 'sUSHiboT', 'SUSHiboT', 'sushIboT', 'SushIboT', 'sUshIboT', 'SUshIboT', 'suShIboT', 'SuShIboT', 'sUShIboT', 'SUShIboT', 'susHIboT', 'SusHIboT', 'sUsHIboT', 'SUsHIboT', 'suSHIboT', 'SuSHIboT', 'sUSHIboT', 'SUSHIboT', 'sushiBoT', 'SushiBoT', 'sUshiBoT', 'SUshiBoT', 'suShiBoT', 'SuShiBoT', 'sUShiBoT', 'SUShiBoT', 'susHiBoT', 'SusHiBoT', 'sUsHiBoT', 'SUsHiBoT', 'suSHiBoT', 'SuSHiBoT', 'sUSHiBoT', 'SUSHiBoT', 'sushIBoT', 'SushIBoT', 'sUshIBoT', 'SUshIBoT', 'suShIBoT', 'SuShIBoT', 'sUShIBoT', 'SUShIBoT', 'susHIBoT', 'SusHIBoT', 'sUsHIBoT', 'SUsHIBoT', 'suSHIBoT', 'SuSHIBoT', 'sUSHIBoT', 'SUSHIBoT', 'sushibOT', 'SushibOT', 'sUshibOT', 'SUshibOT', 'suShibOT', 'SuShibOT', 'sUShibOT', 'SUShibOT', 'susHibOT', 'SusHibOT', 'sUsHibOT', 'SUsHibOT', 'suSHibOT', 'SuSHibOT', 'sUSHibOT', 'SUSHibOT', 'sushIbOT', 'SushIbOT', 'sUshIbOT', 'SUshIbOT', 'suShIbOT', 'SuShIbOT', 'sUShIbOT', 'SUShIbOT', 'susHIbOT', 'SusHIbOT', 'sUsHIbOT', 'SUsHIbOT', 'suSHIbOT', 'SuSHIbOT', 'sUSHIbOT', 'SUSHIbOT', 'sushiBOT', 'SushiBOT', 'sUshiBOT', 'SUshiBOT', 'suShiBOT', 'SuShiBOT', 'sUShiBOT', 'SUShiBOT', 'susHiBOT', 'SusHiBOT', 'sUsHiBOT', 'SUsHiBOT', 'suSHiBOT', 'SuSHiBOT', 'sUSHiBOT', 'SUSHiBOT', 'sushIBOT', 'SushIBOT', 'sUshIBOT', 'SUshIBOT', 'suShIBOT', 'SuShIBOT', 'sUShIBOT', 'SUShIBOT', 'susHIBOT', 'SusHIBOT', 'sUsHIBOT', 'SUsHIBOT', 'suSHIBOT', 'SuSHIBOT', 'sUSHIBOT', 'SUSHIBOT']
// client.on('message', msg => {
//     if (msg.author == client.user)
//         return
//     if (msg.author.bot) return

//     for (var p = 0; p < sushibot.length; p++) {
//         if(msg.content.includes(sushibot[p])) {
//             msg.reply('no you\'re not you frickin liar');
//             break;
//         }
//     }

//     for (var w = 0; w < susibot.length; w++) {
//         if(msg.content.includes(susibot[w])) {
//             msg.reply('no you\'re not you frickin liar');
//             break;
//         }
//     }
    
//     for (var k = 0; k < sushi.length; k++) {
//         if(msg.content === (sushi[k])) {
//             msg.reply('knows ur address');
//         }
//     }

//     for (var s = 0; s < shouyi.length; s++) {
//         if(msg.content === (shouyi[s])) {
//             msg.reply('knows ur address');
//         }
//     }

//     for (var h = 0; h < hello_.length; h++) {
//         const array = msg.content.indexOf(hello_[h]);
//         if (array !== -1) {
//             // add one to include the space
//             const helloname = msg.content.slice(array + hello_[h].length + 1);
//             msg.reply({
//                 content: `hello ${helloname}, im SushiBot`,
//                 allowedMentions: {
//                     repliedUser: false
//                 }
//             });
//             break;
//         }
//     }


//     for (var d = 0; d < im.length; d++) {
//         const aray = msg.content.indexOf(im[d]);
//         if (aray !== -1) {
//             // add one to include the space
//             const imname = msg.content.slice(aray + im[d].length);
//             msg.reply({
//                 content: `hello ${imname}, im SushiBot`,
//                 allowedMentions: {
//                     repliedUser: false
//                 }
//             });
//             break;
//         }
//     }
// });

// // cannot send caio's ass and lang dissapointed
// client.on('message', message =>{
//     if(message.content.includes('ext number')) {
//         message.channel.send('you\'re gae, imagine getting the wrong number. \nmr liang is disappointed');
//     }

//     if (message.content.includes('card_swipe')) {
//         message.reply('You cannot send caio\'s ass! :rage: :rage:');
        
//         setTimeout(function(){
//             message.delete();
//         },50);
//     };

//     // if (reaction.emoji.name === '❌') {
//     //     msg.reply('you\'re gae, imagine getting the wrong number. \nmr liang is disappointed');
//     // }
// });

// // const dripstoohard = require('./things.js');
// const driptoohard = ['i drip too hard', 'idriptoohard', 'I DRIP TOO HARD', 'IDRIPTOOHARD', 'drips too hard', 'dripstoohard', 'DRIPS TOO HARD', 'DRIPSTOOHARD']
// // drip too hard [not functiong rn]
// client.on('message', msg =>{
// //     if (msg.author == client.user)
// //     return
// //     if (msg.author.bot) return

// //     for (var u = 0; u < dripstoohard.length; u++) {
// //         if(msg.content === (dripstoohard[u])) {
// //             msg.reply('nigga, nigga');
// //         }
// //     }
// });

// // taiwan #1
// const taiwan = ["taiwan", "Taiwan", "tAiwan", "TAiwan", "taIwan", "TaIwan", "tAIwan", "TAIwan", "taiWan", "TaiWan", "tAiWan", "TAiWan", "taIWan", "TaIWan", "tAIWan", "TAIWan", "taiwAn", "TaiwAn", "tAiwAn", "TAiwAn", "taIwAn", "TaIwAn", "tAIwAn", "TAIwAn", "taiWAn", "TaiWAn", "tAiWAn", "TAiWAn", "taIWAn", "TaIWAn", "tAIWAn", "TAIWAn", "taiwaN", "TaiwaN", "tAiwaN", "TAiwaN", "taIwaN", "TaIwaN", "tAIwaN", "TAIwaN", "taiWaN", "TaiWaN", "tAiWaN", "TAiWaN", "taIWaN", "TaIWaN", "tAIWaN", "TAIWaN", "taiwAN", "TaiwAN", "tAiwAN", "TAiwAN", "taIwAN", "TaIwAN", "tAIwAN", "TAIwAN", "taiWAN", "TaiWAN", "tAiWAN", "TAiWAN", "taIWAN", "TaIWAN", "tAIWAN", "TAIWAN"]
// client.on('message', msg =>{
//     if (msg.author == client.user)
//     return
//     if (msg.author.bot) return

//     for (var b = 0; b < taiwan.length; b++) {
//         if(msg.content === (taiwan[b])) {
//             msg.reply(':flag_tw: #1 \n TAIWAN #1 \n 台灣 第一！！！');
//         }
//     }
// });

// const carrot = ['carrot', 'Carrot', 'cArrot', 'CArrot', 'caRrot', 'CaRrot', 'cARrot', 'CARrot', 'carRot', 'CarRot', 'cArRot', 'CArRot', 'caRRot', 'CaRRot', 'cARRot', 'CARRot', 'carrOt', 'CarrOt', 'cArrOt', 'CArrOt', 'caRrOt', 'CaRrOt', 'cARrOt', 'CARrOt', 'carROt', 'CarROt', 'cArROt', 'CArROt', 'caRROt', 'CaRROt', 'cARROt', 'CARROt', 'carroT', 'CarroT', 'cArroT', 'CArroT', 'caRroT', 'CaRroT', 'cARroT', 'CARroT', 'carRoT', 'CarRoT', 'cArRoT', 'CArRoT', 'caRRoT', 'CaRRoT', 'cARRoT', 'CARRoT', 'carrOT', 'CarrOT', 'cArrOT', 'CArrOT', 'caRrOT', 'CaRrOT', 'cARrOT', 'CARrOT', 'carROT', 'CarROT', 'cArROT', 'CArROT', 'caRROT', 'CaRROT', 'cARROT', 'CARROT']
// const caroline = ['caroline', 'Caroline', 'cAroline', 'CAroline', 'caRoline', 'CaRoline', 'cARoline', 'CARoline', 'carOline', 'CarOline', 'cArOline', 'CArOline', 'caROline', 'CaROline', 'cAROline', 'CAROline', 'caroLine', 'CaroLine', 'cAroLine', 'CAroLine', 'caRoLine', 'CaRoLine', 'cARoLine', 'CARoLine', 'carOLine', 'CarOLine', 'cArOLine', 'CArOLine', 'caROLine', 'CaROLine', 'cAROLine', 'CAROLine', 'carolIne', 'CarolIne', 'cArolIne', 'CArolIne', 'caRolIne', 'CaRolIne', 'cARolIne', 'CARolIne', 'carOlIne', 'CarOlIne', 'cArOlIne', 'CArOlIne', 'caROlIne', 'CaROlIne', 'cAROlIne', 'CAROlIne', 'caroLIne', 'CaroLIne', 'cAroLIne', 'CAroLIne', 'caRoLIne', 'CaRoLIne', 'cARoLIne', 'CARoLIne', 'carOLIne', 'CarOLIne', 'cArOLIne', 'CArOLIne', 'caROLIne', 'CaROLIne', 'cAROLIne', 'CAROLIne', 'caroliNe', 'CaroliNe', 'cAroliNe', 'CAroliNe', 'caRoliNe', 'CaRoliNe', 'cARoliNe', 'CARoliNe', 'carOliNe', 'CarOliNe', 'cArOliNe', 'CArOliNe', 'caROliNe', 'CaROliNe', 'cAROliNe', 'CAROliNe', 'caroLiNe', 'CaroLiNe', 'cAroLiNe', 'CAroLiNe', 'caRoLiNe', 'CaRoLiNe', 'cARoLiNe', 'CARoLiNe', 'carOLiNe', 'CarOLiNe', 'cArOLiNe', 'CArOLiNe', 'caROLiNe', 'CaROLiNe', 'cAROLiNe', 'CAROLiNe', 'carolINe', 'CarolINe', 'cArolINe', 'CArolINe', 'caRolINe', 'CaRolINe', 'cARolINe', 'CARolINe', 'carOlINe', 'CarOlINe', 'cArOlINe', 'CArOlINe']
// const caro = ['caROlINe', 'CaROlINe', 'cAROlINe', 'CAROlINe', 'caroLINe', 'CaroLINe', 'cAroLINe', 'CAroLINe', 'caRoLINe', 'CaRoLINe', 'cARoLINe', 'CARoLINe', 'carOLINe', 'CarOLINe', 'cArOLINe', 'CArOLINe', 'caROLINe', 'CaROLINe', 'cAROLINe', 'CAROLINe', 'carolinE', 'CarolinE', 'cArolinE', 'CArolinE', 'caRolinE', 'CaRolinE', 'cARolinE', 'CARolinE', 'carOlinE', 'CarOlinE', 'cArOlinE', 'CArOlinE', 'caROlinE', 'CaROlinE', 'cAROlinE', 'CAROlinE', 'caroLinE', 'CaroLinE', 'cAroLinE', 'CAroLinE', 'caRoLinE', 'CaRoLinE', 'cARoLinE', 'CARoLinE', 'carOLinE', 'CarOLinE', 'cArOLinE', 'CArOLinE', 'caROLinE', 'CaROLinE', 'cAROLinE', 'CAROLinE', 'carolInE', 'CarolInE', 'cArolInE', 'CArolInE', 'caRolInE', 'CaRolInE', 'cARolInE', 'CARolInE', 'carOlInE', 'CarOlInE', 'cArOlInE', 'CArOlInE', 'caROlInE', 'CaROlInE', 'cAROlInE', 'CAROlInE', 'caroLInE', 'CaroLInE', 'cAroLInE', 'CAroLInE', 'caRoLInE', 'CaRoLInE', 'cARoLInE', 'CARoLInE', 'carOLInE', 'CarOLInE', 'cArOLInE', 'CArOLInE', 'caROLInE', 'CaROLInE', 'cAROLInE', 'CAROLInE', 'caroliNE', 'CaroliNE', 'cAroliNE', 'CAroliNE', 'caRoliNE', 'CaRoliNE', 'cARoliNE', 'CARoliNE', 'carOliNE', 'CarOliNE', 'cArOliNE', 'CArOliNE', 'caROliNE', 'CaROliNE', 'cAROliNE', 'CAROliNE', 'caroLiNE', 'CaroLiNE', 'cAroLiNE', 'CAroLiNE', 'caRoLiNE', 'CaRoLiNE', 'cARoLiNE', 'CARoLiNE', 'carOLiNE', 'CarOLiNE', 'cArOLiNE', 'CArOLiNE', 'caROLiNE', 'CaROLiNE', 'cAROLiNE', 'CAROLiNE', 'carolINE', 'CarolINE', 'cArolINE', 'CArolINE', 'caRolINE', 'CaRolINE', 'cARolINE', 'CARolINE', 'carOlINE', 'CarOlINE', 'cArOlINE', 'CArOlINE', 'caROlINE', 'CaROlINE', 'cAROlINE', 'CAROlINE', 'caroLINE', 'CaroLINE', 'cAroLINE', 'CAroLINE', 'caRoLINE', 'CaRoLINE', 'cARoLINE', 'CARoLINE', 'carOLINE', 'CarOLINE', 'cArOLINE', 'CArOLINE', 'caROLINE', 'CaROLINE', 'cAROLINE', 'CAROLINE']
// client.on('message', message =>{
//     if (message.author == client.user)
//     return
//     if (message.author.bot) return

//     if(message.content.includes('ni')){

//     }
    

//     for (var p = 0; p < carrot.length; p++){
//         if(message.content === (carrot[p])){
//             message.reply('https://cdn.discordapp.com/attachments/844505178166394880/895831051228819506/unknown.png?size=4096')
//         }
//     }

//     for (var u = 0; u < caroline.length; u++) {
//         if(message.content === (caroline[u])) {
//             message.reply('https://cdn.discordapp.com/attachments/844505178166394880/895831051228819506/unknown.png?size=4096');
//         }
//     }

//     for (var q = 0; q < caro.length; q++) {
//         if(message.content === (caro[q])) {
//             message.reply('https://cdn.discordapp.com/attachments/844505178166394880/895831051228819506/unknown.png?size=4096');
//         }
//     }

// })

// // fuck the ccp
// const ccp = ['ccp', 'ccP', 'cCp', 'Ccp', 'cCP', 'CCP', 'CCp', 'CcP']
// client.on('message', msg =>{
//     if (msg.author == client.user)
//     return
//     if (msg.author.bot) return

//     for (var u = 0; u < ccp.length; u++) {
//         if(msg.content === (ccp[u])) {
//             msg.reply('Fuck the ccp');
//         }
//     }
// });

// // hassan is gay
// const hassanwords = ["hassan", "Hassan", "hAssan", "HAssan", "haSsan", "HaSsan", "hASsan", "HASsan", "hasSan", "HasSan", "hAsSan", "HAsSan", "haSSan", "HaSSan", "hASSan", "HASSan", "hassAn", "HassAn", "hAssAn", "HAssAn", "haSsAn", "HaSsAn", "hASsAn", "HASsAn", "hasSAn", "HasSAn", "hAsSAn", "HAsSAn", "haSSAn", "HaSSAn", "hASSAn", "HASSAn", "hassaN", "HassaN", "hAssaN", "HAssaN", "haSsaN", "HaSsaN", "hASsaN", "HASsaN", "hasSaN", "HasSaN", "hAsSaN", "HAsSaN", "haSSaN", "HaSSaN", "hASSaN", "HASSaN", "hassAN", "HassAN", "hAssAN", "HAssAN", "haSsAN", "HaSsAN", "hASsAN", "HASsAN", "hasSAN", "HasSAN", "hAsSAN", "HAsSAN", "haSSAN", "HaSSAN", "hASSAN", "HASSAN"]
// const syed = ['syed', 'Syed', 'sYed', 'SYed', 'syEd', 'SyEd', 'sYEd', 'SYEd', 'syeD', 'SyeD', 'sYeD', 'SYeD', 'syED', 'SyED', 'sYED', 'SYED']
// const haider = ['haider', 'Haider', 'hAider', 'HAider', 'haIder', 'HaIder', 'hAIder', 'HAIder', 'haiDer', 'HaiDer', 'hAiDer', 'HAiDer', 'haIDer', 'HaIDer', 'hAIDer', 'HAIDer', 'haidEr', 'HaidEr', 'hAidEr', 'HAidEr', 'haIdEr', 'HaIdEr', 'hAIdEr', 'HAIdEr', 'haiDEr', 'HaiDEr', 'hAiDEr', 'HAiDEr', 'haIDEr', 'HaIDEr', 'hAIDEr', 'HAIDEr', 'haideR', 'HaideR', 'hAideR', 'HAideR', 'haIdeR', 'HaIdeR', 'hAIdeR', 'HAIdeR', 'haiDeR', 'HaiDeR', 'hAiDeR', 'HAiDeR', 'haIDeR', 'HaIDeR', 'hAIDeR', 'HAIDeR', 'haidER', 'HaidER', 'hAidER', 'HAidER', 'haIdER', 'HaIdER', 'hAIdER', 'HAIdER', 'haiDER', 'HaiDER', 'hAiDER', 'HAiDER', 'haIDER', 'HaIDER', 'hAIDER', 'HAIDER']
// client.on('message', message =>{
//     // if (message.author.bot) return;
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     for (var t = 0; t < hassanwords.length; t++) {
//         if(message.content.includes(hassanwords[t])) {
//             // message.reply('--liked puma chiachio-- and \n '); 
//             message.reply('is gay');
//         }
//     }

//     for (var p = 0; p < syed.length; p++) {
//         if(message.content.includes(syed[p])) {
//             // message.reply('--liked puma chiachio-- and \n '); 
//             message.reply('is gay');
//         }
//     }

//     if(message.mentions.members.has('337096500439941120')) {
//         if(message.type === 'REPLY') return;
//         // message.reply('--liked puma chiachio-- and \n '); 
//         message.reply('is gay');
//         if (message.author.bot) return;
//     }

//     for(var o = 0; o < haider.length; o++){
//         if(message.content.includes(haider[o])){
//             message.reply('https://tenor.com/view/goodnight-haider-good-night-bigmansdreams61-gif-21556753')
//         }
//     }

// })

// // nig + clipped
// const niggaword = ['nigga', 'Nigga', 'nIgga', 'NIgga', 'niGga', 'NiGga', 'nIGga', 'NIGga', 'nigGa', 'NigGa', 'nIgGa', 'NIgGa', 'niGGa', 'NiGGa', 'nIGGa', 'NIGGa', 'niggA', 'NiggA', 'nIggA', 'NIggA', 'niGgA', 'NiGgA', 'nIGgA', 'NIGgA', 'nigGA', 'NigGA', 'nIgGA', 'NIgGA', 'niGGA', 'NiGGA', 'nIGGA', 'NIGGA', 'nigger', 'Nigger', 'nIgger', 'NIgger', 'niGger', 'NiGger', 'nIGger', 'NIGger', 'nigGer', 'NigGer', 'nIgGer', 'NIgGer', 'niGGer', 'NiGGer', 'nIGGer', 'NIGGer', 'niggEr', 'NiggEr', 'nIggEr', 'NIggEr', 'niGgEr', 'NiGgEr', 'nIGgEr', 'NIGgEr', 'nigGEr', 'NigGEr', 'nIgGEr', 'NIgGEr', 'niGGEr', 'NiGGEr', 'nIGGEr', 'NIGGEr', 'niggeR', 'NiggeR', 'nIggeR', 'NIggeR', 'niGgeR', 'NiGgeR', 'nIGgeR', 'NIGgeR', 'nigGeR', 'NigGeR', 'nIgGeR', 'NIgGeR', 'niGGeR', 'NiGGeR', 'nIGGeR', 'NIGGeR', 'niggER', 'NiggER', 'nIggER', 'NIggER', 'niGgER', 'NiGgER', 'nIGgER', 'NIGgER', 'nigGER', 'NigGER', 'nIgGER', 'NIgGER', 'niGGER', 'NiGGER', 'nIGGER', 'NIGGER']
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     for (var k = 0; k < niggaword.length; k++) {
//         if(message.content.includes(niggaword[k])) {
//             message.reply('clipped');
//         }
//     }

//     if(message.content === 'nig' || message.content === 'Nig'|| message.content === 'nIg'|| message.content === 'niG'|| message.content === 'NIg'|| message.content === 'NiG'|| message.content === 'nIG') {
//         message.reply('ger');
//     } else if(message.content === 'NIG') {
//         message.reply('GER');
//     } else if(message.content === 'ni'|| message.content === 'nI'|| message.content === 'Ni') {
//         message.reply('gga');
//     } else if(message.content === 'NI') {
//         message.reply('GGA');
//     }
// });

// const ppword = ["alex pp", "Alex pp", "aLex pp", "ALex pp", "alEx pp", "AlEx pp", "aLEx pp", "ALEx pp", "aleX pp", "AleX pp", "aLeX pp", "ALeX pp", "alEX pp", "AlEX pp", "aLEX pp", "ALEX pp", "alex pp", "Alex pp", "aLex pp", "ALex pp", "alEx pp", "AlEx pp", "aLEx pp", "ALEx pp", "aleX pp", "AleX pp", "aLeX pp", "ALeX pp", "alEX pp", "AlEX pp", "aLEX pp", "ALEX pp", "alex Pp", "Alex Pp", "aLex Pp", "ALex Pp", "alEx Pp", "AlEx Pp", "aLEx Pp", "ALEx Pp", "aleX Pp", "AleX Pp", "aLeX Pp", "ALeX Pp", "alEX Pp", "AlEX Pp", "aLEX Pp", "ALEX Pp", "alex Pp", "Alex Pp", "aLex Pp", "ALex Pp", "alEx Pp", "AlEx Pp", "aLEx Pp", "ALEx Pp", "aleX Pp", "AleX Pp", "aLeX Pp", "ALeX Pp", "alEX Pp", "AlEX Pp", "aLEX Pp", "ALEX Pp", "alex pP", "Alex pP", "aLex pP", "ALex pP", "alEx pP", "AlEx pP", "aLEx pP", "ALEx pP", "aleX pP", "AleX pP", "aLeX pP", "ALeX pP", "alEX pP", "AlEX pP", "aLEX pP", "ALEX pP", "alex pP", "Alex pP", "aLex pP", "ALex pP", "alEx pP", "AlEx pP", "aLEx pP", "ALEx pP", "aleX pP", "AleX pP", "aLeX pP", "ALeX pP", "alEX pP", "AlEX pP", "aLEX pP", "ALEX pP", "alex PP", "Alex PP", "aLex PP", "ALex PP", "alEx PP", "AlEx PP", "aLEx PP", "ALEx PP", "aleX PP", "AleX PP", "aLeX PP", "ALeX PP", "alEX PP", "AlEX PP", "aLEX PP", "ALEX PP", "alex PP", "Alex PP", "aLex PP", "ALex PP", "alEx PP", "AlEx PP", "aLEx PP", "ALEx PP", "aleX PP", "AleX PP", "aLeX PP", "ALeX PP", "alEX PP", "AlEX PP", "aLEX PP", "ALEX PP"];
// const mangusta = ["mangusta", "Mangusta", "mAngusta", "MAngusta", "maNgusta", "MaNgusta", "mANgusta", "MANgusta", "manGusta", "ManGusta", "mAnGusta", "MAnGusta", "maNGusta", "MaNGusta", "mANGusta", "MANGusta", "mangUsta", "MangUsta", "mAngUsta", "MAngUsta", "maNgUsta", "MaNgUsta", "mANgUsta", "MANgUsta", "manGUsta", "ManGUsta", "mAnGUsta", "MAnGUsta", "maNGUsta", "MaNGUsta", "mANGUsta", "MANGUsta", "manguSta", "ManguSta", "mAnguSta", "MAnguSta", "maNguSta", "MaNguSta", "mANguSta", "MANguSta", "manGuSta", "ManGuSta", "mAnGuSta", "MAnGuSta", "maNGuSta", "MaNGuSta", "mANGuSta", "MANGuSta", "mangUSta", "MangUSta", "mAngUSta", "MAngUSta", "maNgUSta", "MaNgUSta", "mANgUSta", "MANgUSta", "manGUSta", "ManGUSta", "mAnGUSta", "MAnGUSta", "maNGUSta", "MaNGUSta", "mANGUSta", "MANGUSta", "mangusTa", "MangusTa", "mAngusTa", "MAngusTa", "maNgusTa", "MaNgusTa", "mANgusTa", "MANgusTa", "manGusTa", "ManGusTa", "mAnGusTa", "MAnGusTa", "maNGusTa", "MaNGusTa", "mANGusTa", "MANGusTa", "mangUsTa", "MangUsTa", "mAngUsTa", "MAngUsTa", "maNgUsTa", "MaNgUsTa", "mANgUsTa", "MANgUsTa", "manGUsTa", "ManGUsTa", "mAnGUsTa", "MAnGUsTa", "maNGUsTa", "MaNGUsTa", "mANGUsTa", "MANGUsTa", "manguSTa", "ManguSTa", "mAnguSTa", "MAnguSTa", "maNguSTa", "MaNguSTa", "mANguSTa", "MANguSTa", "manGuSTa", "ManGuSTa", "mAnGuSTa", "MAnGuSTa", "maNGuSTa", "MaNGuSTa", "mANGuSTa", "MANGuSTa", "mangUSTa", "MangUSTa"];
// const ppuser = ["mAngUSTa", "MAngUSTa", "maNgUSTa", "MaNgUSTa", "mANgUSTa", "MANgUSTa", "manGUSTa", "ManGUSTa", "mAnGUSTa", "MAnGUSTa", "maNGUSTa", "MaNGUSTa", "mANGUSTa", "MANGUSTa", "mangustA", "MangustA", "mAngustA", "MAngustA", "maNgustA", "MaNgustA", "mANgustA", "MANgustA", "manGustA", "ManGustA", "mAnGustA", "MAnGustA", "maNGustA", "MaNGustA", "mANGustA", "MANGustA", "mangUstA", "MangUstA", "mAngUstA", "MAngUstA", "maNgUstA", "MaNgUstA", "mANgUstA", "MANgUstA", "manGUstA", "ManGUstA", "mAnGUstA", "MAnGUstA", "maNGUstA", "MaNGUstA", "mANGUstA", "MANGUstA", "manguStA", "ManguStA", "mAnguStA", "MAnguStA", "maNguStA", "MaNguStA", "mANguStA", "MANguStA", "manGuStA", "ManGuStA", "mAnGuStA", "MAnGuStA", "maNGuStA", "MaNGuStA", "mANGuStA", "MANGuStA", "mangUStA", "MangUStA", "mAngUStA", "MAngUStA", "maNgUStA", "MaNgUStA", "mANgUStA", "MANgUStA", "manGUStA", "ManGUStA", "mAnGUStA", "MAnGUStA", "maNGUStA", "MaNGUStA", "mANGUStA", "MANGUStA", "mangusTA", "MangusTA", "mAngusTA", "MAngusTA", "maNgusTA", "MaNgusTA", "mANgusTA", "MANgusTA", "manGusTA", "ManGusTA", "mAnGusTA", "MAnGusTA", "maNGusTA", "MaNGusTA", "mANGusTA", "MANGusTA", "mangUsTA", "MangUsTA", "mAngUsTA", "MAngUsTA", "maNgUsTA", "MaNgUsTA", "mANgUsTA", "MANgUsTA", "manGUsTA", "ManGUsTA", "mAnGUsTA", "MAnGUsTA", "maNGUsTA", "MaNGUsTA", "mANGUsTA", "MANGUsTA", "manguSTA", "ManguSTA", "mAnguSTA", "MAnguSTA", "maNguSTA", "MaNguSTA", "mANguSTA", "MANguSTA", "manGuSTA", "ManGuSTA", "mAnGuSTA", "MAnGuSTA", "maNGuSTA", "MaNGuSTA", "mANGuSTA", "MANGuSTA", "mangUSTA", "MangUSTA", "mAngUSTA", "MAngUSTA", "maNgUSTA", "MaNgUSTA", "mANgUSTA", "MANgUSTA", "manGUSTA", "ManGUSTA", "mAnGUSTA", "MAnGUSTA", "maNGUSTA", "MaNGUSTA", "mANGUSTA", "MANGUSTA"];
// // alex pp
// client.on('message', message =>{
//     if (message.author == client.user)
//     return
//     if (message.author.bot) return

//     if (message.author == client.user)
//     return
//     if (message.author.bot) return
    
//     for (var c = 0; c < ppword.length; c++) {
//         if(message.content.includes(ppword[c])) {
//             message.reply('https://cdn.discordapp.com/attachments/680605047209459713/948878064530632714/unknown.png');
//         }
//     }

//     for (var m = 0; m < mangusta.length; m++) {
//         if(message.content.includes(mangusta[m])) {
//             message.reply('https://cdn.discordapp.com/attachments/680605047209459713/948878064530632714/unknown.png');
//         }
//     }

//     for (var l = 0; l < ppuser.length; l++) {
//         if(message.content.includes(ppuser[l])) {
//             message.reply('https://cdn.discordapp.com/attachments/680605047209459713/948878064530632714/unknown.png');
//         }
//     }
// });

// const hateword = ["i hate", "I hate", "i hate", "I hate", "i Hate", "I Hate", "i Hate", "I Hate", "i hAte", "I hAte", "i hAte", "I hAte", "i HAte", "I HAte", "i HAte", "I HAte", "i haTe", "I haTe", "i haTe", "I haTe", "i HaTe", "I HaTe", "i HaTe", "I HaTe", "i hATe", "I hATe", "i hATe", "I hATe", "i HATe", "I HATe", "i HATe", "I HATe", "i hatE", "I hatE", "i hatE", "I hatE", "i HatE", "I HatE", "i HatE", "I HatE", "i hAtE", "I hAtE", "i hAtE", "I hAtE", "i HAtE", "I HAtE", "i HAtE", "I HAtE", "i haTE", "I haTE", "i haTE", "I haTE", "i HaTE", "I HaTE", "i HaTE", "I HaTE", "i hATE", "I hATE", "i hATE", "I hATE", "i HATE", "I HATE", "i HATE", "I HATE"]
// // i hate browns
// client.on('message', message => {
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     for (var q = 0; q < hateword.length; q++) {
//         if(message.content.includes(hateword[q])) {
//             message.reply('browns');
//         }
//     }
// });

// // david midandra
// const david = ["david", "David", "dAvid", "DAvid", "daVid", "DaVid", "dAVid", "DAVid", "davId", "DavId", "dAvId", "DAvId", "daVId", "DaVId", "dAVId", "DAVId", "daviD", "DaviD", "dAviD", "DAviD", "daViD", "DaViD", "dAViD", "DAViD", "davID", "DavID", "dAvID", "DAvID", "daVID", "DaVID", "dAVID", "DAVID"]
// client.on('message', message => {
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     const gift = new MessageAttachment("Major_-_Gift_from_God.mp3")

//     for (var g = 0; g < david.length; g++) {
//         if(message.content.includes(david[g])) {
//             message.reply('is midandra \nhttps://bit.ly/3KUR3ms');
//         }
//     }

//     if(message.mentions.members.has('276955094778642432')) {
//         if(message.type === 'REPLY') return;
//         message.reply('is midandra \nhttps://bit.ly/3KUR3ms');
//         if (message.author.bot) return;
//     }
// });

// // emre neonazi
// const emre = ['emre', 'Emre', 'eMre', 'EMre', 'emRe', 'EmRe', 'eMRe', 'EMRe', 'emrE', 'EmrE', 'eMrE', 'EMrE', 'emRE', 'EmRE', 'eMRE', 'EMRE']
// const omre = ['omre', 'Omre', 'oMre', 'OMre', 'omRe', 'OmRe', 'oMRe', 'OMRe', 'omrE', 'OmrE', 'oMrE', 'OMrE', 'omRE', 'OmRE', 'oMRE', 'OMRE']
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     for (var f = 0; f < emre.length; f++) {
//         if(message.content.includes(emre[f])) {
//             message.reply('is a neo nazi');
//         }
//     }

//     for (var e = 0; e < omre.length; e++) {
//         if(message.content.includes(omre[e])) {
//             message.reply('is a neo nazi');
//         }
//     }
// })

// //nickga
// client.on('message', message =>{
//     if(message.author == ('517789769162555422')){
//         message.channel.send('nickga')
//     }
// })

// //delete marika messages 
// client.on('message', message =>{
//     if(message.author == ('')){
//         message.delete()
//     }
// })
// // [[[[[[[[[[work in progress]]]]]]]]]]


// //mute kids who mention 'glaive'
// const glaive = ['glaive', 'Glaive', 'gLaive', 'GLaive', 'glAive', 'GlAive', 'gLAive', 'GLAive', 'glaIve', 'GlaIve', 'gLaIve', 'GLaIve', 'glAIve', 'GlAIve', 'gLAIve', 'GLAIve', 'glaiVe', 'GlaiVe', 'gLaiVe', 'GLaiVe', 'glAiVe', 'GlAiVe', 'gLAiVe', 'GLAiVe', 'glaIVe', 'GlaIVe', 'gLaIVe', 'GLaIVe', 'glAIVe', 'GlAIVe', 'gLAIVe', 'GLAIVe', 'glaivE', 'GlaivE', 'gLaivE', 'GLaivE', 'glAivE', 'GlAivE', 'gLAivE', 'GLAivE', 'glaIvE', 'GlaIvE', 'gLaIvE', 'GLaIvE', 'glAIvE', 'GlAIvE', 'gLAIvE', 'GLAIvE', 'glaiVE', 'GlaiVE', 'gLaiVE', 'GLaiVE', 'glAiVE', 'GlAiVE', 'gLAiVE', 'GLAiVE', 'glaIVE', 'GlaIVE', 'gLaIVE', 'GLaIVE', 'glAIVE', 'GlAIVE', 'gLAIVE', 'GLAIVE']
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     const role = message.guild.roles.cache.find(role => role.name === 'Muted')

//     for (var e = 0; e < glaive.length; e++) {
//         if(message.content.includes(glaive[e])) {
//             message.member.roles.add(role)
//             message.channel.send('we dont talk about glaive')
//             message.channel.send('mute for 1 min')

//             setTimeout(function(){
//             message.member.roles.remove(role)
//             message.channel.send('unmuted betch')
//         }, 60000)
//         }
//     }
// })

// // Browns
// const brown = ['brown', 'Brown', 'bRown', 'BRown', 'brOwn', 'BrOwn', 'bROwn', 'BROwn', 'broWn', 'BroWn', 'bRoWn', 'BRoWn', 'brOWn', 'BrOWn', 'bROWn', 'BROWn', 'browN', 'BrowN', 'bRowN', 'BRowN', 'brOwN', 'BrOwN', 'bROwN', 'BROwN', 'broWN', 'BroWN', 'bRoWN', 'BRoWN', 'brOWN', 'BrOWN', 'bROWN', 'BROWN']
// const browns = ['browns', 'Browns', 'bRowns', 'BRowns', 'brOwns', 'BrOwns', 'bROwns', 'BROwns', 'broWns', 'BroWns', 'bRoWns', 'BRoWns', 'brOWns', 'BrOWns', 'bROWns', 'BROWns', 'browNs', 'BrowNs', 'bRowNs', 'BRowNs', 'brOwNs', 'BrOwNs', 'bROwNs', 'BROwNs', 'broWNs', 'BroWNs', 'bRoWNs', 'BRoWNs', 'brOWNs', 'BrOWNs', 'bROWNs', 'BROWNs', 'brownS', 'BrownS', 'bRownS', 'BRownS', 'brOwnS', 'BrOwnS', 'bROwnS', 'BROwnS', 'broWnS', 'BroWnS', 'bRoWnS', 'BRoWnS', 'brOWnS', 'BrOWnS', 'bROWnS', 'BROWnS', 'browNS', 'BrowNS', 'bRowNS', 'BRowNS', 'brOwNS', 'BrOwNS', 'bROwNS', 'BROwNS', 'broWNS', 'BroWNS', 'bRoWNS', 'BRoWNS', 'brOWNS', 'BrOWNS', 'bROWNS', 'BROWNS']
// client.on('message', message =>{
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     for (var k = 0; k < brown.length; k++) {
//         if(message.content === (brown[k])) {
//             message.reply('no good. \nhttps://cdn.discordapp.com/attachments/949179946662760470/955799423546437643/mango_glasses.jpg?size=4096');
//         }
//     }
//     for (var h = 0; h < browns.length; h++) {
//         if(message.content === (browns[h])) {
//             message.reply('no good. \nhttps://cdn.discordapp.com/attachments/949179946662760470/955799423546437643/mango_glasses.jpg?size=4096');
//         }
//     }
// })

// // mute chris
// // rn only mutes the user who says it
// const chris = ['chris', 'Chris', 'cHris', 'CHris', 'chRis', 'ChRis', 'cHRis', 'CHRis', 'chrIs', 'ChrIs', 'cHrIs', 'CHrIs', 'chRIs', 'ChRIs', 'cHRIs', 'CHRIs', 'chriS', 'ChriS', 'cHriS', 'CHriS', 'chRiS', 'ChRiS', 'cHRiS', 'CHRiS', 'chrIS', 'ChrIS', 'cHrIS', 'CHrIS', 'chRIS', 'ChRIS', 'cHRIS', 'CHRIS']
// client.on('message', message => {
//     if (message.author == client.user)
//         return
//     if (message.author.bot) return

//     const role = message.guild.roles.cache.find(role => role.name === 'Muted')

//     // const memer = message.guildmember.cache.get('450213033701146636')
//     // const member = guild.user.id.fetch("450213033701146636")
//     // const target = message.mentions.members == ('450213033701146636');
//     // const user = .cache.fetch

//     for (var p = 0; p < chris.length; p++) {
//         if(message.content.includes(chris[p])){

//             // member.roles.add(role)
//             message.member.roles.add(role)
//             message.channel.send("You are now muted for 10 seconds")

//             setTimeout(function(){
//                 // member.roles.remove(role)
//                 message.member.roles.remove(role)
//                 message.channel.send("You are now unmuted")
//             },10000);
//         }
//     }
// })

client.login('OTQ3MDk2OTc3MDYwMDEyMDYy.GQohH-.HI8PCs9RkOLCjLX2G1P8y_yN32fanBvFvlwTwA');