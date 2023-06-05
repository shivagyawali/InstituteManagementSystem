
import Sidebar from '../../components/Sidebar'
import { useDispatch } from 'react-redux';
import { clearTokens } from '../auth/features/authSlice';
import { toast } from 'react-hot-toast';


const Dashboard = () => {
   const dispatch = useDispatch();

   const handleLogout =()=>{
    try {
     dispatch(clearTokens());
    } catch (error) {
      toast.error("Cannot Logout !!");
    }
   }

  return (
    <div className="flex gap-10">
      <Sidebar handleLogout={handleLogout} />
    </div>
  );
}

export default Dashboard