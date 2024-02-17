// The old switcheroo - 7kyu (February 17th)

function vowel2index(str) {

   return str.split('').map((char, i) => {

      const regex = /[aeiou]/ig

      if (char.match(regex)){
         return i + 1
      } else {
         return char
      }
   }).join('')
}


vowel2index("90's cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics.")

// '90\'s c7rnh11l13 1516st19n, p24ckl28d b32tch36r yr m43ss46ng49r b53g g57str61p63b n67xt l72v74l l78gg81ngs l87st90cl93 m96d98t100t102103n try-h111rd V116c118. T122x124d126rmy g132str136p138b g142ntr146fy, m152h f156p 159rg162n164c 167nn170171 f174ng177rst181ch184 p187ckl191d v195g197n. S202203t205n s209st212213n215bl218 PBR&B c227rnh231l233 VHS. J241242n sh247rts 252ct255256lly b262tt265rs 269gh bl275g 278nt281ll284g286nts290291. 294rt297s299n K303ckst308rt311r D315Y, f320x322323 cl327ch330 s333lv336337 l340-f343 f346347r l351k353. PBR&B 362dd F367t369r371 373gh f378ng381rst385ch388 cr392y W396s 399nd402rs405n ch410411 typ416wr419t421r 424Ph427n429 b432sp435k437 f440441r l445k447, 450nt453ll456g458nts462463 ph467t469 b472473th d478r480ct tr486d488. 491492sth496t498c T502mblr P509rtl513nd X518X520 sq524525d, synth v536r538l l542st545cl548 sk552t554b556557rd f562563r d567ll570r t574575st c580rnh584l586 Bl590591 B594ttl598 s601m603604t606cs.'

// '90\'s c7rnh11l13 A16st19n, p24ckl28d b32tch36r yr m43ss46ng49r b53g g57str61p63b n67xt l72v74l l78gg81ngs l87st90cl93 m96d98t100t102103n try-h111rd V116c118. T122x124d126rmy g132str136p138b g142ntr146fy, m152h f156p 159rg162n164c 167nn170171 f174ng177rst181ch184 p187ckl191d v195g197n. S202203t205n s209st212213n215bl218 PBR&B c227rnh231l233 VHS. J241242n sh247rts 252ct255256lly b262tt265rs 269gh bl275g Int281ll284g286nts290291. Art297s299n K303ckst308rt311r DIY, f320x322323 cl327ch330 s333lv336337 l340-f343 f346347r l351k353. PBR&B Odd F367t369r371 373gh f378ng381rst385ch388 cr392y W396s And402rs405n ch410411 typ416wr419t421r 424Ph427n429 b432sp435k437 f440441r l445k447, Int453ll456g458nts462463 ph467t469 b472473th d478r480ct tr486d488. A492sth496t498c T502mblr P509rtl513nd XOXO sq524525d, synth v536r538l l542st545cl548 sk552t554b556557rd f562563r d567ll570r t574575st c580rnh584l586 Bl590591 B594ttl598 s601m603604t606cs.'

vowel2index('this is my string') //'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') //'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('Tomorrow is going to be raining') // 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
vowel2index('') // ''

