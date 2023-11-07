import ProfileCard from "@/components/ProfileCard"

export interface DivisionProps {
  name: string,
  people: object[]
}

export default function Division(props: DivisionProps) {
  return (
    <div className="mb-20">
      <h1 className="text-2xl text-center font-bold py-2 px-5 rounded-xl border-2 border-white border-solid border-opacity-30 bg-white bg-opacity-30 backdrop-blur mb-5">{props.name}</h1>
      <div className="flex max-w-5xl flex-row flex-wrap justify-center gap-4">
        {props.people.map(person => <ProfileCard profile={person as any} />)}
      </div>
    </div>
  )
}