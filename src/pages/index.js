import React from "react";
import { NovelTile, Container, InnerContainer, Separator } from "../components";

export default function Home() {
  const tileaDesc = (
    <div className="space-y-4">
      <p>
        With the progression of his Chuuni Disease, Shioda Tetsuya is shunned by
        his family, and dies in despair. He vowed that if he was born again,
        this time he would stay away from delusions and live life seriously.
        Fortunately, he reincarnated in another world as a girl named Tilea, and
        lived a happy life with her kind parents and adorable little sister,
        but…
      </p>
      <p>
        Lately, she&apos;s been troubled. Her beloved sister had begun talking
        about how she was actually one of the Six Demon Generals, serving
        directly under Demon King Zorg, a descendant of the Three Great Demons.
        The situation was looking bad. She had to do something before this
        Chuuni Disease got any worse!
      </p>
      <p>
        This is a fantasy “misunderstanding story” about a protagonist who has
        not noticed in the slightest that she&apos;s a “cheat”-like existence,
        and how in her efforts to heal her sister&apos;s Chuuni Disease (except
        that she really is one of the Six Demon Generals), she somehow or other
        ended up setting out to defeat the Demon King.
      </p>
    </div>
  );

  return (
    <Container>
      <InnerContainer>
        <h1 className="dark:text-gray-300">Novels</h1>
        <Separator />
        <div className="flex bg-white w-[100vw] lg:w-full flex-col items-center select-none dark:bg-[rgb(21,19,19)]">
          <NovelTile
            title={`Tilea's Worries`}
            description={tileaDesc}
            link={"/tileasworries"}
            author={"里奈使徒"}
            image={require("../assets/TileasWorries/tileasworries1.jpg")}
          />
          <Separator />
        </div>
      </InnerContainer>
    </Container>
  );
}
