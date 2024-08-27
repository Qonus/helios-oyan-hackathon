import styles from "./page.module.scss";
import Article from "@/components/Article/ArticleComponent/Article";
import AuthorCardsList from "@/components/Author/AuthorCardsListComponent/AuthorCardsList";

async function fetchArticleData(article_id?: string) {
  const response = await fetch(
    `${process.env.API_URL}/api/articles/${article_id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article data");
  }
  return response.json();
}

export default async function ArticlePage({ params }: any) {
  const { id } = params;
  let articleData;

  try {
    articleData = await fetchArticleData(id);
  } catch (error) {
    return (
      <p className="results_not_found_message">Произведение не существует.</p>
    );
  }

  const { article, users } = articleData;

  if (!article) {
    return (
      <p className="results_not_found_message">Произведение не существует.</p>
    );
  }
  return (
    <div className={styles.article_page}>
      <div className={styles.article_page_wrapper}>
        <Article
          title={article.title}
          publish_date={article.published_date || "не опубликовано"}
          last_changed={article.updated_at || ""}
          image={article.image || "/default_image.jpg"}
          content={article.content}
        />
        {users.length ? (
          <div className={styles.article_page__authors}>
            <h3>Связанные авторы</h3>
            <hr />
            <AuthorCardsList users={users} />
          </div>
        ) : (
          <p className="results_not_found_message">Связанных авторов нету.</p>
        )}
      </div>
    </div>
  );
}
