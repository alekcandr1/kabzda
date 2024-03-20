import React, { useState } from 'react'
import styled from 'styled-components';


type SelectPropsType = {
    items: ItemType[]
    onClickItem: ( id: string ) => void
    onClickIsOpened: () => void
    isOpened: boolean
    currentItem: any
}

type ItemType = {
    title: string
    value: any
}

export const Select = (props: SelectPropsType) => {
    return (
        <SelectContainer>
            {props.isOpened ? (
                <SelectItems>
                    {props.items.map((item) => (
                        <SelectItem onClick={() => props.onClickItem(item.value)}>
                            {item.title}
                        </SelectItem>
                    ))}
                </SelectItems>
            ) : (
                <SelectButton onClick={props.onClickIsOpened}>
                    {props.items.find((item) => item.value === props.currentItem)?.title}
                </SelectButton>
            )}
        </SelectContainer>
    );
};


const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  position: relative;
  &:focus {
    outline: none;
  }
  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid #000;
  }
`;


const SelectItems = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  z-index: 1;
`;

const SelectItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;