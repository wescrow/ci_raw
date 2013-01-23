<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller 
{
	public function index()
	{
		$arrData = array();
		$arrData['strContent'] = $this->load->view('templates/home_view', $arrData, TRUE);
		$this->load->view('templates/default_view', $arrData);
	}
}

/* End of file home.php */
/* Location: ./application/controllers/home.php */