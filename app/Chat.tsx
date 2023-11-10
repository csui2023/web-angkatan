import Image from "next/image";

export interface ChatProps {
  children: string,
  name: string,
  position: 'left' | 'right',
  pfp: string,
}

export default function Chat(props: ChatProps) {
  return (
    <div className={`flex items-end gap-4 ${props.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
      <Image alt="" width={48} height={48} src={`/pfp/${props.pfp}.jpg`} className="rounded-full" />
      <div className={`${props.position === "left" ? "text-left mr-auto" : "text-right ml-auto"} max-w-3xl p-5 bg-white bg-opacity-30 backdrop-blur border-white border-2 border-solid border-opacity-30 rounded-xl`}>
        <p className="pb-2 px-3 border-b-2 border-white border-opacity-30 max-h-80 overflow-x-hidden overflow-auto ">{props.children}</p>
        <p className="pt-2 px-3 text-sm font-bold">{props.name}</p>
      </div>
    </div>
  );
}
