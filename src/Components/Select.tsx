import Select from 'react-select'
import { DictionaryItem } from "../Models/DictionaryItem";

interface SelectProps {
  value: DictionaryItem;
  options: DictionaryItem[];
  onChange: (selected: DictionaryItem | null) => void;
}

const SelectTest = ({ value, options, onChange }: SelectProps) => {
  return <Select onChange={onChange} options={options} value={value} />;
}

export default SelectTest;