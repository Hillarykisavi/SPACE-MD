require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJqwV1uXb*XIgwQAAJEHAAAKAAAAY3JlZHMuanNvbpVUy46jRhT9l9raGvMwGCO1NIAf4PcDDHY0izIUUDYvF4UxHnmXZZa97SwjZZVdPihf0J8Q0e6enkUy6SAhFZfSvefec879CpIU52iMKiB*BRnBZ0hRfaRVhoAM1ML3EQFN4EEKgQyUhcOV5WHQbq3WVXhdSfry1Kb6ptjR0CkDkU7XAsItW+WlB3BrgqzYR9j9QUKpFaTx5XDarS5VK+Ku2Jfsat+lGytdZdBs5Uwv7RgsR0zrAdzqjBATnAT9LEQxIjAao2oBMfkYfG5+HfVwup1tAkUnMWOMuUKcOnAYNObTJRYn85GgLWaVtik*Bt8XxJm60YI0jkoHJXhWOdgRL0VfJ8e9E3R8bTlNxWOY2O4dfo6DBHmGhxKKafXhuZf9wWV9zKNBPnB807lcbRiNfKHkdJ1VDhrfGuqkO1Zn643xMeBLVWPOmUnsKWyJCTzs3ZIdMETHhdaIDtLE7p5XohWfN9j6HviCvGnl+H*mDic9h+bqlenxo3OyxOKppDF17VPfxlsrnlxFuupFyPW4D8pmRvyYeiErsut2dOiNkOQfD9MttaxR2eAxnohq3mIHF4dR3uFDWpAfoYxh6glW7zjfqivG7VUCPI7N6TCGerKHno+1aDJm+FXLYEyJ72*FyX7bMq3O4DyOtxvN4gV7uQvVuTg+dNvJrnFaGpNSLR9eOjqiyvCAzN6agKAA55RAitPkJSZwTQC98xq5BNGX8QJztBCK3RxZfmTrqrmN2mKns6aZ0en7w7W7rabCfDFapVf9+ACaICOpi*IceTrOaUqqKcpzGKAcyD99aYIEXeiduLoczzaBj0lOraTIohR6b6y+*YSumxYJXVeJq9UHRIDMvIcRpTgJ8nqORQKJG+Iz0kJIcyD7MMrRtw4RQR6QKSnQN9dqqVcPfrM02wthtANNEL8Qgr3anEK70+102wzXlmT+c*6prLPCLPuUIAqaIIH1ZfDXz788Pz3+9vz0+Pvr++vz0+Mfz0+Pf4ImiO6pOFFsC12WkVimw4sy*7mO3741Udf0EIU4yoEMtGnrWEyYfn92ssTcHQ6VaaBogQLem35Tz50d3+igIJi3HQ*pG3tgqtdhezosxWSw5RB3DE+TftpF2N2o5cM*JAEymDY0zT6FlrHti7tBmZwRXlxbI23eVYychpUoTE5Q2pgISv6F1U+zSC*iABvG9Mqws1AIncZyahRxuBr4jlbNlNZpoS4f6moeOmMXfV*MO5r26JR6WeaTQW8VpXqDR1zkzYZx79roWsoyVz2W2Uj81kur1nadmKOJ1DAmZOkiG*t7siYJV2zxbHRQygPvd5Hee9X1i6+i132GXxRX01l*+hi9rIdX3v6L3jvuWoTMrflditd98y+eVZ1qzqdGrxjwTshuQqt0L0VPzefZxZ4lNDMgvowXTpoMli643b40QRZB6qckBjLI4z0ETUDSopa0kfjpDyppCmMowb3rCOZUebeJiWOUUxhnQGY7Isu1u5Ik3W8tSJrpMA+BDPhVd8d3a81XSpatKaRvrgNK*QzpGtz+BlBLAQIUAxQAAAgIAJqwV1uXb*XIgwQAAJEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAKsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254797940248',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Hillarykisavi',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || '119322',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || '119322',
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
