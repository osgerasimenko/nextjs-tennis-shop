"use client";

import { useSetIsFavorite } from "@/app/hooks/favorite-hooks";
import { FC, useCallback } from 'react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BASE_API_URL } from "@/services/consts";

type Props = {
  id: number;
  isFavorite: boolean;
};

const handleFavorite = async ({ isFavorite, id }: Props) => {
  const url = `${BASE_API_URL}/product/${id}/favorite`;

  return isFavorite
    ? fetch(url, {
        credentials: "include",
        method: "DELETE",
      })
    : fetch(url, {
        credentials: "include",
        method: "POST",
      });
};

export const FavoriteButton: FC<Props> = ({id, isFavorite}) => {
    const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavorite, id }: Props) => {
      setFavorite({ id, isFavorite: !isFavorite });
      await handleFavorite({ isFavorite, id });
    },
    [setFavorite]
  );

  return (
   isFavorite ?
    <MdFavorite size={30} color="red" onClick={() => handleClick({ isFavorite, id })} /> 
    :
    <MdFavoriteBorder size={30} color="red"  onClick={() => handleClick({ isFavorite, id })} />)
  };
