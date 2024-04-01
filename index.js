// CONFIG [ EDIT BELOW ]
const user_id = ''
const user_token = ''
const delay = 3 // seconds

// REQUIRES [ DON'T EDIT BELOW FROM NOW ON ]
const { fetch } = require('cross-fetch'); 

// MAIN PROGRAM
(async () => {    
    function sleep(seconds) {
        return new Promise((resolve) => {
          setTimeout(resolve, seconds * 1000);
        });
    }

    const table = {
        "1214340999644446720": "buster blade",
        "1214340999644446721": "cute plushie",
        "1214340999644446722": "wump shell",
        "1214340999644446723": "speed boost",
        "1214340999644446724": "flute",
        "1214340999644446725": "power helmet",
        "1214340999644446726": "quack",
        "1214340999644446727": "banana",
        "1214340999644446728": "dream hammer",
    }

    for(let i = 0; i < 9; i++) {
        const url = 'https://discord.com/api/v9/users/@me/lootboxes/open'
        await fetch(url, {
            headers: {'Authorization': user_token, 'Accept': '*/*', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'X-Super-Properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLUdCIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTIzLjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjI4MDU3OSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=', 'Accept-Language': 'en-GB,en;q=0.7', 'Accept-Encoding': 'gzip, deflate, br, zstd'},
            method: 'POST',
            body: JSON.stringify({
                "user_lootbox_data": {
                    "user_id": user_id,
                    "opened_items": {"1214340999644446720": 100,
                    "1214340999644446721": 111,
                    "1214340999644446722": 111,
                    "1214340999644446723": 111,
                    "1214340999644446724": 111,
                    "1214340999644446725": 111,
                    "1214340999644446726": 111,
                    "1214340999644446727": 111,
                    "1214340999644446728": 111,},
                    "redeemed_prize": false
                },
                "opened_item": `121434099964444672${i}`
            })
        }).then((res) => {
            res.status === 200 ? console.log(`acquired ${table[`121434099964444672${i}`]}`) : async () => {
                console.log('ratelimited, sleeping for 60s')
                await sleep(60)
                i-- 
            }
        })

        if (i === 8) {
            return console.log('captured all rewards')
        }; 

        await sleep(delay)
    }
})()

