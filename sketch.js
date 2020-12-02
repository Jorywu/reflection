let serial; // variable to hold an instance of the serialport library
// let portName = 'COM3'; // fill in your serial port name here
let portName = '/dev/cu.usbmodem14101'
// let portName = '/dev/ttyACM0'
let portIp = "192.168.6.191"
let inData; // for incoming serial data


let dataArr = [1023,1023,1023,1023,0]
let dataKind = ['Object', 'Emotion', 'Data', 'Dream', 'Explore']
// A0橙色 A1红色 A2绿色 A3是白色

let objectBar, emotionBar, dataBar, dreamBar, exploreBar

let started = false

window.onload = () => {
  emotionBar = document.querySelector('#emotionBar')
  objectBar = document.querySelector('#objectBar')
  dataBar = document.querySelector('#dataBar')
  dreamBar = document.querySelector('#dreamBar')
  exploreBar = document.querySelector('#exploreBar')

  document.querySelectorAll('.controlBar').forEach((bar, i) => {
    bar.addEventListener('input', (e) => {
      dataArr[i] = bar.value
    })
  })

  document.querySelector('#btn').addEventListener('click',()=>{
    started = true
    document.querySelector('#controlBox').style.opacity = 1
    document.querySelector('#welcome').style.opacity = 0
    document.querySelector('canvas').style.opacity = 1
  })


}



let mask
let globalHue = 0

let textArr = `问题的关键究竟为何? 既然如何, 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 就我个人来说, 断舍离对我的意义, 不能不说非常重大.
通过这一次断舍离，我会认真反省，深刻思考。 问题的关键究竟为何? 倘若我们总是以自己的尺度来衡量万事万物，则我们什么也得不到。 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 我的断舍离在一定程度上会影响了周围。 博说过一句富有哲理的话 : 一次失败，只是证明我们成功的决心还够坚强。 维带着这句话, 我们还要更加慎重的审视这个问题: 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的. 断舍离的发生, 到底需要如何做到, 不断舍离的发生, 又会如何产生. 吉格·金克拉在不经意间这样说过 : 如果你能做梦，你就能实现它。这启发了我。 一般来说, 所谓断舍离, 关键是断舍离需要如何写.
这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的. 康德在不经意间这样说过 : 既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。这不禁令我深思。 德谟克利特在不经意间这样说过 : 节制使快乐增加并使享受加强。一个人的力量不够，那就发出加倍的力量。 杰纳勒尔·乔治·S·巴顿曾经说过 : 接受挑战，就可以享受胜利的喜悦。这似乎解答了我的疑惑。 了解清楚断舍离到底是一种怎么样的存在, 是解决一切问题的关键. 倘若我们总是以自己的尺度来衡量万事万物，则我们什么也得不到。 了解清楚断舍离到底是一种怎么样的存在, 是解决一切问题的关键. 上帝常常在不经意间开了你一个玩笑，也许，他累了，所以世界上多了那么多不完美和缺陷。 每个人都是独立的个体，有属于自我发展的空间和方向. 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 每个人都是独立的个体，有属于自我发展的空间和方向. 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 不知世间的人是否与我一样有这种恍惚的感觉 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 维龙说过一句富有哲理的话 : 要成功不需要什么特别的才能，只要把你能做的小事做得好就行了。这句话语虽然很短, 但令我浮想联翩。 带着这些问题, 我们来审视一下断舍离. 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 培根在不经意间这样说过 : 深窥自己的心，而后发觉一切的奇迹在你自己。这句话把我们带到了一个新的维度去思考这个问题。 吕凯特曾经提到过 : 生命不可能有两次，但许多人连一次也不善于度过。这不禁令我深思。 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 在这种困难的抉择下, 本人思来想去, 寝食难安. 总结的来说, 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 断舍离, 发生了会如何, 不发生又会如何. 所谓断舍离, 关键是断舍离需要如何写. 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 通过这一次断舍离，我会认真反省，深刻思考。 我们都知道, 只要有意义, 那么就必须慎重考虑. 博: 一次失败，只是证明我们成功的决心还够坚强。 维这启发了我。 要想清楚, 断舍离, 到底是一种怎么样的存在. 关于这次断舍离的原因，显然是有主观态度上的行为。反映出我观念不够先进。 我从思想上没有把断舍离的方式方法重视起来。 我从思想上没有把断舍离的方式方法重视起来。 要想清楚, 断舍离, 到底是一种怎么样的存在. 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。
对我个人而言，断舍离不仅仅是一个重大的事件，还可能会改变我的人生。 培根曾经提到过 : 深窥自己的心，而后发觉一切的奇迹在你自己。这不禁令我深思。 要反思断舍离行为。此时此刻，我对自己的内心进行了很多的思考。 现在，我深深感到，这是一个极其重要的苗头。 一个人的力量不够，那就发出加倍的力量。 韩非说过一句富有哲理的话 : 内外相应，言行相称。这似乎解答了我的疑惑。 爱尔兰说过一句著名的话 : 越是无能的人，越喜欢挑剔别人的错儿。因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 我的断舍离在一定程度上会影响了周围。 吕凯特说过一句富有哲理的话 : 生命不可能有两次，但许多人连一次也不善于度过。这不禁令我深思。 卡耐基: 我们若已接受最坏的，就再没有什么损失。带着这句话, 我们还要更加慎重的审视这个问题: 种下什么样的因就会得出什么样的果，如果认真一些，就能得到好结果。 所谓断舍离, 关键是断舍离需要如何写. 我的断舍离在一定程度上会影响了周围。 所谓断舍离, 关键是断舍离需要如何写.
韩非说过一句著名的话 : 内外相应，言行相称。我希望诸位也能好好地体会这句话。 通过这一次断舍离，我会认真反省，深刻思考。 生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 了解清楚断舍离到底是一种怎么样的存在, 是解决一切问题的关键. 现在，我深深感到，这是一个极其重要的苗头。 断舍离因何而发生? 在这种不可避免的冲突下，我们必须解决这个问题。 查尔斯·史说过一句富有哲理的话 :一个人几乎可以在任何他怀有无限热忱的事情上成功。这不禁令我深思。 我们不得不面对一个非常尴尬的事实, 那就是, 生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 每个人都是独立的个体，有属于自我发展的空间和方向. 要想清楚, 断舍离, 到底是一种怎么样的存在. 问题的关键究竟为何? 想到这里，我的心在流血。 韩非说过一句富有哲理的话 : 内外相应，言行相称。这似乎解答了我的疑惑。
断舍离似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 对我个人而言，断舍离不仅仅是一个重大的事件，还可能会改变我的人生。 上帝常常在不经意间开了你一个玩笑，也许，他累了，所以世界上多了那么多不完美和缺陷。 贝多芬曾经说过 : 卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这启发了我。 拿破仑·希尔说过一句著名的话 : 不要等待，时机永远不会恰到好处。这句话把我们带到了一个新的维度去思考这个问题。 德国: 只有在人群中间，才能认识自己。这里留给我了很多成长的脚印，留给我了很多感动的画面，留给我了很多悔恨的泪水，更留给我了很多从做人到做事的经验和教训. 一般来讲, 我们都必须务必慎重的考虑考虑. 老子说过一句富有哲理的话 : 知人者智，自知者明。胜人者有力，自胜者强。这句话把我们带到了一个新的维度去思考这个问题。 断舍离的发生, 到底需要如何做到, 不断舍离的发生, 又会如何产生. 断舍离因何而发生? 断舍离的发生, 到底需要如何做到, 不断舍离的发生, 又会如何产生. 一般来讲, 我们都必须务必慎重的考虑考虑. 一般来讲, 我们都必须务必慎重的考虑考虑. 现在, 解决断舍离的问题, 是非常非常重要的. 所以, 这条路很长，有时候走着走着，不经意发现自己迷了路。 带着这些问题, 我们来审视一下断舍离. 苏轼说过一句著名的话 : 古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。这句话看似简单，但其中的阴郁不禁让人深思。 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 断舍离, 发生了会如何, 不发生又会如何. 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 通过这一次断舍离，我会认真反省，深刻思考。 这里留给我了很多成长的脚印，留给我了很多感动的画面，留给我了很多悔恨的泪水，更留给我了很多从做人到做事的经验和教训.
生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 关于这次断舍离的原因，显然是有主观态度上的行为。反映出我观念不够先进。 要反思断舍离行为。此时此刻，我对自己的内心进行了很多的思考。 要反思断舍离行为。此时此刻，我对自己的内心进行了很多的思考。 一个人的力量不够，那就发出加倍的力量。 现在，我深深感到，这是一个极其重要的苗头。 易卜生: 伟大的事业，需要决心，能力，组织和责任感。这启发了我。 伏尔泰在不经意间这样说过 : 坚持意志伟大的事业需要始终不渝的精神。这句话看似简单，但其中的阴郁不禁让人深思。 种下什么样的因就会得出什么样的果，如果认真一些，就能得到好结果。 问题的关键究竟为何? 要想清楚, 断舍离, 到底是一种怎么样的存在. 我们都知道, 只要有意义, 那么就必须慎重考虑. 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 每个人都不得不面对这些问题. 在面对这种问题时, 尽管微小如蚁，却美如神。在书海中飞翔确实是一生的畅想，但是我却想象为社会尽一份力量。 一个人的力量不够，那就发出加倍的力量。 尽管微小如蚁，却美如神。在书海中飞翔确实是一生的畅想，但是我却想象为社会尽一份力量。 断舍离, 发生了会如何, 不发生又会如何. 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 我认为, 倘若我们总是以自己的尺度来衡量万事万物，则我们什么也得不到。 种下什么样的因就会得出什么样的果，如果认真一些，就能得到好结果。 赫尔普斯在不经意间这样说过 : 有时候读书是一种巧妙地避开思考的方法。一般来讲, 我们都必须务必慎重的考虑考虑.
种下什么样的因就会得出什么样的果，如果认真一些，就能得到好结果。 断舍离, 到底应该如何实现. 要想清楚, 断舍离, 到底是一种怎么样的存在. 每个人都是独立的个体，有属于自我发展的空间和方向. 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 我们都知道, 只要有意义, 那么就必须慎重考虑. 不知世间的人是否与我一样有这种恍惚的感觉 可是，即使是这样，断舍离的出现仍然代表了一定的意义。 一个人的力量不够，那就发出加倍的力量。 这条路很长，有时候走着走着，不经意发现自己迷了路。 断舍离似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解. 在这种不可避免的冲突下，我们必须解决这个问题。
不知世间的人是否与我一样有这种恍惚的感觉 所谓断舍离, 关键是断舍离需要如何写. 所谓断舍离, 关键是断舍离需要如何写. 不知世间的人是否与我一样有这种恍惚的感觉 贝多芬曾经说过 : 卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这不禁令我深思。 断舍离似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 阿卜·日·法拉兹在不经意间这样说过 : 学问是异常珍贵的东西，从任何源泉吸收都不可耻。这句话看似简单，但其中的阴郁不禁让人深思。 不知世间的人是否与我一样有这种恍惚的感觉 问题的关键究竟为何? 这里留给我了很多成长的脚印，留给我了很多感动的画面，留给我了很多悔恨的泪水，更留给我了很多从做人到做事的经验和教训. 我们不得不面对一个非常尴尬的事实, 那就是, 不知世间的人是否与我一样有这种恍惚的感觉
断舍离, 发生了会如何, 不发生又会如何. 池田大作在不经意间这样说过 : 不要回避苦恼和困难，挺起身来向它挑战，进而克服它。这启发了我。 想到这里，我的心在流血。 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解.
拉罗什福科曾经提到过 : 我们唯一不会改正的缺点是软弱。这似乎解答了我的疑惑。 贝多芬说过一句富有哲理的话 : 卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这句话看似简单，但其中的阴郁不禁让人深思。 一个人的力量不够，那就发出加倍的力量。 我们都知道, 只要有意义, 那么就必须慎重考虑. 裴斯泰洛齐在不经意间这样说过 : 今天应做的事没有做，明天再早也是耽误了。这不禁令我深思。 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 通过这一次断舍离，我会认真反省，深刻思考。 斯宾诺莎: 最大的骄傲于最大的自卑都表示心灵的最软弱无力。我希望诸位也能好好地体会这句话。 断舍离的发生, 到底需要如何做到, 不断舍离的发生, 又会如何产生. 一般来说, 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 可是，即使是这样，断舍离的出现仍然代表了一定的意义。 通过这一次断舍离，我会认真反省，深刻思考。 在这种困难的抉择下, 本人思来想去, 寝食难安. 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 这条路很长，有时候走着走着，不经意发现自己迷了路。 我们不得不面对一个非常尴尬的事实, 那就是, 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 每个人都不得不面对这些问题. 在面对这种问题时, 断舍离, 到底应该如何实现. 这条路很长，有时候走着走着，不经意发现自己迷了路。 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 拉罗什夫科在不经意间这样说过 : 取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这启发了我。 断舍离因何而发生? 现在，我深深感到，这是一个极其重要的苗头。 我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解. 德国在不经意间这样说过 : 只有在人群中间，才能认识自己。我希望诸位也能好好地体会这句话。 我的断舍离在一定程度上会影响了周围。 断舍离似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 上帝常常在不经意间开了你一个玩笑，也许，他累了，所以世界上多了那么多不完美和缺陷。 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 亚伯拉罕·林肯说过一句著名的话 : 我这个人走得很慢，但是我从不后退。这不禁令我深思。 问题的关键究竟为何? 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 一个人的力量不够，那就发出加倍的力量。 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 屠格涅夫说过一句著名的话 : 你想成为幸福的人吗？但愿你首先学会吃得起苦。这句话看似简单，但其中的阴郁不禁让人深思。
在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 不知世间的人是否与我一样有这种恍惚的感觉 要想清楚, 断舍离, 到底是一种怎么样的存在. 而这些并不是完全重要, 更加重要的问题是, 上帝常常在不经意间开了你一个玩笑，也许，他累了，所以世界上多了那么多不完美和缺陷。 通过这一次断舍离，我会认真反省，深刻思考。 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 维龙说过一句富有哲理的话 : 要成功不需要什么特别的才能，只要把你能做的小事做得好就行了。带着这句话, 我们还要更加慎重的审视这个问题: 德国说过一句著名的话 : 只有在人群中间，才能认识自己。带着这句话, 我们还要更加慎重的审视这个问题: 康德在不经意间这样说过 : 既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。爱尔兰说过一句富有哲理的话 : 越是无能的人，越喜欢挑剔别人的错儿。这不禁令我深思。 虽然有负面的不好的成长经历，却让我明白了很多做人处事的道理，有些道理，可能在断舍离以后，才能真正的大彻大悟。 上帝常常在不经意间开了你一个玩笑，也许，他累了，所以世界上多了那么多不完美和缺陷。 在这个以和谐为主题的社会里，人与人，就应该和谐相处，和谐发展。 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。
莎士比亚在不经意间这样说过 : 本来无望的事，大胆尝试，往往能成功。这句话语虽然很短, 但令我浮想联翩。 尽管微小如蚁，却美如神。在书海中飞翔确实是一生的畅想，但是我却想象为社会尽一份力量。 本人也是经过了深思熟虑,在每个日日夜夜思考这个问题. 通过这一次断舍离，我会认真反省，深刻思考。 既然如此, 关于这次断舍离的原因，显然是有主观态度上的行为。反映出我观念不够先进。 问题的关键究竟为何? 生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 对我个人而言，断舍离不仅仅是一个重大的事件，还可能会改变我的人生。 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 断舍离因何而发生? 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 尽管微小如蚁，却美如神。在书海中飞翔确实是一生的畅想，但是我却想象为社会尽一份力量。 这里留给我了很多成长的脚印，留给我了很多感动的画面，留给我了很多悔恨的泪水，更留给我了很多从做人到做事的经验和教训. 我从思想上没有把断舍离的方式方法重视起来。 断舍离, 发生了会如何, 不发生又会如何. 我们都知道, 只要有意义, 那么就必须慎重考虑. 断舍离, 到底应该如何实现. 尽管微小如蚁，却美如神。在书海中飞翔确实是一生的畅想，但是我却想象为社会尽一份力量。 我从思想上没有把断舍离的方式方法重视起来。 在这种不可避免的冲突下，我们必须解决这个问题。 一般来讲, 我们都必须务必慎重的考虑考虑. 断舍离似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。 断舍离因何而发生? 这条路很长，有时候走着走着，不经意发现自己迷了路。 断舍离, 到底应该如何实现. 现在，我深深感到，这是一个极其重要的苗头。 对我个人而言，断舍离不仅仅是一个重大的事件，还可能会改变我的人生。 苏轼说过一句著名的话 : 古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。这句话语虽然很短, 但令我浮想联翩。 一般来讲, 我们都必须务必慎重的考虑考虑. 关于这次断舍离的原因，显然是有主观态度上的行为。反映出我观念不够先进。 既然如何, 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 一个人的力量不够，那就发出加倍的力量。 每个人都是独立的个体，有属于自我发展的空间和方向. 生活中, 若断舍离出现了, 我们就不得不考虑它出现了的事实. 就我个人来说, 断舍离对我的意义, 不能不说非常重大. 米歇潘: 生命是一条艰险的峡谷，只有勇敢的人才能通过。吉格·金克拉曾经提到过 : 如果你能做梦，你就能实现它。我希望诸位也能好好地体会这句话。 俾斯麦: 对于不屈不挠的人来说，没有失败这回事。这句话把我们带到了一个新的维度去思考这个问题。 现在，我深深感到，这是一个极其重要的苗头。 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 经过上述讨论 我们都知道, 只要有意义, 那么就必须慎重考虑. 问题的关键究竟为何? 这条路很长，有时候走着走着，不经意发现自己迷了路。 在这种困难的抉择下, 本人思来想去, 寝食难安. 因此我们不能奢求人生，不能抱怨生活，相反，我们要以感恩的心态来对待这并不算漫长的人生。 关于这次断舍离的原因，显然是有主观态度上的行为。反映出我观念不够先进。 我们不得不面对一个非常尴尬的事实, 那就是, 我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解.
所谓断舍离, 关键是断舍离需要如何写. 一般来说, 通过这一次断舍离，我会认真反省，深刻思考。 富勒曾经曾经说过 : 苦难磨炼一些人，也毁灭另一些人。这不禁令我深思。 莎士比亚: 本来无望的事，大胆尝试，往往能成功。这句话语虽然很短, 但令我浮想联翩。 我们不得不面对一个非常尴尬的事实, 那就是, 通过断舍离，我感到这虽然是偶然的，但同时也是长期以来对自己放松要求的必然结果。 易卜生曾经说过 : 伟大的事业，需要决心，能力，组织和责任感。这句话语虽然很短, 但令我浮想联翩。 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的. 一般来讲, 我们都必须务必慎重的考虑考虑. 达尔文曾经说过 : 敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这似乎解答了我的疑惑。`

textArr = textArr.split(',')
console.log(textArr);

class Dot {
  constructor(x, y, i) {
    [this.x, this.y] = [x, y]
    this.index = i
  }


}

class Pattern_EmotionRing {
  constructor(x, y, w, h, r, count, val) {
    [this.x, this.y, this.w, this.h, this.r, this.count] = [x, y, w, h, r, count]
    this.dots = []
    this.offset = 200
    for (let i = 1; i < this.count + 1; i++) {
      let angle = Math.PI * 2 / this.count * i
      let dot = new Dot(this.x + Math.cos(angle) * [this.r + noise(i) * this.offset], this.y + Math.sin(angle) * [this.r + noise(i) * this.offset])
      this.dots.push(dot)
    }
  }

  update(val = 1) {
    this.dots = []
    for (let i = 0; i < this.count; i++) {
      let angle = Math.PI * 2 / this.count * i + Math.sin(frameCount / 10000) * Math.PI * 2
      let dot = new Dot(this.x + Math.cos(angle) * [this.r + noise(i) * [1024 - val] / 10], this.y + Math.sin(angle) * [this.r + noise(i) * [1024 - val] / 10])
      this.dots.push(dot)
    }
  }
}

class Pattern_Data {
  constructor(x, y, w, h, val = 1) {
    [this.x, this.y, this.w, this.h, this.offsetX, this.offsetY] = [x, y, w, h, 0, 0]
    this.count = Math.max(1, Math.floor(val / 100))
    this.shapes = []
    this.pns = []
    this.maxDistance = 30
    // let colorA = color(15,50,10)
    // let colorB = color(54,50,10)
    for (let hor = 0; hor < this.count; hor++) {
      for (let ver = 0; ver < this.count; ver++) {
        this.shapes.push([
          this.x + hor * this.w / this.count,
          this.y + ver * this.h / this.count,
          this.w / this.count,
          this.h / this.count,
          noise(val),
          noise(val)
          // colorA,colorB
        ])
        this.pns.push(Math.random())
      }
    }
  }

  pn(i) {
    return this.pns[i] > 0.5 ? 1 : -1
  }

  update(val) {
    this.count = Math.max(3, Math.floor([1024 - val] / 100))
    this.shapes = []

    // let colorB = color(dataArr[1]/10*1.3,dataArr[2]/50,20)
    for (let hor = 1; hor < this.count + 1; hor++) {
      for (let ver = 1; ver < this.count + 1; ver++) {
        let colorA = color(
          globalHue + hor * ver,
          Math.max(1, Math.sin(dataArr[1] / 1024 / Math.PI) * 100),
          Math.min(80, Math.cos(dataArr[1] / 1024 - hor * ver / 10) * 100)
        )
        this.shapes.push([
          this.x + [hor - 1] * this.w / this.count - noise(hor * ver) * Math.abs(Math.sin([1023 - val] / 1000)) * this.maxDistance,
          this.y + [ver - 1] * this.h / this.count - noise(hor * ver) * Math.abs(Math.sin([1023 - val] / 1000)) * this.maxDistance,
          this.w / this.count,
          this.h / this.count,
          0, 0,
          colorA
          //,colorB
        ])
      }
    }
  }


}

class Pattern_DataShape {
  constructor(x, y, w, h, offX, offY, color) {
    [this.x, this.y, this.w, this.h, this.color, this.offsetX, this.offsetY] = [x, y, w, h, color, offX, offY]
  }
}

class Pattern_Object {
  constructor(x, y, w, h, val = 1) {
    [this.x, this.y, this.w, this.h] = [x, y, w, h]
    this.count = Math.max(1, Math.floor(val / 100))
    this.shapes = []
    let colorA = color(15, 50, 10)
    let colorB = color(54, 50, 10)
    for (let hor = 0; hor < this.count; hor++) {
      for (let ver = 0; ver < this.count; ver++) {
        this.shapes.push([
          this.x + hor * this.w / this.count,
          this.y + ver * this.h / this.count,
          this.w / this.count,
          this.h / this.count,
          colorA, colorB])
      }
    }
  }

  update(val) {
    this.count = Math.max(1, Math.floor([1023 - val] / 100))
    this.shapes = []
    let colorA = color(Math.abs(Math.cos([1023 - val] / 1000) * Math.sin(frameCount / 1000) * 100), Math.abs(Math.cos([1023 - val] / 1000) * 100), Math.cos([1023 - val] / 1000) * 100)
    let colorB = color(Math.abs(Math.sin([1023 - val] / 1000) * Math.sin(frameCount / 1000) * 100), Math.abs(Math.sin([1023 - val] / 1000) * 100), Math.sin([1023 - val] / 1000) * 100)
    for (let hor = 0; hor < this.count; hor++) {
      for (let ver = 0; ver < this.count; ver++) {
        this.shapes.push([
          this.x + hor * this.w / this.count,
          this.y + ver * this.h / this.count,
          this.w / this.count,
          this.h / this.count,
          colorA, colorB])
      }
    }
  }


}

class Pattern_ObjectShape {
  constructor(x, y, w, h, colorA, colorB) {
    [this.x, this.y, this.w, this.h, this.colorA, this.colorB] = [x, y, w, h, colorA, colorB]
  }
}

class Pattern_DreamRing {
  constructor(x, y, index, w) {
    [this.x, this.y, this.index, this.w] = [x, y, index, w]
    this.cirR = this.w / 2 / this.index
    this.r = this.w / 10 * this.index

    this.count = this.index * 3

    this.dots = []

    for (let i = 1; i < this.count + 1; i++) {
      let a = 2 * Math.PI / this.count * i + this.index * 20 + Math.sin(Number(dataArr[3]) / 1024) * Math.PI

      let x = this.x + Math.cos(a) * this.r
      let y = this.y + Math.sin(a) * this.r
      this.dots.push(new Dot(x, y))
    }
  }




}

class Pattern_Dream {
  constructor(x, y, w, h) {
    [this.x, this.y, this.w, this.h] = [x, y, w, h]
    this.val = 1
    this.rings = []
    for (let i = 0; i < this.val; i++) {

      this.rings.push(new Pattern_DreamRing(this.x, this.y, i, this.w))
    }
  }

  update(val) {

    this.val = 10 - Math.max(1, Math.floor(val / 100))
    // console.log(this.val);
    this.rings = []
    for (let i = 0; i < this.val; i++) {
      this.rings.push(new Pattern_DreamRing(this.x, this.y, i, this.w))
    }

  }
}

let patternDream
let patternObj
let patternData
let patternEmotionRing

window.addEventListener('resize', () => {
  setup()
})

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  mask = createGraphics(500, 500)
  


  patternDream = new Pattern_Dream(height / 2, height / 2, height / 2, height / 2)
  patternObj = new Pattern_Object(height, 0, width - height, width - height, 1)
  patternData = new Pattern_Data(height, width - height, width - height, width - height, 1)
  patternEmotionRing = new Pattern_EmotionRing(height * 1.65, height, height, height, height / 3, 100, 20)

  // console.log(patternObj);
  colorMode(HSB, 100)
}

function draw() {




  if(started){
    clear();

    fill(0);
    globalHue = Math.sin(frameCount / 1000) * 100

    patternDream.update(dataArr[3])
    let colorBg = color(Math.abs(Math.sin(frameCount / 1000)) * 100, Math.abs(Math.cos([dataArr[4] - 1023] / 1000)) * 90, Math.abs(Math.sin([1024 - dataArr[4]] / 1000)) * 90)
    fill(colorBg)

    rect(patternDream.x - patternDream.w, patternDream.y - patternDream.h, patternDream.w * 2, patternDream.h * 2)
    blendMode(MULTIPLY);
    noStroke()
    for (let ring of patternDream.rings) {

      for (let [i, dot] of ring.dots.entries()) {
        // console.log(dot);

        let colorA = color(globalHue + i * 1, Math.sin(dataArr[4] / 1024 + ring.cirR) * 90, Math.cos(dataArr[4] / 1024) * 90)
        fill(colorA)

        circle(dot.x, dot.y, ring.cirR)
      }
    }
    circle(patternDream.x, patternDream.y, patternDream.w * 1.7 - Number(dataArr[0]))
    circle(patternDream.x, patternDream.y, patternDream.w * 1.65 - Number(dataArr[0]))


    //Data
    // blendMode(BLEND)
    patternData.update(dataArr[2])
    for (let s of patternData.shapes) {
      let shape = new Pattern_DataShape(...s)
      fill(shape.color)
      // translate(shape.offsetX,shape.offsetY)

      rect(shape.x, shape.y, shape.w, shape.h)
    }

    // Obj
    patternObj.update(dataArr[0])
    for (let s of patternObj.shapes) {
      let shape = new Pattern_ObjectShape(...s)
      fill(shape.colorA)
      triangle(
        shape.x, shape.y,
        shape.x, shape.y + shape.h,
        shape.x + shape.w, shape.y + shape.h,

      )

      fill(shape.colorB)
      triangle(
        shape.x + shape.w, shape.y,
        shape.x + shape.w, shape.y + shape.h,
        shape.x, shape.y
      )
    }




    //Emotion
    blendMode(OVERLAY)
    patternEmotionRing.update(dataArr[1])
    stroke(colorBg)
    strokeWeight(1024 / 2 - dataArr[1])
    // strokeWeight(Math.max(0,1024-Number(dataArr[2])))
    noFill()
    beginShape()
    for (let dot of patternEmotionRing.dots) {
      curveVertex(dot.x, dot.y)
    }
    endShape()


    //Text
    blendMode(DODGE)
    strokeWeight(1)
    for (let [i, data] of dataArr.entries()) {
      text(dataKind[i] + ':' + [1023 - data], 100 * i + 200, height * 0.95);
    }

    blendMode(MULTIPLY)

    //Left
    for (let i = 1; i < 10; i++) {
      // text(textArr[Math.floor(noise(i*dataArr[4])*textArr.length/2)*textArr.length], 50, height*0.95 - i*30 );
    }

    //RightTop
    for (let [i, data] of dataArr.entries()) {
      // rotate(0,0,Math.PI/2)
      text("incoming value: " + data, width - 150, 50 + i * 30);
    }

  }// if


}

function keyTyped() {
  let outByte = key;
  // console.log("Sending " + outByte);
  //serial.write(Number(outByte)); // Send as byte value
  // serial.write(outByte); // Send as a string/char/ascii value
}

function serialEvent() {
  // read a byte from the serial port:
  let inByte = serial.readLine()

  if (inByte) {
    dataArr = inByte.split(',');
  }


}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}