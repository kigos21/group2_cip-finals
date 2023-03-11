const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn-option')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [

  // Menu
  {
    id: 1,
    text: 'Choose among the choices and it will take you there.',
    options: [
      {
        text: 'Maria the farmer.',
        nextText: 2
      }, {
        text: 'Karl the student.',
        nextText: 5
      }, {
        text: 'Sophie the internet-user',
        nextText: 9
      }, {
        text: 'Maria the honor-student',
        nextText: 13
      }, {
        text: 'Luke and his adventure',
        nextText: 21
      }
    ]
  },
  
  // Quiz 1

  { 
    id: 2,
    text: 'Maria is a farmer who lives in a rural village in South America. She used to grow crops using conventional methods, which involved using chemical fertilizers and pesticides that damaged the soil and water. She then encountered a post regarding the Pope’s Laudato Si and learned about the care for the environment. What should Maria do?',
    options: [
      {
        text: 'Switch to organic farming: use compost and natural pest control methods',
        nextText: 3
      }, {
        text: 'Ignore the information and stick to conventional farming',
        nextText: 99
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text: 'While preparing her compost, she saw her neighbor making use of harmful pest control methods. She knows that this does not only destroy the environment but is also detrimental to the health of the community. Maria should:',
    options: [
      {
        text: 'Have a competition with her and see who got better crops.',
        nextText: 98
      }, {
        text: 'Tell her neighbor that using natural pesticide results in healthier soil and better reaps as well make the community healthier.',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Maria knows that to really help her neighbor, she should not think of her as competition but as a friend. She is able to help the environment more by talking properly with his neighbor, and essentially contributed to a better and cleaner world with her proper communication.',
    options: [
      {
        text: 'Next Quiz',
        nextText: 5
      }, {
        text: 'Reset Quiz',
        nextText: 2
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  },

  // Quiz 2

  { 
    id: 5,
    text: 'As the birds chirp in the morning, and the leaves rustle, Karl suddenly wakes up in bed because of his alarm, he then quickly rushes to eat his breakfast, shower, and wear his clothes. He then checked his watch and realized that he is going to be late, as he gets out of his house, he then realized he was also tasked to create a story about how we can appreciate the beauty of nature, but he has no choice but to go. He thought about going to the bus stop but the time was running, and as he observed the road there was traffic. What can Karl do to rush to his class?',
    options: [
      {
        text: 'Go and wait for the bus at the bus stop.',
        nextText: 97
      }, {
        text: 'Walk to his class.',
        nextText: 96
      }, {
        text: 'Ride his bike and rush to his school.',
        nextText: 6
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  }, {
    id: 6,
    text: 'As he rides his bike, he observes his surroundings and realizes how great nature is, Birds resting in their nests and appreciating the green trees, but as he continues riding his bike he realizes how we are slowly killing the beauty of nature because of the polluted air due to the vehicle smoke. He is glad he helped nature even in such a small way. After the beginning periods of Karl’s class, it was time for Karl’s class for lunch. While he was enjoying his lunch, he saw a fellow student  attempt to  throw trash into the trash bin but you see that they failed to put the trash IN the trash bin. Upon close observation, the trash turned out to be  a banana peel. Karl realizes that it is a potential environmental hazard if the banana peel is left on the floor. He waited for the student to pick their trash up but they did not.   Help Karl think on what to do in this situation.',
    options: [
      {
        text: 'He does not want to lose his appetite from touching someone else’s banana. Ignore it and enjoy the food.',
        nextText: 95
      }, {
        text: 'As someone who appreciates nature and the environment, pick it up and put it in the trash properly',
        nextText: 7
      }, {
        text: 'Confront the student and argue with them even though it is not worth their time.',
        nextText: 94
      }
    ]
  }, {
    id: 7,
    text: 'After picking up the trash he looks at the trash bins. There are two trash bins; one is labeled Non-biodegradable, and the other is labeled biodegradable. In which trash bin must Karl throw the banana peel?',
    options: [
      {
        text: 'Karl is smart and he knows that the banana peel must go to the biodegradable trash bin. He throws the trash there',
        nextText: 8
      }, {
        text: 'Karl throws the banana peel in the non-biodegradable because it does not matter anyway.',
        nextText: 93
      }, {
        text: 'Karl thinks it is too hard to think, and drops it back on the floor.',
        nextText: 92
      }
    ]
  }, {
    id: 8,
    text: 'As Karl returned to his class, He immediately remembered their story presentation about the importance and beauty of nature, Karl then realized that all he experienced and observed that day was already a story of how society is blinded in preserving the nature that is given to us by God. He then proudly presented his story which concludes on how our little choices can shape the outcome which can contribute to the well-being of others and the environment.',
    options: [
      {
        text: 'Next Quiz',
        nextText: 9
      }, {
        text: 'Reset Quiz',
        nextText: 5
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  }, 

  // Quiz 3

  {
    id: 9,
    text: 'During the pandemic, you have noticed your 16-year-old cousin, Sophie, posted credible sources about what the vaccine is and its effectivity in your body. You observed that one of your aunts and uncles disproved this credible source by dumping fake videos of humans being injected and becoming zombies. In this scenario, what is the best you could do?',
    options: [
      {
        text: 'Bash your aunts and uncles to prove them wrong',
        nextText: 91
      }, {
        text: 'Respectfully provide evidence conversation and encourage sophie to continue sharing factual information',
        nextText: 10
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  }, {
    id: 10,
    text: 'The global health crisis caused by the COVID-19 outbreak has had significant impacts on public health, economies, and daily life worldwide. Sophie, a 16-year-old high school student with a passion for reading and research, has been educating herself on the benefits and drawbacks of vaccines developed to combat the virus. During her research, Sophie discovered that many people, especially in the Philippines, lack knowledge about vaccine eligibility. As a result, she decided to share credible sources online to inform others about the purpose and effectiveness of the vaccine. Unfortunately, some fake videos were being circulated in the comments section, mostly targeting the elderly, showing humans being injected and turning into zombies. Maxine, a friend of Sophie, who has expertise in vaccines, came across the post and the comments section.',
    options: [
      {
        text: 'Disregard the post and continue scrolling down in your news feed',
        nextText: 90
      }, {
        text: 'Respectfully provide evidence conversation and encourage Sophie to continue sharing factual information',
        nextText: 11
      }
    ]
  }, {
    id: 11,
    text: 'The incident sparked a meaningful exchange of ideas and knowledge between Sophie and Maxine, leading them to develop a shared vision for how they could contribute to their community. They collaborated and planned to receive both food and cash donations, which they would then distribute throughout the community. However, before proceeding, they need to seek permission and approval from their respective parents.',
    options: [
      {
        text: 'Tell them to just mind themselves',
        nextText: 89
      }, {
        text: 'Look into their proposal. If their proposal is well-crafted, the parents should consider it and take appropriate action.',
        nextText: 12,
      }
    ]
  }, {
    id: 12,
    text: 'Because of what happened, a community pantry was established where it spread and was also applied in other barangays and provinces. Many people were helped especially those who lost their jobs.',
    options: [
      {
        text: 'Next Quiz',
        nextText: 13
      }, {
        text: 'Reset Quiz',
        nextText: 8
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  },
  
  // Quiz 4

  {
    id: 13,
    text: 'Maria is an ordinary student who is living out her life one day at a time. She usually lays around in her home, doing school work, attending class, and other responsibilities that she has to attend to. On other times, she is usually loafing around in her room, playing games and scrolling through social media, which takes the most time of her day. One day, Maria had been experiencing difficulties in her school. Exam day is closing in, and school works had been piling up more and more as the days pass by. She had felt stressed, to the point that she became irritable not only to her schoolmates, but also to her parents. She was able to find some rest on one of her weekends, and had planned to play games and scroll through social media the whole day. However, this plan was broken when she found an infographics about a papal document whose name she recognized in her Theology studies, named "Gaudete et Exsultate. She should:',
    options: [
      {
        text: 'Scroll past and enjoy her day playing games and scrolling through social media.',
        nextText: 88
      }, {
        text: 'Give the infographics a chance and quickly read what the infographics is all about.',
        nextText: 14
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  }, {
    id: 14,
    text: 'Realizing that she had not really read anything much about her faith for the past few weeks other than the material she was given by her professor, she tried to read through the infographics that she encountered. She learned here about Pope Francis and his thoughts on holiness, in that such a thing is not for the priests and other religious people only, but rather it can be lived by ordinary people like her by living our lives in a way that reflects Jesus. In the second half of the infographics, she had read about 5 steps in becoming closer to God. She should:',
    options: [
      {
        text: 'Try and do the 5 steps that were suggested by the infographics.',
        nextText: 15
      }, {
        text: 'Think that knowing about holiness is enough, and just go back to her daily activities.',
        nextText: 87
      }
    ]
  }, {
    id: 15,
    text: 'The first thing the infographics had suggested is to put their phones down, and turn off any gaming consoles they are currently playing. They want us to take a step back, and reflect on what we have been doing nowadays. According to Gaudete et Exsultate, we should not think bad of our neighbors and believe that we are superior, but rather loving them, having patience, and humility are the way to go. While reflecting, a classmate had messaged her about what to do on a group project. She remembers that the classmate that messaged her is the one that did not attend the group meeting, which explains why she is asking now. She should:',
    options: [
      {
        text: 'Scold the classmate for not being in the group meeting at the time, and that they are already kicked off of the group.',
        nextText: 86
      }, {
        text: 'Explain to her about the group project, and kindly ask her why she was unable to join the group meeting.',
        nextText: 16
      }
    ]
  }, {
    id: 16,
    text: 'Her groupmate explained that recently, they had been experiencing financial problems which forced her to get a part-time job. After realizing that such a thing occurred to her classmate, she remembered the times that she thought bad of her classmates just because they were unable to meet her expectations. Realizing that if she had been a bit too quick to judge, she would have did something very regrettable.',
    options: [
      {
        text: 'Next',
        nextText: 17
      }, {
        text: 'Then, what happened?',
        nextText: 17
      }
    ]
  }, {
    id: 17,
    text: 'Reading through the infographics, she had seen it mention the Beatitudes, which according to Pope Francis are the guidelines a Christian should follow. She researched the Beatitudes and took it to heart. The following day, her Mother asked Maria to come with her to the Church and volunteer for their program to feed the local poor residents. Of course, after she is done with everything she needs for the day. She should:',
    options: [
      {
        text: 'Agree to volunteer, only if she is able to finish everything on time.',
        nextText: 18
      }, {
        text: 'Refuse because volunteering is a waste of time and not one of the things she enjoys.',
        nextText: 85
      }
    ]
  }, {
    id: 18,
    text: 'Luckily, Maria was able to finish everything earlier than expected, and was able to come with her Mother. During the program, she found herself laughing and enjoying the company of the new people she just met during the program. She felt compassion for the people they are helping, and after the program, she felt not just a sense of accomplishment, but also a resolution of her faith.',
    options: [
      {
        text: 'Next',
        nextText: 19
      }, {
        text: 'Wow! Then what?',
        nextText: 19
      }
    ]
  }, {
    id: 19,
    text: 'Eventually, Maria had frequently been volunteering in local feeding programs, and other activities that were related to their nearby Church. On a Sunday morning, a friend of hers asked if she wanted to go drinking with her friends. However, Maria already had plans on attending a seminar about ways on improving her faith as a Christian student. She should:',
    options: [
      {
        text: 'Angrily refuse her friends’ request, and berate them for wanting to drink on a Sunday, which should be the Lord’s day.',
        nextText: 84
      }, {
        text: 'Politely refuse their friend, and ask them if they’ll want to go to the seminar with her instead.',
        nextText: 20
      }
    ]
  }, {
    id: 20,
    text: 'Maria thought that although she would rather go to the seminar than drink, it is incorrect to enforce one’s beliefs on others, let alone shame them for wanting to do things that they enjoy. After politely refusing and inviting them to come, surprisingly her friends had agreed to come with her on the notion that Maria had been more happy in the past few days, and they were curious as to how she did that. A few months later, Maria is still going strong in her vocation of helping the less fortunate, and attending seminars to strengthen her faith. She had also convinced many of her friends to also come help. Although Maria also recognizes that it is not bad to enjoy things in life, for as long as she is still able to be intact with her spiritual self.',
    options: [
      {
        text: 'Next Quiz',
        nextText: 21
      }, {
        text: 'Reset Quiz',
        nextText: 12
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]

  // Quiz 5

  }, {
    id: 21,
    text: 'Luke is a Senior High School student from a well-known university in the Philippines. He comes from a well-off family and rarely goes out alone. One day, He and his friends decided to eat lunch outside on weekend. He heard his friends that they will be traveling via public transportation to their meeting place and he wanted to try it out too. As he walks to the bus station, he passed by a homeless grandmother and her grandson asking for spare change and food. The grandmother approached him and asked for some spare because her grandson hasn’t eaten yet for days. He should:',
    options: [
      {
        text: 'Ignore and just mind his own business',
        nextText: 83
      }, {
        text: 'Help the homeless and spare some change',
        nextText: 22
      }, {
        text: 'Return to menu',
        nextText: 1
      }
    ]
  }, {
    id: 22,
    text: 'As Luke spared some change to help, he remembered what His religion teacher taught them before. They were taught about the importance of Humility, Mercy, and Meekness and how these said virtues help us become closer to God and transform our lives into a better one. Luke rushes to the bus stop and rides the ride going to their meeting place. He went for the back seat of the bus and scrolled on his phone while waiting to reach his destination. A few minutes later, he noticed a woman getting sexually harassed by a stranger. The woman was silently asking for the help of people on the bus, but no one was making a move. Luke felt very displeased with the situation, he went to the man and he:',
    options: [
      {
        text: 'Calmly gather evidence and called the police while restraining the Man away from the lady.',
        nextText: 23
      }, {
        text: 'Used violence and caused a scene to stop the harassment.',
        nextText: 82
      }
    ]
  }, {
    id: 23,
    text: 'After the predicament, Luke and his friends proceeded to eat in a well-known restaurant. After they paid for the bill and received the change, Luke noticed that the waitress had given them more change than they should have gotten. Anthony suggested that they keep the change so that they can use it for their transportation back home. Luke should:',
    options: [
      {
        text: 'Take the change. He already did enough good deeds today, and maybe this was his reward.',
        nextText: 81
      }, {
        nextText: 'Tell Anthony that they are well-off and do not need the extra change. Return the extra change to the waitress.',
        nextText: 24
      }
    ]
  }, {
    id: 24,
    text: 'Returning home, Luke had realized that this was what Pope Francis had been telling him all along. We do not need to be a bishop, pope, or a priest to become holy. We can achieve this by also doing good deeds in our everyday life, and following the footsteps of Jesus and his kindness,compassion, and patience to us all.',
    options: [
      {
        text: 'Reset Quiz',
        nextText: 21
      }, {
        text: 'Return to Menu',
        nextText: 1
      }
    ]
  }

  // All Ends
  ,{
    id: 99,
    text: 'FAIL! Maria should not continue to use harmful chemicals that will damage the environment. Pope Francis states in Laudato Si that every person has a shared responsibility in taking care of the environment, as it is the gift of God to us.',
    options: [
      {
        text: 'Return to Question',
        nextText: 2
      }
    ]
  }, {
    id: 98,
    text: 'FAIL! Maria should not challenge her neighbor, because it defeats the purpose of Pope Francis thoughts on Laudato Si. He states here that communities should work together to make the world a better place, not against each other.',
    options: [
      {
        text: 'Return to Question',
        nextText: 3
      }
    ]
  }, {
    id: 97,
    text: 'FAIL! Waiting for the bus will only make him later. Furthermore, he would not be able to appreciate the surroundings that Pope Francis had continuously emphasized in his book, Laudato Si.',
    options: [
      {
        text: 'Return to Question',
        nextText: 5
      }
    ]
  }, {
    id: 96,
    text: 'FAIL! Although Karl had a good idea to appreciate nature in its full glory while walking, it will make him even more late which may affect his education. Instead, Karl should think of a compromise.',
    options: [
      {
        text: 'Return to Question',
        nextText: 5
      }
    ]
  },  {
    id: 95,
    text: 'FAIL! Although it is reasonable to not pick it up to not lose appetite, Karl could still pick it up afterwards. Laudato Si states that we have a shared responsibility to take care of the environment, which means that the banana may cause some unnecessary harm if left unchecked.',
    options: [
      {
        text: 'Return to Question',
        nextText: 6
      }
    ]
  },  {
    id: 94,
    text: 'FAIL! Karl should not confront to argue, but rather to educate. If he has the time, he should make sure to tell the student to not throw the banana on the ground, but rather on the bin instead.',
    options: [
      {
        text: 'Return to Question',
        nextText: 6
      }
    ]
  },  {
    id: 93,
    text: 'FAIL! Karl should know that biodegradable and non-biodegradable are two different things. Pope Francis had emhpasized in the Laudato Si that there are interdisciplinary factors in helping the environment, which means that we should recognize such instances if we want to help the world. ',
    options: [
      {
        text: 'Return to Question',
        nextText: 7
      }
    ]
  },  {
    id: 92,
    text: 'FAIL! You have already gone this far, Karl! You can do it.',
    options: [
      {
        text: 'Return to Question',
        nextText: 7
      }
    ]
  },  {
    id: 91,
    text: 'FAIL! Although your aunts and uncles had spread fake news which may harm other people as well, it is incorrect to bash them. Pope Francis had stated in Christus Vivit that we should not exclude individuals, but rather we should promote an inclusive approach.',
    options: [
      {
        text: 'Return to Question',
        nextText: 9
      }
    ]
  },  {
    id: 90,
    text: 'FAIL! Ignorance is bliss, but Pope Francis heavily emphasized that the youth has an important role to play in the promotion the goodness of God in society. It is important to recognize problems and find ways to help in solving the problem',
    options: [
      {
        text: 'Return to Question',
        nextText: 10
      }
    ]
  },  {
    id: 89,
    text: 'FAIL! It is important to support our fellow youth in their pursuit of a better society, because not only does it benefit them, but it also benefits you, your family, and everyone else in the world.',
    options: [
      {
        text: 'Return to Question',
        nextText: 11
      }
    ]
  },  {
    id: 88,
    text: 'FAIL! Ignorance is bliss, but taking a few minutes of your time to read something about your faith should not be a hard, or tedious task especially as someone who practices the Christian faith.',
    options: [
      {
        text: 'Return to Question',
        nextText: 13
      }
    ]
  },  {
    id: 87,
    text: 'FAIL! It is not enough to just know about what holiness is. Pope Francis had criticized in his book Gaudete et Exsultate about the mannerisms of some people, that thinks knowledge is enough for salvation.',
    options: [
      {
        text: 'Return to Question',
        nextText: 14
      }
    ]
  },  {
    id: 86,
    text: 'FAIL! Before we assume things, it is important to hear out about what the other person is going through first. Pope Francis had mentioned patience as a part of our vocation in his book Gaudete et Exsultate, and that compassion and love should also be a part of our approach in life.',
    options: [
      {
        text: 'Return to Question',
        nextText: 15
      }
    ]
  },  {
    id: 85,
    text: 'FAIL! Before we assume, we should try things that are out of our comfort zone before we say that we would not enjoy it anyway. We should be encouraged to try new things, in case we may enjoy it.',
    options: [
      {
        text: 'Return to Question',
        nextText: 17
      }
    ]
  },  {
    id: 84,
    text: 'FAIL! Although Maria had followed the words of Pope Francis in that she should not be tempted by outward forces, she should still not enforce his faith on others, and should be patient to the people around her.',
    options: [
      {
        text: 'Return to Question',
        nextText: 19
      }
    ]
  },  {
    id: 83,
    text: 'FAIL! Empathy for the poor is something Pope Francis had mentioned in his book of Gaudete et Exsultate, and that helping them should be one of our utmost priority as Christians. ',
    options: [
      {
        text: 'Return to Question',
        nextText: 21
      }
    ]
  },  {
    id: 82,
    text: 'FAIL! Violence is never the answer. Instead of approaching the situation in a logical sense, Luke may have only worsened the situation for everyone involved, especially himself.',
    options: [
      {
        text: 'Return to Question',
        nextText: 22
      }
    ]
  },  {
    id: 81,
    text: 'FAIL! We should not count the good deeds we have done and expect something in return. Pope Francis emphasized the importance of vigilance and discernment in his book Gaudete et Exsultate, in that any temptation that go our way should be ignored.',
    options: [
      {
        text: 'Return to Question',
        nextText: 23
      }
    ]
  }, 

]

startGame()