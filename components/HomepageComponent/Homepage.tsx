"use client";
import styles from "./Homepage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
  return (
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.container__header}>
            <Image 
              src="/pen-feather.svg"
              alt="pen feather"
              width={200}
              height={100}
            />
            <div className={styles.container__header__text}>
              <div className={styles.container__header__text__header}> Kazakh Pen </div>
              <div className={styles.container__header__text__description}>
                Мир казахской литературы, краткие содержания произведений и статьи про известных казахских писателей. 
              </div>
            </div>
          </div>

          <div className={styles.container__about_us+" glass"}>
              <Image 
                className={styles.container__about_us__img}
                src="/books.jpg"
                alt=""
                width={150}
                height={150}
              />
              <div className={styles.container__about_us__text}>
                <div className={styles.container__about_us__text__header}> О нашем проекте</div>
                <div className={styles.container__about_us__text__description}> Kazakh Pen-проект, призваный помочь людям углубиться в историю и  культуру Казахстана, 
                  путем централизации данных о различных казахских  авторах. Наш проект создан что бы продвигать 
                  казахскую культуру и  историю в массы, облегчая к ней доступ для обычных людей. Kazakh Pen  
                  также поможет заинтересованным проводить исследования о казахских  авторах.</div>
              </div>
          </div>
          <h1> Недавно добавленные произведения </h1>
          <hr />
        </div>
      </div>
  );
}
