import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

type props = {
    name: string;
}

const UserAvatar = ({name}: props) => {
    return (
        <Tooltip label={name}>
            <Avatar name={name} src={faker.image.avatar()}>
                {/*if user online badge should be green else it should be clear*/}
                <AvatarBadge boxSize={4} bg={"green.500"} />
            </Avatar>
        </Tooltip>
    )

}

export default UserAvatar