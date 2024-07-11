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
        backTitle: "",
        backMessage: ""
      },
  ];

  module.exports = compliments;