import { IRacket } from "@/services/rackets/types";
import { use, useEffect } from "react";
import { FavoriteContext } from "@/app/providers/favorite-provider";

export const useSetIsFavorite = () => {
  const { setFavorite } = use(FavoriteContext);

  return setFavorite;
};

export const useHydrateFavorite = ({
  id,
  isFavorite,
}: {
  id: IRacket["id"];
  isFavorite?: boolean;
}) => {
  const setIsFavorite = useSetIsFavorite();

  useEffect(() => {
    if (typeof isFavorite === "boolean") {
      setIsFavorite({
        isFavorite: isFavorite,
        id,
      });
    }
  }, [id, isFavorite, setIsFavorite]);
};

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: IRacket["id"];
  isFavoriteInitial?: boolean;
}): boolean => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id] ?? null;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};
