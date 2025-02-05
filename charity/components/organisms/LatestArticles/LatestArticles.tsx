import React from "react";
import LatestButton from "@/components/atoms/LatestButton/LatestButton";
import ArticleCard from "@/components/molecules/ArticleCard/ArticleCard";
import Newsletter from "@/components/molecules/Newsletter/Newsletter";

interface Article {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
}

const articles: Article[] = [
  {
    title: "Bring together people who care about a cause",
    date: "15 Feb, 2020",
    category: "Water",
    imageSrc: "/recent_causes_image.png",
  },
  {
    title: "Together people who care about a cause",
    date: "10 Feb, 2020",
    category: "Water",
    imageSrc: "/recent_causes_image.png",
  },
  {
    title: "People who care about a cause",
    date: "7 Feb, 2020",
    category: "Water",
    imageSrc: "/recent_causes_image.png",
  },
];

function LatestArticles() {
  return (
    <section className="w-full px-[135px] pt-[138px] pb-[80px] mx-auto sm:px-[23px] justify-center">
      <div className="text-left sm:w-full sm:pl-[30px]">
        <h3 className="text-[#E29F72] tracking-[3px] font-rowdies">Latest News</h3>
        <h2 className="text-[56px] font-bold text-[#3A1700] sm:text-[40px] font-rowdies">Latest Articles</h2>
      </div>

      <div className="pt-[69px] sm:pt-[55px] flex flex-wrap justify-center gap-[30px] sm:gap-4">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            date={article.date}
            category={article.category}
            imageSrc={article.imageSrc}
            raised={20}
            goal={100}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Newsletter />
      </div>

      <div className="pt-[32px] text-center">
        <LatestButton text="All News" variant="outline" />
      </div>
    </section>
  );
}

export default LatestArticles;
