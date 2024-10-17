import java.security.MessageDigest;
import java.util.Scanner;

public class MaHoaMK {

	public static void main(String[] args) {
		try {

			Scanner scanner = new Scanner(System.in);

			System.out.print("Nhap mat khau: ");
			String password = scanner.nextLine();

			MessageDigest md = MessageDigest.getInstance("SHA-256");
			byte[] hash = md.digest(password.getBytes());

			System.out.print("Mat khau da ma hoa: ");
			for (byte b : hash) {
				System.out.print(String.format("%02x", b));
			}

			scanner.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
