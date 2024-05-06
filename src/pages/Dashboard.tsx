import DataTable from '../components/DataTable'
import backgroundImage from '../assets/images/light-gray.jpg';

function Dashboard() {
    return (
      <div style={{backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
        <DataTable />
      </div>
    )
  }
  
  export default Dashboard