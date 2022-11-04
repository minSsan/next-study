import Link from "next/link";
import React from "react";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 빡빡이입니다
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩
        </h1>
        <p className="mb-8 leading-relaxed">
          몸이 능히 이는 할지니, 것이다.보라, 얼마나 것이다. 옷을 인생을 우리
          이상이 피가 이상의 이것은 위하여서. 만천하의 용감하고 얼음이 이상의
          군영과 투명하되 영원히 것이다. 가슴이 청춘의 품었기 가장 방황하였으며,
          그들은 이것을 밥을 끓는다. 않는 있는 가지에 운다. 인간이 따뜻한 원질이
          구하지 거선의 행복스럽고 않는 동력은 가는 있다. 봄바람을 과실이
          유소년에게서 없으면 설산에서 타오르고 위하여서. 몸이 보이는 소담스러운
          피가 것이다. 곳이 꽃이 돋고, 트고, 철환하였는가?
        </p>
        <div className="flex justify-center">
          <Link href={"/projects"}>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
