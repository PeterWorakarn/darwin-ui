import { NextPage } from 'next';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import { TBlockType } from '../constant-enum-type/doc';
import GithubFAB from '../feature/common/components/GithubFAB';
import ComponentBlock from '../feature/showcase/components/ComponentBlock';

const ShowRoomPage:NextPage = () => {
  return (
    <main className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4">
      <GithubFAB />
      <ComponentBlock type={TBlockType.SQUARE}>
        <Button />
      </ComponentBlock>
      <ComponentBlock type={TBlockType.SQUARE}>
        <Checkbox />
      </ComponentBlock>
      <ComponentBlock type={TBlockType.SQUARE}>
        LOREM
      </ComponentBlock>
      <ComponentBlock type={TBlockType.SQUARE}>
        LOREM
      </ComponentBlock>
      <ComponentBlock type={TBlockType.RECTANGLE}>
        <DatePickerContainer />
      </ComponentBlock>
    </main>
  );
};

export default ShowRoomPage;
