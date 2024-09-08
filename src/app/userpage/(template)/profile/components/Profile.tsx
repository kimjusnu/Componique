import Icon from "@components/Icon/Icon";
import ImageUpload from "@components/ImageUpload/Imageupload";
import Input from "@components/Input/Input";
import SelectList from "@components/Select/SelectList";

const Profile = () => {
  return (
    <div className="grid place-items-center gap-y-6">
      <ImageUpload
        icon="icon-user"
        iconSize="large"
        color="gray"
        iconColor="white"
      />

      <SelectList
        option={["65 Post", "65 Follower", "65 Follow "]}
        className="rounded-lg bg-Basic text-white"
      />

      <p className="text-md w-[120px] rounded-full bg-[#eee] p-1 text-center font-bold">
        김컴포
      </p>

      <div className="grid w-[500px] justify-items-center gap-y-4 rounded-lg border border-Basic p-6 !text-[#6c6c6c]">
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
          <Icon name="icon-comment" />
          <Input size="small" placeholder="자기소개를 입력하세요." />
        </div>
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
          <Icon name="icon-info" />
          <p>Developer</p>
        </div>
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
          <Icon name="icon-map" />
          <p>Seoul, South Korea</p>
        </div>
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
          <Icon name="icon-mail" />
          <p>componique@componique.com</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
