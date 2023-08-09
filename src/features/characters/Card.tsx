import { FollowingButtonComponent } from 'features/following/button';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Character from './characters.types';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';

const Card = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  const onToggleFavorite = (character: Character, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };
  return (
    <div className={'card'} key={data.id}>
      <div className={'card-image'}>
        <Card.Image src={data.image} alt={data.name} />
      </div>
      <div className={'card-body'}>
        <Card.Content name={data.name} />
        <Card.Action followingIds={followingIds} onToggleFavorite={onToggleFavorite} data={data} />
      </div>
    </div>
  );
};
export default Card;

Card.Image = ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />;

Card.Content = ({ name }: { name: string }) => <span>{name}</span>;

Card.Action = ({ followingIds, onToggleFavorite, data }: any) => (
  <FollowingButtonComponent
    isFav={followingIds.indexOf(data.id) >= 0}
    onToggleFavorite={(setFav) => onToggleFavorite(data, setFav)}
  />
);
