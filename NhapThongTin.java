import java.util.Scanner;

class User {
	private String hoTen;
	private String ngaySinh;
	private String queQuan;

	
	public User(String hoTen, String ngaySinh, String queQuan) {
		this.hoTen = hoTen;
		this.ngaySinh = ngaySinh;
		this.queQuan = queQuan;

	}

	public void inThongTinNguoiDung() {
		System.out.println("\n--- Thong tin nguoi dung ---");
		System.out.println("Ho va ten: " + hoTen);
		System.out.println("Ngay sinh: " + ngaySinh);
		System.out.println("Que quan: " + queQuan);

	}
}

public class NhapThongTin {

	public static void main(String[] args) {
		try {
			Scanner scanner = new Scanner(System.in);

			System.out.print("Nhap ho va ten: ");
			String hoTen = scanner.nextLine();

			System.out.print("Nhap ngay sinh (dd/MM/yyyy): ");
			String ngaySinh = scanner.nextLine();

			System.out.print("Nhap que quan: ");
			String queQuan = scanner.nextLine();

			User user = new User(hoTen, ngaySinh, queQuan);

			user.inThongTinNguoiDung();

			scanner.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
