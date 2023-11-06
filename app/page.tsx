import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/assets/images/hero-background.png`}
          alt={"hero-background"}
          width={1920}
          height={1080}
          className="w-screen min-h-[500px] object-cover bg-black/20 shadow-xl rounded-b-[40px]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-4 lg:space-y-12 justify-center items-center p-4 md:p-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center">
            Welcome, to <pre className="inline text-blue-600">CSUI</pre>{" "}
            <pre className="inline text-red-600">2023</pre>'s Website
          </h1>
          <Link
            className="bg-neutral-800 text-xs md:text-lg text-white py-2 px-3 md:px-6 rounded-lg md:rounded-xl flex justify-center items-center hover:scale-110 transition"
            href="#."
          >
            <FaArrowDown />
            <h1 className="ml-2 md:ml-3">See More</h1>
          </Link>
        </div>
      </div>
      <div
        className="px-4 py-10 mx-auto max-w-5xl space-y-5 text-justify"
        id="."
      >
        <p>
          Nihil aliquid vel expedita maxime quia aut. Tempora illo aut placeat
          animi enim aut eveniet vel. Cum et earum doloribus aliquam. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Iusto, debitis
          officiis, beatae asperiores iste ad reprehenderit a non, omnis eum
          facere cumque libero quam rerum. Quam dolorem labore eligendi ipsam
          ratione, mollitia nam voluptatum odit, minima non in repudiandae.
        </p>

        <p>
          Necessitatibus fugit rerum reprehenderit possimus. Magni atque hic
          minus tempora sit qui modi qui. Reiciendis et quasi consequatur odio
          accusantium exercitationem placeat. Qui omnis corrupti fugit id
          blanditiis illo consequuntur omnis. Sint, repudiandae. Itaque, iure!
          Veritatis in dolores porro asperiores perspiciatis eaque eligendi,
          incidunt, alias maiores aut animi, ducimus accusamus! Consequatur, ab,
          quae amet voluptatibus dolore repellendus.
        </p>

        <p>
          Blanditiis voluptas doloremque corporis eos ipsa mollitia non. Dolore
          illum ut soluta omnis ipsam. Quam quas ut nam recusandae. Eveniet
          architecto inventore reprehenderit ut cupiditate quasi id ut. Nemo
          quam doloremque ad quae dolor est aperiam. Atque, harum! Aperiam
          quidem et sunt alias? Ducimus, similique? Quas velit qui iste enim,
          atque repellendus nobis veritatis.
        </p>

        <p>
          A nisi quae aut laudantium voluptates. Incidunt qui voluptate facere
          consectetur. Veniam dolores et blanditiis consequatur odio possimus
          fugiat. Perspiciatis enim, dolorum iste explicabo, cupiditate eveniet,
          reiciendis autem dolor, aliquid praesentium vero soluta vel, dolore
          fugiat impedit minus. Quos sunt numquam saepe repellat quidem
          architecto sit, ad omnis cumque dolores necessitatibus veritatis
          sequi.
        </p>

        <p>
          Et earum consequuntur nobis sed dolor pariatur illo. Eaque magnam non
          eum et illo voluptatem. Expedita non corporis necessitatibus nostrum
          vel quia maxime minima. Omnis optio iusto rem. Adipisci illum, quo
          quisquam perspiciatis, velit repellendus, sint dolorem, dolorum
          molestias iste laudantium eligendi eum deserunt earum error
          dignissimos corporis dolores doloremque.
        </p>

        <p>
          Similique qui aspernatur voluptate ipsa sequi totam et. Magnam
          consectetur natus odio qui deleniti animi enim quia. Rem recusandae
          occaecati aperiam rerum maxime recusandae. Dolorem aut et eum.
          Perspiciatis id fuga dolor. Quisquam, consectetur. Velit aut iusto,
          reprehenderit laudantium doloribus fugit maxime impedit minus.
        </p>

        <p>
          Occaecati autem natus et. Quam asperiores dolorem cupiditate labore.
          Quod quisquam et non. Veritatis ipsum corrupti asperiores qui sapiente
          at unde. Dolores reiciendis quaerat sapiente. Quia eos tempore totam
          eaque et ut laboriosam. In rerum dolorum tenetur odio aspernatur
          expedita quis dolor aliquam reprehenderit, omnis ex soluta voluptate!
        </p>

        <p>
          Ipsa adipisci sapiente sint aliquid. Veritatis at illo velit ut.
          Nesciunt quae non sequi reprehenderit aperiam. Labore suscipit alias
          blanditiis inventore minima impedit quis. Voluptatem ullam ut
          explicabo earum amet repellat et ducimus. Quibusdam autem, quae, at,
          ab nostrum, cum laborum nam debitis impedit eius ea officia ullam
          dolores id repudiandae qui architecto!
        </p>

        <p>
          Reiciendis iste et qui quis natus. Quis et impedit aut. Et sed
          deleniti nihil perspiciatis assumenda porro omnis fugit. Eius
          recusandae dicta cum magnam. Ducimus modi sit mollitia. Ipsum et
          commodi a expedita harum nobis perspiciatis harum. Dolorum aut quis
          quam quisquam. Dicta laudantium aut dignissimos sed adipisci optio
          dolorum omnis. Dolorem minima architecto accusantium molestias
          consequatur quidem quae possimus.
        </p>
      </div>
    </div>
  );
}
