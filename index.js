
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// اذا تبغى تضيف توكن زياده روح حطها تحت عند التوكن بس مو اخر سطر قبل الاخير او الثاني وكتبها بكتبلك ياه تحت
//'',
const tokens = [
  //'',

      'MTM2MzQ2NTEzOTkxNTA2MzM5Ng.G3T1yX.Up-L7zU4NK7XziZGm7ZMe0VxI6UWoyuMZGjXj0',
          '',
              '',
                  '',
                      ''
                      ];

                      function createBot(token) {
                          const client = new Client({
                                  intents: [GatewayIntentBits.Guilds]
                                      });

                                          client.once('ready', () => {
                                                  console.log(`Logged in as ${client.user.tag}`);
                                                          console.log(`code by Sanigo`);
                                                                  console.log(`team wick studio`);

                                                                  //هاذي الستريمنق تخلي كل بوتاتك الستريمنق ولا تنسى تعدل كلمة سانيقو وتحط الكلام الي تبغاها اذا ما تبيها احذفها
                                                                          client.user.setActivity('اني ابن البصره احجي بزوديبزودي ', {
                                                                                      type: ActivityType.Streaming,
                                                                                                  url: 'https://www.twitch.tv/tramp_in_top' 
                                                                                                          });
                                                                                                              });

                                                                                                              //لا تلمس الي تحت لا تخرب شي عشان ما اتضارب معك

                                                                                                                  client.login(token).catch(error => {
                                                                                                                          console.error(`Failed to login with token: ${token}. Error: ${error.message}`);
                                                                                                                              });
                                                                                                                              }

                                                                                                                              tokens.forEach(token => {
                                                                                                                                  createBot(token);
                                                                                                                                  });
                                                                            