import unpuffd from '../assets/images/unpuffd.png'
import goodfood from '../assets/images/foodweather.png'
import workday from '../assets/images/workdayschedule.png'
import teampro from '../assets/images/teamgenerator.png'
import text from '../assets/images/texteditor.png'
import ecommerce from '../assets/images/ecommerce.png'

const unpuffdSrc = 'https://github.com/coding-p2-g2/unpuffd'
const goodSrc = 'https://seasons-of-food.github.io/whats-your-food-temp/'
const workdaySrc = 'https://jcastillo9.github.io/day-planner/'
const teamSrc = 'https://watch.screencastify.com/v/M9IKMtFT8ukbXe7pcuZ0'
const textSrc = 'https://jc-just-another-text-editor.herokuapp.com/'
const commerceSrc = 'https://watch.screencastify.com/v/gwXQFFFMBFF44oMc4V86'
const unpuffdGh = 'https://github.com/coding-p2-g2/unpuffd.git'
const goodGh = 'https://github.com/seasons-of-food/whats-your-food-temp.git'
const workdayGh = 'https://github.com/jcastillo9/day-planner.git'
const teamGh = 'https://github.com/jcastillo9/team-profile-generator.git'
const textGh = 'https://github.com/jcastillo9/pwa-text-editor.git'
const commerceGh = 'https://github.com/jcastillo9/e-commerce-app.git'

const projects = [
   {id: 1, title: 'UnPuffd', imageSrc: unpuffd, livePage: unpuffdSrc, repo: unpuffdGh },
   {id: 2, title: 'Good Weather, Good Food, and Good Mood', imageSrc: goodfood, livePage: goodSrc, repo: goodGh },
   {id: 3, title: 'Work Day Planner', imageSrc: workday, livePage: workdaySrc, repo: workdayGh },
   {id: 4, title: 'Ecommerce App', imageSrc: ecommerce, livePage: commerceSrc, repo: commerceGh },
   {id: 5, title: 'Team Profile Generator', imageSrc: teampro, livePage: teamSrc, repo: teamGh },
   {id: 6, title: 'Text Editor', imageSrc: text, livePage: textSrc, repo: textGh },
]

export default projects;