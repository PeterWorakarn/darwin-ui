import { useState } from 'react';
import AddTag from './bAddTag';

const AddTagContainer: React.FC = () => {
  const [tags, setTag] = useState<string[]>([]);

  const removeTagHandler = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTag(newTags);
  };

  const inputHandler = (e: any) => {
    const { value } = e.target;
    if (e.key === 'Enter' && value) {
      // when press Enter
      if (tags.find(each_tag => each_tag.toLowerCase() === value.toLowerCase()) || value === ' ') {
        return;
      }
      const addNewTags = [...tags, value];
      setTag(addNewTags);
      e.target.value = null;
    } else if (e.keyCode === 32 && value) {
      // when press Space bar
      if (tags.find(each_tag => each_tag.toLowerCase() === value.toLowerCase()) || value === ' ') {
        return;
      }
      const addNewTags = [...tags, value];
      setTag(addNewTags);
      e.target.value = null;
    } else if (e.key === 'Backspace' && !value) {
      removeTagHandler(tags.length - 1);
    }
  };
  return (
    <AddTag
      tags={tags}
      setTag={(newTags: string[]) => setTag(newTags)}
      removeTagHandler={removeTagHandler}
      inputHandler={inputHandler}
    />
  );
};

export default AddTagContainer;
