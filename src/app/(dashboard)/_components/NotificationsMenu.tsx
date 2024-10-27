import DropdownContent from "@/components/DropdownContent";

import IconBell from "@/components/icons/IconBell";

import {fakeDataNotifications} from "@/fakeData";

import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const NotificationsMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <div role="button" tabIndex={0} className="text-gray-500 relative animate-bounce">
        <IconBell />
        <div className="absolute -top-0.5rem -end-1 w-0.5rem h-0.5rem rounded-full bg-error "></div>
      </div>

      <DropdownContent className="w-80 mt-1rem max-h-96 overflow-y-auto pt-0">
        <h6 className="border-b pb-1rem mb-1rem sticky top-0 bg-inherit pt-1rem">Notifications</h6>
        <ul>
          {fakeDataNotifications.map((item) => (
            <li
              key={item.id}
              className="mb-1rem last:mb-0 transition-all border border-transparent rounded-btn hover:border-primary hover:p-0.5rem"
            >
              <div className="flex items-center justify-between mb-0.5rem">
                <h6 className="text-14 ">{item.sender}</h6>
                <span className="whitespace-nowrap text-12 badge bg-primary-100 text-gray-500">
                  {dayjs(item.timestamp).fromNow()}
                </span>
              </div>
              <h6 className="text-13 text-gray-500">{item.message}</h6>
            </li>
          ))}
        </ul>
      </DropdownContent>
    </div>
  );
};

export default NotificationsMenu;
