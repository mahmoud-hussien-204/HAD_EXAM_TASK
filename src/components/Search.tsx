"use client";

import useUrlSearchParams from "@/hooks/useUrlSearchParams";

import {useCallback} from "react";

import IconSearch from "./icons/IconSearch";

import Input from "./Input";

import InputWithIconContainer from "./InputWithIconContainer";

interface IProps {
  placeholder: string;
}

let debounce: NodeJS.Timeout;

const Search = ({placeholder}: IProps) => {
  const {searchParams, setSearchParams} = useUrlSearchParams();

  const searchParamsSearchValue = searchParams.get("search") || "";

  console.log(searchParamsSearchValue);

  const handleSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setSearchParams({
          searchParams: {
            value: e.target.value,
            key: "search",
          },
        });
      }, 500);
    },
    [setSearchParams]
  );

  return (
    <InputWithIconContainer icon={<IconSearch />}>
      <Input
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleSearchInput(e)}
        defaultValue={searchParamsSearchValue}
        // className="h-2.75rem"
      />
    </InputWithIconContainer>
  );
};

export default Search;
