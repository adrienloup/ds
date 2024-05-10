import { useEffect, useRef } from "react";
import style from "./Aside.module.scss";

type AsideProps = {
  open: boolean;
  onClick: () => void;
};

export const Aside = ({ open = false, onClick = () => {} }: AsideProps) => {
  const asideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onResize = () => {
    if (!asideRef.current || !innerRef.current) return;

    const innerHeight = innerRef.current.offsetHeight;

    asideRef.current.style.height = innerHeight + "px";
    asideRef.current.style.top = `${!open ? -(innerHeight / 2) : 0}px`;

    document.getElementById("_ds_y0y09_10")!.style.paddingTop =
      `${open ? innerHeight : 0}px`; // Root
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => onResize());

  return (
    <aside role="complementary" ref={asideRef} className={style.aside}>
      <div ref={innerRef} className={style.inner}>
        <button onClick={onClick}>open/close</button>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker. Le Lorem Ipsum est
        simplement du faux texte employé dans la composition et la mise en page
        avant impression. Le Lorem Ipsum est le faux texte standard de
        l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
        ensemble des morceaux de texte pour réaliser un livre spécimen de
        polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est
        aussi adapté à la bureautique informatique, sans que son contenu n'en
        soit modifié. Il a été popularisé dans les années 1960 grâce à la vente
        de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
        récemment, par son inclusion dans des applications de mise en page de
        texte, comme Aldus PageMaker.
      </div>
    </aside>
  );
};
