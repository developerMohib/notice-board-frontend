import Image from 'next/image';
import { CiBellOn } from 'react-icons/ci';

const Navbar = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    }
    if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon';
    }
    if (currentHour >= 17 && currentHour < 21) {
      return 'Good Evening';
    }
    return 'Good Night';
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <nav className="px-4 py-1 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {getGreeting()}, Asif
          </h2>
          <p className="mt-0.5 text-sm text-gray-500">{currentDate}</p>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="relative p-1 hover:bg-gray-100 rounded-full transition-colors group"
            aria-label="Notifications"
          >
            <CiBellOn 
              size={24} 
              className="text-gray-600 transition-colors border-r-2 border-gray-300 " 
            />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium text-gray-900">Asif Khan</p>
              <p className="text-xs text-gray-500">HR</p>
            </div>

            <div className="relative">
              <Image
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Asif Khan"
                width={44}
                height={44}
                className="rounded-full object-cover border border-gray-200"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
