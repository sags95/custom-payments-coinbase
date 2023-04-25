import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-lg">Coffee Shop</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get in touch</h3>
            <p className="mb-2">
              <Link href="#" className="hover:underline">
                Email us
              </Link>
            </p>
            <p className="mb-2">
              <Link href="#" className="hover:underline">
                Chat with us
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Learn</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Sourcing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Roasting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Policies</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow us</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>


  )
}