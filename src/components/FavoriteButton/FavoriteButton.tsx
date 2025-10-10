"use client";

import { useSetIsFavorite } from "@/app/hooks/favorite-hooks";
import { FC, useCallback } from 'react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import {handleFavorite} from './handle-favorite';

type Props = {
  id: number;
  isFavorite: boolean;
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
