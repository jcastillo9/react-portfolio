import unPuffd from '../assets/images/unpuffd.png'
import goodFood from '../assets/images/foodweather.png'
import workDay from '../assets/images/workdayschedule.png'
import teamPro from '../assets/images/teamgenerator.png'

const unpuffdSrc = 'https://github.com/coding-p2-g2/unpuffd'
const goodSrc = 'https://seasons-of-food.github.io/whats-your-food-temp/'
const gitHub =  'https://jcastillo9.github.io/'
const workdaySrc = gitHub + 'day-planner/'
const teamSrc = 'https://watch.screencastify.com/v/M9IKMtFT8ukbXe7pcuZ0'
const unpuffdGh = 'https://github.com/coding-p2-g2/unpuffd.git'
const goodGh = 'https://github.com/seasons-of-food/whats-your-food-temp.git'
const gitRepo = 'https://github.com/jcastillo9/'
const workdayGh = gitRepo + 'day-planner.git'
const teamGh = gitRepo + 'team-profile-generator.git'

const projects = [
    {id: 1, title: 'UnPuffd', imageSrc: {unPuffd}, livePage: {unpuffdSrc}, repo: {unpuffdGh} },
    {id: 2, title: 'Good Weather, Good Food, and Good Mood', imageSrc: {goodFood}, livePage: {goodSrc}, repo: {goodGh} },
    {id: 3, title: 'Work Day Planner', imageSrc: {workDay}, livePage: {workdaySrc}, repo: {workdayGh} },
    {id: 4, title: 'Team Profile Generator', imageSrc: {teamPro}, livePage: {teamSrc}, repo: {teamGh} },
    // {id: 5, title: 'UnPuffd', imageSrc: {unPuffd}, livePage: {unpuffdSrc}, repo: {unpuffdGh} },
    // {id: 6, title: 'UnPuffd', imageSrc: {unPuffd}, livePage: {unpuffdSrc}, repo: {unpuffdGh} },
]

export default projects;