
const DayJs = require('dayjs')

const GetBirthday = (date,bibli) => {

const Birthday = bibli(date)
const CurrentYear = bibli()
const ageInYears = CurrentYear.diff(Birthday,'year')
const NextBirthday = Birthday.add(ageInYears + 1,'year')
const DayToNext = NextBirthday.diff(CurrentYear,'day')
console.log(`Idade:${ageInYears}\nPróximo aniversário:${NextBirthday.format('DD/MM/YYYY')}\nDias até completar ${ageInYears+1} anos:${DayToNext}`)


}
GetBirthday('1997-03-28',DayJs)

