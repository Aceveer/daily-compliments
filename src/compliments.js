const compliments = [
    {
        id: 1,
        topic: "My True Feelings",
        compliment: "Your care is beyond compare",
        desc: "You always have my back. No matter what, you're always my #1 supporter and you always look out for me. You consistently put time and effort into our relationship, and I cherish that so much about you.",
        imageUrl: "1.jpg",
        backTitle: "Caring",
        backMessage: "Through studies and work, you've compromised and sacrificed so much, for us to be together."
    },
    {
        id: 2,
        topic: "My True Feelings",
        compliment: "You know me and better than I know me",
        desc: "You know how to make me happy. You can sense when something is wrong, especially when I'm upset. You always pick up on changes in my mood and behavior and intuitively understand when something isn't right. You check up on me repeatedly, even when I say I'm fine but deep down I'm not. You can read me like an open book.",
        imageUrl: "2.jpg",
        backTitle: "Knowing",
        backMessage: "Calls, conversations, and texts—you've always picked up on my changes in tone or behavior."
    },
    {
        id: 3,
        topic: "My True Feelings",
        compliment: "You are as beautiful as you are graceful",
        desc: "Honestly, I hit the jackpot with you. I love every aspect of you, from head to toe. You possess everything I admire, and I find myself more attracted to you every single day. You radiate positivity and happiness, and I can't stop but fall in love with you every single day.",
        imageUrl: "3.jpg",
        backTitle: "Beautiful",
        backMessage: "Whether it's morning, evening, or night, it doesn't matter what you're doing—your beauty radiates positivity."
      },
      {
        id: 4,
        topic: "My True Feelings",
        compliment: "You've got a soul as pure as gold",
        desc: "There's just something about you that I can't resist. It always draws me closer to you, and I love that feeling. You always offer to help people who seem like they need it, putting your needs last and assisting your friends and family. I know how challenging it can be sometimes, but you still manage to do it all, and I'm so proud of you for that.",
        imageUrl: "4.jpg",
        backTitle: "Pure",
        backMessage: "Simple and thoughtful actions mean a lot to you. You don't care about materialistic things; quality time together is the priceless gift you cherish."
      },
      {
        id: 5,
        topic: "My True Feelings",
        compliment: "Your eyes take me to paradise",
        desc: "Every time I look at you, I fall in love. You have such beautiful eyes that I always gaze at and lose myself in. I could stare at them all day, lose track of time, and still wish I had more. I see how much you love me when you look at me, and that never fails to make my heart race.",
        imageUrl: "5.jpg",
        backTitle: "Awestruck ",
        backMessage: "It's hard to maintain eye contact with you when my heart races every time you look back at me."
      },
      {
        id: 6,
        topic: "My True Feelings",
        compliment: "Your lips, I always want to kiss",
        desc: "I could kiss your lips forever. Every time I see them, I'm tempted to just swoop in and lock lips. I'm always torn between staring into your eyes or giving in to the urge to come in closer to seal the deal. You've got me at your palms.",
        imageUrl: "6.jpg",
        backTitle: "Alluring",
        backMessage: "Your lips drive me crazy, and you sure know how to use them. I just wish I could kiss them all day long."
      },
      {
        id: 7,
        topic: "My True Feelings",
        compliment: "Witty and quick, 1 mark proves it",
        desc: "You're not only smart, but you're also witty. You never let go of the fact that you beat me in math by one mark, and kudos to you — you deserve it. We've come a long way since then, and you've proven your intellectual skills on many occasions. We push each other to thrive and do our best in our own fields, which makes us a great team.",
        imageUrl: "7.jpg",
        backTitle: "Smart",
        backMessage: "It's impressive how you ace exams with last-minute prep. Your passion for what you do is why you're such a great psychologist."
      },
      {
        id: 8,
        topic: "My True Feelings",
        compliment: "Sweet warm hugs, that's my drug",
        desc: "Any chance I get, I want to hold you and keep you close. I cannot begin to explain the 'analgesic' feeling I get when I see you after a long day; I just want to come to you and hug you. It honestly makes all my worries go away, and I can't get enough of how good you smell! You are my cure for anything that makes me sad or unhappy.",
        imageUrl: "8.jpg",
        backTitle: "Loving",
        backMessage: "Things aren't always 50-50. I see the depth of your love and feel it fully. Your love for me has always been infinite."
      },
      {
        id: 9,
        topic: "My True Feelings",
        compliment: "Your voice cancels all noise",
        desc: "I love hearing you talk about your day, your worries, and troubles, or anything under the sun. Listening to you throws all my worries away. I love it even more when you sing so confidently with me. That's what I want to do with you — just sing our favorite songs without caring what anyone else says. You can be you, and I can be me.",
        imageUrl: "9.jpg",
        backTitle: "Soothing",
        backMessage: "Singing along to our favorite Taylor Swift songs on Discord, I'd mute the Music Bot just to hear my favorite singer."
      },
      {
        id: 10,
        topic: "My True Feelings",
        compliment: "I'll admit, you're funny and quick",
        desc: "You won't have to scroll up through our conversations to find proof of me admitting you're funny. Here it is. Your antics always puts a smile on my face, especially when you imitate me. I love all our banter and our jokes, all things that only we know. Your humour is witty and you've got really good timing as well.",
        imageUrl: "10.jpg",
        backTitle: "Humorous",
        backMessage: "You're becoming like me. Especially your sense of humour. You can't even deny it with the jokes I've heard you make."
      },
      {
        id: 11,
        topic: "My True Feelings",
        compliment: "My pookie is kind, and all mine",
        desc: "I am always so proud to say that you're my partner. You've forever been so nice to people, even those who have wronged you. Yet, you always stay strong. You always find a way to help people, and I find that quality in you so appealing.",
        imageUrl: "11.jpg",
        backTitle: "Kind",
        backMessage: "You've never done anything to make me sad or unhappy. You've always been patient and kind with your words and actions."
      },
      {
        id: 12,
        topic: "My True Feelings",
        compliment: "Your love so passionate, and touch so delicate ",
        desc: "I know and can feel just how intense and pure your love is. You never compromise and always treat me right. You've always had the best of intentions at heart, and I feel your love every time you look at me.",
        imageUrl: "12.jpg",
        backTitle: "Passionate",
        backMessage: "You've given your 269% in everything related to us, always upping your game and loving me so passionately."
      },
      {
        id: 13,
        topic: "My True Feelings",
        compliment: "Honesty is our best policy ",
        desc: "We're always open and honest about what we feel and how we feel. You've never been dishonest about anything and have always been straightforward. We have the difficult conversations, but we always find our way back to each other. We're in this for the long haul, and our relationship is built on communication.",
        imageUrl: "13.jpg",
        backTitle: "True",
        backMessage: "Throughout our relationship, we've never felt the need to lie to each other, building a rare and strong foundation."
      },
      {
        id: 14,
        topic: "My True Feelings",
        compliment: "You understand me, wholeheartedly",
        desc: "Whether it's my moody attitude, change in tone, or body language, you pick it up so easily. You're always looking out for what's best for me. You know exactly what to say when I need to hear the right things. You're my pillar of support and my guiding light.",
        imageUrl: "14.jpg",
        backTitle: "Understanding",
        backMessage: "No one in the world understands me better than you do. That's why you're the only one for me."
      },
      {
        id: 15,
        topic: "My True Feelings",
        compliment: "You are a risk-taker, not a self-blamer",
        desc: "You've been the one who has taken the risk throughout, yet you've always managed to put so much thought, time, and effort into all our dates and plans. I have no clue how you've done it for so long, but you truly are a magician.",
        imageUrl: "15.jpg",
        backTitle: "Dangerous",
        backMessage: "Considering your environment, I'm honestly amazed that we've stayed together for so long. It makes me feel incredibly special and lucky."
      },
      {
        id: 16,
        topic: "My True Feelings",
        compliment: "Accommadting all my habits, became a Fall Guys addict",
        desc: "I'll admit, managing my gaming habits hasn't been easy. Yet, you've always been accommodating, and now we spend enjoyable hours playing Fall Guys, a game we've both come to adore. You're my Clutch Goddess of Whirly Gig.",
        imageUrl: "16.jpg",
        backTitle: "Compromising",
        backMessage: "You've tolerated all my antics, given me countless chances when I've been late. I'm deeply grateful for all you've endured."
      },
      {
        id: 17,
        topic: "My True Feelings",
        compliment: "With that body, you're a total hottie",
        desc: "Let me start by saying, you're incredibly attractive. Every part of you captivates me. Whenever I gaze at you, I'm amazed. Am I dreaming? How did I get so lucky to have such a stunning girlfriend? Did I do something truly great in my past life? Either way, I've hit the jackpot.",
        imageUrl: "17.jpg",
        backTitle: "Hot & Sexy",
        backMessage: "I can't help but admire you from head to toe—you're fucking hot, and you're all mine."
      },
      {
        id: 18,
        topic: "My True Feelings",
        compliment: "Outdoorsy and adventurous, thrillingly dangerous.",
        desc: "I prefer staying in, while you enjoy going on adventures and trips—quite a match. Regardless, I'd travel to all corners of the world as long as I'm with you. You make it all seem exciting, and I wouldn't want anyone else as my #1.",
        imageUrl: "18.jpg",
        backTitle: "Adventurous",
        backMessage: "The only motivation I have is our '25 Countries' goal."
      },
      {
        id: 19,
        topic: "My True Feelings",
        compliment: "Sugar and spice, but cold as ice",
        desc: "I love how you're the perfect combination of nice, genuine, pure, and polite. But you never shy away from a confrontation and putting that person in their place. I need someone like that in my life.",
        imageUrl: "19.jpg",
        backTitle: "Bad B**ch",
        backMessage: "I know that I wouldn't ever want to be the person that gets on your bad side. It would be lights out for them."
      },
      {
        id: 20,
        topic: "My True Feelings",
        compliment: "You inspire and motivate, and help me everyday",
        desc: "You always encourage me to try things that are difficult, knowing that it will help in the long run. You inspire me to become a better man and motivate me to achieve greater success. You possess all the qualities a man would want in a lifelong partner.",
        imageUrl: "20.jpg",
        backTitle: "Encouraging",
        backMessage: "Building cute things for you - Learning new technologies for me. Win-win situation."
      },
      {
        id: 21,
        topic: "Our Hopeful Future",
        compliment: "Waking Up Beside You",
        desc: "I always love starting my day with your texts or video calls. It just gets me so happy. And having you next to me for the rest of my life, to wake you up and annoy you, is exactly what I'm looking for.",
        imageUrl: "21.jpg",
        backTitle: "Happy Ever After",
        backMessage: "Just imagining my life with you, waking up to your beautiful face and kissing it is what gets me going every day."
      },
      {
        id: 22,
        topic: "Our Hopeful Future",
        compliment: "Cooking, Laundry & Dishes",
        desc: "No matter what we do, whenever we do something together, I just feel more enthusiastic and excited for it. Your company and presence just makes everything so much better, and together, it's always fun.",
        imageUrl: "22.jpg",
        backTitle: "Quality Time",
        backMessage: "Boring old house chores would be so much fun together. We'll make a mess, share kisses, and have a great time."
      },
      {
        id: 23,
        topic: "Our Hopeful Future",
        compliment: "Game Nights",
        desc: "You've introduced me to some really fun games, which we've both grown so fond of. With all the time in the world, I can't wait to go head to head with you on so many new games, be a sore loser when you win, or rub it in your face when I wreck you. Or we could team up and play together on the same team in some of the games you really love the animations of.",
        imageUrl: "23.jpg",
        backTitle: "Competitive Partners",
        backMessage: "Snakes & Ladders, Ludo, Project L, Azul. I know I won't sleep until I beat you at least once in the game we play."
      },
      {
        id: 24,
        topic: "Our Hopeful Future",
        compliment: "Passenger Princess",
        desc: "I love driving you around, with you navigating and giving me wrong directions, or giving directions after I've already passed the turn. Or even listening to music and jamming together, singing so loud. I love having you around and pampering, I'm always going to treat you as my passenger princess for as long as I'm around.",
        imageUrl: "24.jpg",
        backTitle: "Long Drives",
        backMessage: "With our SUV, I'll take you wherever we want. But you know what I get in return."
      },
      {
        id: 25,
        topic: "Our Hopeful Future",
        compliment: "Cosmetics, Shampoos & Creams",
        desc: "I've started applying sunscreen because of you. I remember how mad you got when I wasn't buying sunscreen before leaving for Australia. We had such a big fight over it too. But now, I feel I'll slowly start using your skincare products, follow your routines and finish your bottles.",
        imageUrl: "25.jpg",
        backTitle: "Cream Thief",
        backMessage: "I already know that I'm going to be using all your skincare bottles and do face masks together"
      },
      {
        id: 26,
        topic: "Our Hopeful Future",
        compliment: "Sick Days",
        desc: "Taking care of you is something I really love doing. Pampering you with gifts, loving you and hugging you, holding you close and just kissing you affectionately, is exactly what I want. And especially when you fall sick, you're going to get the bonus treatment, even though it may mean that I fall sick too. I just want to take care of you.",
        imageUrl: "26.jpg",
        backTitle: "Care-lover",
        backMessage: "Bed rest, massages, food in bed. Princess treatment for my baby."
      },
      {
        id: 27,
        topic: "Our Hopeful Future",
        compliment: "World Tour",
        desc: "I'm never going to stop trying to woo you. It feels like we're still in our honeymoon phase and it's such a flex. We can follow the 2-2-2 principle and make sure we go out once every 2 weeks, take a mini weekend trip every 2 months, and a nice trip once every 2 years.",
        imageUrl: "27.jpg",
        backTitle: "25 Countries",
        backMessage: "I can see us traveling the world, with you as my world."
      },
      {
        id: 28,
        topic: "Our Hopeful Future",
        compliment: "Goodnight Kisses",
        desc: "I want to start the day with you and end the day with you. I can never stop thinking about kissing your lips, having you with me anytime to kiss those wonderful lips. I know I've won in life.",
        imageUrl: "28.jpg",
        backTitle: "Butterflies",
        backMessage: "Starting and ending each day on a high note."
      },
      {
        id: 29,
        topic: "Our Hopeful Future",
        compliment: "TS Karaoke Nights",
        desc: "We always jam to TS, whether on Discord, when we meet, or together. It's our go-to music choice for anything, from upbeat dance songs to romantic ballads for slow dances.",
        imageUrl: "29.jpg",
        backTitle: "Sing & Dance",
        backMessage: "We have our own playlist full of our favorite songs."
      },
      {
        id: 30,
        topic: "Our Hopeful Future",
        compliment: "Plain & Simple",
        desc: "Everyday doesn't have to be grand, special or this big event. I've got you, and that's all I could ever ask for. Life together is what both of us have wanted for so long, and now we have it. I don't need anything else.",
        imageUrl: "30.jpg",
        backTitle: "Cloud 9",
        backMessage: "We can have simple days where we just lay down, and relax together."
      },
      {
        id: 31,
        topic: "Our Hopeful Future",
        compliment: "Pet Peeves",
        desc: "I'm not much of a pet person, but I know how much you love dogs and cats. I've started liking them especially since we relate with so many of the reels and posts we send to each other. I think you've made me a pet person because of this.",
        imageUrl: "31.jpg",
        backTitle: "Doggos and Kitties",
        backMessage: "We can adopt a kitty and be a family of 3!"
      },
      {
        id: 32,
        topic: "Our Hopeful Future",
        compliment: "Serenading",
        desc: "I love singing songs together. And I love singing songs for you, to you. With my guitar, I'd sing all the romantic songs in the world for you, and woo you all over again. Beautiful Girls, Just The Way You Are, and many more cheesy love songs just for you.",
        imageUrl: "32.jpg",
        backTitle: "Can't Help Falling In Love",
        backMessage: "Let me woo you everytime, with a guitar and my voice."
      },
      {
        id: 33,
        topic: "Our Hopeful Future",
        compliment: "Pretty Florals",
        desc: "I know just how much you love it when I get you flowers. And I always love the look on your face when you do see them. It's priceless. Getting you flowers is honestly the best way to your heart, and you always take such good care of them till the end.",
        imageUrl: "33.jpg",
        backTitle: "Carnations, Roses & Lilies",
        backMessage: "Surprise you with flowers after work, all the time."
      },
      {
        id: 34,
        topic: "Our Hopeful Future",
        compliment: "Arcade Dates",
        desc: "I've made you such a sucker for these arcade games. I'm sure you wouldn't have ever come to arcades, but here we are. Playing a whole bunch of games, the claw machine, the building stacking, ball drop, and what not. I love how competetive you are with me and how much we enjoy the arcade center together.",
        imageUrl: "34.jpg",
        backTitle: "Air Hockey",
        backMessage: "Our go-to game to see who is the best."
      },
      {
        id: 35,
        topic: "Our Hopeful Future",
        compliment: "Story Books",
        desc: "I honestly still need to give reading a solid try, but you love it so much. I think we can spend some nice quality time together at night, just reading a book, before falling asleep. I always love listening to you talk about characters from a book, the tropes and how you always skip to the end.",
        imageUrl: "35.jpg",
        backTitle: "Fiction vs Self-Help",
        backMessage: "We all know who the better reader category people are."
      },
      {
        id: 36,
        topic: "Our Hopeful Future",
        compliment: "Grocery Shopping",
        desc: "Going shopping with you would be really fun. We'd make a list, get our trolley and head into the store to find the items we're looking for. But we'd be lured into some really good offers and we'd convince each other that it's a steal. Making corny puns and jokes in different aisles as well. It's going to be so fun.",
        imageUrl: "36.jpg",
        backTitle: "Saving by Spending",
        backMessage: "Girl Math might come into play here."
      },
      {
        id: 37,
        topic: "Our Hopeful Future",
        compliment: "Movie Nights",
        desc: "No more Discord Watch Parties. We'd decide what movie to watch, and if there's a character you like, you'll end up elbowing my eye (yet again). Cuddle and cozy up in a blanket and watch all night. Deciding the movie would ultimately be your final say, even though we might have our own system in place. I feel like you'll end up getting your way or shomehow convincing me.",
        imageUrl: "37.jpg",
        backTitle: "What You Say, Goes",
        backMessage: "Your pick is final."
      },
      {
        id: 38,
        topic: "Our Hopeful Future",
        compliment: "Feeding Each Other",
        desc: "Giving you the first sip or the first bite has become a tradition. Something that I'd love to carry on for the future of our relationship. Just watching you enjoy the first bite or sip of whatever I order, giving me your feedback and doing the happy dance. I just love everything about that.",
        imageUrl: "38.jpg",
        backTitle: "Food Traditions",
        backMessage: "Always order for 2, and we share!"
      },
      {
        id: 39,
        topic: "Our Hopeful Future",
        compliment: "Fit AF Couple",
        desc: "We'd hit the gym 5 days a week. Push each other and be that cute gym couple that does PDA in the gym. Make sure everyone knows you're mine too. And then, we come back home and do our very own cardio ;).",
        imageUrl: "39.jpg",
        backTitle: "Power Couple",
        backMessage: "Smoothies and Salads"
      },
      {
        id: 40,
        topic: "Our Hopeful Future",
        compliment: "Getting Away With Anything",
        desc: "In the past, the present, and even in the future. I will be a sucker for your sad face. I will never have the will to say no to you when you make that face. So no matter what, you're goning to win in the end. So congratulations in advance.",
        imageUrl: "40.jpg",
        backTitle: "My Baby Queen",
        backMessage: "I shouldn't have encouraged this behavior"
      },
      {
        id: 41,
        topic: "Our Magical Dates",
        compliment: "14th August, 2018",
        desc: "Just after I declared my feelings for you, and you mentioned that you felt the same way. We were at a standstill. I still remember you asked 'What happens now?'. On this day, I surprised you and made it official? (Without explicitly asking you to be my girlfriend)",
        imageUrl: "41.jpg",
        backTitle: "Forum",
        backMessage: "First Time we Met after Confessing our Feelings"
      },
      {
        id: 42,
        topic: "Our Magical Dates",
        compliment: "12th September, 2018",
        desc: "Something I learnt and heard about from Siri. A way to see how comfortable your partner is with you, their friends and other people within their circle. We walked after ice-cream, just behind Corner House. Gave a whole speech about where I'd be within your personal space. And that was also the perfect chance to kiss you, but I didn't even realize that. Whereas you thought that's what I was going to do. I've been a big noob since this day.",
        imageUrl: "42.jpg",
        backTitle: "Corner House",
        backMessage: "Space Test"
      },
      {
        id: 43,
        topic: "Our Magical Dates",
        compliment: "12th October, 2018",
        desc: "A day I dropped a huge bomb. Told you what I feel about us, that I'm in this for the long haul. I remember mentioning that it was a time-bomb, our relationship, but now, 6 years later, I feel like we have so much more to give. I had a feeling then, but I'm certain now. You're all I want.",
        imageUrl: "43.jpg",
        backTitle: "Grillo",
        backMessage: "What I Think Of Us"
      },
      {
        id: 44,
        topic: "Our Magical Dates",
        compliment: "23rd October, 2018",
        desc: "A momentous day indeed. Got to spend so much time together. We went bowling, you beat me (while on your period), we had some good food at Taco Bell. And to top it off, we had our first kiss. All thanks to Sandra. Now all I want from you are kisses, kisses and so many more kisses.",
        imageUrl: "44.jpg",
        backTitle: "Taco Bell, Bowling, and Sandra's",
        backMessage: "First Kiss."
      },
      {
        id: 45,
        topic: "Our Magical Dates",
        compliment: "5th January, 2019",
        desc: "I thought I'd look nice and wear formals. Wore a nice white shirt and black pants. Turns out your uniform was same as mine. One would think that you would be happy that we are twinning, but I have no clue what I did or said, but that day, you were mad at me cause we were twinning, and I didn't even know that I'd be twinning with you. Might have been because you were hangry, might not have been. But I've been scared ever since.",
        imageUrl: "45.jpg",
        backTitle: "Popsies",
        backMessage: "New Fear Unlocked"
      },
      {
        id: 46,
        topic: "Our Magical Dates",
        compliment: "9th Febuary, 2019",
        desc: "This was our first ever Valentine's day celebration. Since it was 6 months, you gave me the most thoughtful and nicest gift. 6 different sets of 6 messages. I loved it so much and I still have every single one of that with me. You weren't happy with the way I reacted, but I really did love it!",
        imageUrl: "46.jpg",
        backTitle: "Karama & Art of Delight",
        backMessage: "Yes, you eat a lot with me too"
      },
      {
        id: 47,
        topic: "Our Magical Dates",
        compliment: "2nd March, 2019",
        desc: "A surprise birthday that all your friends and I had planned. But it got slipped up and it wasn't a full surprise. But you still loved it in the end! I'm so glad to have spent so much time with you and your friends, and getting to know all of them. We belted food and got gifts.",
        imageUrl: "47.jpg",
        backTitle: "Noodle Panda & Lets Souffle",
        backMessage: "Fail Birthday Surprise"
      },
      {
        id: 48,
        topic: "Our Magical Dates",
        compliment: "3rd April, 2019",
        desc: "A nice birthday celebration where we enjoyed pizza, setting up an IPL team for Fantasy League, and also getting naughty in the lift and the basement. Had to run out of the basement cause the security was coming, but damn, I think that was the first time we got handsy. No regrets xD",
        imageUrl: "48.jpg",
        backTitle: "Vacationer's Cafe",
        backMessage: "Yummy Treats ;)"
      },
      {
        id: 72,
        topic: "Our Magical Dates",
        compliment: "12th March, 2019",
        desc: "The day you got your scholarship in Christ for academics. My baby always out performing the rest of the class, especially when you say you don't study until the night before. None of your friends ever believe you but only I know the truth xD. You got your French A2 as well, and my baby as always is killing it.",
        imageUrl: "72.jpg",
        backTitle: "Schoalrship and French A2",
        backMessage: "Sexy Scholar"
      },
      {
        id: 49,
        topic: "Our Magical Dates",
        compliment: "12th June, 2019",
        desc: "Timezone date! Who knew this would become our go-to spot for having fun, competetive dates. From grinding the building stacking game, to competing in air-hockey, scamming the Kung Fu Panda game, where we both won 500 tickets. And not to forget, the time I stared at you and hit the button to get the tickets. All amazing memories and moments in a place we both enjoy so much.",
        imageUrl: "49.jpg",
        backTitle: "Timezone",
        backMessage: "Arcade Dates"
      },
      {
        id: 50,
        topic: "Our Magical Dates",
        compliment: "23rd July, 2019",
        desc: "Initially, we planned on watching the movie. But things worked in our favor where we had the entire floor to ourselves. I don't even think we watched the movie. Got naughty and scandalous in the movie theatre, honestly, it was really hot as well, and I can't complain. Tons of action, more than what was in the movie xD.",
        imageUrl: "50.jpg",
        backTitle: "Lakshmi Theatre",
        backMessage: "Hakuna Your Tatas"
      }, 
      {
        id: 51,
        topic: "Our Magical Dates",
        compliment: "2nd August, 2019",
        desc: "What better way to spend our first anniversary than to dress up, go to a nice restaurant and then have some good dessert. Everything was going so smoothly, we were having fun and deeply in love. This was just the beginning of something so grand and spectacular, and we didn't even realize it. And I've never looked back since. Loving you is the easiest thing in the world and I've never been happier.",
        imageUrl: "51.jpg",
        backTitle: "Reservoire",
        backMessage: "1 Year Date"
      },
      {
        id: 52,
        topic: "Our Magical Dates",
        compliment: "1st October, 2019",
        desc: "The first time our debate over Cheesecake vs Key Lime Pie began. Some nice non-iced chocolate drinks and our go to spot for a nice casual date. Who wouldn't love this place. Plus, a day where we got fuck-loads of tickets. We really did get our money's worth at Timezone too!",
        imageUrl: "52.jpg",
        backTitle: "DYU + 1256 Tickets",
        backMessage: "Money Bonanza"
      },
      {
        id: 53,
        topic: "Our Magical Dates",
        compliment: "15th November, 2019",
        desc: "Our first double date, and also our first date which involved sports. We teamed up against Nihala and her partner, and we owned them. As always, I tried to be humble and play it cool. Then later we schooled them. But things took a drastic turn when you got a call and then we had to call it off. Luckily, I had a hunch that things might settle quickly so I stayed in the area and you were so hesitant on call, that you asked if I could come back. And I did, I knew that you might free up soon so that's what I did. And you also ended up paying for my lunch. So free meal!",
        imageUrl: "53.jpg",
        backTitle: "Baddy + Zee5",
        backMessage: "Telepathy"
      },
      {
        id: 54,
        topic: "Our Magical Dates",
        compliment: "18th November, 2019",
        desc: "We found a really fancy place up at Indiranagar. Decided to go there and try it out, and we had the biggest shock of our life at the end. A bill of almost 2k? We quietly finished our meal and scooted the hell out of there. Not a bad experience though tbh. It's always a nice ride with you when we go far too!",
        imageUrl: "54.jpg",
        backTitle: "Nuage",
        backMessage: "Cash Moneys"
      },
      {
        id: 55,
        topic: "Our Magical Dates",
        compliment: "20th December, 2019",
        desc: "The first time we got intimate with each other. I remember you asked Niv and there was a whole thing going on. We ended up having such an amazing time together. Something we were both looking forward to and craving for so long. Our very first time and it was something to remember. I loved every bit of it. The nervousness, the intimacy, the passion and inexperience xD. All what makes our relationship and love so pure and worth it all.",
        imageUrl: "55.jpg",
        backTitle: "Nivs",
        backMessage: "Our Firsts"
      },      
      {
        id: 56,
        topic: "Our Magical Dates",
        compliment: "3rd January, 2020",
        desc: "We decided to go to Forum today. The dreaded and unforgettable day that you called me by my first name. I remember we were just looking at things in Miniso and you were calling out to me. I started walking away to see what you would say and what I heard completely shattered me. You called me 'Tanveer'. And I have never let you forget it since.",
        imageUrl: "56.jpg",
        backTitle: "Westside + Miniso",
        backMessage: "TANVEER"
      },
      {
        id: 57,
        topic: "Our Magical Dates",
        compliment: "3rd Febuary, 2020",
        desc: "Another day I don't ever let you live down. We were trying to decide what place to go and eat and you found this place in HSR. I heard the name and I was like 'shit'. I didn't want to say no so I just asked again if you were sure. And you said yeah, it'll be good right? I said I guess? And there was the day where I travelled from PES to Christ, Christ to HSR, HSR to Kora to drop you back, and Kora to PES for our date. But the food was good and you enjoyed the Malai Kofta. So Yay!",
        imageUrl: "57.jpg",
        backTitle: "Silbatti",
        backMessage: "Any Distance For You"
      },
      {
        id: 58,
        topic: "Our Magical Dates",
        compliment: "12th Febuary, 2020",
        desc: "The day you had planned so elaborately for us to spend together. I was really touched into how much thought and preparation you had put into this. And we ended up spending so much time together at Nivs and got intimate again. I just love spending every second with you, and there were also some nice fairy lights! Credit to Niv yet again. Not to forget some nice head work xD",
        imageUrl: "58.jpg",
        backTitle: "18 Months",
        backMessage: "Hawk Tuah"
      },
      {
        id: 59,
        topic: "Our Magical Dates",
        compliment: "4th March, 2020",
        desc: "Not the grandest celebration because of what had happened in your family. We didn't plan much and didn't celebrate either. But we spent some quality time together, made sure you weren't alone and that I was always there to help you and support you. I don't remember where we went. Was it A Lot Like Crepes? Or a lowkey fast-food date. I'm not sure, but we did spend time together and I'm happy you weren't alone that day.",
        imageUrl: "59.jpg",
        backTitle: "Birthday",
        backMessage: "Lowkey Celebration"
      },
      {
        id: 60,
        topic: "Our Magical Dates",
        compliment: "7th March, 2020",
        desc: "You needed a test subject for your lab exam. And as always, I was ready to help my baby boo. I came in early and you showed me around, waited outside while Aamey kept me company. And then we went out after. Can't believe that I almost failed that test but oh well, looks like at least something positive came out of it. You always get to say that you have a faster processing speed than me. Never letting me forget that!",
        imageUrl: "60.jpg",
        backTitle: "Lab Exam",
        backMessage: "Slow Processing Speed"
      },
      {
        id: 61,
        topic: "Our Magical Dates",
        compliment: "22nd October, 2020",
        desc: "Almost half a year later, during the pandemic, we met right outside Manyavar. You had to get some xerox and I forgot what I was doing that side. But we hugged, for so long and just spent a couple of minutes together. Even though it was short, it felt so nice to just hug you and hold you againt.",
        imageUrl: "61.jpg",
        backTitle: "Meet During COVID",
        backMessage: "Stationary Shop"
      },
      {
        id: 62,
        topic: "Our Magical Dates",
        compliment: "23rd December, 2020",
        desc: "A day where I had my final research presentation and you had to come to PESU. For the longest time I kept teasing you by saying you had never come that side. And this day, you did, although you did have a bit of trouble finding the place but that was all good. You told your parents that you were going to Sandra's. We met at PESU and then I took your scooter and we rushed to Rizzy's. You met everyone, briefly said hi and spoke to them. My presentation started and you were outside the room for some time. Later you came in and we were just holding hands. Once the presentation was done, they were still talking and we started making out. You were a bit concerned and asked if I was on mute. The meeting was done and then we got busy. We spent so much time together that day and had so much quality time. I loved it. I'm not sure if this was the day you tried Taaza Thindi or the next, but whichever one it was, you were damn pissed that day xD. I dropped you off at the Petrol Station near Forum and twas a good end to the day!",
        imageUrl: "62.jpg",
        backTitle: "Rizzy's 1.0",
        backMessage: "We Were Just Holding Hands"
      },
      {
        id: 63,
        topic: "Our Magical Dates",
        compliment: "20th Febuary, 2021",
        desc: "Another eventful day where I enjoyed having my meal. Turns out there was a lot of sound effects with it, especially the fact that there was a loudspeaker too. But it was about this time that we started exploring more of our intimate side and we were having so much fun. Especially being so comfortable with each other, completely exposed. Loved every bit of it",
        imageUrl: "63.jpg",
        backTitle: "Rizzy's 2.0",
        backMessage: "My Loudspeaker"
      },
      {
        id: 64,
        topic: "Our Magical Dates",
        compliment: "27th Febuary, 2021",
        desc: "I started my internship and I was staying at a small hotel. I figured we could get guests to come in and nobody was going to be in the room. But the receptionist didn't let you in and that was such a huge headache. I felt so pissed off at that hotel and upset for making you come all the way. Luckily enough, we got to go around have some nice breakfast, so it was still a win?",
        imageUrl: "64.jpg",
        backTitle: "Hotel Fail but Breakfast Yay",
        backMessage: "Pancakes with a Mood"
      },
      {
        id: 65,
        topic: "Our Magical Dates",
        compliment: "12th March, 2021",
        desc: "After moving into an apartment, we had such an amazing experience. You coming all the way from Kora to Whitefield. Me picking you up at the main road, and riding the scooter with you till the entrance. Spending so much time together as well. It was heavenly. Showering together, getting frisky on the kitchen counter, and even getting a bit adventurous in bed. Just a glimpse of how life would be when we'd be living together and I loved it so much. Not to mention, looking cute as heck while wearing my tees.",
        imageUrl: "65.jpg",
        backTitle: "7 Hours SPM",
        backMessage: "Action Gallore"
      },
      {
        id: 66,
        topic: "Our Magical Dates",
        compliment: "27th March, 2021",
        desc: "Another great day where you came over and we had lots of fun together. Spent some quality time just kissing and bathing each other in the shower. I loved it so much. We were also going to Truffles today to meet my parents for sister's birthday and the shower took a bit long, and you were so pissed off at me cause you hair was still wet and you said you didn't like that. We took a bit longer than expected in the shower and that's when you got mad at me. Luckily Ibra was there to save the day with packing the gifts you got for sis otherwise it would have been game over for me. And that was also the day I could not finish the burger.",
        imageUrl: "66.jpg",
        backTitle: "Met Parents",
        backMessage: "Wet Hair Fear"
      },
      {
        id: 67,
        topic: "Our Magical Dates",
        compliment: "14th August, 2021",
        desc: "Back to where it all began. We decided it would be a nice idea to go back to Play Factory and have a nice day to ourselves. I always enjoy doing some sort of activities on our dates and this was the best way to go about it. We had a great time at the trampoline area, with cricket where I threw the ball at your back, and chipped the soccer ball to your face. Oh what a day xD. Then we ended up grabbing a bite to eat and it was an anniversary well spent.",
        imageUrl: "67.jpg",
        backTitle: "3 Year Anniversary",
        backMessage: "Play Factory"
      },
      {
        id: 68,
        topic: "Our Magical Dates",
        compliment: "2nd October, 2021",
        desc: "Out of the blue date where we decided to go to Indiranagar. You were going to meet Sandra and we sort of made it into a date as well, cause I hadn't met her in quite some time. We spent the day in Indiranagar, Paris Panini then went to a coffee place. It was a really nice catch up sesh where I found out that Sandra loves to yap yap yap about herself and we were just happily listening to it (we did get tired too). But good food date nonetheless.",
        imageUrl: "68.jpg",
        backTitle: "Impromptu Date",
        backMessage: "Paris Panini"
      },
      {
        id: 69,
        topic: "Our Magical Dates",
        compliment: "12th - 13th November, 2021",
        desc: "We finally found a place where we could meet up and unleash our restricted hormones. Our very first time trying out an AirBnB and we happened to really like this place. We initially went to the wrong location but eventually got to the right one and that became our humble abode for unholy things. We spent the entire day together in bed and got to a lot of naughty things as well. And the next day, we found a really good place for breakfast in Sector 7 Cafe. Here's to the first, of many, visits to JK.",
        imageUrl: "69.jpg",
        backTitle: "JK Comforts",
        backMessage: "Unrestricted Action"
      },
      {
        id: 70,
        topic: "Our Magical Dates",
        compliment: "16th November, 2021",
        desc: "You were looking to get someone to help you with your MCC Lab Practicals. I think Nihala was supposed to come but in the end she couldn't? So who else to save the day. Tan the Man xD. Always looking out for my baby girl and making sure she gets everything she wants :*. I came to MCC and we spent the day together later. I remember meeting Prerna and some of your other friends as well. I think this was the day we went to the wrong Domino's as well (where I ordered the wrong one in the app). Oh well, it was a fun ride to have!",
        imageUrl: "70.jpg",
        backTitle: "MCC Test Subject",
        backMessage: "Your Personal Puppet"
      },
      {
        id: 71,
        topic: "Our Magical Dates",
        compliment: "29th December, 2021",
        desc: "It was you, me and Aams. Enjoying a meal together in Truffles and having a blast at TZ. We were fooling around and having a laugh at TZ and I loved how you got along with my best friend. It really felt great that we could just enjoy and not feel awkward. Then we went to Timezone and we won a Unicorn Plushie! A soft toy just for you and it was amazing. You keep it with you in your bed all the time. And I love that.",
        imageUrl: "71.jpg",
        backTitle: "Truffles and TZ",
        backMessage: "Unicorn from Timezone"
      },
      //72 is between  48 and 49
      {
        id: 73,
        topic: "Our Magical Dates",
        compliment: "10th Febuary, 2022",
        desc: "It was me, you and your sis. This was a restaurant I really wanted to go to with you. And we shared some really good food, belted a lot and I was stuffed by the end. Your sis had come from Australia and I really wanted to end up paying, but she did. Oh well. Then we went to Art of Delight where I took up the bill so it was fine xD.",
        imageUrl: "73.jpg",
        backTitle: "China Pearl",
        backMessage: "Finally We Get To Eat At China Pearl"
      },
      {
        id: 74,
        topic: "Our Magical Dates",
        compliment: "26th Febuary, 2022",
        desc: "We planned to go to HSR and try shopping for your birthday. A place called Unlimited that usually gave you vouchers for birthday. There was also some other offer that was going on. And I remember you asked the staff member if there was any birthday discount and she said no, only the discount that was going on right now. We got scammed nicely that day and didn't end up getting anything nice.",
        imageUrl: "74.jpg",
        backTitle: "Unlimited Scam",
        backMessage: "Shopping for Clothes"
      },
      {
        id: 75,
        topic: "Our Magical Dates",
        compliment: "3rd March, 2022",
        desc: "We planned a nice birthday lunch to BBQ nation where we got some nice offers on one of the food apps. We initially thought it was Koramangala one, went there, and the food was ready for us. But turns out we were at the wrong place for the coupon. The staff were really nice and helpful, and understanding, and they even let us go without any issues and we went to the HSR side one. Had a great time, belting food and eating like Gundus. It was a nice experience for both of us, considering we usually don't do these kind of dates.",
        imageUrl: "75.jpg",
        backTitle: "BBQ Nation",
        backMessage: "Birthday Buffet!"
      },
      {
        id: 76,
        topic: "Our Magical Dates",
        compliment: "15th-16th March, 2022",
        desc: "We had gotten quite comfortable with JK. Liking it the first time and the privacy that it got us. So we decided to head back there and try it out again. Such a great time, we always get to have such quality time, being together, unfiltered and completely exposed. We have nothing to worry about, no tension and just living in the moment. I wish that moment would never pass and you would always be with me. One day, it will come true. Until then, I'm going to work hard for us cutie.",
        imageUrl: "76.jpg",
        backTitle: "Nirvana + Sector 7",
        backMessage: "Round 2 JK"
      },
      {
        id: 77,
        topic: "Our Magical Dates",
        compliment: "13th April, 2022",
        desc: "You found a nice place in HSR where we could go and have a nice meal. Italian, nice vibes and close to where we usually meet. Perfect place for us. Everything was going great. Drinks were nice, appetizers as well, and the pizza too. Only that you like burnt pizza that are hard af whereas I like soft pizzas (like Dominos). To this day, we still debate whether or not the pizza was proper or burnt (it was burnt).",
        imageUrl: "77.jpg",
        backTitle: "Napoli Italian Bistro + CH",
        backMessage: "Burnt Pizzas"
      },
      {
        id: 78,
        topic: "Our Magical Dates",
        compliment: "31st May + 1st June, 2022",
        desc: "Another amazing day spent together. Eating Domino's, spending loads of time together and just being ourselves. I remember I would always look forward to these days",
        imageUrl: "78.jpg",
        backTitle: "Buddha's Abode",
        backMessage: "JK 3.0"
      },
      {
        id: 79,
        topic: "Our Magical Dates",
        compliment: "21st June, 2022",
        desc: "Unlimited Pizza Day at the top of Onesta. We feasted and belted so nicely and so much. I'm starting to think Pizza is our like go-to date food, cause we love it so much. But when we go out with others, it's not our #1 choice. Only when it's with us, do we order pizza and eat together. That's like our very own love food. Then we also ended up going to Agra Lake where we had a 1km walk around the entire lake. Where you clicked really good pics of me and I couldn't so I asked you to go back 3-4 times and let me take a good enough picture of you. And we even stole kisses in a future date. This became a nice go-to lowkey hangout spot for us too, just after work.",
        imageUrl: "79.jpg",
        backTitle: "Onesta + Agra Lake",
        backMessage: "1km Walk"
      },
      {
        id: 80,
        topic: "Our Magical Dates",
        compliment: "16th September, 2022",
        desc: "What a wild day. I was really getting into it with you, and I tried to be very dominating and take charge. One thing led to another and you ended up breaking your toe. Oh well. I really freaked out in that moment thinking you twisted your bone but luckily it wasn't THAT bad. We still ended up doing a lot of things (cause you're a legend), and one we had a great time, yet again. Ended up pampering you as well, which you seemed to enjoy.",
        imageUrl: "80.jpg",
        backTitle: "Broken Toe JK",
        backMessage: "JK 4.0"
      },
      {
        id: 81,
        topic: "Our Magical Dates",
        compliment: "19th October, 2022",
        desc: "First time you saw me in Ethnic and you really loved it. Did I wear it for work or some other reason? I'm not really sure but you loved it. We spent the day at Glen's and belted some nice pizza and milkshake together. Our go-to meal. We ended up chit-chatting (our favorite pass time) and you took some really nice photos of me.",
        imageUrl: "81.jpg",
        backTitle: "Glen's",
        backMessage: "Ethnic Wear"
      },
      {
        id: 82,
        topic: "Our Magical Dates",
        compliment: "29th October, 2022",
        desc: "I think this was a day where you beat me in bowling? I don't remember exactly, but I think this was when your streak of beating me began. We had such a fun time with Niv, you were nicely sitting on my lap (initially shy but later got ok), and then we went to Cirkus for some nice food where your choice of food is always the best. Ended the day with some nice dessert and had a nice time hanging out and getting to know more about your closest friends.",
        imageUrl: "82.jpg",
        backTitle: "Bowling + Cirkus + Glen's",
        backMessage: "Day Out with Niv"
      },
      {
        id: 83,
        topic: "Our Magical Dates",
        compliment: "10th November, 2022",
        desc: "The time where we got carried away with dominos, raw, and just mindless banging. Gotta admit, it was really good, but the scare that we had after. Jeez, it was something we still remember to this day. We learnt a very valuable lesson that day and we never are going to do the same mistake again (always clean up before doing the nasty).",
        imageUrl: "83.jpg",
        backTitle: "JK UTI",
        backMessage: "JK 5.0"
      },
      {
        id: 85,
        topic: "Our Magical Dates",
        compliment: "26th November, 2022",
        desc: "At this point, I just find it funny and I love teasing you with it (because I'm over it), but this was the day of your NIMHANS interview. I was so glad and happy that I could be there for you. Sitting throughout the entrance and the interview, only to have you reject me sitting behind the scooter the moment I entered. So happy and cheerful to see you, I didn't know where to park and I'm like, 'Hop On'. And you hesitated and said No. At the moment I did feel bad, but now I'm like meh. You did feel horrible later and we spoke about it after TB (on call) but it's all good now!",
        imageUrl: "85.jpg",
        backTitle: "NIMHANS Interview",
        backMessage: "The Picture Could Have Been Us At NIMHANS"
      },
      {
        id: 84,
        topic: "Our Magical Dates",
        compliment: "3rd December, 2022",
        desc: "It was really sad to see what was happening to Archana and her partner. Sort of preparing us for what problems we might face. But one thing I know, I'll fight as much as I can for us. Cause you're worth all of it. I don't want to give your parents a reason to say no to me. I'm going to try my best in Australia to succeed and give them a reason for them to say yes to me. You're worth all the effort and sacrifice baby. I love you so much. Hearing the story from Archana made me understand that and just how important it is, what we have.",
        imageUrl: "84.jpg",
        backTitle: "Taco Bell Koramangala",
        backMessage: "TB with Archana"
      },
      {
        id: 86,
        topic: "6 Months To Liftoff",
        compliment: "Quick, Cute Dates After Work",
        desc: "We had such nice dates. Lowkey, economical dates where we enjoyed each other's company and had so much fun together. Meeting after work, travelling all the way to meet you, all of it was so worth it. All to spend time with you. McD was always a go-to with their softies. TZ was unseparable. We'd always play our games like Basketball or Stack, Air Hockey. We eventually even got Gold Cards! Taco Bell was so good too. Made you fall in love with CDD. Agra Lake was a nice common meeting spot for us both and not to forget, Casa Fresco where we didn't have the best experience but at least I know that if there was anything I needed, you were always there to talk to the waiter.",
        imageUrl: "86.jpg",
        backTitle: "January 2023",
        backMessage: "McD. TZ. TB. Agra Lake. Casa Fresco. DYU"
      },
      {
        id: 87,
        topic: "5 Months To Liftoff",
        compliment: "Working Individuals",
        desc: "Starting with your first ever salary, and us sharing a nice meal at Glen's for it. I felt so happy and proud of my cutie. Worked so hard, and I remember how low you felt throughout the job hunt phase. But you never gave up, waited for the right role and here you are. I've never been so proud of you cutie. Then going to taking the car out, where you were really attracted to me driving, and loved being the passenger princess treatment. Took photos as well cause you just loved the whole vibe as we chilled to music. Tried Sbarro which wasn't bad but Theobroma became a nice substitute for Corner House (even though Corner House is the best). Not to forget, the one time we went to JK and you had a cold/cough. We did everything and when I went back, I was struck with the same viral fever (Totally worth it though).",
        imageUrl: "87.jpg",
        backTitle: "Febuary 2023",
        backMessage: "Glen's Salary Treat. First Car Date. Sbarro + Theobroma. JK Viral."
      },
      {
        id: 88,
        topic: "4 Months To Liftoff",
        compliment: "Birthdays!",
        desc: "24th Birthday, 24 Gifts. Bani, Niv and I started planning it a month earlier, made a Google Sheet for the gifts and everything. Took a video call or phone recording in the car outside Roxie's and it was just the best thing ever seeing your reaction. Started by picking you up, driving you to MCC for some stuff, and then we headed to Roxie's for some good food, where I stopped on the way to get you some flowers. We enjoyed the drive together and you loved my fit as well. You were looking so beautiful with the black dress too! Killing it. And then we enjoyed some good food inside, Nihala also came in later. Then we drove back to Theobroma with Nihala, had some nice dessert and then I dropped you off. Sadly you had to carry all 24 gifts back home but I'm so glad you loved every bit of it. We found a new place with Popeye's and had a bit of a post birthday celebration, enjoyed another date at Agra Lake after work where I got hot chips (boat ones) and we were just chilling and talking. And the highlight of the month, was when we had our sleepover and dinner together. It was so nice, I painted your nails and we played Bid all night long (where you got trashed). Ordered Breakfast in the next day, slept in the corner of the bed, froze my ass off but all of it was worth it to spend some nice quality time with my #1. I loved spending every second of every one of those days with you. And Fisherman's Wharf on my birthday, which was nice xD.",
        imageUrl: "88.jpg",
        backTitle: "March 2023",
        backMessage: "Roxie. Popeyes. Gazebo + Theo. Sleepover Dinner. Fisherman's Wharf."
      },
      {
        id: 89,
        topic: "3 Months To Liftoff",
        compliment: "Book Dates And Budget Meals",
        desc: "This was the time when we started going to Sapna and gifting you books. I remember you wanted to finish a goal of 25 books for the year? I remember I made you an entire google sheet keeping track of what books you wanted to read and what you've read. We also tried Popeyes after which you really liked their fries. And you treated me there so many times too! Had another TZ date. And 2 Dominos Dates where one turned out to be the scam one, and the very next day was the proper one. Points if you guess the context of the Dominos Date!",
        imageUrl: "89.jpg",
        backTitle: "April 2023",
        backMessage: "TB. Sapna. Popeyes. Dominos. TZ."
      },
      {
        id: 90,
        topic: "2 Months To Liftoff",
        compliment: "Rider JK And Confrontations",
        desc: "We went to JK this time, and I had the most magnificent view ever. You on top, riding it like a pro. To this day, I still cannot forget the sight of how hot it was. We had a lot of good food with Corner House (where we always had such deep and personal conversations), a risky McD date, Taco Bell, and Subway. On a more positive and light hearted note, we made the Instagram Reel of you choosing books within 1 minute, or was it 2? I don't remember but you scammed your way to an extra book but felt too guilty to take it. But we took it in the end cause it was on offer!",
        imageUrl: "90.jpg",
        backTitle: "May 2023",
        backMessage: "TB. Sapna. Popeyes. Dominos. TZ."
      },
      {
        id: 91,
        topic: "1 Month To Liftoff",
        compliment: "Sleepover + Family",
        desc: "What a loaded month. Started with Hustle where we fell in love with the Garlic Bread. Art of Delight with some really great cheesecake and ice cream. A TB date where we spent our last 12th together and another TB date where we were planning a party for 2033 apparently. I don't remember what it was right now. But one of the standouts was the Sleepover that we had together. From lots of love, action, emotions and tears, and just quality time together. It was really nice. We stayed up late night, played Bid, shared food together and wiped your tears when you were feeeling down. I still remember the morning you left, I cried because of how much I'd miss all this with you. I loved spending so much time with you, just together where you'd hog the blanket and switch the AC on, leaving me to the side of the bed. We went to Cafe Hideout after Bethany's reunion and Centi was also there. DYU with the yummy comfort food, Plan B where you met some of the bois and we all had a great time. And the standout for me was Bakrid when you came over and met my family and you killed it in Carrom. You were looking so good and I remember picking you up, dropping you back and we had just the most amazing day with my entire family. I loved how well you got along, had the siwaii with dry fruits (no complaints) and just how my family loved you so much. Everything was just so good. I am so happy to know that it's a green light from my family. This is what I was really hoping for and I got it!",
        imageUrl: "91.jpg",
        backTitle: "June 2023",
        backMessage: "Hustle. AoD. TB. JK. Hideout Cafe. DYU. Plan B. Bakrid."
      },
      {
        id: 92,
        topic: "Liftoff",
        compliment: "Goodbye, For Now",
        desc: "2 weeks left to go and we made the most of our time left. We made a list of all the lowkey dates and places we wanted to go. Starting with Glens, our pizza. TZ where we had the most amazing time, always. Corner House with Cake Fudge and Mini DBC. DYU with Cheesecake vs Key Lime Pie. Sapna for a last book buy. Hustle, when it rained, for our garlic bread, and the last time we went out for a drive. I remember we got handsy in the car as well, but it was really emotional towards the end. Took pics and it was raining, helped us stay together for longer as well. Gosh I still remember how sad you were. I can't wait for it to be over so we can finally be together.",
        imageUrl: "92.jpg",
        backTitle: "July 2023",
        backMessage: "Glens. TZ. CH. DYU. Sapna. Hustle. Car Drive"
      },
      {
        id: 93,
        topic: "Back To India",
        compliment: "Meet 1",
        desc: "Our first date after almost a year. I was so excited and determined to meet you, especially after just landing the previous day. But the city weather and roads (louda city) had other plans. I remember I was leaving and my parents warned me about the weather. Luckily I did take a jacket, but it got so heavy so fast. Gosh, it was so bad. I almost felt like going back but I wanted to meet you. Rode through the rain, all the way to Domino's where we shared a nice good meal at HSR. Our go to pizzas with you stealing more than 50% of the drink (as always). Meeting you and spending time with you after so long was just so nice, refreshing and just so fricking ecstatic. I loved every bit of it.",
        imageUrl: "93.jpg",
        backTitle: "1st June, 2024",
        backMessage: "Domino's"
      },
      {
        id: 94,
        topic: "Back To India",
        compliment: "Meet 2",
        desc: "This was the date where we both planned to study. A new place we checked out which vibed with the whole work/study + eat cafe. We really loved the food, drinks and dessert as well. I was working on my project whereas you were studying for the M Phil Entrance. I built a small web-page also for you during the project where you loved it and took a photo to show off to your friends. We ended up getting the membership for you which also was at a very reasonable price. Now I don't know if you still have that card after losing your purse, but oh well.",
        imageUrl: "94.jpg",
        backTitle: "6th June, 2024",
        backMessage: "North Star Cafe"
      },
      {
        id: 95,
        topic: "Back To India",
        compliment: "Meet 3",
        desc: "Another raining day and a very scary day too. The day that you had been preparing for, for almost a year. You were writing the exam and I was outside. You came out and you didn't seem to unhappy, and you didn't seem too anxious. You got a really good score, a great score tbh. And we were going through so many discussions regarding all of that. I think we even went to get TB after that? I'm not sure if it was after this and then realized that TB had changed and it was horrible (when we went to Forum). But I was so glad that you got a great fighting score that would really increase your chances of getting into M Phil.",
        imageUrl: "95.jpg",
        backTitle: "9th June, 2024",
        backMessage: "M. Phil. Exam"
      },
      {
        id: 96,
        topic: "Back To India",
        compliment: "Meet 4",
        desc: "Aamey had also come to India, with Celia. And I think this was the first time we all were meeting them. And our first ever dinner (as adults) meeting each other and our partners. This is honestly something I had always hoped for and wished for, in the future. Like my closest friends and I, going out for dinner or some sort of activity, with their respective partners. We had some really good food, we all were having our banter and fooling around, and it was all so much fun. At one point it did feel like it was getting out of hand, and you even checked up on me, and I said yeah it was all good. But you know me so well and that's the biggest flex. Anyway, it was a great dinner, we all enjoyed and loved meeting everyone.",
        imageUrl: "96.jpg",
        backTitle: "10th June, 2024",
        backMessage: "Jugni"
      },
      {
        id: 97,
        topic: "Back To India",
        compliment: "Meet 5",
        desc: "A day I had always hoped and dreamed for. My partner with my best friends and their partners, all chilling and hanging out. You had work and I was waiting outside at a turn for you to meet me and we went to Subbu's house. You met up with everyone again and we were just chilling. I remember you were hungry and we ordered some stuff for you. Then we played the Nintendo Switch, tennis and you got wrecked xD. Munda and Aams lost to their partners and you were like, why couldn't you let me win xD. I loved how we all were getting along so well and just chilling. I think this is one of the best memories I'll have with my closest circle.",
        imageUrl: "97.jpg",
        backTitle: "11th June, 2024",
        backMessage: "Subbu's House"
      },
      {
        id: 98,
        topic: "Back To India",
        compliment: "Meet 6",
        desc: "The day we were all preparing for. The one that you had put so much strength, time, effort and tears into. I was a bit late to the venue but you came out strong. You managed to get a really challenging score and it was up there. We were working out so many permutations just considering how the domicile quota would have worked out. We went for a nice meal after as well, but all your hard work paid off cutu. And I'm so proud of you. ",
        imageUrl: "98.jpg",
        backTitle: "15th June, 2024",
        backMessage: "M Phil Exam"
      },
      {
        id: 99,
        topic: "Back To India",
        compliment: "Meet 7",
        desc: "This was another great day to be honest. Titmey bois had planned a Plan B dinner and we were all here. We had a great time, enjoying wings and ice cream later. We took pics and you met and spoke to a lot of the gaming bois. It was just so nice to see everyone getting along so well with people I hang with so often. And Kanishk, Iblis and everyone also offered to like hang out with you even when I'm not there. Which I think is so good and nice.",
        imageUrl: "99.jpg",
        backTitle: "18th June, 2024",
        backMessage: "Plan B Dinner"
      },
      {
        id: 100,
        topic: "Back To India",
        compliment: "Meet 8",
        desc: "We got your results and we wanted to celebrate. I'm not sure if this was the day where I belted your pasta but we went to Hustle to celebrate your resignation from CAM to get into M Phil. What a year it had been. Hardships and struggles, juggling marriages, me, work and studies, and clearing M Phil with a great score. I'm so proud of you cutu. And we enjoyed our garlic bread as usual. I think it was our next date where I belted your pasta but oh well. You know better cause you were the one who was left scarred xD.",
        imageUrl: "100.jpg",
        backTitle: "22nd June, 2024",
        backMessage: "Resignation Hustle"
      },
      {
        id: 101,
        topic: "Back To India",
        compliment: "Meet 9",
        desc: "Using the most of our time together, we went to our favorite place. Enjoyed a nice New York style pizza at Sbarro, you liked something about Leon Grill. I think it was the burger? So we ordered one and then we went to TimeZone! It had changed a bit so we were trying our games. This was when we got scammed as well, and one of the staff members saw our card and they were like Gold members! Give them the free games. And we got happy. We also had to fight a lot for that but oh well xD. I will always back my baby up :*.",
        imageUrl: "101.jpg",
        backTitle: "24th June, 2024",
        backMessage: "Sbarro + Leon Grill + TZ"
      },
      {
        id: 102,
        topic: "Back To India",
        compliment: "Meet 10",
        desc: "We saw this place on instagram and wanted to try it out. It had good food and board games as well. It was pretty lowkey when we went, not many people and we were just relaxing and enjoying our time together, Talking to each other about our days, and playing connections and mini. This has legit become our new tradition. And then we ordered some good food which we really enjoyed. We played some board games as well, we asked for Azul but he didn't know what we were talking about. And brought it out much later. But oh well, it was nice, just having the whole place to us and no one else. We cozied up nicely and chatted so much.",
        imageUrl: "102.jpg",
        backTitle: "26th June, 2024",
        backMessage: "Board In The City"
      },
      {
        id: 103,
        topic: "Back To India",
        compliment: "Meet 11",
        desc: "We really liked this place and we decided we could give it another shot. This time playing Azul. So that's what we did. We got Azul and we were nicely sitting facing each other. After you beat me (by scamming), we sat next to each other. And the food was taking some time to come, so we were nicely having our own low-key make out sesh in the back. Hehe, I loveeeeeee kissing your lips so sue me xD. We tried SmooChoo after this for dessert, and it was actually so good. We loved it so much we wanted to make this as our go-to dessert place as well, a time you ditched me for it also. But it's okay, I forgive my #1.",
        imageUrl: "103.jpg",
        backTitle: "26th June, 2024",
        backMessage: "Board In The City 2"
      },
      {
        id: 104,
        topic: "Back To India",
        compliment: "Meet 12",
        desc: "Starting the day with bowling at The Grid, where you actually wrecked me xD. It was a nice fun date where we played and chilled together for so long. You were taunting me the whole day also, for winning (as usual). We got into the lift as well, and there were no cameras so we made the most of it. I love kissing you so so so so much. We decided pizza bakery first but then truffles was also there, so we decided to go there and it was so worth it. Truffles is honestly value for money, talking about our days. You ended up mocking me for taking too many tissues too and destroying the straw. It started raining by the time we were leaving, but we walked nicely in the rain and it was nice and romantic and that was a really nice end to a great date.",
        imageUrl: "104.jpg",
        backTitle: "3rd July, 2024",
        backMessage: "Truffles"
      },
      {
        id: 105,
        topic: "Back To India",
        compliment: "Meet 13",
        desc: "We had a lowkey date planned right after our date yesterday. We managed to squeeze in time together, going upto the Gazebo at Agra Lake. Spoke about our days, Guess The Song Challenge. Couldn't guess many non-TS songs, so we switched to that and I won the decider for 100 points! We were watching and commenting on people walking around, and you were laughing at them (you evil lady). But we were having such a nice time, drinking juice and munching chips. My leg fell asleep in the middle and then you asked me to go on my tip-toe, and again you were mocking me. I love walking alongside you, especially knowing you can't walk in a straight-line. We ended it with buying ice-cream and hugged awkwardly cause of cops but we managed to hug properly in the end and said our byes",
        imageUrl: "105.jpg",
        backTitle: "4th July, 2024",
        backMessage: "Agra Lake"
      },
      {
        id: 106,
        topic: "Back To India",
        compliment: "Meet 14",
        desc: "I came to NIMHANS in shorts and you were mad at me cause then you couldn't sneak me in. We met a couple of your batchmates and you introduced me as your partner and you were so shy (which was so cute). Then I met Manasa in the canteen where even Ananya joined up. Ananya was nicely yapping, that's why you guys get along so well. We shared ice-cream and we headed to the cafe. I put maps and was telling you where to take turns, and you were saying that you know the directions and I said ok no need. And just a lot of banter going on there again. A little bit of 'Oops' moments also happened. We reached the cafe and found a nice spot to sit. We got introduced to a new game called Project L which we both fell in love with and unfortunately, I lost both games so that was a big BT for me. We enjoyed the food and the game, you enjoyed winning and then we headed home. You're a natural at board games and I love playing these kind of abstract thinking games with you. You stopped for puff on the way and dropped me off near Madiwala where I was going to friends for dinner.",
        imageUrl: "106.jpg",
        backTitle: "5th July, 2024",
        backMessage: "Now Boarding Cafe"
      },
      {
        id: 107,
        topic: "Back To India",
        compliment: "Meet 15",
        desc: "Impromptu plans for the win. This series of dates had a lot of miscommunication with time but oh well, we got to be together and that's what matters the most. I waited for you near HSR at the usual place. You asked to go fast cause it was raining and I was a bit surprised cause you never do, but first time for everything. We made our way to the parking area and then quickly went inside. Sat outside and we were conflicted between Pizza and Pasta. So we finally decided Red Sauce Pasta and some really good Garlic Bread. We had drinks and offered first sip (as usual). We enjoyed the Pasta so much, evenly split between us 50-50. But you got mad at me cause I said I didn't want it and still ate almost as much as you xD. We played Connections and Mini, annoyed you and sat next to each other taking photos. Had a nice quality time date and called me while I was still on my way back. This date was one you'd never forget because of the PTSD with pasta xD.",
        imageUrl: "107.jpg",
        backTitle: "8th July, 2024",
        backMessage: "Hustle"
      },
      {
        id: 108,
        topic: "Back To India",
        compliment: "Meet 16",
        desc: "We met at Miniso and made our way to TZ. We were quite famous because of our antics last time so we just entered and did our thing. You were on call with your sis where you ditched me. We went back to TZ after your call and recharged for 1500. Did bowling where you won yet again, and I guess this trip was just your trip xD. Winning in everything. You also got more than me in BB, somehow xD. We played a whole bunch of other arcade games there and went to Food Court where we saw what and all was there. We tried to stay strong because of the war but once you saw Muslims also order from there, you were like nah it's fine. You loved what you got and I got a pizza, and we were chilling together. We ended with hugs, paid for your parking and flirted a bit while heading back home on the scooter.",
        imageUrl: "108.jpg",
        backTitle: "10th July, 2024",
        backMessage: "TZ"
      },
      {
        id: 109,
        topic: "Back To India",
        compliment: "Meet 17",
        desc: "You were going to be a bit late so I thought I'd stop by for the Choco Strawberry and get that for you. But you ditched me again for Ananya? Something like that. I ordered a drink but it had dry fruits which I was like shit as soon as I saw her packing. You said you'd reach in 10 minutes when I got to Forum before you even left, but I know it was impossible. But you still managed to get there within 15-20 minutes? We went to the side and we spoke for a bit while you were belting the drink and I was eating the dry fruit part. The face while you ate the kishmish was priceless xD. We went to TZ again and bowling because it was so cheap. We raced each other, basketball again. We also had a nice dinner date at the food court where we had some chaat and then Sbarro pizza with drinks. Chilled and talked, a nice lowkey date night. We belted fast fast so we could get in time for bowling. Lost by 1 point in the end. We went back to food court for dessert and I felt like I needed to use the toilet so bad. We paid for our parking and it didn't feel like we were on a clock today. It was just so relaxed and fun. Flirted again with you on the ride back, my hottie.",
        imageUrl: "109.jpg",
        backTitle: "11th July, 2024",
        backMessage: "TZ + Date Night"
      },
      {
        id: 110,
        topic: "Back To India",
        compliment: "Meet 18",
        desc: "We met at BDA where you were a bit lost trying to find Riz's car. You were looking so good and so hot! Dressed to impress. Whiel walking towards Rizzy's car I was scaring you by telling me what you thought about Gaurang and all. Then you threatened me by saying you won't ever come again. But I know that's not true ;). Then in the car, we played Guess The Song challenge where we killed it. We reached the Baddy place and were shocked to see the state of it. It was dirty and messy and in some corner but it's alright. No one was even there. We turned on the lights and we started playing. Gaurang seemed to be holding back against you. Kanishk and Shri didn't give a shit xD. You also played really well. Held your own. After we were done playing, you wanted to change but didn't let me come inside. We managed to steal a few kisses here and there. While going out, we saw Shri's bike and you were surprised to see the backseat so small. We got an auto and I was grabbing your booty throughout the trip. Cozying upto each other. We reached and got in, and we ordered some really good food. We shared drinks and everyone loved yours. We played undercover and you really enjoyed it. Kanishk invited you over to his place and we all went there after finishing our meal. We reached and quickly washed our feet and were in Kanishk's room. Stole a lot more kisses and your family had called I think? Then we started playing stick fight where you eventually got bored, but they asked you if you wanted to try and you weren't interested. So then Kanishk picked up on that and we played Undercover again. It was so much fun and I even simply said, 'You're Mr. White no?' And you started laughing and I didn't even see your thing but you were such a NOOB. I think you did manage to win once though so that was impressive. You parked at BDA so I offered to drop you there with Riz. He was so nice that he came and also had tea with us. Riz is such a Character that we kept laughing to whatever he said.",
        imageUrl: "110.jpg",
        backTitle: "13th July, 2024",
        backMessage: "Baddy + Banoffee + Kanishks"
      },
      {
        id: 111,
        topic: "Back To India",
        compliment: "Meet 19",
        desc: `The date where I realized you were such a HOE. I got Theo cakes as a surprise for you. To celebrate your birthday which didn't go so well, so I figured we could do it again with Bani and Niv. You saw it right outside Burger King as I waited and you figured it out. We then went to JK nad you wanted to rest. We switched on the fans and AC, got comfy and lay down as we kissed for so long. Your sis called later and I wanted to get a little hoe-y but you weren't letting me. Then we spoke to her together and later call was done. You wanted to nap for a bit so we did, and we kissed and cuddled some more. We got ready for dinner soon and found Shift, but didn't like the vibe so we went to Oyster where we had a nice Value for Money buffet dinner. It was loud in the beginning, but we managed to pull through. It was a nice date night. We couldn't keep up with the pace at which the food was coming and then sorta talking about how I was a baby.You spoke about your sis being your idol and finances in Australia. Then I ordered Naan with no curry and the waitress was really surprised. We had some nice dessert then went back home while it was drizzling. It was 11-ish and I was worried I wouldn't be able to pull off the birthday call but everyone managed to. I got you the poem as well to read and you really enjoyed it. I wanted to give you something handmade from me before I left. After I finished pooping and you reading the poem, we called your friends and we had the cake. We had a nice call that had a lot of scandalous details but they bet that we'd have sex early in the morning. We couldn't keep it in our pants and we did it that very night. Starting with just the tip and you loved it so much you didn't want any proection. It felt so good. We played Bid too and ended on 2-2. You had such disturbed sleep casue of my snores sadly. Next morning I freshened up and tried doing the lamp but no time. You said you'd be able to but I didn't think you would have the time to xD. And here we are today. We cuddled and kissed then we fucked again with no protection, again. You were a loudspeaker but that never holds you back. You're such a hoe sometimes and I LOVE IT when you pull me closer. We ordered Breakfast and I put the wrong address and the guy ended up going elsewhere and all. We had a nice shower though, where we were kissing and you burnt my skin. Once the food arrived , we got 3 bowls and ate it nicely. I loved feeding you while we watched and cake
         for dessert. We played Bid and you won the first game and I wanted to play first till 5. You reached 4 and then I made the comeback of the century to win 5-4. I was in your head. I was putting 1 more than you and it was the best. I started jumping like a monkey when I won. I also found a tickle spot for you in the process. Then we napped again, got up and made love again. This was the time where you BEGGED me to remove it. I helped you finish first and that's what I love the most about this. Then after I finished, we got ready for dinner at Iris cafe where we loved it so much. We missed such a nice cute cafe with good food for so long. We were really full and went back home, you had a headache so we didn't do much. You had to leave for home and we just kissed each other and hugged each other as I dropped you downstairs.`,
        imageUrl: "111.jpg",
        backTitle: "16th-17th July, 2024",
        backMessage: "JK"
      },
      {
        id: 112,
        topic: "Back To India",
        compliment: "Meet 20",
        desc: "The last date of 2024. We met out side AoD where we did our side hug and entered. We met your friends and spoke to them. It was nice to see them and talk to them, getting to know more about them and all. They were nice and soon left. We played our usual Connections, Mini and stuff and enjoyed our ice cream together. We were fooling around and you were tickling me. We took nice photos and just spoke about anything and everything under the sky. We finished and got to the scooter where you teared up a bit, cause of how you would miss our physical dates and just me being around. Had the most amazing 2 months with you and I appreciate all the time and effort you had put in to meeting me all these days. It wasn't easy, it was draining, mentally, physically and even financially so I really really thank you so much for making it all happen. I love you so much and I can't wait to see what the future holds.",
        imageUrl: "112.jpg",
        backTitle: "20th July, 2024",
        backMessage: "Art of Delight"
      },
      {
        id: 113,
        topic: "Early Vows",
        compliment: "Vow 1",
        desc: "I vow to love you forever and ever. Till my very last breath, I will love you unconditionally. Be it at our best, or even our worst. Nothing would ever change my love for you, as it grows every single day we know each other and talk to each other. You complete me.",
        imageUrl: "113.jpg",
        backTitle: "Munchkat",
        backMessage: "The Love Of My Life"
      },
      {
        id: 114,
        topic: "Early Vows",
        compliment: "Vow 2",
        desc: "I vow to always protect you and keep you safe. I will make sure that I take care of you always, and that you never have to do anything you wouldn't want to. I would never put you in harm's way and always be the one sheltering you from the storm.",
        imageUrl: "114.jpg",
        backTitle: "Pookie",
        backMessage: "Your Rock"
      },
      {
        id: 115,
        topic: "Early Vows",
        compliment: "Vow 3",
        desc: "I vow to always try to win you over like as if I had a crush on you in high school. I will try to do cliche romantic things, put in effort to show you that you mean a lot to me and I love you so much, and never ever stop trying.",
        imageUrl: "115.jpg",
        backTitle: "Secret Admirer",
        backMessage: "High School Sweethearts"
      },
      {
        id: 116,
        topic: "Early Vows",
        compliment: "Vow 4",
        desc: "I vow to sing songs and make originals for you randomly. Write random poems to even make it upto you or ask you to be my valentine. And eventually, record some of the songs for you so you can have your very own album dedicated to you.",
        imageUrl: "116.jpg",
        backTitle: "Personal Artist",
        backMessage: "Prx's Recordings"
      },
      {
        id: 117,
        topic: "Early Vows",
        compliment: "Vow 5",
        desc: "I vow to share all my food with you when we go out. Feed you as well while you're staring at good looking guys on the TV as well, and eventually elbow my face. I promise I will always give you the first bite of whatever we order and free exchange of anything you don't like. Order 2 of anything you seem to like from the menu.",
        imageUrl: "117.jpg",
        backTitle: "Companion",
        backMessage: "First Bites"
      },
      {
        id: 118,
        topic: "Early Vows",
        compliment: "Vow 6",
        desc: "I vow to drive you around to any place you wish to go. Sing along to our favorite tunes while you sit right next to me, ruffling with my hair while you watch me take a turn with one hand. No matter how far the place might be (Silbatti distance even).",
        imageUrl: "118.jpg",
        backTitle: "Personal Chauffeur",
        backMessage: "Passenger Princess"
      },
      {
        id: 119,
        topic: "Early Vows",
        compliment: "Vow 7",
        desc: "I vow to be patient and understanding of all your troubles. I can be the problem-solving boyfriend or just a gal who you want to vent your problems to and need someone to listen to.",
        imageUrl: "119.jpg",
        backTitle: "Dual Roles",
        backMessage: "Yapping Princess"
      },
      {
        id: 120,
        topic: "Early Vows",
        compliment: "Vow 8",
        desc: "I vow to never ever start a movie or tv show we decide to watch together, or even talk about. We will start a show together, take as many days required to finish it and then make sure we watch it together. (No Superstore repeats).",
        imageUrl: "120.jpg",
        backTitle: "Movie Nights",
        backMessage: "Netflix & Chill"
      },
      {
        id: 121,
        topic: "Early Vows",
        compliment: "Vow 9",
        desc: "I vow to cook and meal prep with you. Cooking/baking together and fooling around in the kitchen, just having fun. Avo/toast for breakfast with some really healthy smoothies for both of us.",
        imageUrl: "121.jpg",
        backTitle: "Chef Ace",
        backMessage: "Healthy Food 24x7"
      },
      {
        id: 122,
        topic: "Early Vows",
        compliment: "Vow 10",
        desc: "I vow to kiss you any chance I get. Before we sleep, after we wake up, or even before we head for work. It always leaves me feeling so happy and nice.",
        imageUrl: "122.jpg",
        backTitle: "Soft Kisses",
        backMessage: "You Make Me Giddy"
      },
      {
        id: 123,
        topic: "Early Vows",
        compliment: "Vow 11",
        desc: "I vow to never bully or make fun of you, during your week. Or at least try to, and any time I do make fun of you, well, you can decide what the punishment for me is.",
        imageUrl: "123.jpg",
        backTitle: "Your Week",
        backMessage: "Whatever You Say, Goes"
      },      
      {
        id: 124,
        topic: "Early Vows",
        compliment: "Vow 12",
        desc: "I vow to always help you around the house and keep things neat and tidy. Be it my 1/4th cupboard or your 3+3/4th cupboards. I promise to always help around the house and be as useful as I can to you (even in cooking).",
        imageUrl: "124.jpg",
        backTitle: "House Chores",
        backMessage: "2's Better Than 1"
      },
      {
        id: 125,
        topic: "Early Vows",
        compliment: "Vow 13",
        desc: "I vow to let you decide all the design and aesthetics of anything we plan to get. You will be the person in charge and I will only be there to agree to whatever you say.",
        imageUrl: "125.jpg",
        backTitle: "My Mini Designer",
        backMessage: "Aesthetic Queen"
      },
      {
        id: 126,
        topic: "Early Vows",
        compliment: "Vow 14",
        desc: "I vow to always explain to you how I'm going to stay awake late, or even not fall asleep within the next 5 minutes of closing my eyes, but falling asleep regardless.",
        imageUrl: "126.jpg",
        backTitle: "Sleep Monsta",
        backMessage: "Somethings Will Never Change"
      },
      {
        id: 127,
        topic: "Early Vows",
        compliment: "Vow 15",
        desc: "I vow to only use half the space of the bed and allow you to control the fan/AC speed. And you are more than welcome to use your tactics to nudge me or move me so I stop snoring to help you fall asleep.",
        imageUrl: "127.jpg",
        backTitle: "Snoring",
        backMessage: "Expert in Dealing with Snoring"
      },
      {
        id: 128,
        topic: "Early Vows",
        compliment: "Vow 16",
        desc: "I vow to listen to all the books you read, and hear you explain the tropes, character and then listen to how you can't wait to see what happens. Eventually you telling me that you skipped to the end to see what happened with the main characters.",
        imageUrl: "128.jpg",
        backTitle: "My Favorite Book Reader",
        backMessage: "Trope Reading Noob"
      },
      {
        id: 129,
        topic: "Early Vows",
        compliment: "Vow 17",
        desc: "I vow to let you borrow my tees, boxers and hoodies/jackets. I'll buy the baggiest of clothes just so you can feel comfy and cozy in them.",
        imageUrl: "129.jpg",
        backTitle: "50/50",
        backMessage: "My Clothes = Your Clothes"
      },

  ];

  module.exports = compliments;