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
      }
  ];

  module.exports = compliments;