import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bookmark,
  BookOpen,
  Bot,
  Briefcase,
  CalendarDays,
  Car,
  Clock,
  Cloud,
  Cpu,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Layers2,
  Library,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Network,
  PenLine,
  Rocket,
  Scale,
  Send,
  ShoppingBag,
  UserRound,
  UsersRound,
} from 'lucide-react'

const ICONS = {
  arrowUpRight: ArrowUpRight,
  award: Award,
  badgeCheck: BadgeCheck,
  bot: Bot,
  bookmark: Bookmark,
  bookOpen: BookOpen,
  briefcase: Briefcase,
  calendarDays: CalendarDays,
  car: Car,
  clock: Clock,
  cloud: Cloud,
  cpu: Cpu,
  externalLink: ExternalLink,
  fileText: FileText,
  globe2: Globe2,
  graduationCap: GraduationCap,
  landmark: Landmark,
  layers2: Layers2,
  library: Library,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  microscope: Microscope,
  network: Network,
  penLine: PenLine,
  rocket: Rocket,
  scale: Scale,
  send: Send,
  shoppingBag: ShoppingBag,
  userRound: UserRound,
  usersRound: UsersRound,
} as const

export type KpUiIconName = keyof typeof ICONS

type Props = {
  name: KpUiIconName
  className?: string
  size?: number
  strokeWidth?: number
}

/** Decorative stroke icons — pair with visible text; keep aria-hidden. */
export default function KpUiIcon({ name, className = 'h-4 w-4 shrink-0', size = 18, strokeWidth = 1.65 }: Props) {
  const Cmp = ICONS[name]
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden />
}
