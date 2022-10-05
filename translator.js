const readline = require('readline');


milly_dictionary = {
    'hello': '👋',
    'bye': '💪',
    'how': ':3',
    'cute': '💋',
    'bunny': '😻',
    'cat': '😸',
    'zolotzhe': '🙌',
    'milly': '❤',
    'good': '<3',
    'bad': ':C',
    'sam': '💙',
    'millymilly': '🌞',
    'my': '🌹',
    'beautiful': '🥀',
    'when': '🍀',
    'yes': '🌻',
    'no': '🌼',
    'where': '🌸',
    'you': '🎵',
    'are': '🍡',
    'sexy': '😈',
    'sick': '😷',
    'happy': '😄',
    'sleepy': '😐',
    'horny': '😤',
    'fuck': '😚',
    'me': '🌺',
    'flowers': '💐',
    'night': '🌒',
    'morning': '🌅',
    'weather': '⛅',
    'why': '⭐',
    'date': '✨',
    'take': '🌠',
    'on': '🌃',
    'a': '💌',
    'dancing': '🎼',
    'hugs': '🔥',
    'excited': '🎹',
    'want': '📣',
    'your': '📻',
    'speak': '✌',
    'mine': '🍧',
    'im': '🍰',
    'with': '🥛',
    'anal': '🍩',
    'missed': '🏊',
    'hi': '😌',
    'sad': '😢',
    'upset': '😞',
    'deal': '🙏',
    'free': '😐',
    'the': '✉',
    'message': '📬',
    'buy': '📦',
    'maybe': '👌',
    'of': '∇',
    'have': '⊺',
    'and': '⊚',
    'do': '✖',
    'make': '／',
    'lets': '∥',
    'not': '🎤',
    'this': 'β',
    'but': '⊠',
    'from': '📝',
    'they': '%',
    'his': '@',
    'that': '*',
    'she': '^',
    'or': '✒',
    'which': '&',
    'days': '⛔',
    'we': '🔴',
    'an': '🔵',
    'out': '⊴',
    'up': '▷',
    'see': 'ɔ:',
    'know': 'aɪ',
    'time': 'æ',
    'who': '♅',
    'them': '♂',
    'at': '♀',
    'could': '♆',
    'so': '♁',
    'him': '🏮',
    'year': '♒',
    'into': '🔦',
    'its': '♉',
    'hard': '♊',
    'think': '♋',
    'eat': '♌',
    'wine': '♎',
    'come': '♜',
    'then': '♤',
    'than': 'い',
    'more': '♐',
    'about': '🚨',
    'now': '🚥',
    'last': '🚬',
    'nice': '🚸',
    'baby': '🚹',
    'other': '⛲',
    'give': '🚧',
    'just': '🚭',
    'should': '🚻',
    'these': '☕',
    'stone': '🙇',
    'also': '🙈',
    'start': '😵',
    'any': '⚣',
    'only': 'シ',
    'need': '↓',
    'very': '⬋',
    'may': '⬍',
    'ready': '☯',
    'look': '☎',
    'like': '💘',
    'use': '✂',
    'her': '⏰',
    'protective': '⏳',
    'because': '⌛',
    'as': '📅',
    'find': '📆',
    'day': '⏪',
    'young': '⏫',
    'old': '🏡',
    'interesting': '⏬',
    'fun': '🔠',
    'movie': '🏠',
    'restaurant': '🔢',
    'music': '🔑',
    'sleep': '🔒',
    'tight': '💇',
    'friends': '💇',
    'girlfriend': 'Ⅿ',
    'boyfriend': 'S',
    'friend': '🔷',
    'hate': '🔶',
    'today': '㊛',
    'i': '㊯',
    'angry': '❎',
    'noon': '👀',
    'impressed': '👑',
    'hungry': '🐍',
    'strong': '🌿',
    'talented': '🐦',
    'rainbow': '🌈',
    'raining': '🌊',
    'snowing': '☔',
    'star': '⛅',
    'stars': '🌂',
    'kiss': 'ꕥ',
    'ukraine': '🏹',
    'usa': '✔',
    'vacation': '💯',
    'sweet': '✅',
    'ugly': '+=',
    'libra': '≣',
    'virgo': '☄',
    'present': 'ㄼ',
    'gift': 'ㆃ',
    'wonderful': '¿',
    'too': '❜',
    'sir': '🍌',
    'mister': '🍄',
    'girl': '〶',
    'sonechko': '␟',
    'small': '⌘',
    'big': '⌓',
    'everything': '🍅',
    'nothing': '🍉',
    'dress': '🍚',
    'book': '🌽',
    'something': '🍒',
    'ass': '🍑',
    'cool': '↷',
    'new': '‰',
    'ill': '✡',
    'yet': '🍥',
    'better': '🍻',
    'waiting': '✹',
    'bar': '🎪',
    'drunk': 'Ⅲ',
    'text': '🤼',
    'texting': '℉',
    'amazing': '👏',
    'hot': '👊',
    'model': '👆',
    'working': '≏',
    'dream': '≟',
    'dreams': '≋',
    'mavochka': '╍',
    'genius': 'ღ',
    'work': 'а',
    'word': 'б',
    'words': 'в',
    'people': 'е',
    'way': 'ё',
    'send': 'ж',
    'number': 'з',
    'water': 'к',
    'popular': 'л',
    'place': 'м',
    'cry': 'н',
    'back': 'о',
    'part': 'р',
    'sound': 'с',
    'list': 'у',
    'thing': 'ф',
    'name': 'х',
    'man': 'ц',
    'line': 'ч',
    'sentence': 'ш',
    'boy': 'щ',
    'farm': 'ъ',
    'men': 'ы',
    'land': 'ь',
    'home': 'э',
    'hand': 'ю',
    'end': 'ゑ',
    'eye': 'ん',
    'eyes': 'ゐ',
    'page': 'わ',
    'house': 'の',
    'animal': 'ね',
    'fire': 'ぬ',
    'air': 'に',
    'picture': 'な',
    'earth': 'ろ',
    'plant': 'れ',
    'school': 'る',
    'america': 'り',
    'answer': 'ら',
    'mother': 'と',
    'father': 'て',
    'sister': 'つ',
    'brother': 'ち',
    'uncle': 'た',
    'granma': 'よ',
    'grandmother': 'す',
    'gladpa': 'せ',
    'grandfather': 'そ',
    'point': 'や',
    'letter': 'ゆ',
    'sea': 'し',
    'car': 'z',
    'feet': 'v',
    'problem': 'b',
    'belly': 'n',
    'legs': 'm',
    'side': 'う',
    'paper': 'd',
    'example': 'f',
    'life': 'g',
    'rest': 'h',
    'tree': 'j',
    'country': 'l',
    'food': 'q',
    'town': 'w',
    'street': 'r',
    'world': 't',
    'city': 'u',
    'job': 'さ',
    'head': '[',
    'group': ']',
    'mile': '{',
    'river': '}',
    'state': '|',
    'indian': 'も',
    'irl': 'め',
    'face': 'む',
    'idea': 'み',
    'song': 'ま',
    'privet': 'こ',
    'daughter': 'け',
    'mountain': 'く',
    'family': 'き',
    'children': 'か',
    'story': 'ほ',
    'large': 'へ',
    'going': 'ふ',
    'tiny': 'ひ',
    'huge': 'は',
    'next': 'お',
    'such': 'え',
    'some': '诶',
    'left': '比',
    'there': '西',
    'right': '迪',
    'red': '伊',
    'cod': '艾',
    'green': '弗',
    'orange': '吉',
    'white': '尺',
    'black': '杰',
    'yellow': '开',
    'purple': '勒',
    'silver': '马',
    'brown': '娜',
    'gray': '哦',
    'gaming': '屁',
    'olive': '吉',
    'violet': '吾',
    'charcoal': '儿',
    'handsome': '丝',
    'bronze': '提',
    'cream': '伊',
    'gold': '维',
    'tan': '豆',
    'teal': '贝',
    'mustard': 'à',
    'navy': 'â',
    'coral': 'ç',
    'lavender': 'é',
    'rose': 'è',
    'roses': 'ê',
    'peach': 'î',
    'rust': 'ï',
    'ruby': 'œ',
    'clay': '👁',
    'beige': '👅',
    'cuddles': '👄',
    'different': 'ô',
    'even': 'ù',
    'above': 'û',
    'important': '🎮',
    'most': '🎯',
    'lovely': '🤸',
    'well': '🚴',
    'few': '🏋',
    'every': '⛹',
    'each': '🎗',
    'others': '🤹',
    'high': '🎱',
    'ideas': 'á',
    'mint': 'í',
    'soft': 'ñ',
    'enough': 'ó',
    'soon': 'ú',
    'again': '🥊',
    'kind': '🥋',
    'together': '🎰',
    'almost': '🎲',
    'really': '🎭',
    'to': '尔',
    'near': '维',
    'often': '克',
    'son': '斯',
    'sometimes': '贼',
    'never': '德',
    'much': '🎧',
    'show': '🎷',
    'down': '«',
    'far': '»',
    'close': 'ò',
    'by': '⚾',
    'proud': 'ì',
    'dinner': '🏀',
    'without': '🏐',
    'system': 'ã',
    'through': '🎟',
    'for': 'õ',
    'after': '⛳',
    'before': 'ä',
    'between': 'å',
    'sex': 'ð',
    'sometime': 'ø',
    'us': 'ß',
    'our': 'þ',
    'fall': 'ÿ',
    'wait': '⚽',
    'many': '🥉',
    'if': '🥈',
    'safe': '🏅',
    'dont': '🎻',
    'room': '🎺',
    'be': '🎸',
    'poor': '🎫',
    'accident': '🎖',
    'act': 'Ѫ',
    'add': 'Ѧ',
    'address': 'ѣ',
    'ago': 'Ѣ',
    'airport': 'ъ',
    'along': 'ξ',
    'among': 'ψ',
    'appear': 'Δ',
    'apple': 'Θ',
    'arms': '𝄩',
    'bear': '𝄺',
    'begin': '𝅘𝅥𝅲',
    'behind': 'Ω',
    'believe': '∇',
    'blood': 'δ',
    'blue': 'ε',
    'both': 'ζ',
    'break': 'η',
    'building': 'ι',
    'built': 'λ',
    'business': 'μ',
    'card': '𝄿',
    'case': 'σ',
    'central': 'φ',
    'century': 'ও',
    'check': '∂',
    'chicken': '𝄾',
    'choose': 'ϰ',
    'clock': 'ϖ',
    'collect': 'ϱ',
    'colour': 'ಐ',
    'common': '𝄽',
    'computer': '𝄞',
    'condition': '𝄟',
    'consider': '𝇜',
    'course': '𝇛',
    'court': '𝇚',
    'crazy': '𝇙',
    'cross': '𝇘',
    'cup': '𝇗',
    'dangerous': '𝇖',
    'dark': '𝇓',
    'decide': '𝇕',
    'depend': '𝇒',
    'desk': '𝇑',
    'hide': '𝇎',
    'direct': '𝇍',
    'direction': '𝇌',
    'discuss': 'ೋ',
    'dollar': 'ೌ',
    'draw': '𝇋',
    'during':  'ೄ',
    'ear': '𝇊',
    'early': '𝇉',
    'he': '𝇇',
    'edge': '𝇏',
    'effect': '𝇆',
    'their': '𝇅',
    'examine': '𝇄',
    'exchange': '𝅫',
    'field': '𝅪',
    'film': '𝅛',
    'fine': '𝅘',
    'fish': '઼',
    'floor': 'ઽ',
    'fly': 'ા',
    'form': 'િ',
    'fruit': 'ી',
    'general': '𝅘𝅥𝅯',
    'gifts': '𝅘𝅥𝅰',
    'glad': 'ૃ',
    'glass': 'ૄ',
    'government': 'ૅ',
    'grow': 'ે',
    'half': 'ૈ',
    'happen': 'ૉ',
    'hear': 'ો',
    'heart': 'ૌ',
    'hold': 'ঢ',
    'hour': 'ণ',
    'ice': 'ত',
    'illness': 'থ',
    'imagine': 'দ',
    'immediately': 'ধ',
    'inform': 'ন',
    'tell': 'প',
    'key': 'ফ',
    'less': 'ব',
    'lines': 'ভ',
    'little': 'ম',
    'low': 'য',
    'magazine': 'র',
    'mark': 'ল',
    'material': 'শ',
    'mean': 'ষ',
    'meat': 'স',
    'meeting': 'ঁ',
    'milk': 'ং',
    'mind': 'ঃ',
    'minute': 'অ',
    'nature': 'আ',
    'nearby': 'ই',
    'teacher': 'ঈ',
    'off': 'উ',
    'office': 'ঊ',
    'once': 'ঋ',
    'order': 'ঌ',
    'parent': 'এ',
    'party': 'ঐ',
    'pass': 'ঔ',
    'past': 'ক',
    'patient': 'খ',
    'pencil': 'ಓ',
    'perhaps': 'ಔ',
    'piece': 'ಕ',
    'pink': 'ಖ',
    'plate': 'ಗ',
    'post': 'ಘ',
    'protect': 'ಙ',
    'purpose': 'ಝ',
    'quick': 'ಞ',
    'race': 'ಲ',
    'radio': 'ಶ',
    'rain': 'ಹ',
    'remove': 'ೀ',
    'reply': 'ಾ',
    'wanna': 'ಿ',
    'ride': 'ಧಿ',
    'ring': 'ೈ',
    'rise': '🏸',
    'rock': '೬',
    'search': 'ભ',
    'secret': 'મ',
    'sell': 'ય',
    'sense': 'ર',
    'shoe': 'લ',
    'short': 'ળ',
    'similar': 'વ',
    'simple': 'શ',
    'since': 'ષ',
    'situation': 'સ',
    'slow': 'હ',
    'smile': 'ℬ',
    'snow': 'ℰ',
    'single': 'ℯ',
    'try': 'ℱ',
    'speed': 'ℊ',
    'sport': 'ℋ',
    'all': 'ℎ',
    'station': 'ℐ',
    'still': 'ℒ',
    'success': 'ℓ',
    'sugar': 'ℳ',
    'summer': 'ℴ',
    'sure': '℘',
    'tall': 'ℛ',
    'tea': 'ℭ',
    'television': 'ℌ',
    'test': 'ℑ',
    'ticket': 'ℜ',
    'though': 'ℨ',
    'travel': 'ℍ',
    'true': 'ℕ',
    'turn': 'ℙ',
    'upon': 'ℚ',
    'usual': 'ℝ',
    'valley': 'ℤ',
    'value': 'ℂ',
    'virus': '҉',
    'walk': '🂴',
    'war': '🂵',
    'watch': '🂶',
    'week': 'あ',
    'while': '🂷',
    'window': '🂸',
    'would': '❥',
    'across': '🂳',
    'action': '🂲',
    'against': '👭',
    'age': '♥',
    'sounds': '👪',
    'alone': '⚦',
    'already': '💟',
    'sorry': '💍',
    'anything': '👬',
    'army': '⚦',
    'art': '💞',
    'away': '💓',
    'become': '☠',
    'bed': '💛',
    'save': '💚',
    'box': '💗',
    'bread': 'ღ',
    'breakfast': '♬',
    'bring': '❣',
    'bus': '♡',
    'camera': '👫',
    'care': '💖',
    'carry': '😍',
    'catch': '💔',
    'cause': '💏',
    'certain': '🂹',
    'change': '🂺',
    'chief': '🂻',
    'church': '🂽',
    'class': '🂾',
    'company': '🂱',
    'confirm': '🂼',
    'continue': '𝅗𝅥',
    'control': '♢',
    'corner': '♧',
    'cost': '♣',
    'cover': '🏓,',
    'culture': '🏒',
    'dead': '🏑',
    'dear': '🚣',
    'decision': '🏏',
    'deep': '🎳',
    'describe': '🎾',
    'die': '♪',
    'difficult': '♩',
    'distance': '🎜',
    'sun': '🏈',
    'drive': '🏉',
    'dry': '⛷',
    'education': '🏂',
    'enjoy': '🏌',
    'sunny': '♫',
    'evening': '⛸',
    'real': '🎣',
    'price': '🎽',
    'expect': '🎿',
    'expensive': 'ㄱ',
    'fact': 'ㄴ',
    'fast': 'ㄷ',
    'feel': 'ㄹ',
    'powerful': 'ㅂ',
    'fight': 'ㅅ',
    'flower': 'ㅇ',
    'pretty': 'ㅈ',
    'police': 'ㅊ',
    'full': 'ㅋ',
    'garage': 'ㅌ',
    'garden': 'ㅍ',
    'playing': 'ㅎ',
    'great': 'ㄲ',
    'hope': 'ㄸ',
    'invite': 'ㅃ',
    'impossible': 'ㅆ',
    'include': 'ㅉ',
    'industry': 'ㅏ',
    'interest': 'ㅐ',
    'island': 'ㅑ',
    'journey': 'ㅒ',
    'juice': 'ㅓ',
    'keep': 'ㅔ',
    'late': 'ㅕ',
    'leave': 'ㅖ',
    'let': 'ㅗ',
    'meet': 'ㅘ',
    'member': 'ㅙ',
    'plan': 'ㅚ',
    'moment': 'ㅛ',
    'month': 'ㅜ',
    'phone': 'ㅝ',
    'must': 'ㅞ',
    'own': 'ㅟ',
    'personal': 'ㅠ',
    'position': 'ㅡ',
    'possible': 'ㅢ',
    'president': 'ㅣ',
    'product': 'ก',
    'provide': 'ข',
    'public': 'ฃ',
    'quite': 'ค',
    'rather': 'ฅ',
    'reason': 'ฆ',
    'receive': 'ง',
    'fucking': 'จ',
    'remain': 'ฉ',
    'remember': 'ช',
    'report': 'ซ',
    'result': 'ฌ',
    'return': 'ญ',
    'round': 'ฎ',
    'stay': 'ฏ',
    'seat': 'ฐ',
    'service': 'ฑ',
    'several': 'ฒ',
    'shall': 'ณ',
    'south': 'ด',
    'spring': 'ต',
    'study': 'ถ',
    'under': 'ท',
    'view': 'ธ',
    'voice': 'น',
    'lover': 'บ',
    'wife': 'ป',
    'woman': 'ผ',
    'best': 'ฝ',
    'able': 'พ',
    'ask': 'ฟ',
    'always': 'ภ',
    'around': 'ม',
    'loving': 'ย',
    'body': 'ร',
    'miss': 'ล',
    'call': 'ว',
    'can': 'ศ',
    'careful': 'ษ',
    'chair': 'ส',
    'chance': 'ห',
    'cheese': 'ฬ',
    'child': 'อ',
    'cinema': 'ฮ',
    'clean': '–รรม',
    'clear': '–รร',
    'dirty': '–อย',
    'cold': 'ـب',
    'cut': 'ـج',
    'dance': 'ـح',
    'kisses': 'ـخ',
    'doctor': 'ـد',
    'document': 'ـذ',
    'dog': 'ـر',
    'door': 'ـز',
    'drink': 'ـس',
    'ate': 'ـش',
    'easy': 'ـص',
    'egg': 'ـض',
    'explain': 'ـط',
    'first': 'ـظ',
    'game': 'ـع',
    'get': 'ـغ',
    'go': 'ـف',
    'help': 'ـق',
    'inside': 'ـك',
    'it': 'ـل',
    'light': 'ـم',
    'live': 'ـن',
    'long': 'ـه',
    'learn': 'ـي',
    'money': 'ـو',
    'move': 'ئ',
    'open': '手',
    'park': '拉',
    'pay': '水',
    'peace': '口',
    'pen': '廿',
    'person': '卜',
    'pictures': '山',
    'places': '戈',
    'play': '人',
    'please': '心',
    'prefer': '日',
    'put': '尸',
    'question': '木',
    'reach': '火',
    'read': '土',
    'road': '竹',
    'run': '中',
    'say': '難',
    'second': '金',
    'set': '女',
    'ship': '月',
    'shop': '弓',
    'sit': '。',
    'stand': '–ึ',
    'stop': '–ื',
    'student': '–ู',
    'table': 'แ–',
    'thats': '🚘',
    'understand': '$',
    'visit': '💀',
    'write': '£',
    'protecting': '✦',
    'rich': '😝',
    'top': '💢',
    'was': '𝅕',
    'were': '–ี',
    'yesterday': '💤',
    'bath': '🔰',
    'shower': '🛐',
    'tired': '⚛',
    'awake': '✡',
    'muse': '🔞',
    'hotel': '👣',
    'rough': '✊',
    'rules': '💅',
    'instead': '𝅘𝅥𝅮',
    'nervous': '👂',
    'smiling': '🤜',
    'been': '📣',
    'thinking': '🤞',
    'eating': '👇',
    'done': '👈',
    'starting': '👉',
    'joke': '🐒',
    'funny': '💃',
    'afternoon': '🐭',
    'forgot': '🐸',
    'afraid': '🕺',
    'doing': '🎬',
    'kinky': '🏆',
    'somewhere': '🎨',
    'tasty': '🥁',
    'asleep': '🏄',
    'arrive': '🏇',
    'cooking': '𝅓',
    'crying': '𝅐',
    'watching': '𝅆',
    'given': '𝆳',
    'join': '𝆹𝅥𝅯',
    'made': '𝆹𝅥𝅮',
    'said': '𝆹𝅥',
    'seen': '𝆰',
    'came': '𝆚',
    'saw': '💾',
    'tried': '𝆘',
    'called': '𝆗',
    'felt': '💎',
    'glasses': '👓',
    'babe': '🕶',
    'busy': '👔',
    'meaning': '👕',
    'keeping': '👖',
    'letting': '👗',
    'helped': '👘',
    'liked': '👙',
    'sat': '👚',
    'wrote': '🎒',
    'happened': '👞',
    'lost': '👠',
    'met': '👡',
    'learnt': '👒',
    'understood': '🎓',
    'stopped': '💄',
    'followed': '☂',
    'spoke': '💼',
    'won': '🛀',
    'spoken': '🛌',
    'growing': '💣',
    'hugging': '🔪',
    'opened': '🗺',
    'sent': '🛎',
    'sending': '💈',
    'kill': '⌚',
    'decided': '⏲',
    'editing': '🌡',
    'passing': '🎈',
    'moving': '🎉',
    'acting': '🎊',
    'adorable': '🎎',
    'bored': '🎏',
    'brave': '🎐',
    'bright': '🎀',
    'charming': '🎁',
    'magic': '🔮',
    'tarot': '🕹',
    'artistic': '🖼',
    'skinny': '🎙',
    'fat': '🎚',
    'chubby': '🎛',
    'dizzy': '🕳',
    'east': '📞',
    'coast': '📟',
    'gets': '📠',
    'insane': '🔋',
    'fancy': '💻',
    'fantastic': '🖥',
    'flat': '🖨',
    'fresh': '⌨',
    'friendly': '🖱',
    'gorgeous': '🖲',
    'graceful': '💽',
    'healthy': '💿',
    'jealous': '📀',
    'haughty': '🎥',
    'nutty': '🎞',
    'perfect': '📺',
    'petite': '📷',
    'plain': '📸',
    'rotten': '📹',
    'salty': '📼',
    'pussy': '🔍',
    'sarcastic': '🔎',
    'silly': '🕯',
    'terrible': '💡',
    'love': '📔',
    'witch': '📕',
    'mom': '📖',
    'will': '📗',
    'what': '📘',
    'talking': '📙',
    'downtown': '📚',
    'in': '📓',
    'is': '📃',
    'dad': '📜',
    'laugh': '📰',
    'laughing': '🗞',
    'news': '📑',
    'secrets': '🔖',
    'stuff': '🏷',
    'inspiring': '📧',
    'bird': '💰',
    'elephant': '💸',
    'snail': '💳',
    'dogs': '📨',
    'kitten': '📩',
    'driving': '📤',
    'audio': '📥',
    'mail': '📫',
    'trash': '📪',
    'reading': '📭',
    'emotions': '📮',
    'emotional': '🗳',
    'numbers': '🖋',
    'wave': '🖌',
    'hair': '🖍',



}


let milly_reverse_dictionary = {};

for(let key in milly_dictionary){
  milly_reverse_dictionary[obj[key]] = key;
}

console.log(milly_reverse_dictionary)


function translator(phrase)
{
  let translation = ''
  //tranlation = '' - ver Translation = string
  let list_of_words = phrase.lower().split()
  //if the phrase was "hello how are you" the outcome would be ->
  //list_ofwords = [hello, how, are, you]

  //list_of_words = phrase.split() - spliting words from each other.

  for (word in list_of_words){


      if (word in milly_dictionary) {
    translation = translation + ' ' + milly_dictionary[word]
      }
       
      else if (word in milly_reverse_dictionary) {
        translation = translation + ' ' + milly_reverse_dictionary[word]
      }
   
      else {
        translation = translation + ' ' + word
      }
return translation
}
}


 /*still need to test this part on how to translate the value of a word instead of the original word*/

  //for key, value in list_of_words:
  //if the value is in milly dictionary
    


//console.log(translator(readline('Welcome to the Milly's translator! <3 Please, dear zolotzhe, enter your phrase: '))) 



const rl = createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question('Welcome to the Milly translator! Please, dear zolotzhe, enter your phrase', (answer) => {
 // TODO: Log the answer in a database
 console.log(`Thank you for your valuable feedback: ${answer}`);

 rl.close;
});
