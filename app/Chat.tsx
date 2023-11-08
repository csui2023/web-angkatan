import Image from "next/image";

export interface ChatProps {
  children: string,
  name: string,
  position: 'left' | 'right',
}

export default function Chat(props: ChatProps) {
  return (
    <div className={`flex items-end gap-4 ${props.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
      <Image alt="" width={48} height={48} src="/pfp/andrew-devito-aryo.jpg" className="rounded-full" />
      <div className={`${props.position === "left" ? "text-left mr-auto" : "text-right ml-auto"} max-w-3xl p-5 bg-white bg-opacity-30 backdrop-blur border-white border-2 border-solid border-opacity-30 rounded-xl`}>
        <p className="pb-2 border-b-2 border-white border-opacity-30">{props.children}</p>
        <p className="pt-2 text-sm">{props.name}</p>
      </div>
    </div>
  );
}
